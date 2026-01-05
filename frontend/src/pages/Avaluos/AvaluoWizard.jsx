import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Form, InputGroup, Alert, ProgressBar } from "react-bootstrap";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { convertFilesToBase64 } from "../../Utils/fileHelpers";
import { saveAvaluo, loadAvaluo, clearAvaluo } from "../../Utils/storageAvaulo";
import { AvaluosService } from "./AvaluosService";
import MapaAvaluo from "./components/MapaAvaluo";
import "./AvaluoForm.scss";

const MAX_PHOTOS = 15;

const initialValues = {
    // 1. Información inicial
    calle: "", numero: "", sector: "", ciudad: "", lat: "", lng: "", coordenadasComentario: "",
    propietarioNombre: "", propietarioTelefono: "", propietarioEmail: "",
    valuadorNombre: "", valuadorIdentificacion: "", solicitanteNombre: "", proposito: "",
    // 2. Vecindad
    tipoVecindad: "", tendenciaVecindad: "", comparacionVecindario: "", antiguedadPromedio: "",
    oferta: "", demanda: "", distanciaEscuelaPrimaria: "", distanciaEscuelaSecundaria: "",
    distanciaTransporte: "", distanciaComercios: "", distanciaCentroCiudad: "", deseabilidad: "", resumenFactores: "",
    // 3. Zona
    limitesNaturales: "", areaM2: "", tipoTerreno: "", usoSuelo: "", configuracion: "", zonificacion: "",
    posee: [], servicios: [], usoConforme: "Si", paisajismo: "", servidumbre: "", entradaSalida: [],
    instalacionElectrica: "", zonaComentarios: "",
    // 4. Mejoras
    anioConstruccion: "", construccionTerminada: false, pisos: { pisosCount: 1, areas: [0] },
    edadEfectiva: "", antiguedadAprox: "", porcentajeTerminacion: "", vidaEstimadAnios: "",
    sotano: "No posee", sotanoArea: "", tipoInmueble: [], estructura: "", materialesConstruccion: [],
    marcosVentanas: "", revestimientoExterior: [], materialTecho: [], condicionGeneralExterna: "", mejorasComentarios: "",
    // 5. Interior
    pisosMateriales: [], distribucionArquitectonica: "", armarios: "", dormitoriosTamano: "",
    cantidadBanos: "", calidadBanos: "", condicionGeneralInterna: "", paredesMateriales: "",
    techosMateriales: "", otrosDetalles: "", murosCimientos: "", tuberias: "", instalacionSanitaria: [],
    calentadorAgua: "", sistemaElectrico: [], artefactosInstalaciones: [], interiorComentarios: "",
    // 6. Habitaciones
    habitaciones: [],
    // 7. Comparables y Costos
    fuentesDatosCosto: [], tituloApartamento: "Apartamento", costo: "", otrasEdificaciones: "", costoReposicionTotal: "",
    comparables: [],
    // 8. Final
    fotos: [], valorEstimadoMercado: "", valorLiquidacion: "", conclusiones: ""
};

const schema = Yup.object().shape({
    calle: Yup.string().required("Requerido"),
    ciudad: Yup.string().required("Requerido"),
    propietarioNombre: Yup.string().required("Requerido"),
    valuadorNombre: Yup.string().required("Requerido"),
    solicitanteNombre: Yup.string().required("Requerido"),
    valuadorIdentificacion: Yup.string()
        .matches(/^\d{3}-\d{7}-\d{1}$/, "Formato inválido. Use: XXX-XXXXXXX-X")
        .required("La cédula es obligatoria para el expediente")
});

const stepFields = {
  1: ["calle", "ciudad", "propietarioNombre", "valuadorNombre", "solicitanteNombre"],
  2: ["tipoVecindad", "tendenciaVecindad", "oferta", "demanda", "deseabilidad"],
  3: ["limitesNaturales", "areaM2", "tipoTerreno", "usoSuelo", "zonificacion"],
  4: ["anioConstruccion", "edadEfectiva", "vidaEstimadAnios"],
  5: ["distribucionArquitectonica", "condicionGeneralInterna"],
  6: [], 
  7: [], 
  8: ["valorEstimadoMercado", "valorLiquidacion", "conclusiones"]
};

const fieldLabels = {
  calle: "Calle", ciudad: "Ciudad", propietarioNombre: "Nombre del Propietario",
  valuadorNombre: "Nombre del Perito", solicitanteNombre: "Nombre del Solicitante",
  tipoVecindad: "Tipo de Vecindad", tendenciaVecindad: "Tendencia",
  oferta: "Oferta", demanda: "Demanda", deseabilidad: "Deseabilidad",
  limitesNaturales: "Límites Naturales", areaM2: "Área Terreno",
  tipoTerreno: "Tipo de Terreno", usoSuelo: "Uso de Suelo", zonificacion: "Zonificación",
  anioConstruccion: "Año Construcción", edadEfectiva: "Edad Efectiva",
  vidaEstimadAnios: "Vida Estimada", distribucionArquitectonica: "Distribución Arq.",
  condicionGeneralInterna: "Condición Interna", valorEstimadoMercado: "Valor Mercado",
  valorLiquidacion: "Valor Liquidación", conclusiones: "Conclusiones"
};

export default function FormAvaluo() {
    const [step, setStep] = useState(1);
    const [attemptNext, setAttemptNext] = useState(false);
    const [loading, setLoading] = useState(false);
    const [toastError, setToastError] = useState(null);
    const [savedMessage, setSavedMessage] = useState(null);

    const saved = loadAvaluo();
    const formik = useFormik({
        initialValues: saved || initialValues,
        validationSchema: schema,
       onSubmit: async (values) => {
    setLoading(true);
    try {
        const totalAreaConstruida = values.pisos.areas.reduce((acc, val) => acc + Number(val || 0), 0);
        
        const mapearTipoInmueble = (tipo) => {
            const mapa = {
                "Apartamento": "RESIDENCIAL",
                "Casa": "RESIDENCIAL",
                "Local": "COMERCIAL",
                "Nave": "INDUSTRIAL",
                "Solar": "SOLAR",
                "Finca": "AGRICOLA"
            };
            return mapa[tipo] || "RESIDENCIAL";
        };

        const payload = {
            numeroExpediente: `VAL-${Date.now()}`,
            nombreSolicitante: values.solicitanteNombre,
            cedulaSolicitante: values.valuadorIdentificacion, 
            telefonoSolicitante: values.propietarioTelefono || null,
            emailSolicitante: values.propietarioEmail || null,
            direccionInmueble: `${values.calle} #${values.numero}, ${values.sector}`,
            municipio: values.ciudad,
            provincia: values.ciudad,
            fichaCatastral: {
                create: {
                    areaTerreno: parseFloat(values.areaM2) || 0,
                    areaConstruida: parseFloat(totalAreaConstruida) || 0,
                    tipoInmueble: mapearTipoInmueble(values.tipoInmueble[0]),
                    antiguedad: parseInt(values.antiguedadAprox) || 0,
                    valorTotal: parseFloat(values.valorEstimadoMercado) || 0,
                    estadoConservacion: "BUENO",
                    moneda: "DOP",
                    situacionLegal: "REGULAR"
                }
            }
        };

        // 1. Guardar Expediente y Ficha
        const res = await AvaluosService.crearExpediente(payload);
        
        // Obtenemos el ID del expediente recién creado
        const expedienteId = res.data?.id || res.data?.data?.id;

        // 2. Lógica para Anexo de Coordenadas (PostGIS)
        if (expedienteId && values.lat && values.lng) {
            console.log("Guardando coordenadas para expediente:", expedienteId);
            
            const anexoPayload = {
                expedienteId: expedienteId,
                tipoAnexo: "COORDENADAS", // Coincide con tu Enum TipoAnexo
                nombreArchivo: "UBICACION_GPS",
                rutaArchivo: "GEOM",
                tamanoBytes: 1,
                mimeType: "application/json",
                descripcion: `Lat: ${values.lat}, Lng: ${values.lng}`
            };

            // Creamos el registro del anexo
            const resAnexo = await AvaluosService.crearAnexo(anexoPayload);
            const anexoId = resAnexo.data?.id || resAnexo.data?.data?.id;

            // 3. Ejecutamos la actualización de la geometría PostGIS
            if (anexoId) {
                await AvaluosService.agregarCoordenadas(anexoId, {
                    latitud: parseFloat(values.lat),
                    longitud: parseFloat(values.lng)
                });
            }
        }

        setSavedMessage("¡Avalúo completo con GPS guardado!");
        resetForm();
        clearAvaluo();
        setStep(1); // Reiniciamos el formulario
        setAttemptNext(false);


    } catch (error) {
        console.error("Error en el proceso:", error.response?.data || error);
        setToastError("Error: " + (error.response?.data?.error || "No se pudo completar el registro"));
    } finally {
        setLoading(false);
    }
},
    });
    

    useEffect(() => { saveAvaluo(formik.values); }, [formik.values]);

    const handleToggle = (field, val) => {
        const arr = [...formik.values[field]];
        formik.setFieldValue(field, arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]);
    };

    const renderLabel = (key, text) => (
        <Form.Label className="fw-bold">{text} {attemptNext && !formik.values[key] && <span className="text-danger">*</span>}</Form.Label>
    );

  
    const totalArea = formik.values.pisos.areas.reduce((acc, val) => acc + (Number(val) || 0), 0);

    // Funciones para manejar la lista de Habitaciones
