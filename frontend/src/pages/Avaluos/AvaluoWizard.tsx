import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button, Form, InputGroup, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { convertFilesToBase64 } from "../../Utils/fileHelpers";
import { saveAvaluo, loadAvaluo, clearAvaluo } from "../../Utils/storageAvaulo";
import "./AvaluoForm.scss";

/**
 * Multi-step form (wizard) for Avaluo de Propiedad.
 * - Guarda en localStorage (saveAvaluo)
 * - Soporta hasta 15 fotos (base64)
 * - Responsive y usa SCSS
 */

const MAX_PHOTOS = 15;

type Comparable = {
  direccion: string;
  fechaVenta: string;
  precio: number | "";
  m2: number | "";
  ajustes: string;
};

type Habitacion = {
  piso: string;
  nombre: string;
};

type FormValues = {
  // Información inicial
  calle: string;
  numero: string;
  sector: string;
  ciudad: string;
  lat: string;
  lng: string;
  coordenadasComentario: string;
  propietarioNombre: string;
  propietarioTelefono: string;
  propietarioEmail: string;
  valuadorNombre: string;
  valuadorIdentificacion: string;
  solicitanteNombre: string;
  proposito: string;

  // Vecindad (resumido)
  tipoVecindad: string;
  tendenciaVecindad: string;
  comparacionVecindario: string;
  antiguedadPromedio: number | "";
  oferta: string;
  demanda: string;
  distanciaEscuelaPrimaria: string;
  distanciaEscuelaSecundaria: string;
  distanciaTransporte: string;
  distanciaComercios: string;
  distanciaCentroCiudad: string;
  deseabilidad: string;
  resumenFactores: string;

  // Zona
  limitesNaturales: string;
  areaM2: number | "";
  tipoTerreno: string;
  usoSuelo: string;
  configuracion: string;
  zonificacion: string;
  posee: string[]; // checkboxes
  servicios: string[]; // checkboxes
  usoConforme: string;
  paisajismo: string;
  servidumbre: string;
  entradaSalida: string[]; // checkboxes
  instalacionElectrica: string;
  zonaComentarios: string;

  // Mejoras / interior
  anioConstruccion: number | "";
  construccionTerminada: boolean;
  pisos: { pisosCount: number; areas: number[] };
  edadEfectiva: number | "";
  antiguedadAprox: number | "";
  porcentajeTerminacion: number | "";
  vidaEstimadAnios: number | "";
  sotano: string;
  sotanoArea: number | "";
  tipoInmueble: string[]; // checkboxes
  estructura: string;
  materialesConstruccion: string[]; // checkboxes
  marcosVentanas: string;
  revestimientoExterior: string[]; // checkboxes
  materialTecho: string[]; // checkboxes
  condicionGeneralExterna: string;
  mejorasComentarios: string;

  // Interior / distribución
  pisosMateriales: string[]; // checkboxes
  distribucionArquitectonica: string;
  armarios: string;
  dormitoriosTamano: string;
  cantidadBanos: string;
  calidadBanos: string;
  condicionGeneralInterna: string;
  paredesMateriales: string;
  techosMateriales: string;
  otrosDetalles: string;
  murosCimientos: string;
  tuberias: string;
  instalacionSanitaria: string[];
  calentadorAgua: string;
  sistemaElectrico: string[];
  artefactosInstalaciones: string[];
  interiorComentarios: string;

  // habitaciones repetibles
  habitaciones: Habitacion[];

  // costos
  fuentesDatosCosto: string[]; // checkboxes
  tituloApartamento: string;
  costo: number | "";
  otrasEdificaciones: number | "";
  costoReposicionTotal: number | "";

  // comparables
  comparables: Comparable[];

  // fotos
  fotos: string[]; // base64

  // conclusiones
  valorEstimadoMercado: number | "";
  valorLiquidacion: number | "";
  conclusiones: string;
};

const initialValues: FormValues = {
  calle: "",
  numero: "",
  sector: "",
  ciudad: "",
  lat: "",
  lng: "",
  coordenadasComentario: "",
  propietarioNombre: "",
  propietarioTelefono: "",
  propietarioEmail: "",
  valuadorNombre: "",
  valuadorIdentificacion: "",
  solicitanteNombre: "",
  proposito: "",

  tipoVecindad: "",
  tendenciaVecindad: "",
  comparacionVecindario: "",
  antiguedadPromedio: "",
  oferta: "",
  demanda: "",
  distanciaEscuelaPrimaria: "",
  distanciaEscuelaSecundaria: "",
  distanciaTransporte: "",
  distanciaComercios: "",
  distanciaCentroCiudad: "",
  deseabilidad: "",
  resumenFactores: "",

  limitesNaturales: "",
  areaM2: "",
  tipoTerreno: "",
  usoSuelo: "",
  configuracion: "",
  zonificacion: "",
  posee: [],
  servicios: [],
  usoConforme: "Si",
  paisajismo: "",
  servidumbre: "",
  entradaSalida: [],
  instalacionElectrica: "",
  zonaComentarios: "",

  anioConstruccion: "",
  construccionTerminada: false,
  pisos: { pisosCount: 1, areas: [0] },
  edadEfectiva: "",
  antiguedadAprox: "",
  porcentajeTerminacion: "",
  vidaEstimadAnios: "",
  sotano: "No posee",
  sotanoArea: "",
  tipoInmueble: [],
  estructura: "",
  materialesConstruccion: [],
  marcosVentanas: "",
  revestimientoExterior: [],
  materialTecho: [],
  condicionGeneralExterna: "",
  mejorasComentarios: "",

  pisosMateriales: [],
  distribucionArquitectonica: "",
  armarios: "",
  dormitoriosTamano: "",
  cantidadBanos: "",
  calidadBanos: "",
  condicionGeneralInterna: "",
  paredesMateriales: "",
  techosMateriales: "",
  otrosDetalles: "",
  murosCimientos: "",
  tuberias: "",
  instalacionSanitaria: [],
  calentadorAgua: "",
  sistemaElectrico: [],
  artefactosInstalaciones: [],
  interiorComentarios: "",

  habitaciones: [],

  fuentesDatosCosto: [],
  tituloApartamento: "Apartamento",
  costo: "",
  otrasEdificaciones: "",
  costoReposicionTotal: "",

  comparables: [],

  fotos: [],

  valorEstimadoMercado: "",
  valorLiquidacion: "",
  conclusiones: ""
};