const addHabitacion = () => {
  const arr = [...formik.values.habitaciones];
  arr.push({ piso: "", nombre: "" });
  formik.setFieldValue("habitaciones", arr);
};

const removeHabitacion = (i) => {
  const arr = [...formik.values.habitaciones];
  arr.splice(i, 1);
  formik.setFieldValue("habitaciones", arr);
};


const addComparable = () => {
  const arr = [...formik.values.comparables];
  arr.push({ direccion: "", fechaVenta: "", precio: "", m2: "", ajustes: "" });
  formik.setFieldValue("comparables", arr);
};

const removeComparable = (i) => {
  const arr = [...formik.values.comparables];
  arr.splice(i, 1);
  formik.setFieldValue("comparables", arr);
};


  const next = () => {
 
    const fields = stepFields[step] || [];
    setAttemptNext(true);

    
    fields.forEach((field) => formik.setFieldTouched(field, true, true));

    
    const missing = fields.filter((field) => {
      const val = formik.values[field];
      return val === undefined || val === null || (typeof val === "string" && val.trim() === "");
    });

    if (missing.length > 0) {
      const label = fieldLabels[missing[0]] || missing[0];
      setToastError(`El campo "${label}" es obligatorio.`);
      setTimeout(() => setToastError(null), 3000);
      return;
    }

    setAttemptNext(false);
    setStep((s) => Math.min(8, s + 1));
  };

  const prev = () => setStep((s) => Math.max(1, s - 1));

  // --- MULTIMEDIA (PASO 8) ---
  const handleFileChange = async (files) => {
    if (!files) return;
    
    // Convertimos FileList a Array y limitamos a 15
    const selectedFiles = Array.from(files).slice(0, MAX_PHOTOS);
    
    try {
      // Llamamos al helper de conversión que ya tienes en el proyecto
      const base64s = await convertFilesToBase64(selectedFiles);
      formik.setFieldValue("fotos", base64s);
    } catch (error) {
      console.error("Error procesando imágenes:", error);
      setToastError("Error al cargar las fotografías.");
    }
  };
    // DEBUG: Esto imprimirá en la consola por qué no se envía el formulario
        useEffect(() => {
        if (formik.submitCount > 0 && Object.keys(formik.errors).length > 0) {
        console.log("❌ Bloqueado por validación de Yup:", formik.errors);
        setToastError("Faltan campos obligatorios o tienen formato incorrecto.");
    }
}, [formik.submitCount, formik.errors]);
    return (
        <FormikProvider value={formik}>
            <div className="avaluo-page container-fluid py-4">
                <div className="avaluo-container mx-auto" style={{ maxWidth: '1200px' }}>
                    <ProgressBar now={(step / 8) * 100} label={`Paso ${step} de 8`} className="mb-4" />
                    <Card className="shadow border-0">
                        <Card.Body className="p-4">
                            <Form onSubmit={formik.handleSubmit}>

{/* STEP 1: Información inicial */}
{step === 1 && (
    <div className="animate-fade-in">
        <Row>
            {/* Columna Izquierda: Dirección y Mapa */}
            <Col md={8}>
                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold text-primary">Dirección del Inmueble</Form.Label>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Control
                                placeholder="Calle (Ej: Av. Independencia)"
                                value={formik.values.calle}
                                onChange={(e) => formik.setFieldValue("calle", e.target.value)}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Control
                                placeholder="Número (Ej: #123)"
                                value={formik.values.numero}
                                onChange={(e) => formik.setFieldValue("numero", e.target.value)}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Control
                                placeholder="Sector"
                                value={formik.values.sector}
                                onChange={(e) => formik.setFieldValue("sector", e.target.value)}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Control
                                placeholder="Ciudad"
                                value={formik.values.ciudad}
                                onChange={(e) => formik.setFieldValue("ciudad", e.target.value)}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className="mb-2">
                    {renderLabel("lat", "Coordenadas Geográficas (PostGIS)")}
                    
                    {/* CONTENEDOR CON ALTURA FIJA FORZADA */}
                    <div 
                        className="map-container-wrapper shadow-sm rounded border" 
                        style={{ 
                            height: '500px', 
                            width: '100%', 
                            position: 'relative', 
                            display: 'block',
                            overflow: 'hidden',
                            backgroundColor: '#f0f0f0' 
                        }}
                    >
                        <MapaAvaluo onLocationSelect={(c) => {
                            formik.setFieldValue("lat", c.latitud.toString());
                            formik.setFieldValue("lng", c.longitud.toString());
                        }} />
                    </div>

                    <InputGroup className="mt-3">
                        <InputGroup.Text>Latitud</InputGroup.Text>
                        <Form.Control
                            value={formik.values.lat}
                            onChange={(e) => formik.setFieldValue("lat", e.target.value)}
                        />
                        <InputGroup.Text>Longitud</InputGroup.Text>
                        <Form.Control
                            value={formik.values.lng}
                            onChange={(e) => formik.setFieldValue("lng", e.target.value)}
                        />
                    </InputGroup>
                    
                    <Form.Group className="mt-3">
                        <Form.Label>Comentario sobre coordenadas</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            value={formik.values.coordenadasComentario}
                            onChange={(e) => formik.setFieldValue("coordenadasComentario", e.target.value)}
                        />
                    </Form.Group>
                </Form.Group>
            </Col>

            {/* Columna Derecha: Participantes */}
            <Col md={4} className="border-start ps-4 bg-light-subtle py-2">
                <Form.Group className="mb-4">
                    <Form.Label className="text-primary fw-bold text-uppercase small border-bottom w-100 pb-1">Propietario</Form.Label>
                    {renderLabel("propietarioNombre", "Nombre Completo")}
                    <Form.Control
                        placeholder="Nombre"
                        value={formik.values.propietarioNombre}
                        onChange={(e) => formik.setFieldValue("propietarioNombre", e.target.value)}
                        className="mb-2 shadow-sm"
                    />
                    <Form.Control
                        placeholder="Teléfono"
                        className="mb-2 shadow-sm"
                        value={formik.values.propietarioTelefono}
                        onChange={(e) => formik.setFieldValue("propietarioTelefono", e.target.value)}
                    />
                    <Form.Control
                        placeholder="Email"
                        className="shadow-sm"
                        value={formik.values.propietarioEmail}
                        onChange={(e) => formik.setFieldValue("propietarioEmail", e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="text-primary fw-bold text-uppercase small border-bottom w-100 pb-1">Valuador</Form.Label>
                    {renderLabel("valuadorNombre", "Nombre del Perito")}
                    <Form.Control
                        placeholder="Nombre"
                        value={formik.values.valuadorNombre}
                        onChange={(e) => formik.setFieldValue("valuadorNombre", e.target.value)}
                        className="mb-2 shadow-sm"
                    />
                    <Form.Control
  placeholder="000-0000000-0"
  value={formik.values.valuadorIdentificacion}
  isInvalid={!!formik.errors.valuadorIdentificacion}
  onChange={(e) => {
    let val = e.target.value.replace(/\D/g, ""); // Quita letras
    if (val.length > 11) val = val.slice(0, 11); // Límite de cédula
    
    // Formatea: 000-0000000-0
    if (val.length > 3 && val.length <= 10) {
      val = `${val.slice(0, 3)}-${val.slice(3)}`;
    } else if (val.length > 10) {
      val = `${val.slice(0, 3)}-${val.slice(3, 10)}-${val.slice(10)}`;
    }
    
    formik.setFieldValue("valuadorIdentificacion", val);
  }}
/>
<Form.Control.Feedback type="invalid">
  {formik.errors.valuadorIdentificacion}
</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="text-primary fw-bold text-uppercase small border-bottom w-100 pb-1">Solicitante</Form.Label>
                    {renderLabel("solicitanteNombre", "Nombre Solicitante")}
                    <Form.Control
                        placeholder="Nombre"
                        value={formik.values.solicitanteNombre}
                        onChange={(e) => formik.setFieldValue("solicitanteNombre", e.target.value)}
                        className="mb-2 shadow-sm"
                    />
                    <Form.Control
                        placeholder="Propósito del Avalúo"
                        value={formik.values.proposito}
                        onChange={(e) => formik.setFieldValue("proposito", e.target.value)}
                        className="shadow-sm"
                    />
                </Form.Group>
            </Col>
        </Row>
    </div>
)}

                               {/* STEP 2: Vecindad */}
{step === 2 && (
  <div className="animate-fade-in">
    <h5 className="text-primary border-bottom pb-2 mb-4">
      <i className="bi bi-houses-fill me-2"></i>Descripción de la Vecindad
    </h5>
    <Row>
      {/* COLUMNA IZQUIERDA: Factores de Mercado y Entorno */}
      <Col md={6} className="pe-md-4">
        <Form.Group className="mb-3">
          {renderLabel("tipoVecindad", "Tipo de Vecindad")}
          <Form.Select
            value={formik.values.tipoVecindad}
            onChange={(e) => formik.setFieldValue("tipoVecindad", e.target.value)}
            onBlur={() => formik.setFieldTouched("tipoVecindad", true)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="Urbano">Urbano</option>
            <option value="Rural">Rural</option>
            <option value="Mixto">Mixto</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          {renderLabel("tendenciaVecindad", "Tendencia de la Vecindad")}
          <Form.Select
            value={formik.values.tendenciaVecindad}
            onChange={(e) => formik.setFieldValue("tendenciaVecindad", e.target.value)}
            onBlur={() => formik.setFieldTouched("tendenciaVecindad", true)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="A mejorar">A mejorar</option>
            <option value="Estable">Estable</option>
            <option value="A empeorar">A empeorar</option>
            <option value="En transición">En transición</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          {renderLabel("comparacionVecindario", "Comparación con propiedades del vecindario")}
          <Form.Select
            value={formik.values.comparacionVecindario}
            onChange={(e) => formik.setFieldValue("comparacionVecindario", e.target.value)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="Inferior">Inferior</option>
            <option value="Similar">Similar</option>
            <option value="Superior">Superior</option>
          </Form.Select>
        </Form.Group>

        <Row className="g-3">
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold text-muted">ANTIGÜEDAD PROMEDIO</Form.Label>
              <InputGroup size="sm">
                <Form.Control
                  type="number"
                  value={formik.values.antiguedadPromedio} // <-- Eliminado "as any"
                  onChange={(e) => formik.setFieldValue("antiguedadPromedio", e.target.value)}
                 className="shadow-sm"
                />
                <InputGroup.Text>Años</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
             {renderLabel("deseabilidad", "Deseabilidad")}
             <Form.Select 
                value={formik.values.deseabilidad} 
                onChange={(e) => formik.setFieldValue("deseabilidad", e.target.value)} 
                onBlur={() => formik.setFieldTouched("deseabilidad", true)}
                size="sm"
             >
                <option value="">Seleccione</option>
                <option value="Alta">Alta</option>
                <option value="Promedio">Promedio</option>
                <option value="Baja">Baja</option>
             </Form.Select>
          </Col>
        </Row>

        <Row className="g-3">
          <Col md={6}>
            <Form.Group className="mb-3">
              {renderLabel("oferta", "Oferta")}
              <Form.Select value={formik.values.oferta} onChange={(e) => formik.setFieldValue("oferta", e.target.value)} onBlur={() => formik.setFieldTouched("oferta", true)}>
                <option value="">Seleccione</option>
                <option value="Mucha">Mucha</option>
                <option value="Razonable">Razonable</option>
                <option value="Poca">Poca</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              {renderLabel("demanda", "Demanda")}
              <Form.Select value={formik.values.demanda} onChange={(e) => formik.setFieldValue("demanda", e.target.value)} onBlur={() => formik.setFieldTouched("demanda", true)}>
                <option value="">Seleccione</option>
                <option value="Mucha">Mucha</option>
                <option value="Razonable">Razonable</option>
                <option value="Poca">Poca</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Col>

      {/* COLUMNA DERECHA: Distancias a Servicios y Comentarios */}
      <Col md={6} className="border-start ps-md-4">
        <h6 className="fw-bold text-muted text-uppercase mb-3 small">Distancia a Servicios Clave</h6>
        
        <div className="bg-light p-3 rounded-3 shadow-sm mb-4">
          <Row className="g-3">
            <Col md={6}>
              <Form.Label className="small mb-1">Escuela Primaria</Form.Label>
              <Form.Control size="sm" value={formik.values.distanciaEscuelaPrimaria} onChange={(e) => formik.setFieldValue("distanciaEscuelaPrimaria", e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label className="small mb-1">Escuela Secundaria</Form.Label>
              <Form.Control size="sm" value={formik.values.distanciaEscuelaSecundaria} onChange={(e) => formik.setFieldValue("distanciaEscuelaSecundaria", e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label className="small mb-1">Transporte Público</Form.Label>
              <Form.Control size="sm" value={formik.values.distanciaTransporte} onChange={(e) => formik.setFieldValue("distanciaTransporte", e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label className="small mb-1">Comercios</Form.Label>
              <Form.Control size="sm" value={formik.values.distanciaComercios} onChange={(e) => formik.setFieldValue("distanciaComercios", e.target.value)} />
            </Col>
            <Col md={12}>
              <Form.Label className="small mb-1">Centro de la Ciudad</Form.Label>
              <Form.Control size="sm" value={formik.values.distanciaCentroCiudad} onChange={(e) => formik.setFieldValue("distanciaCentroCiudad", e.target.value)} />
            </Col>
          </Row>
        </div>

        <Form.Group className="mb-2">
          <Form.Label className="fw-bold">Resumen / Factores Desfavorables</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            value={formik.values.resumenFactores} 
            onChange={(e) => formik.setFieldValue("resumenFactores", e.target.value)} 
            placeholder="Indique factores que afecten el valor (ej: ruido, contaminación, riesgo de inundación...)"
            className="shadow-sm"
          />
        </Form.Group>
      </Col>
    </Row>
  </div>
)}
                               {/* STEP 3: Zona */}
{step === 3 && (
  <div className="animate-fade-in">
    <h5 className="text-primary border-bottom pb-2 mb-4">
      <i className="bi bi-map-fill me-2"></i>Descripción de la Zona y Terreno
    </h5>
    <Row>
      {/* COLUMNA IZQUIERDA: Especificaciones Técnicas */}
      <Col md={6} className="pe-md-4">
        <Form.Group className="mb-3">
          {renderLabel("limitesNaturales", "Límites Naturales")}
          <Form.Control 
            className="shadow-sm"
            placeholder="Norte, Sur, Este, Oeste..."
            value={formik.values.limitesNaturales} 
            onChange={(e) => formik.setFieldValue("limitesNaturales", e.target.value)} 
            onBlur={() => formik.setFieldTouched("limitesNaturales", true)} 
          />
        </Form.Group>

        <Row className="g-3 mb-3">
          <Col md={6}>
            {renderLabel("areaM2", "Área Total (m²)")}
            <InputGroup>
              <Form.Control 
               type="number" 
               className="shadow-sm"
               value={formik.values.areaM2} 
               onChange={(e) => formik.setFieldValue("areaM2", e.target.value)} 
               onBlur={() => formik.setFieldTouched("areaM2", true)} 
              />
              <InputGroup.Text>m²</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={6}>
            {renderLabel("tipoTerreno", "Tipo de Terreno")}
            <Form.Control 
              className="shadow-sm"
              placeholder="Ej: Plano, Inclinado..."
              value={formik.values.tipoTerreno} 
              onChange={(e) => formik.setFieldValue("tipoTerreno", e.target.value)} 
              onBlur={() => formik.setFieldTouched("tipoTerreno", true)} 
            />
          </Col>
        </Row>

        <Row className="g-3 mb-3">
          <Col md={6}>
            {renderLabel("usoSuelo", "Uso de Suelo")}
            <Form.Control 
              className="shadow-sm"
              placeholder="Residencial, Comercial..."
              value={formik.values.usoSuelo} 
              onChange={(e) => formik.setFieldValue("usoSuelo", e.target.value)} 
              onBlur={() => formik.setFieldTouched("usoSuelo", true)} 
            />
          </Col>
          <Col md={6}>
            {renderLabel("zonificacion", "Zonificación")}
            <Form.Control 
              className="shadow-sm"
              placeholder="Ej: R-3, C-1..."
              value={formik.values.zonificacion} 
              onChange={(e) => formik.setFieldValue("zonificacion", e.target.value)} 
            />
          </Col>
        </Row>

        <Form.Group className="mb-3">
          {renderLabel("configuracion", "Configuración / Forma")}
          <Form.Control 
            className="shadow-sm"
            placeholder="Regular, Irregular, Cabezal..."
            value={formik.values.configuracion} 
            onChange={(e) => formik.setFieldValue("configuracion", e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Instalación Eléctrica</Form.Label>
          <Form.Select 
            value={formik.values.instalacionElectrica} 
            onChange={(e) => formik.setFieldValue("instalacionElectrica", e.target.value)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="Subterránea">Subterránea</option>
            <option value="En postes">En postes</option>
            <option value="Nula">Nula</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Comentarios de la Zona</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            value={formik.values.zonaComentarios} 
            onChange={(e) => formik.setFieldValue("zonaComentarios", e.target.value)} 
            placeholder="Observaciones sobre el entorno, plusvalía o riesgos..."
            className="shadow-sm"
          />
        </Form.Group>
      </Col>

      {/* COLUMNA DERECHA: Checkboxes y Clasificaciones */}
      <Col md={6} className="border-start ps-md-4">
        <div className="bg-light p-3 rounded-3 shadow-sm mb-4">
          <h6 className="fw-bold text-secondary text-uppercase small mb-3">Infraestructura (Posee)</h6>
          <div className="d-flex flex-wrap gap-2">
            {["Calle pavimentada", "Calle sin pavimentar", "Acera", "Contenes", "Alumbrado electrico", "Televisión por cable"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`posee-${opt}`}
                label={opt}
                checked={formik.values.posee.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.posee];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const idx = copy.indexOf(opt);
                    if (idx >= 0) copy.splice(idx, 1);
                  }
                  formik.setFieldValue("posee", copy);
                }}
                className="me-3 mb-2 small"
              />
            ))}
          </div>
        </div>

        <div className="bg-white p-3 rounded-3 border mb-4">
          <h6 className="fw-bold text-secondary text-uppercase small mb-3">Servicios Disponibles</h6>
          <Row>
            {["Teléfono", "Gas", "Agua potable", "Pozo privado", "Pozo público", "Alcantarillado sanitario", "Pozo séptico", "Alcantarilla pluvial", "Drenajes por zanjas abiertas"].map((opt) => (
              <Col xs={6} key={opt}>
                <Form.Check
                  type="checkbox"
                  id={`serv-${opt}`}
                  label={opt}
                  checked={formik.values.servicios.includes(opt)}
                  onChange={(e) => {
                    const copy = [...formik.values.servicios];
                    if (e.target.checked) copy.push(opt);
                    else {
                      const idx = copy.indexOf(opt);
                      if (idx >= 0) copy.splice(idx, 1);
                    }
                    formik.setFieldValue("servicios", copy);
                  }}
                  className="mb-2 small"
                />
              </Col>
            ))}
          </Row>
        </div>

        <Row className="g-3">
          <Col md={6}>
            <Form.Label className="small fw-bold">Uso Conforme</Form.Label>
            <Form.Select 
              size="sm"
              value={formik.values.usoConforme} 
              onChange={(e) => formik.setFieldValue("usoConforme", e.target.value)}
            >
              <option value="Si">Si</option>
              <option value="No">No (Ver comentarios)</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <Form.Label className="small fw-bold">Paisajismo</Form.Label>
            <Form.Select 
              size="sm"
              value={formik.values.paisajismo} 
              onChange={(e) => formik.setFieldValue("paisajismo", e.target.value)}
            >
              <option value="">Seleccione</option>
              {["Excelente", "Muy buena", "Buena", "Regular", "Mala", "Inexistente"].map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Form.Group className="mt-3">
          <Form.Label className="small fw-bold">Servidumbre</Form.Label>
          <Form.Select 
            size="sm"
            value={formik.values.servidumbre} 
            onChange={(e) => formik.setFieldValue("servidumbre", e.target.value)}
          >
            <option value="">Seleccione</option>
            <option value="Servicios públicos">Servicios públicos</option>
            <option value="De paso">De paso</option>
          </Form.Select>
        </Form.Group>

        <div className="mt-4">
          <Form.Label className="fw-bold small text-uppercase">Entrada y Salida</Form.Label>
          <div className="d-flex flex-wrap gap-2 border p-2 rounded bg-light">
            {["Privada", "Común", "Ninguna", "Única", "Doble", "Múltiple", "Adecuada", "Pavimentada"].map((opt) => (
              <Form.Check
                key={opt}
                inline
                type="checkbox"
                id={`inout-${opt}`}
                label={opt}
                checked={formik.values.entradaSalida.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.entradaSalida];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("entradaSalida", copy);
                }}
                className="small"
              />
            ))}
          </div>
        </div>
      </Col>
    </Row>
  </div>
)}

                              {/* STEP 4: Mejoras */}
{step === 4 && (
  <div className="animate-fade-in">
    <h5 className="text-primary border-bottom pb-2 mb-4">
      <i className="bi bi-hammer me-2"></i>Descripción de las Mejoras y Estructura
    </h5>
    <Row>
      {/* COLUMNA IZQUIERDA: Áreas, Materiales y Revestimientos */}
      <Col md={8} className="pe-md-4">
        <Row className="g-3 mb-4">
          <Col md={6}>
            {renderLabel("anioConstruccion", "Año de Construcción")}
            <Form.Control 
              type="number" 
              className="shadow-sm"
              value={formik.values.anioConstruccion} 
              onChange={(e) => formik.setFieldValue("anioConstruccion", e.target.value)} 
              onBlur={() => formik.setFieldTouched("anioConstruccion", true)} 
            />
          </Col>
          <Col md={6} className="d-flex align-items-end">
            <Form.Group className="mb-2">
              <Form.Check 
                type="checkbox" 
                id="construccion-terminada"
                label="¿Construcción terminada?" 
                checked={formik.values.construccionTerminada} 
                onChange={(e) => formik.setFieldValue("construccionTerminada", e.target.checked)} 
                className="fw-bold text-success"
              />
            </Form.Group>
          </Col>
        </Row>

        {/* LISTA DINÁMICA DE PISOS */}
        <div className="bg-light p-3 rounded-3 border mb-4">
          <Form.Label className="fw-bold text-secondary text-uppercase small mb-3">Distribución de Superficies por Nivel</Form.Label>
          {formik.values.pisos.areas.map((area, idx) => (
            <InputGroup className="mb-2" key={idx}>
              <InputGroup.Text className="bg-white">Piso {idx + 1}</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Área en m²"
                value={area || ""}
                onChange={(e) => {
                  const arr = [...formik.values.pisos.areas];
                  arr[idx] = Number(e.target.value);
                  formik.setFieldValue("pisos.areas", arr);
                }}
              />
              <InputGroup.Text className="bg-white">m²</InputGroup.Text>
              {idx > 0 && (
                <Button variant="outline-danger" onClick={() => {
                  const arr = [...formik.values.pisos.areas];
                  arr.splice(idx, 1);
                  formik.setFieldValue("pisos", { pisosCount: arr.length, areas: arr });
                }}>
                  <i className="bi bi-trash"></i>
                </Button>
              )}
            </InputGroup>
          ))}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => {
                const newCount = formik.values.pisos.pisosCount + 1;
                const arr = [...formik.values.pisos.areas, 0];
                formik.setFieldValue("pisos", { pisosCount: newCount, areas: arr });
              }}
            >
              <i className="bi bi-plus-circle me-1"></i> Agregar nivel
            </Button>
            <div className="fw-bold text-primary">Total: {totalArea} m²</div>
          </div>
        </div>

        <Row className="g-3 mb-4">
          <Col md={6}>
            <Form.Label className="fw-bold">Estructura</Form.Label>
            <Form.Control 
              value={formik.values.estructura} 
              onChange={(e) => formik.setFieldValue("estructura", e.target.value)} 
              placeholder="Ej: Hormigón, Acero..."
            />
          </Col>
          <Col md={6}>
            <Form.Label className="fw-bold">Marcos de Ventanas</Form.Label>
            <Form.Control 
              value={formik.values.marcosVentanas} 
              onChange={(e) => formik.setFieldValue("marcosVentanas", e.target.value)} 
              placeholder="Ej: Aluminio, Madera..."
            />
          </Col>
        </Row>

        <div className="mb-4">
          <h6 className="fw-bold text-secondary small text-uppercase">Materiales de Construcción</h6>
          <div className="d-flex flex-wrap gap-3 p-2 border rounded bg-white">
            {["Madera", "Acero", "Bloques de H.A.", "Bloques de hormigón armado"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`mat-${opt}`}
                label={opt}
                checked={formik.values.materialesConstruccion.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.materialesConstruccion];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const idx = copy.indexOf(opt);
                    if (idx >= 0) copy.splice(idx, 1);
                  }
                  formik.setFieldValue("materialesConstruccion", copy);
                }}
              />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h6 className="fw-bold text-secondary small text-uppercase">Revestimiento Exterior</h6>
          <div className="d-flex flex-wrap gap-3 p-2 border rounded bg-white">
            {["Pañete cemento", "Ladrillo macizo", "Piedra / laja", "Coralina", "Pintura", "Aluminio", "Vinilo", "Ladrillo aislante"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`rev-${opt}`}
                label={opt}
                checked={formik.values.revestimientoExterior.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.revestimientoExterior];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("revestimientoExterior", copy);
                }}
              />
            ))}
          </div>
        </div>

        <div className="mb-3">
          <h6 className="fw-bold text-secondary small text-uppercase">Material de Techo</h6>
          <div className="d-flex flex-wrap gap-3 p-2 border rounded bg-white">
            {["Teja asfáltica", "Teja de barro", "Cubierta metálica", "Losa de H.A.", "Shingles de cedro"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`techo-${opt}`}
                label={opt}
                checked={formik.values.materialTecho.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.materialTecho];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("materialTecho", copy);
                }}
              />
            ))}
          </div>
        </div>
      </Col>

      {/* COLUMNA DERECHA: Edades, Sótano y Tipo Inmueble */}
      <Col md={4} className="border-start ps-md-4">
        <div className="mb-4 bg-light p-3 rounded-3 border">
          <h6 className="fw-bold text-muted small text-uppercase mb-3">Cronología y Estado</h6>
          
          <Form.Group className="mb-2">
            {renderLabel("edadEfectiva", "Edad Efectiva")}
            <Form.Control 
              type="number" 
              size="sm"
              value={formik.values.edadEfectiva} 
              onChange={(e) => formik.setFieldValue("edadEfectiva", e.target.value)} 
              onBlur={() => formik.setFieldTouched("edadEfectiva", true)} 
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="small fw-bold">Antigüedad Aprox.</Form.Label>
            <Form.Control 
              type="number" 
              size="sm"
              value={formik.values.antiguedadAprox} 
              onChange={(e) => formik.setFieldValue("antiguedadAprox", e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label className="small fw-bold">% de Terminación</Form.Label>
            <Form.Control 
              type="number" 
              size="sm"
              value={formik.values.porcentajeTerminacion} 
              onChange={(e) => formik.setFieldValue("porcentajeTerminacion", e.target.value)} 
            />
          </Form.Group>

          <Form.Group className="mb-2">
            {renderLabel("vidaEstimadAnios", "Vida Estimada (Años)")}
            <Form.Control 
              type="number" 
              size="sm"
              value={formik.values.vidaEstimadAnios} 
              onChange={(e) => formik.setFieldValue("vidaEstimadAnios", e.target.value)} 
              onBlur={() => formik.setFieldTouched("vidaEstimadAnios", true)} 
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="small fw-bold">Condición General Externa</Form.Label>
            <Form.Select 
              size="sm"
              value={formik.values.condicionGeneralExterna} 
              onChange={(e) => formik.setFieldValue("condicionGeneralExterna", e.target.value)}
            >
              <option value="">Seleccione</option>
              {["Muy buena", "Buena", "Regular", "Mala"].map(o => <option key={o} value={o}>{o}</option>)}
            </Form.Select>
          </Form.Group>
        </div>

        <div className="mb-4 p-3 border rounded">
          <h6 className="fw-bold text-muted small text-uppercase mb-2">Sótano</h6>
          <Form.Select 
            size="sm" 
            value={formik.values.sotano} 
            onChange={(e) => formik.setFieldValue("sotano", e.target.value)}
          >
            <option value="No posee">No posee</option>
            <option value="Completo">Completo</option>
            <option value="Parcial">Parcial</option>
          </Form.Select>
          {formik.values.sotano !== "No posee" && (
            <InputGroup size="sm" className="mt-2">
              <Form.Control 
                placeholder="Área sótano" 
                type="number" 
                value={formik.values.sotanoArea} 
                onChange={(e) => formik.setFieldValue("sotanoArea", e.target.value)} 
              />
              <InputGroup.Text>m²</InputGroup.Text>
            </InputGroup>
          )}
        </div>

        <div className="mb-4 p-3 border rounded">
          <h6 className="fw-bold text-muted small text-uppercase mb-2">Tipo de Inmueble</h6>
          {["Asilado", "En hileras", "Townhouse", "Apartamento", "Duplex", "Triplex", "Condominio"].map((opt) => (
            <Form.Check
              key={opt}
              type="checkbox"
              id={`tipo-${opt}`}
              label={opt}
              checked={formik.values.tipoInmueble.includes(opt)}
              onChange={(e) => {
                const copy = [...formik.values.tipoInmueble];
                if (e.target.checked) copy.push(opt);
                else {
                  const i = copy.indexOf(opt);
                  if (i >= 0) copy.splice(i, 1);
                }
                formik.setFieldValue("tipoInmueble", copy);
              }}
              className="small"
            />
          ))}
        </div>

        <Form.Group>
          <Form.Label className="fw-bold small">Comentarios de Mejoras</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            value={formik.values.mejorasComentarios} 
            onChange={(e) => formik.setFieldValue("mejorasComentarios", e.target.value)} 
            className="small shadow-sm"
          />
        </Form.Group>
      </Col>
    </Row>
  </div>
)}

                                {/* STEP 5: Interior */}
{step === 5 && (
  <div className="animate-fade-in">
    <h5 className="text-primary border-bottom pb-2 mb-4">
      <i className="bi bi-door-open-fill me-2"></i>Descripción del Interior y Sistemas
    </h5>
    <Row>
      {/* COLUMNA IZQUIERDA: Acabados y Distribución */}
      <Col md={6} className="pe-md-4">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Pisos (materiales)</Form.Label>
          <div className="d-flex flex-wrap gap-2 p-3 border rounded bg-white shadow-sm" style={{ maxHeight: '200px', overflowY: 'auto' }}>
            {["Granito", "Porcelanato", "Mármol", "Parquet", "Terrazo", "Alfombra", "Madera", "Mosaico", "Cerámica", "Ladrillo", "Laminado de vinilo", "Baldosas vinílicas"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`piso-${opt}`}
                label={opt}
                checked={formik.values.pisosMateriales.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.pisosMateriales];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("pisosMateriales", copy);
                }}
                className="me-3 small"
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          {renderLabel("distribucionArquitectonica", "Distribución arquitectónica")}
          <Form.Select 
            value={formik.values.distribucionArquitectonica} 
            onChange={(e) => formik.setFieldValue("distribucionArquitectonica", e.target.value)} 
            onBlur={() => formik.setFieldTouched("distribucionArquitectonica", true)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="Muy buena">Muy buena</option>
            <option value="Buena">Buena</option>
            <option value="Regular">Regular</option>
            <option value="Mala">Mala</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Armarios</Form.Label>
          <Form.Select 
            value={formik.values.armarios} 
            onChange={(e) => formik.setFieldValue("armarios", e.target.value)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="Muy buenos">Muy buenos</option>
            <option value="Buenos">Buenos</option>
            <option value="Regulares">Regulares</option>
            <option value="Malos">Malos</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Dormitorios (tamaño)</Form.Label>
          <Form.Select 
            value={formik.values.dormitoriosTamano} 
            onChange={(e) => formik.setFieldValue("dormitoriosTamano", e.target.value)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="Grandes">Grandes</option>
            <option value="Medios">Medios</option>
            <option value="Pequeños">Pequeños</option>
          </Form.Select>
        </Form.Group>

        <Row className="g-3 mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Cantidad de baños</Form.Label>
              <Form.Select 
                value={formik.values.cantidadBanos} 
                onChange={(e) => formik.setFieldValue("cantidadBanos", e.target.value)}
                className="shadow-sm"
              >
                <option value="">Seleccione</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-bold">Calidad de los baños</Form.Label>
              <Form.Select 
                value={formik.values.calidadBanos} 
                onChange={(e) => formik.setFieldValue("calidadBanos", e.target.value)}
                className="shadow-sm"
              >
                <option value="">Seleccione</option>
                <option value="Muy buenos">Muy buenos</option>
                <option value="Buenos">Buenos</option>
                <option value="Malos">Malos</option>
                <option value="Fabricados a gusto de clientes">A gusto de clientes</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          {renderLabel("condicionGeneralInterna", "Condición general interna")}
          <Form.Select 
            value={formik.values.condicionGeneralInterna} 
            onChange={(e) => formik.setFieldValue("condicionGeneralInterna", e.target.value)} 
            onBlur={() => formik.setFieldTouched("condicionGeneralInterna", true)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="Muy buena">Muy buena</option>
            <option value="Buena">Buena</option>
            <option value="Regular">Regular</option>
            <option value="Mala">Mala</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label className="fw-bold">Comentarios</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            value={formik.values.interiorComentarios} 
            onChange={(e) => formik.setFieldValue("interiorComentarios", e.target.value)} 
            placeholder="Detalles adicionales sobre el estado interno..."
            className="shadow-sm"
          />
        </Form.Group>
      </Col>

      {/* COLUMNA DERECHA: Materiales, Instalaciones y Artefactos */}
      <Col md={6} className="border-start ps-md-4">
        <Row className="g-3 mb-3">
          <Col md={6}>
            <Form.Label className="fw-bold small text-uppercase">Paredes materiales</Form.Label>
            <Form.Control 
              value={formik.values.paredesMateriales} 
              onChange={(e) => formik.setFieldValue("paredesMateriales", e.target.value)} 
              className="shadow-sm"
            />
          </Col>
          <Col md={6}>
            <Form.Label className="fw-bold small text-uppercase">Techos materiales</Form.Label>
            <Form.Control 
              value={formik.values.techosMateriales} 
              onChange={(e) => formik.setFieldValue("techosMateriales", e.target.value)} 
              className="shadow-sm"
            />
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold small text-uppercase">Otros detalles</Form.Label>
          <Form.Control 
            value={formik.values.otrosDetalles} 
            onChange={(e) => formik.setFieldValue("otrosDetalles", e.target.value)} 
            className="shadow-sm"
          />
        </Form.Group>

        <Row className="g-3 mb-3">
          <Col md={6}>
            <Form.Label className="fw-bold small text-uppercase text-secondary">Muros de cimientos</Form.Label>
            <Form.Select 
              value={formik.values.murosCimientos} 
              onChange={(e) => formik.setFieldValue("murosCimientos", e.target.value)}
              className="shadow-sm"
            >
              <option value="">Seleccione</option>
              <option value="H.A. vaciado">H.A. vaciado</option>
              <option value="Bloques de H.A.">Bloques de H.A.</option>
              <option value="Losa de H.A.">Losa de H.A.</option>
              <option value="Ladrillo y piedra">Ladrillo y piedra</option>
            </Form.Select>
          </Col>
          <Col md={6}>
            <Form.Label className="fw-bold small text-uppercase text-secondary">Tuberías</Form.Label>
            <Form.Select 
              value={formik.values.tuberias} 
              onChange={(e) => formik.setFieldValue("tuberias", e.target.value)}
              className="shadow-sm"
            >
              <option value="">Seleccione</option>
              <option value="Cobre">Cobre</option>
              <option value="PVC">PVC</option>
              <option value="Galvanizado">Galvanizado</option>
            </Form.Select>
          </Col>
        </Row>

        <div className="mb-3 p-3 border rounded bg-light shadow-sm">
          <h6 className="fw-bold text-muted small text-uppercase mb-3">Instalación sanitaria</h6>
          <div className="d-flex flex-wrap gap-3">
            {["Cisterna", "Jacuzzi", "Piscina", "Tinaco"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`sanitaria-${opt}`}
                label={opt}
                checked={formik.values.instalacionSanitaria.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.instalacionSanitaria];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("instalacionSanitaria", copy);
                }}
              />
            ))}
          </div>
        </div>

        <Form.Group className="mb-3">
          <Form.Label className="fw-bold small text-uppercase">Calentador de agua</Form.Label>
          <Form.Select 
            value={formik.values.calentadorAgua} 
            onChange={(e) => formik.setFieldValue("calentadorAgua", e.target.value)}
            className="shadow-sm"
          >
            <option value="">Seleccione</option>
            <option value="A gas">A gas</option>
            <option value="Eléctrico">Eléctrico</option>
            <option value="No posee">No posee</option>
          </Form.Select>
        </Form.Group>

        <div className="mb-3 p-3 border rounded bg-light shadow-sm">
          <h6 className="fw-bold text-muted small text-uppercase mb-3">Sistema eléctrico</h6>
          <div className="d-flex gap-4">
            {["Fusibles", "Interruptores"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`electr-${opt}`}
                label={opt}
                checked={formik.values.sistemaElectrico.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.sistemaElectrico];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("sistemaElectrico", copy);
                }}
              />
            ))}
          </div>
        </div>

        <Form.Group>
          <Form.Label className="fw-bold small text-uppercase text-secondary">Artefactos e instalaciones adicionales</Form.Label>
          <div className="d-flex flex-wrap gap-2 p-3 border rounded bg-white" style={{ maxHeight: '150px', overflowY: 'auto' }}>
            {["Alarmas de robo", "Alarmas de incendios", "Barrera de alambre de puas", "Eliminador de basura", "Chimenea", "Sauna", "Tratamiento de agua", "Tragaluces", "Solarium", "Puerta de garaje automática", "Verja parcial"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`artef-${opt}`}
                label={opt}
                checked={formik.values.artefactosInstalaciones.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.artefactosInstalaciones];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("artefactosInstalaciones", copy);
                }}
                className="me-2 small"
              />
            ))}
          </div>
        </Form.Group>
      </Col>
    </Row>
  </div>
)}
                                {/* STEP 6: Distribución habitaciones */}
{step === 6 && (
  <div className="animate-fade-in">
    <h5 className="text-primary border-bottom pb-2 mb-4">
      <i className="bi bi-house-gear-fill me-2"></i>Distribución de Habitaciones y Análisis de Costos
    </h5>
    <Row>
      {/* COLUMNA IZQUIERDA: Listado Dinámico de Habitaciones */}
      <Col md={8} className="pe-md-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold m-0 text-secondary text-uppercase small">Detalle de Áreas Internas</h6>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={addHabitacion}
            className="shadow-sm"
          >
            <i className="bi bi-plus-lg me-1"></i> Agregar habitación
          </Button>
        </div>

        <div 
          className="habitaciones-container p-3 border rounded bg-light shadow-sm" 
          style={{ maxHeight: '450px', overflowY: 'auto' }}
        >
          {formik.values.habitaciones.length === 0 ? (
            <div className="text-center py-5 text-muted">
              <i className="bi bi-info-circle d-block mb-2 fs-4"></i>
              No hay habitaciones registradas. Use el botón superior para agregar.
            </div>
          ) : (
            formik.values.habitaciones.map((h, idx) => (
              <InputGroup key={idx} className="mb-2 shadow-sm">
                <InputGroup.Text className="bg-white border-end-0 small">Piso</InputGroup.Text>
                <Form.Control
                  placeholder="Ej: 1er"
                  className="border-start-0"
                  style={{ maxWidth: '100px' }}
                  value={h.piso}
                  onChange={(e) => {
                    const arr = [...formik.values.habitaciones];
                    arr[idx].piso = e.target.value;
                    formik.setFieldValue("habitaciones", arr);
                  }}
                />
                <InputGroup.Text className="bg-white border-end-0 small">Nombre</InputGroup.Text>
                <Form.Control
                  placeholder="Ej: Dormitorio Principal, Sala, Balcón..."
                  className="border-start-0"
                  value={h.nombre}
                  onChange={(e) => {
                    const arr = [...formik.values.habitaciones];
                    arr[idx].nombre = e.target.value;
                    formik.setFieldValue("habitaciones", arr);
                  }}
                />
                <Button 
                  variant="outline-danger" 
                  onClick={() => removeHabitacion(idx)}
                  title="Eliminar línea"
                >
                  <i className="bi bi-trash"></i>
                </Button>
              </InputGroup>
            ))
          )}
        </div>
      </Col>

      {/* COLUMNA DERECHA: Fuentes y Cálculos de Costo */}
      <Col md={4} className="border-start ps-md-4">
        <div className="mb-4">
          <h6 className="fw-bold text-secondary small text-uppercase mb-3">Fuentes de Datos del Costo</h6>
          <div className="p-3 border rounded bg-white shadow-sm">
            {["Manual", "Contratista local", "Otro"].map((opt) => (
              <Form.Check
                key={opt}
                type="checkbox"
                id={`fuente-costo-${opt}`}
                label={opt}
                checked={formik.values.fuentesDatosCosto.includes(opt)}
                onChange={(e) => {
                  const copy = [...formik.values.fuentesDatosCosto];
                  if (e.target.checked) copy.push(opt);
                  else {
                    const i = copy.indexOf(opt);
                    if (i >= 0) copy.splice(i, 1);
                  }
                  formik.setFieldValue("fuentesDatosCosto", copy);
                }}
                className="mb-2"
              />
            ))}
          </div>
        </div>

        <div className="p-3 border rounded bg-light shadow-sm">
          <h6 className="fw-bold text-secondary small text-uppercase mb-3">Resumen de Reposición</h6>
          
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Costo Unitario</Form.Label>
            <InputGroup size="sm">
              <InputGroup.Text className="bg-white">$</InputGroup.Text>
              <Form.Control 
                type="number" 
                value={formik.values.costo} 
                onChange={(e) => formik.setFieldValue("costo", e.target.value)}
                placeholder="0.00"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Otras Edificaciones</Form.Label>
            <InputGroup size="sm">
              <InputGroup.Text className="bg-white">$</InputGroup.Text>
              <Form.Control 
                type="number" 
                value={formik.values.otrasEdificaciones} 
                onChange={(e) => formik.setFieldValue("otrasEdificaciones", e.target.value)}
                placeholder="Verjas, anexos..."
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mt-4 pt-2 border-top">
            <Form.Label className="small fw-bold text-primary">Costo Total de Reposición</Form.Label>
            <InputGroup>
              <InputGroup.Text className="bg-primary text-white border-primary">$</InputGroup.Text>
              <Form.Control 
                className="fw-bold border-primary"
                type="number" 
                value={formik.values.costoReposicionTotal} 
                onChange={(e) => formik.setFieldValue("costoReposicionTotal", e.target.value)}
                placeholder="Total calculado"
              />
            </InputGroup>
          </Form.Group>
        </div>
      </Col>
    </Row>
  </div>
)}
                               {/* STEP 7: Comparables */}
{step === 7 && (
  <div className="animate-fade-in">
    <h5 className="text-primary border-bottom pb-2 mb-4">
      <i className="bi bi-graph-up-arrow me-2"></i>7. Enfoque de Ventas Comparables (Mercado)
    </h5>
    
    <div className="d-flex justify-content-between align-items-center mb-3">
      <p className="text-muted small m-0">
        Registre propiedades similares vendidas recientemente para sustentar el valor de mercado.
      </p>
      <Button 
        variant="primary" 
        size="sm" 
        onClick={addComparable}
        className="shadow-sm"
      >
        <i className="bi bi-plus-circle me-1"></i> Agregar comparable
      </Button>
    </div>

    {/* LISTADO DE PROPIEDADES COMPARABLES */}
    <div className="comparables-list mb-4">
      {formik.values.comparables.length === 0 ? (
        <div className="text-center py-5 border rounded bg-light">
          <i className="bi bi-search mb-2 d-block fs-3 text-muted"></i>
          <span className="text-muted">No se han registrado comparables aún.</span>
        </div>
      ) : (
        formik.values.comparables.map((c, i) => (
          <Card key={i} className="mb-3 border-start border-primary border-4 shadow-sm">
            <Card.Body>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Label className="small fw-bold text-uppercase text-muted">Dirección del Comparable</Form.Label>
                  <Form.Control
                    placeholder="Ubicación completa..."
                    value={c.direccion}
                    onChange={(e) => {
                      const arr = [...formik.values.comparables];
                      arr[i].direccion = e.target.value;
                      formik.setFieldValue("comparables", arr);
                    }}
                  />
                </Col>
                <Col md={2}>
                  <Form.Label className="small fw-bold text-uppercase text-muted">Fecha Venta</Form.Label>
                  <Form.Control
                    type="date"
                    value={c.fechaVenta}
                    onChange={(e) => {
                      const arr = [...formik.values.comparables];
                      arr[i].fechaVenta = e.target.value;
                      formik.setFieldValue("comparables", arr);
                    }}
                  />
                </Col>
                <Col md={2}>
                  <Form.Label className="small fw-bold text-uppercase text-muted">Precio (DOP)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="0.00"
                    value={c.precio}
                    onChange={(e) => {
                      const arr = [...formik.values.comparables];
                      arr[i].precio = Number(e.target.value) || "";
                      formik.setFieldValue("comparables", arr);
                    }}
                  />
                </Col>
                <Col md={2}>
                  <Form.Label className="small fw-bold text-uppercase text-muted">Área (m²)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="m2"
                    value={c.m2}
                    onChange={(e) => {
                      const arr = [...formik.values.comparables];
                      arr[i].m2 = Number(e.target.value) || "";
                      formik.setFieldValue("comparables", arr);
                    }}
                  />
                </Col>
              </Row>

              <Row className="mt-3 align-items-end">
                <Col md={10}>
                  <Form.Label className="small fw-bold text-uppercase text-muted">Ajustes / Observaciones</Form.Label>
                  <Form.Control
                    placeholder="Indique ajustes por edad, ubicación o estado respecto al sujeto..."
                    value={c.ajustes}
                    onChange={(e) => {
                      const arr = [...formik.values.comparables];
                      arr[i].ajustes = e.target.value;
                      formik.setFieldValue("comparables", arr);
                    }}
                    className="bg-light border-0 small"
                  />
                </Col>
                <Col md={2} className="text-end">
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    onClick={() => removeComparable(i)}
                    className="w-100"
                  >
                    <i className="bi bi-trash me-1"></i> Eliminar
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))
      )}
    </div>

    

    {/* COMENTARIOS FINALES DEL MERCADO */}
    <Form.Group className="mt-4">
      <Form.Label className="fw-bold text-primary">
        <i className="bi bi-chat-left-text me-2"></i>Conclusiones del Análisis de Mercado
      </Form.Label>
      <Form.Control 
        as="textarea" 
        rows={4} 
        value={formik.values.conclusiones} 
        onChange={(e) => formik.setFieldValue("conclusiones", e.target.value)} 
        placeholder="Resuma el comportamiento del mercado en la zona y justifique la selección de los comparables..."
        className="shadow-sm border-primary-subtle"
      />
    </Form.Group>
  </div>
)}
{/* STEP 8: Fotos y Conclusiones */}
{step === 8 && (
  <div className="animate-fade-in">
    <h5 className="text-success border-bottom pb-2 mb-4">
      <i className="bi bi-camera-fill me-2"></i>Dictamen Final y Registro Fotográfico
    </h5>
    
    <Row>
      {/* COLUMNA IZQUIERDA: Fotos y Galería */}
      <Col md={8} className="pe-md-4">
        <Form.Group className="mb-4">
          <Form.Label className="fw-bold">Subir Fotografías (Máximo {MAX_PHOTOS})</Form.Label>
          <Form.Control 
            type="file" 
            accept="image/*" 
            multiple 
            onChange={(e) => handleFileChange(e.target.files)} 
            className="shadow-sm border-primary-subtle"
          />
          <Form.Text className="text-muted">
            Las imágenes se procesan localmente para el reporte técnico.
          </Form.Text>
        </Form.Group>

        {/* Galería de vistas previas */}
        <div className="bg-light p-3 rounded-3 border mb-4 shadow-sm">
          <h6 className="small fw-bold text-muted text-uppercase mb-3">Vistas Previas Seleccionadas</h6>
          <Row className="g-2">
            {formik.values.fotos.length === 0 ? (
              <Col className="text-center py-4 text-muted small">
                <i className="bi bi-image me-2"></i>No hay fotos seleccionadas
              </Col>
            ) : (
              formik.values.fotos.map((b64, i) => (
                <Col key={i} xs={4} md={2}>
                  <img 
                    src={b64} 
                    alt={`Preview ${i}`} 
                    className="img-fluid rounded border shadow-sm object-fit-cover" 
                    style={{ height: '80px', width: '100%' }}
                  />
                </Col>
              ))
            )}
          </Row>
        </div>

        <Form.Group className="mb-3">
          {renderLabel("conclusiones", "Conclusiones del Perito")}
          <Form.Control 
            as="textarea" 
            rows={10} 
            value={formik.values.conclusiones} 
            onChange={(e) => formik.setFieldValue("conclusiones", e.target.value)} 
            onBlur={() => formik.setFieldTouched("conclusiones", true)}
            placeholder="Escriba aquí el dictamen final sobre el valor del inmueble..."
            className="shadow-sm"
          />
        </Form.Group>
      </Col>

      {/* COLUMNA DERECHA: Resultados Económicos */}
      <Col md={4} className="border-start ps-md-4">
        <div className="p-4 rounded-3 bg-primary bg-opacity-10 border border-primary border-opacity-25 shadow-sm sticky-top" style={{ top: '20px' }}>
          <h6 className="fw-bold text-primary text-uppercase mb-4">Valores de Tasación</h6>

          <Form.Group className="mb-4">
            {renderLabel("valorEstimadoMercado", "Valor de Mercado (DOP)")}
            <InputGroup size="lg">
              <InputGroup.Text className="bg-primary text-white border-0">$</InputGroup.Text>
              <Form.Control 
                type="number" 
                className="fw-bold text-primary border-primary"
                value={formik.values.valorEstimadoMercado} 
                onChange={(e) => formik.setFieldValue("valorEstimadoMercado", e.target.value)} 
                onBlur={() => formik.setFieldTouched("valorEstimadoMercado", true)} 
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4">
            {renderLabel("valorLiquidacion", "Valor de Liquidación")}
            <InputGroup>
              <InputGroup.Text className="bg-white border-end-0">$</InputGroup.Text>
              <Form.Control 
                type="number" 
                className="fw-bold border-start-0"
                value={formik.values.valorLiquidacion} 
                onChange={(e) => formik.setFieldValue("valorLiquidacion", e.target.value)} 
                onBlur={() => formik.setFieldTouched("valorLiquidacion", true)} 
              />
            </InputGroup>
            <Form.Text className="text-muted small">Generalmente 70-80% del valor de mercado.</Form.Text>
          </Form.Group>

          <hr />

          <Button 
            variant="outline-dark" 
            className="w-100 mb-2 btn-sm"
            onClick={() => {
              const payload = JSON.stringify(formik.values, null, 2);
              saveAvaluo(formik.values);
              const blob = new Blob([payload], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `avaluo_respaldo_${Date.now()}.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            <i className="bi bi-file-earmark-code me-2"></i>Exportar JSON
          </Button>

          <Button 
            variant="primary" 
            className="w-100 shadow-sm"
            onClick={() => formik.handleSubmit()}
          >
            <i className="bi bi-save me-2"></i>Guardar Borrador
          </Button>
        </div>
      </Col>
    </Row>
  </div>
)}

{/* PIE DE NAVEGACIÓN ÚNICO */}
<div className="mt-5 d-flex justify-content-between border-top pt-4">
  {/* Sección Izquierda: Botón Atrás */}
  <div>
    {step > 1 && (
      <Button variant="outline-secondary" size="lg" onClick={prev}>
        <i className="bi bi-arrow-left me-2"></i>Atrás
      </Button>
    )}
  </div>

  {/* Sección Derecha: Siguiente o Finalizar */}
  <div>
    {step < 8 ? (
      <Button variant="primary" size="lg" onClick={next}>
        Siguiente Paso <i className="bi bi-arrow-right ms-2"></i>
      </Button>
    ) : (
      <Button 
        type="submit" 
        variant="success" 
        size="lg" 
        className="fw-bold shadow"
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2"></span>Sincronizando...
          </>
        ) : (
          <>
            <i className="bi bi-cloud-check-fill me-2"></i>FINALIZAR REGISTRO
          </>
        )}
      </Button>
    )}
  </div>
</div>


                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </FormikProvider>
    );
} 