const schema = Yup.object().shape({
  calle: Yup.string().required("Calle es requerida"),
  numero: Yup.string(),
  ciudad: Yup.string().required("Ciudad requerida"),
  propietarioNombre: Yup.string().required("Nombre del propietario requerido"),
  // ... puedes extender validaciones
});

export default function FormAvaluo() {
  const [attemptNext, setAttemptNext] = useState(false);
  const [toastError, setToastError] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const saved = loadAvaluo();
  const formik = useFormik({
    initialValues: saved || initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      // save to localStorage
      saveAvaluo(values);
      setSavedMessage("Formulario guardado en localStorage");
      setTimeout(() => setSavedMessage(null), 3000);
    }
  });

  useEffect(() => {
    // auto-save to localStorage on change (debounced would be better)
    saveAvaluo(formik.values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  // file handler
  const handleFileChange = async (files: FileList | null) => {
    if (!files) return;
    const list = Array.from(files).slice(0, MAX_PHOTOS);
    const base64s = await convertFilesToBase64(list);
    formik.setFieldValue("fotos", base64s);
  };

  // helpers for repeatable comparables and habitaciones
  const addComparable = () => {
    const arr = formik.values.comparables.slice();
    arr.push({ direccion: "", fechaVenta: "", precio: "", m2: "", ajustes: "" });
    formik.setFieldValue("comparables", arr);
  };
  const removeComparable = (i: number) => {
    const arr = formik.values.comparables.slice();
    arr.splice(i, 1);
    formik.setFieldValue("comparables", arr);
  };

  const addHabitacion = () => {
    const arr = formik.values.habitaciones.slice();
    arr.push({ piso: "", nombre: "" });
    formik.setFieldValue("habitaciones", arr);
  };
  const removeHabitacion = (i: number) => {
    const arr = formik.values.habitaciones.slice();
    arr.splice(i, 1);
    formik.setFieldValue("habitaciones", arr);
  };

  // helper: which fields are required for each step
  const stepFields: Record<number, (keyof FormValues)[]> = {
    1: ["calle", "ciudad", "propietarioNombre", "valuadorNombre", "solicitanteNombre"],
    2: ["tipoVecindad", "tendenciaVecindad", "oferta", "demanda", "deseabilidad"],
    3: ["limitesNaturales", "areaM2", "tipoTerreno", "usoSuelo", "zonificacion"],
    4: ["anioConstruccion", "edadEfectiva", "vidaEstimadAnios"],
    5: ["distribucionArquitectonica", "condicionGeneralInterna"],
    6: [],
    7: [],
    8: ["valorEstimadoMercado", "valorLiquidacion", "conclusiones"]
  };

  // user-friendly labels for fields (used in toast + inline)
  const fieldLabels: Partial<Record<keyof FormValues, string>> = {
    calle: "Calle",
    numero: "Número",
    ciudad: "Ciudad",
    propietarioNombre: "Nombre del propietario",
    propietarioTelefono: "Teléfono del propietario",
    propietarioEmail: "Email del propietario",
    valuadorNombre: "Nombre del valuador",
    valuadorIdentificacion: "Identificación del valuador",
    solicitanteNombre: "Nombre del solicitante",
    tipoVecindad: "Tipo de vecindad",
    tendenciaVecindad: "Tendencia de la vecindad",
    oferta: "Oferta",
    demanda: "Demanda",
    deseabilidad: "Deseabilidad",
    limitesNaturales: "Límites naturales",
    areaM2: "Área (m²)",
    tipoTerreno: "Tipo de terreno",
    usoSuelo: "Uso de suelo",
    zonificacion: "Zonificación",
    anioConstruccion: "Año de construcción",
    edadEfectiva: "Edad efectiva (años)",
    vidaEstimadAnios: "Vida estimada (años)",
    distribucionArquitectonica: "Distribución arquitectónica",
    condicionGeneralInterna: "Condición general interna",
    valorEstimadoMercado: "Valor estimado (mercado)",
    valorLiquidacion: "Valor liquidación",
    conclusiones: "Conclusiones"
  };

  // generic emptiness check
  const isEmpty = (val: any) => {
    if (val === undefined || val === null) return true;
    if (typeof val === "string") return val.trim() === "";
    if (typeof val === "number") return Number.isNaN(val) && val !== 0 ? true : false; // number is OK (0 considered filled)
    if (Array.isArray(val)) return val.length === 0;
    return false;
  };

  // render label helper (adds inline required message when applicable)
  const renderLabel = (key: keyof FormValues, text: string) => {
    const touched = Boolean((formik.touched as any)[key]);
    const showErr = (attemptNext || touched) && isEmpty((formik.values as any)[key]);
    return (
      <Form.Label>
        {text}
        {showErr && <span className="text-danger ms-2">Este campo es obligatorio</span>}
      </Form.Label>
    );
  };

  // small UI helpers: next/prev with validation per-step
  const next = () => {
    const fields = stepFields[step] || [];
    setAttemptNext(true);

    // mark touched so inline messages appear
    fields.forEach((field) => {
      formik.setFieldTouched(String(field), true, true);
    });

    // find first missing field
    const missing = fields.filter((field) => {
      const value = (formik.values as any)[field];
      return isEmpty(value);
    });

    if (missing.length > 0) {
      const first = missing[0];
      const label = fieldLabels[first] || String(first);
      setToastError(`El campo "${label}" es obligatorio`);
      setTimeout(() => setToastError(null), 3500);
      return;
    }

    // if OK advance
    setAttemptNext(false);
    setStep((s) => Math.min(8, s + 1));
  };

  const prev = () => setStep((s) => Math.max(1, s - 1));

  // total area computed safely forcing numeric conversion
  const totalArea = formik.values.pisos.areas.reduce((acc, val) => acc + Number(val || 0), 0);

  return (
    <div className="avaluo-page container-fluid">
      <div className="avaluo-container">
        <Card className="mb-4">
          <Card.Body>
            <h3>Formulario de Avalúo de Propiedad</h3>
            <p className="text-muted">Paso {step} de 8</p>
            {savedMessage && <Alert variant="success">{savedMessage}</Alert>}

            <Form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              {/* STEP 1: Información inicial */}
              {step === 1 && (
                <>
                  <Row>
                    <Col md={8}>
                      <Form.Group className="mb-3">
                        <Form.Label>Dirección</Form.Label>
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
                        {renderLabel("lat", "Coordenadas (Latitud)")}
                        <InputGroup className="mb-1">
                          <Form.Control
                            placeholder="Latitud"
                            value={formik.values.lat}
                            onChange={(e) => formik.setFieldValue("lat", e.target.value)}
                          />
                          <Form.Control
                            placeholder="Longitud"
                            value={formik.values.lng}
                            onChange={(e) => formik.setFieldValue("lng", e.target.value)}
                          />
                        </InputGroup>
                        <Form.Text className="text-muted">Puedes indicar las coordenadas o usar el selector (demo).</Form.Text>
                        <Form.Group className="mt-2">
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

                    <Col md={4}>
                      <Form.Group className="mb-2">
                        <Form.Label>Propietario</Form.Label>
                        {/* propietarioNombre required */}
                        {renderLabel("propietarioNombre", "Nombre")}
                        <Form.Control
                          placeholder="Nombre"
                          value={formik.values.propietarioNombre}
                          onChange={(e) => formik.setFieldValue("propietarioNombre", e.target.value)}
                          onBlur={() => formik.setFieldTouched("propietarioNombre", true)}
                        />
                        <Form.Control
                          placeholder="Teléfono"
                          className="mt-2"
                          value={formik.values.propietarioTelefono}
                          onChange={(e) => formik.setFieldValue("propietarioTelefono", e.target.value)}
                        />
                        <Form.Control
                          placeholder="Email"
                          className="mt-2"
                          value={formik.values.propietarioEmail}
                          onChange={(e) => formik.setFieldValue("propietarioEmail", e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Valuador</Form.Label>
                        {/* valuadorNombre required */}
                        {renderLabel("valuadorNombre", "Nombre")}
                        <Form.Control
                          placeholder="Nombre"
                          value={formik.values.valuadorNombre}
                          onChange={(e) => formik.setFieldValue("valuadorNombre", e.target.value)}
                          onBlur={() => formik.setFieldTouched("valuadorNombre", true)}
                        />
                        <Form.Control
                          placeholder="Identificación"
                          className="mt-2"
                          value={formik.values.valuadorIdentificacion}
                          onChange={(e) => formik.setFieldValue("valuadorIdentificacion", e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        {/* Solicitante (añadido porque está en la lista de campos requeridos del paso 1) */}
                        {renderLabel("solicitanteNombre", "Nombre del solicitante")}
                        <Form.Control
                          placeholder="Nombre del solicitante"
                          value={formik.values.solicitanteNombre}
                          onChange={(e) => formik.setFieldValue("solicitanteNombre", e.target.value)}
                          onBlur={() => formik.setFieldTouched("solicitanteNombre", true)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {/* STEP 2: Vecindad */}
              {step === 2 && (
                <>
                  <h5>Descripción de la Vecindad</h5>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-2">
                        {renderLabel("tipoVecindad", "Tipo de Vecindad")}
                        <Form.Select
                          value={formik.values.tipoVecindad}
                          onChange={(e) => formik.setFieldValue("tipoVecindad", e.target.value)}
                          onBlur={() => formik.setFieldTouched("tipoVecindad", true)}
                        >
                          <option value="">Seleccione</option>
                          <option value="Urbano">Urbano</option>
                          <option value="Rural">Rural</option>
                          <option value="Mixto">Mixto</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-2">
                        {renderLabel("tendenciaVecindad", "Tendencia de la Vecindad")}
                        <Form.Select
                          value={formik.values.tendenciaVecindad}
                          onChange={(e) => formik.setFieldValue("tendenciaVecindad", e.target.value)}
                          onBlur={() => formik.setFieldTouched("tendenciaVecindad", true)}
                        >
                          <option value="">Seleccione</option>
                          <option value="A mejorar">A mejorar</option>
                          <option value="Estable">Estable</option>
                          <option value="A empeorar">A empeorar</option>
                          <option value="En transición">En transición</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-2">
                        {renderLabel("comparacionVecindario", "Comparación con las propiedades del vecindario")}
                        <Form.Select
                          value={formik.values.comparacionVecindario}
                          onChange={(e) => formik.setFieldValue("comparacionVecindario", e.target.value)}
                        >
                          <option value="">Seleccione</option>
                          <option value="Inferior">Inferior</option>
                          <option value="Similar">Similar</option>
                          <option value="Superior">Superior</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Antigüedad promedio (años)</Form.Label>
                        <Form.Control
                          type="number"
                          value={formik.values.antiguedadPromedio as any}
                          onChange={(e) => formik.setFieldValue("antiguedadPromedio", e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        {renderLabel("oferta", "Oferta")}
                        <Form.Select value={formik.values.oferta} onChange={(e) => formik.setFieldValue("oferta", e.target.value)} onBlur={() => formik.setFieldTouched("oferta", true)}>
                          <option value="">Seleccione</option>
                          <option value="Mucha">Mucha</option>
                          <option value="Razonable">Razonable</option>
                          <option value="Poca">Poca</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-2">
                        {renderLabel("demanda", "Demanda")}
                        <Form.Select value={formik.values.demanda} onChange={(e) => formik.setFieldValue("demanda", e.target.value)} onBlur={() => formik.setFieldTouched("demanda", true)}>
                          <option value="">Seleccione</option>
                          <option value="Mucha">Mucha</option>
                          <option value="Razonable">Razonable</option>
                          <option value="Poca">Poca</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label>Distancias a:</Form.Label>
                        <Row>
                          <Col md={6}>
                            <Form.Label>Escuela primaria</Form.Label>
                            <Form.Control value={formik.values.distanciaEscuelaPrimaria} onChange={(e) => formik.setFieldValue("distanciaEscuelaPrimaria", e.target.value)} />
                          </Col>
                          <Col md={6}>
                            <Form.Label>Escuela secundaria</Form.Label>
                            <Form.Control value={formik.values.distanciaEscuelaSecundaria} onChange={(e) => formik.setFieldValue("distanciaEscuelaSecundaria", e.target.value)} />
                          </Col>
                          <Col md={6}>
                            <Form.Label>Transporte público</Form.Label>
                            <Form.Control value={formik.values.distanciaTransporte} onChange={(e) => formik.setFieldValue("distanciaTransporte", e.target.value)} />
                          </Col>
                          <Col md={6}>
                            <Form.Label>Comercios</Form.Label>
                            <Form.Control value={formik.values.distanciaComercios} onChange={(e) => formik.setFieldValue("distanciaComercios", e.target.value)} />
                          </Col>
                          <Col md={12}>
                            <Form.Label>Centro de la ciudad</Form.Label>
                            <Form.Control value={formik.values.distanciaCentroCiudad} onChange={(e) => formik.setFieldValue("distanciaCentroCiudad", e.target.value)} />
                          </Col>
                        </Row>
                      </Form.Group>

                      <Form.Group className="mb-2">
                        {renderLabel("deseabilidad", "Deseabilidad de la propiedad")}
                        <Form.Select value={formik.values.deseabilidad} onChange={(e) => formik.setFieldValue("deseabilidad", e.target.value)} onBlur={() => formik.setFieldTouched("deseabilidad", true)}>
                          <option value="">Seleccione</option>
                          <option value="Alta">Alta</option>
                          <option value="Promedio">Promedio</option>
                          <option value="Baja">Baja</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Resumen / Factores desfavorables</Form.Label>
                        <Form.Control as="textarea" rows={4} value={formik.values.resumenFactores} onChange={(e) => formik.setFieldValue("resumenFactores", e.target.value)} />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {/* STEP 3: Zona */}
              {step === 3 && (
                <>
                  <h5>Descripción de la Zona</h5>
                  <Row>
                    <Col md={6}>
                      {renderLabel("limitesNaturales", "Limites naturales")}
                      <Form.Control className="mb-2" value={formik.values.limitesNaturales} onChange={(e) => formik.setFieldValue("limitesNaturales", e.target.value)} onBlur={() => formik.setFieldTouched("limitesNaturales", true)} />

                      {renderLabel("areaM2", "Área (m²)")}
                      <Form.Control className="mb-2" type="number" value={formik.values.areaM2 as any} onChange={(e) => formik.setFieldValue("areaM2", e.target.value)} onBlur={() => formik.setFieldTouched("areaM2", true)} />

                      {renderLabel("tipoTerreno", "Tipo de terreno")}
                      <Form.Control className="mb-2" value={formik.values.tipoTerreno} onChange={(e) => formik.setFieldValue("tipoTerreno", e.target.value)} onBlur={() => formik.setFieldTouched("tipoTerreno", true)} />

                      {renderLabel("usoSuelo", "Uso de suelo")}
                      <Form.Control className="mb-2" value={formik.values.usoSuelo} onChange={(e) => formik.setFieldValue("usoSuelo", e.target.value)} onBlur={() => formik.setFieldTouched("usoSuelo", true)} />

                      {renderLabel("configuracion", "Configuración")}
                      <Form.Control className="mb-2" value={formik.values.configuracion} onChange={(e) => formik.setFieldValue("configuracion", e.target.value)} />

                      {renderLabel("zonificacion", "Zonificación")}
                      <Form.Control className="mb-2" value={formik.values.zonificacion} onChange={(e) => formik.setFieldValue("zonificacion", e.target.value)} />

                      <Form.Group className="mt-2">
                        <Form.Label>Instalación eléctrica</Form.Label>
                        <Form.Select value={formik.values.instalacionElectrica} onChange={(e) => formik.setFieldValue("instalacionElectrica", e.target.value)}>
                          <option value="">Seleccione</option>
                          <option value="Subterránea">Subterránea</option>
                          <option value="En postes">En postes</option>
                          <option value="Nula">Nula</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control as="textarea" rows={4} value={formik.values.zonaComentarios} onChange={(e) => formik.setFieldValue("zonaComentarios", e.target.value)} />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <h6>Posee</h6>
                      {["Calle pavimentada", "Calle sin pavimentar", "Acera", "Contenes", "Alumbrado electrico", "Televisión por cable"].map((opt) => (
                        <Form.Check
                          key={opt}
                          type="checkbox"
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
                        />
                      ))}

                      <h6 className="mt-3">Servicios disponibles</h6>
                      {["Teléfono", "Gas", "Agua potable", "Pozo privado", "Pozo público", "Alcantarillado sanitario", "Pozo séptico", "Alcantarilla pluvial", "Drenajes por zanjas abiertas"].map((opt) => (
                        <Form.Check
                          key={opt}
                          type="checkbox"
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
                        />
                      ))}

                      <Form.Group className="mt-3">
                        <Form.Label>El uso actual de la propiedad está conforme con lo permitido</Form.Label>
                        <Form.Select value={formik.values.usoConforme} onChange={(e) => formik.setFieldValue("usoConforme", e.target.value)}>
                          <option value="Si">Si</option>
                          <option value="No">No (Ver comentarios)</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Paisajismo / áreas verdes</Form.Label>
                        <Form.Select value={formik.values.paisajismo} onChange={(e) => formik.setFieldValue("paisajismo", e.target.value)}>
                          <option value="">Seleccione</option>
                          {["Excelente", "Muy buena", "Buena", "Regular", "Mala", "Inexistente"].map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mt-2">
                        <Form.Label>Servidumbre</Form.Label>
                        <Form.Select value={formik.values.servidumbre} onChange={(e) => formik.setFieldValue("servidumbre", e.target.value)}>
                          <option value="">Seleccione</option>
                          <option value="Servicios públicos">Servicios públicos</option>
                          <option value="De paso">De paso</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Entrada y salida de la propiedad</Form.Label>
                        {["Privada", "Común", "Ninguna", "Única", "Doble", "Múltiple", "Adecuada", "Pavimentada"].map((opt) => (
                          <Form.Check
                            key={opt}
                            inline
                            type="checkbox"
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
                          />
                        ))}
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {/* STEP 4: Mejoras */}
              {step === 4 && (
                <>
                  <h5>Descripción de las Mejoras</h5>
                  <Row>
                    <Col md={8}>
                      {renderLabel("anioConstruccion", "Año de construcción")}
                      <Form.Control className="mb-2" type="number" value={formik.values.anioConstruccion as any} onChange={(e) => formik.setFieldValue("anioConstruccion", e.target.value)} onBlur={() => formik.setFieldTouched("anioConstruccion", true)} />

                      <Form.Group className="mb-2">
                        <Form.Check type="checkbox" label="Construcción terminada" checked={formik.values.construccionTerminada} onChange={(e) => formik.setFieldValue("construccionTerminada", e.target.checked)} />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Pisos (agregar más si necesita)</Form.Label>
                        <div>
                          {Array.from({ length: formik.values.pisos.pisosCount }).map((_, idx) => (
                            <InputGroup className="mb-2" key={idx}>
                              <InputGroup.Text>Piso {idx + 1}</InputGroup.Text>
                              <Form.Control
                                type="number"
                                placeholder="Area m2"
                                value={formik.values.pisos.areas[idx] || 0}
                                onChange={(e) => {
                                  const arr = [...formik.values.pisos.areas];
                                  arr[idx] = Number(e.target.value) || 0;
                                  formik.setFieldValue("pisos", { ...formik.values.pisos, areas: arr });
                                }}
                              />
                            </InputGroup>
                          ))}
                          <div className="d-flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => {
                                const newCount = formik.values.pisos.pisosCount + 1;
                                const arr = [...formik.values.pisos.areas, 0];
                                formik.setFieldValue("pisos", { pisosCount: newCount, areas: arr });
                              }}
                            >
                              Agregar piso
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() => {
                                if (formik.values.pisos.pisosCount > 1) {
                                  const newCount = formik.values.pisos.pisosCount - 1;
                                  const arr = [...formik.values.pisos.areas];
                                  arr.pop();
                                  formik.setFieldValue("pisos", { pisosCount: newCount, areas: arr });
                                }
                              }}
                            >
                              Quitar piso
                            </Button>
                          </div>
                          <div className="mt-2">Total m²: {totalArea}</div>
                        </div>
                      </Form.Group>

                      {renderLabel("edadEfectiva", "Edad efectiva (años)")}
                      <Form.Control className="mb-2" type="number" value={formik.values.edadEfectiva as any} onChange={(e) => formik.setFieldValue("edadEfectiva", e.target.value)} onBlur={() => formik.setFieldTouched("edadEfectiva", true)} />

                      <Form.Group className="mb-2">
                        <Form.Label>Antigüedad aproximada (años)</Form.Label>
                        <Form.Control type="number" value={formik.values.antiguedadAprox as any} onChange={(e) => formik.setFieldValue("antiguedadAprox", e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>% Terminación</Form.Label>
                        <Form.Control type="number" value={formik.values.porcentajeTerminacion as any} onChange={(e) => formik.setFieldValue("porcentajeTerminacion", e.target.value)} />
                      </Form.Group>

                      {renderLabel("vidaEstimadAnios", "Vida estimada (años)")}
                      <Form.Control className="mb-2" type="number" value={formik.values.vidaEstimadAnios as any} onChange={(e) => formik.setFieldValue("vidaEstimadAnios", e.target.value)} onBlur={() => formik.setFieldTouched("vidaEstimadAnios", true)} />

                      <Form.Group className="mb-2">
                        <Form.Label>Condición general externa</Form.Label>
                        <Form.Select value={formik.values.condicionGeneralExterna} onChange={(e) => formik.setFieldValue("condicionGeneralExterna", e.target.value)}>
                          <option value="">Seleccione</option>
                          {["Muy buena", "Buena", "Regular", "Mala"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control as="textarea" rows={4} value={formik.values.mejorasComentarios} onChange={(e) => formik.setFieldValue("mejorasComentarios", e.target.value)} />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group className="mb-2">
                        <Form.Label>Sótano</Form.Label>
                        <Form.Select value={formik.values.sotano} onChange={(e) => formik.setFieldValue("sotano", e.target.value)}>
                          <option value="No posee">No posee</option>
                          <option value="Completo">Completo</option>
                          <option value="Parcial">Parcial</option>
                        </Form.Select>
                        {formik.values.sotano !== "No posee" && (
                          <Form.Control className="mt-2" placeholder="Area m2" type="number" value={formik.values.sotanoArea as any} onChange={(e) => formik.setFieldValue("sotanoArea", e.target.value)} />
                        )}
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Tipo de Inmueble</Form.Label>
                        {["Asilado", "En hileras", "Townhouse", "Apartamento", "Duplex", "Triplex", "Condominio"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
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
                          />
                        ))}
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Estructura</Form.Label>
                        <Form.Control value={formik.values.estructura} onChange={(e) => formik.setFieldValue("estructura", e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Materiales de construcción</Form.Label>
                        {["Madera", "Acero", "Bloques de H.A.", "Bloques de hormigón armado"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
                            label={opt}
                            checked={formik.values.materialesConstruccion.includes(opt)}
                            onChange={(e) => {
                              const copy = [...formik.values.materialesConstruccion];
                              if (e.target.checked) copy.push(opt);
                              else {
                                const i = copy.indexOf(opt);
                                if (i >= 0) copy.splice(i, 1);
                              }
                              formik.setFieldValue("materialesConstruccion", copy);
                            }}
                          />
                        ))}
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Tipos de marcos de ventanas</Form.Label>
                        <Form.Control value={formik.values.marcosVentanas} onChange={(e) => formik.setFieldValue("marcosVentanas", e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Revestimiento exterior</Form.Label>
                        {["Pañete cemento", "Ladrillo macizo", "Piedra / laja", "Coralina", "Pintura", "Aluminio", "Vinilo", "Ladrillo aislante", "Otros"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
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
                      </Form.Group>

                      <Form.Group className="mb-2">
                        <Form.Label>Material de techo</Form.Label>
                        {["Teja asfáltica", "Teja de barro", "Cubierta metálica", "Losa de H.A.", "Shingles de cedro"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
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
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {/* STEP 5: Interior */}
              {step === 5 && (
                <>
                  <h5>Descripción del Interior</h5>
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Pisos (materiales)</Form.Label>
                        {["Granito", "Porcelanato", "Mármol", "Parquet", "Terrazo", "Alfombra", "Madera", "Mosaico", "Cerámica", "Ladrillo", "Laminado de vinilo", "Baldosas vinílicas"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
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
                          />
                        ))}
                      </Form.Group>

                      <Form.Group className="mt-2">
                        {renderLabel("distribucionArquitectonica", "Distribución arquitectónica")}
                        <Form.Select value={formik.values.distribucionArquitectonica} onChange={(e) => formik.setFieldValue("distribucionArquitectonica", e.target.value)} onBlur={() => formik.setFieldTouched("distribucionArquitectonica", true)}>
                          <option value="">Seleccione</option>
                          {["Muy buena", "Buena", "Regular", "Mala"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Armarios</Form.Label>
                        <Form.Select value={formik.values.armarios} onChange={(e) => formik.setFieldValue("armarios", e.target.value)}>
                          <option value="">Seleccione</option>
                          {["Muy buenos", "Buenos", "Regulares", "Malos"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Dormitorios (tamaño)</Form.Label>
                        <Form.Select value={formik.values.dormitoriosTamano} onChange={(e) => formik.setFieldValue("dormitoriosTamano", e.target.value)}>
                          <option value="">Seleccione</option>
                          {["Grandes", "Medios", "Pequeños"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Cantidad de baños</Form.Label>
                        <Form.Select value={formik.values.cantidadBanos} onChange={(e) => formik.setFieldValue("cantidadBanos", e.target.value)}>
                          <option value="">Seleccione</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5+">5+</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Calidad de los baños</Form.Label>
                        <Form.Select value={formik.values.calidadBanos} onChange={(e) => formik.setFieldValue("calidadBanos", e.target.value)}>
                          {["Muy buenos", "Buenos", "Malos", "Fabricados a gusto de clientes"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        {renderLabel("condicionGeneralInterna", "Condición general interna")}
                        <Form.Select value={formik.values.condicionGeneralInterna} onChange={(e) => formik.setFieldValue("condicionGeneralInterna", e.target.value)} onBlur={() => formik.setFieldTouched("condicionGeneralInterna", true)}>
                          {["Muy buena", "Buena", "Regular", "Mala"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control as="textarea" rows={4} value={formik.values.interiorComentarios} onChange={(e) => formik.setFieldValue("interiorComentarios", e.target.value)} />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-2">
                        <Form.Label>Paredes materiales</Form.Label>
                        <Form.Control value={formik.values.paredesMateriales} onChange={(e) => formik.setFieldValue("paredesMateriales", e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Techos materiales</Form.Label>
                        <Form.Control value={formik.values.techosMateriales} onChange={(e) => formik.setFieldValue("techosMateriales", e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Otros detalles</Form.Label>
                        <Form.Control value={formik.values.otrosDetalles} onChange={(e) => formik.setFieldValue("otrosDetalles", e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mt-3">
                        <Form.Label>Muros de cimientos</Form.Label>
                        <Form.Select value={formik.values.murosCimientos} onChange={(e) => formik.setFieldValue("murosCimientos", e.target.value)}>
                          {["H.A. vaciado", "Bloques de H.A.", "Losa de H.A.", "Ladrillo y piedra"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Tuberías</Form.Label>
                        <Form.Select value={formik.values.tuberias} onChange={(e) => formik.setFieldValue("tuberias", e.target.value)}>
                          {["Cobre", "PVC", "Galvanizado"].map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Instalación sanitaria</Form.Label>
                        {["Cisterna", "Jacuzzi", "Piscina", "Tinaco"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
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
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Calentador de agua</Form.Label>
                        <Form.Select value={formik.values.calentadorAgua} onChange={(e) => formik.setFieldValue("calentadorAgua", e.target.value)}>
                          <option value="">Seleccione</option>
                          <option value="A gas">A gas</option>
                          <option value="Eléctrico">Eléctrico</option>
                          <option value="No posee">No posee</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Sistema eléctrico</Form.Label>
                        {["Fusibles", "Interruptores"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
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
                      </Form.Group>

                      <Form.Group className="mt-2">
                        <Form.Label>Artefactos e instalaciones adicionales</Form.Label>
                        {["Alarmas de robo", "Alarmas de incendios", "Barrera de alambre de puas", "Eliminador de basura", "Chimenea", "Sauna", "Tratamiento de agua", "Tragaluces", "Solarium", "Puerta de garaje automática", "Verja parcial"].map((opt) => (
                          <Form.Check
                            key={opt}
                            type="checkbox"
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
                          />
                        ))}
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {/* STEP 6: Distribución habitaciones */}
              {step === 6 && (
                <>
                  <h5>Distribución de las Habitaciones</h5>
                  <Row>
                    <Col md={12}>
                      <Button size="sm" onClick={addHabitacion}>
                        Agregar habitación
                      </Button>
                      <div className="mt-2">
                        {formik.values.habitaciones.map((h, idx) => (
                          <InputGroup key={idx} className="mb-2">
                            <Form.Control
                              placeholder="Piso"
                              value={h.piso}
                              onChange={(e) => {
                                const arr = [...formik.values.habitaciones];
                                arr[idx].piso = e.target.value;
                                formik.setFieldValue("habitaciones", arr);
                              }}
                            />
                            <Form.Control
                              placeholder="Nombre"
                              value={h.nombre}
                              onChange={(e) => {
                                const arr = [...formik.values.habitaciones];
                                arr[idx].nombre = e.target.value;
                                formik.setFieldValue("habitaciones", arr);
                              }}
                            />
                            <Button variant="danger" onClick={() => removeHabitacion(idx)}>
                              Eliminar
                            </Button>
                          </InputGroup>
                        ))}
                      </div>

                      <h6 className="mt-3">Fuentes de datos del costo</h6>
                      {["Manual", "Contratista local", "Otro"].map((opt) => (
                        <Form.Check
                          key={opt}
                          type="checkbox"
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
                        />
                      ))}

                      <h6 className="mt-3">Costo / Reposición</h6>
                      <Form.Group className="mb-2">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control type="number" value={formik.values.costo as any} onChange={(e) => formik.setFieldValue("costo", e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Otras edificaciones</Form.Label>
                        <Form.Control type="number" value={formik.values.otrasEdificaciones as any} onChange={(e) => formik.setFieldValue("otrasEdificaciones", e.target.value)} />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Costo total de reposición</Form.Label>
                        <Form.Control type="number" value={formik.values.costoReposicionTotal as any} onChange={(e) => formik.setFieldValue("costoReposicionTotal", e.target.value)} />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              )}

              {/* STEP 7: Comparables */}
              {step === 7 && (
                <>
                  <h5>Enfoque de Ventas Comparables</h5>
                  <div className="mb-2">
                    <Button size="sm" onClick={addComparable}>
                      Agregar comparable
                    </Button>
                  </div>
                  {formik.values.comparables.map((c, i) => (
                    <Card key={i} className="mb-2">
                      <Card.Body>
                        <Row>
                          <Col md={6}>
                            <Form.Control
                              placeholder="Dirección"
                              value={c.direccion}
                              onChange={(e) => {
                                const arr = [...formik.values.comparables];
                                arr[i].direccion = e.target.value;
                                formik.setFieldValue("comparables", arr);
                              }}
                            />
                          </Col>
                          <Col md={2}>
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
                            <Form.Control
                              placeholder="Precio"
                              type="number"
                              value={c.precio as any}
                              onChange={(e) => {
                                const arr = [...formik.values.comparables];
                                arr[i].precio = Number(e.target.value) || "";
                                formik.setFieldValue("comparables", arr);
                              }}
                            />
                          </Col>
                          <Col md={2}>
                            <Form.Control
                              placeholder="m2"
                              type="number"
                              value={c.m2 as any}
                              onChange={(e) => {
                                const arr = [...formik.values.comparables];
                                arr[i].m2 = Number(e.target.value) || "";
                                formik.setFieldValue("comparables", arr);
                              }}
                            />
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col md={10}>
                            <Form.Control
                              placeholder="Ajustes"
                              value={c.ajustes}
                              onChange={(e) => {
                                const arr = [...formik.values.comparables];
                                arr[i].ajustes = e.target.value;
                                formik.setFieldValue("comparables", arr);
                              }}
                            />
                          </Col>
                          <Col md={2}>
                            <Button variant="danger" onClick={() => removeComparable(i)}>
                              Eliminar
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  ))}
                  <Form.Group className="mt-2">
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control as="textarea" rows={3} value={formik.values.conclusiones} onChange={(e) => formik.setFieldValue("conclusiones", e.target.value)} />
                  </Form.Group>
                </>
              )}

              {/* STEP 8: Fotos y Conclusiones */}
              {step === 8 && (
                <>
                  <h5>Fotos y Conclusiones</h5>
                  <Form.Group className="mb-2">
                    <Form.Label>Fotos (máx {MAX_PHOTOS})</Form.Label>
                    <Form.Control type="file" accept="image/*" multiple onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(e.target.files)} />
                    <Form.Text className="text-muted">Se guardarán como base64 (demo).</Form.Text>
                  </Form.Group>

                  <Row className="mb-2">
                    {formik.values.fotos.map((b64, i) => (
                      <Col key={i} xs={6} md={3} className="mb-2">
                        <img src={b64} alt={`foto-${i}`} className="img-fluid rounded" />
                      </Col>
                    ))}
                  </Row>

                  {renderLabel("valorEstimadoMercado", "Valor estimado mercado")}
                  <Form.Control className="mb-2" type="number" value={formik.values.valorEstimadoMercado as any} onChange={(e) => formik.setFieldValue("valorEstimadoMercado", e.target.value)} onBlur={() => formik.setFieldTouched("valorEstimadoMercado", true)} />

                  {renderLabel("valorLiquidacion", "Valor liquidación")}
                  <Form.Control className="mb-2" type="number" value={formik.values.valorLiquidacion as any} onChange={(e) => formik.setFieldValue("valorLiquidacion", e.target.value)} onBlur={() => formik.setFieldTouched("valorLiquidacion", true)} />

                  {renderLabel("conclusiones", "Conclusiones")}
                  <Form.Control className="mb-2" as="textarea" rows={4} value={formik.values.conclusiones} onChange={(e) => formik.setFieldValue("conclusiones", e.target.value)} onBlur={() => formik.setFieldTouched("conclusiones", true)} />

                  <div className="d-flex gap-2">
                    <Button
                      onClick={() => {
                        // export JSON and save to localStorage (also create a download)
                        const payload = JSON.stringify(formik.values, null, 2);
                        saveAvaluo(formik.values);
                        const blob = new Blob([payload], { type: "application/json" });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `avaluo_${Date.now()}.json`;
                        a.click();
                        URL.revokeObjectURL(url);
                      }}
                    >
                      Guardar JSON + Descargar
                    </Button>
                    <Button variant="primary" onClick={() => { formik.handleSubmit(); }}>
                      Guardar
                    </Button>
                  </div>
                </>
              )}

              <div className="mt-3 d-flex justify-content-between">
                <div>{step > 1 && <Button variant="secondary" onClick={prev}>Atrás</Button>}</div>
                <div>
                  {step < 8 && <Button onClick={next}>Siguiente</Button>}
                  {step === 8 && <Button type="submit" className="ms-2">Finalizar y guardar</Button>}
                </div>
              </div>
            </Form>
          </Card.Body>

          {toastError && (
            <Alert variant="danger" className="position-fixed top-0 end-0 m-4 shadow" style={{ zIndex: 1055 }}>
              {toastError}
            </Alert>
          )}
        </Card>
      </div>
    </div>
  );
}
