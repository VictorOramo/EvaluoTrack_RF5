// src/pages/Avaluo/AvaluoForm.tsx
import React, { useState } from "react";
import { Formik, Form as FormikForm, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  Modal,
  Badge,
  InputGroup,
} from "react-bootstrap";
import "./AvaluoForm.scss";

/**
 * Notas:
 * - Este componente implementa un formulario por pasos (wizard) con las secciones 1-4.
 * - Maneja up to MAX_PHOTOS imágenes (base64) y valida campos requeridos.
 * - Para el input file, el event tipado es React.ChangeEvent<HTMLInputElement>
 */

const MAX_PHOTOS = 15;

type Photo = {
  name: string;
  base64: string;
  size: number;
};

const initialValues = {
  // 1. Información Inicial
  direccion_calle: "",
  direccion_numero: "",
  direccion_sector: "",
  direccion_ciudad: "",
  coordenadas_lat: "",
  coordenadas_lng: "",
  coordenadas_comentarios: "",
  propietario_nombre: "",
  propietario_telefono: "",
  propietario_email: "",
  valuador_nombre: "",
  valuador_identificacion: "",
  solicitante_nombre: "",
  proposito_avaluo: "",

  // 2. Descripción de la vecindad
  tipo_vecindad: "",
  tendencia_vecindad: "",
  comparacion_vecindad: "",
  antiguedad_promedio: "",
  oferta: "",
  demanda: "",
  dist_escuela_primaria: "",
  dist_escuela_secundaria: "",
  dist_transporte_publico: "",
  dist_comercios: "",
  dist_centro_ciudad: "",
  deseabilidad: "",
  resumen_factores: "",

  // 3. Descripción de la zona
  limites_naturales: "",
  area_m2: "",
  tipo_terreno: "",
  uso_suelo: "",
  configuracion: "",
  zonificacion: "",
  posee: {
    calle_pavimentada: false,
    calle_sin_pavimentar: false,
    acera: false,
    contenes: false,
    alumbrado_electrico: false,
    tv_cable: false,
  },
  servicios_disponibles: {
    telefono: false,
    gas: false,
    agua_potable: false,
    pozo_privado: false,
    pozo_publico: false,
    alcantarillado_sanitario: false,
    pozo_septico: false,
    alcantarilla_pluvial: false,
    drenajes_zanjas: false,
  },
  uso_conforme: "Si",
  paisajismo: "",
  servidumbre: "",
  entrada_salida: {
    privada: false,
    comun: false,
    ninguna: false,
    unica: false,
    doble: false,
    multiple: false,
    adecuada: false,
    pavimentada: false,
  },
  instalacion_electrica: "", // subterranea / en_postes / nula
  comentarios_zona: "",

  // 4. Descripción de las mejoras
  ano_construccion: "",
  construccion_terminada: false,
  pisos: [
    // ejemplo { nivel: 1, area_m2: 62.66 }
  ],
  edad_efectiva: "",
  antiguedad_aprox: "",
  porcentaje_terminacion: "",
  vida_estimada: "",
  sotano_tipo: "no_posee", // completo|parcial|no_posee
  sotano_area_m2: "",
  tipo_inmueble: {
    asilado: false,
    hileras: false,
    townhouse: false,
    apartamento: false,
    duplex: false,
    triplex: false,
    condominio: false,
  },
  estructura: "",
  material_construccion: {
    madera: false,
    acero: false,
    bloques_ha: false,
    hormigon_armado: false,
  },
  tipos_marcos_ventanas: "",
  revestimiento_exterior: {
    panete_cemento: false,
    ladrillo_macizo: false,
    piedra_laja: false,
    coralina: false,
    pintura: false,
    aluminio: false,
    vinilo: false,
    ladrillo_aislante: false,
    otros: false,
  },
  material_techo: {
    teja_asfaltica: false,
    teja_barro: false,
    cubierta_metalica: false,
    losa_ha: false,
    shingles_cedro: false,
  },
  condicion_general_externa: "",
  comentarios_mejoras: "",

  // fotos
  fotos: [] as Photo[],

  // conclusiones (más adelante)
  valor_mercado: "",
  valor_liquidacion: "",
  conclusiones: "",
};

const validationSchema = Yup.object().shape({
  direccion_calle: Yup.string().required("Requerido"),
  direccion_numero: Yup.string().required("Requerido"),
  direccion_ciudad: Yup.string().required("Requerido"),
  propietario_nombre: Yup.string().required("Requerido"),
  proposito_avaluo: Yup.string().required("Requerido"),
  // ejemplo numerico
  area_m2: Yup.number()
    .typeError("Debe ser número")
    .nullable()
    .notRequired(),
  ano_construccion: Yup.number()
    .typeError("Debe ser número")
    .nullable()
    .notRequired(),
  // etc. añadir más reglas según necesidad
});

const AvaluoForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [showMapModal, setShowMapModal] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 6));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  // helper para convertir File -> base64
  const fileToBase64 = (file: File): Promise<Photo> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          name: file.name,
          base64: String(reader.result),
          size: file.size,
        });
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });

  return (
    <Card className="avaluo-card avaluo-wrapper">
      <Card.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Guardado en localStorage (por ahora)
            const stored = localStorage.getItem("avaluo_submissions") || "[]";
            const arr = JSON.parse(stored);
            arr.push({
              id: Date.now(),
              timestamp: new Date().toISOString(),
              data: values,
            });
            localStorage.setItem("avaluo_submissions", JSON.stringify(arr));
            alert("Formulario guardado en localStorage (demo).");
          }}
        >
          {({ values, errors, touched, handleChange, setFieldValue }) => {
            // handle file input with correct typing
            const handleFiles = async (files: FileList | null) => {
              if (!files) return;
              const existing: Photo[] = values.fotos || [];
              const toAdd = Array.from(files).slice(
                0,
                Math.max(0, MAX_PHOTOS - existing.length)
              );
              const converted = await Promise.all(toAdd.map(fileToBase64));
              setFieldValue("fotos", [...existing, ...converted]);
            };

            const removePhoto = (index: number) => {
              const newArr = [...(values.fotos || [])];
              newArr.splice(index, 1);
              setFieldValue("fotos", newArr);
            };

            // sumatoria pisos area
            const totalPisosArea = () =>
              (values.pisos || []).reduce(
                (acc: number, p: any) => acc + Number(p.area_m2 || 0),
                0
              );

            return (
              <FormikForm>
                <Row className="mb-3">
                  <Col>
                    <h4>Informe de Avalúo — Formulario</h4>
                    <div className="wizard-steps">
                      <Badge bg={step === 1 ? "primary" : "secondary"}>
                        1
                      </Badge>{" "}
                      Información inicial
                      {"  "}
                      <Badge bg={step === 2 ? "primary" : "secondary"}>2</Badge>{" "}
                      Vecindad
                      {"  "}
                      <Badge bg={step === 3 ? "primary" : "secondary"}>3</Badge>{" "}
                      Zona
                      {"  "}
                      <Badge bg={step === 4 ? "primary" : "secondary"}>4</Badge>{" "}
                      Mejoras
                    </div>
                  </Col>
                </Row>

                {/* STEP 1 — Información inicial */}
                {step === 1 && (
                  <>
                    <Row>
                      <Col md={8}>
                        <Form.Group className="mb-3">
                          <Form.Label>Dirección</Form.Label>
                          <InputGroup>
                            <Form.Control
                              name="direccion_calle"
                              placeholder="Calle"
                              value={values.direccion_calle}
                              onChange={handleChange}
                              isInvalid={
                                !!(
                                  touched.direccion_calle &&
                                  errors.direccion_calle
                                )
                              }
                            />
                            <Form.Control
                              name="direccion_numero"
                              placeholder="Nº"
                              style={{ maxWidth: 120 }}
                              value={values.direccion_numero}
                              onChange={handleChange}
                              isInvalid={
                                !!(
                                  touched.direccion_numero &&
                                  errors.direccion_numero
                                )
                              }
                            />
                          </InputGroup>

                          <Row className="mt-2">
                            <Col md={6}>
                              <Form.Control
                                name="direccion_sector"
                                placeholder="Sector"
                                value={values.direccion_sector}
                                onChange={handleChange}
                              />
                            </Col>
                            <Col md={6}>
                              <Form.Control
                                name="direccion_ciudad"
                                placeholder="Ciudad"
                                value={values.direccion_ciudad}
                                onChange={handleChange}
                                isInvalid={
                                  !!(
                                    touched.direccion_ciudad &&
                                    errors.direccion_ciudad
                                  )
                                }
                              />
                            </Col>
                          </Row>
                        </Form.Group>

                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Coordenadas (Lat)</Form.Label>
                              <Form.Control
                                name="coordenadas_lat"
                                placeholder="Latitud"
                                value={values.coordenadas_lat}
                                onChange={handleChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Coordenadas (Lng)</Form.Label>
                              <Form.Control
                                name="coordenadas_lng"
                                placeholder="Longitud"
                                value={values.coordenadas_lng}
                                onChange={handleChange}
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        {/* Comentarios debajo de coordenadas */}
                        <Form.Group className="mb-3">
                          <Form.Label>Comentarios sobre la ubicación</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="coordenadas_comentarios"
                            value={values.coordenadas_comentarios}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <div className="map-visual mb-3">
                          <div className="map-placeholder" onClick={() => setShowMapModal(true)}>
                            <small>Visualizador de ubicación (clic para abrir)</small>
                          </div>
                        </div>
                      </Col>

                      <Col md={4}>
                        <Card className="mb-3">
                          <Card.Body>
                            <h6>Propietario</h6>
                            <Form.Group className="mb-2">
                              <Form.Control
                                name="propietario_nombre"
                                placeholder="Nombre"
                                value={values.propietario_nombre}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Control
                                name="propietario_telefono"
                                placeholder="Teléfono"
                                value={values.propietario_telefono}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Control
                                name="propietario_email"
                                placeholder="Email"
                                value={values.propietario_email}
                                onChange={handleChange}
                              />
                            </Form.Group>

                            <hr />

                            <h6>Valuador</h6>
                            <Form.Group className="mb-2">
                              <Form.Control
                                name="valuador_nombre"
                                placeholder="Nombre valuador"
                                value={values.valuador_nombre}
                                onChange={handleChange}
                              />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Control
                                name="valuador_identificacion"
                                placeholder="Identificación"
                                value={values.valuador_identificacion}
                                onChange={handleChange}
                              />
                            </Form.Group>

                            <hr />

                            <Form.Group className="mb-2">
                              <Form.Label>Solicitante</Form.Label>
                              <Form.Control
                                name="solicitante_nombre"
                                placeholder="Nombre solicitante"
                                value={values.solicitante_nombre}
                                onChange={handleChange}
                              />
                            </Form.Group>

                            <Form.Group className="mb-2">
                              <Form.Label>Propósito del avalúo</Form.Label>
                              <Form.Select
                                name="proposito_avaluo"
                                value={values.proposito_avaluo}
                                onChange={handleChange}
                              >
                                <option value="">Seleccione...</option>
                                <option value="mercado">Cálculo aproximado del valor en el mercado</option>
                                <option value="hipoteca">Hipoteca / Garantía</option>
                                <option value="seguros">Fines de seguros</option>
                                <option value="otros">Otros</option>
                              </Form.Select>
                            </Form.Group>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={prev} disabled>
                          Atrás
                        </Button>
                        <Button variant="primary" onClick={next}>
                          Siguiente
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}

                {/* STEP 2 — Descripción de la vecindad */}
                {step === 2 && (
                  <>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Tipo de vecindad</Form.Label>
                          <Form.Select
                            name="tipo_vecindad"
                            value={values.tipo_vecindad}
                            onChange={handleChange}
                          >
                            <option value="">Seleccione...</option>
                            <option value="urbano">Urbano</option>
                            <option value="rural">Rural</option>
                            <option value="mixto">Mixto</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Tendencia de la vecindad</Form.Label>
                          <Form.Select
                            name="tendencia_vecindad"
                            value={values.tendencia_vecindad}
                            onChange={handleChange}
                          >
                            <option value="">Seleccione...</option>
                            <option value="a_mejorar">A mejorar</option>
                            <option value="estable">Estable</option>
                            <option value="a_empeorar">A empeorar</option>
                            <option value="en_transicion">En transición</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Comparación con las propiedades del vecindario</Form.Label>
                          <Form.Select
                            name="comparacion_vecindad"
                            value={values.comparacion_vecindad}
                            onChange={handleChange}
                          >
                            <option value="">Seleccione...</option>
                            <option value="inferior">Inferior</option>
                            <option value="similar">Similar</option>
                            <option value="superior">Superior</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Antigüedad promedio (años)</Form.Label>
                          <Form.Control
                            name="antiguedad_promedio"
                            value={values.antiguedad_promedio}
                            onChange={handleChange}
                            type="number"
                          />
                        </Form.Group>

                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Oferta</Form.Label>
                              <Form.Select name="oferta" value={values.oferta} onChange={handleChange}>
                                <option value="">Seleccione...</option>
                                <option value="mucha">Mucha</option>
                                <option value="razonable">Razonable</option>
                                <option value="poca">Poca</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Demanda</Form.Label>
                              <Form.Select name="demanda" value={values.demanda} onChange={handleChange}>
                                <option value="">Seleccione...</option>
                                <option value="mucha">Mucha</option>
                                <option value="razonable">Razonable</option>
                                <option value="poca">Poca</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>

                        <hr />

                        <h6>Distancias a (metros)</h6>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-2">
                              <Form.Label>Escuela primaria</Form.Label>
                              <Form.Control
                                name="dist_escuela_primaria"
                                value={values.dist_escuela_primaria}
                                onChange={handleChange}
                                type="text"
                                placeholder="ej. 100 m / 0.1 km"
                              />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>Transporte público</Form.Label>
                              <Form.Control
                                name="dist_transporte_publico"
                                value={values.dist_transporte_publico}
                                onChange={handleChange}
                                type="text"
                                placeholder="ej. 300 m"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-2">
                              <Form.Label>Escuela secundaria</Form.Label>
                              <Form.Control
                                name="dist_escuela_secundaria"
                                value={values.dist_escuela_secundaria}
                                onChange={handleChange}
                                type="text"
                                placeholder="ej. 100 m"
                              />
                            </Form.Group>
                            <Form.Group className="mb-2">
                              <Form.Label>Comercios</Form.Label>
                              <Form.Control
                                name="dist_comercios"
                                value={values.dist_comercios}
                                onChange={handleChange}
                                type="text"
                                placeholder="ej. 500 m"
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="mb-3">
                          <Form.Label>Deseabilidad de la propiedad</Form.Label>
                          <Form.Select name="deseabilidad" value={values.deseabilidad} onChange={handleChange}>
                            <option value="">Seleccione...</option>
                            <option value="alta">Alta</option>
                            <option value="promedio">Promedio</option>
                            <option value="baja">Baja</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Resumen / Factores desfavorables</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="resumen_factores"
                            value={values.resumen_factores}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Card>
                          <Card.Body>
                            <h6>Observaciones generales</h6>
                            <Form.Group className="mb-2">
                              <Form.Control
                                as="textarea"
                                rows={12}
                                name="resumen_factores"
                                value={values.resumen_factores}
                                onChange={handleChange}
                              />
                            </Form.Group>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={prev}>
                          Atrás
                        </Button>
                        <Button variant="primary" onClick={next}>
                          Siguiente
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}

                {/* STEP 3 — Descripción de la zona */}
                {step === 3 && (
                  <>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Limites naturales</Form.Label>
                          <Form.Control
                            name="limites_naturales"
                            value={values.limites_naturales}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Área (m²)</Form.Label>
                          <Form.Control
                            name="area_m2"
                            type="number"
                            value={values.area_m2}
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Tipo de terreno</Form.Label>
                          <Form.Control name="tipo_terreno" value={values.tipo_terreno} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Uso de suelo</Form.Label>
                          <Form.Control name="uso_suelo" value={values.uso_suelo} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Configuración</Form.Label>
                          <Form.Control name="configuracion" value={values.configuracion} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label>Zonificación</Form.Label>
                          <Form.Control name="zonificacion" value={values.zonificacion} onChange={handleChange} />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <h6>Posee</h6>
                        <Row>
                          {Object.keys(values.posee).map((k: any) => (
                            <Col md={6} key={k}>
                              <Form.Check
                                type="checkbox"
                                label={k.replace(/_/g, " ")}
                                checked={values.posee[k]}
                                onChange={(ev: any) =>
                                  setFieldValue(`posee.${k}`, ev.target.checked)
                                }
                              />
                            </Col>
                          ))}
                        </Row>

                        <hr />
                        <h6>Servicios disponibles</h6>
                        <Row>
                          {Object.keys(values.servicios_disponibles).map((k: any) => (
                            <Col md={6} key={k}>
                              <Form.Check
                                type="checkbox"
                                label={k.replace(/_/g, " ")}
                                checked={values.servicios_disponibles[k]}
                                onChange={(ev: any) =>
                                  setFieldValue(`servicios_disponibles.${k}`, ev.target.checked)
                                }
                              />
                            </Col>
                          ))}
                        </Row>

                        <hr />
                        <Form.Group className="mb-2">
                          <Form.Label>El uso actual de la propiedad está conforme con lo permitido</Form.Label>
                          <Form.Select name="uso_conforme" value={values.uso_conforme} onChange={handleChange}>
                            <option value="Si">Si</option>
                            <option value="No">No (Ver comentarios)</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Paisajismo o áreas verdes</Form.Label>
                          <Form.Select name="paisajismo" value={values.paisajismo} onChange={handleChange}>
                            <option value="">Seleccione...</option>
                            <option value="excelente">Excelente</option>
                            <option value="muy_buena">Muy buena</option>
                            <option value="buena">Buena</option>
                            <option value="regular">Regular</option>
                            <option value="mala">Mala</option>
                            <option value="inexistente">Inexistente</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Servidumbre</Form.Label>
                          <Form.Select name="servidumbre" value={values.servidumbre} onChange={handleChange}>
                            <option value="">Seleccione...</option>
                            <option value="servicios_publicos">Servicios públicos</option>
                            <option value="de_paso">De paso</option>
                          </Form.Select>
                        </Form.Group>

                        <hr />
                        <Form.Group className="mb-2">
                          <Form.Label>Entrada y salida de la propiedad (marque las que apliquen)</Form.Label>
                          <Row>
                            {Object.keys(values.entrada_salida).map((k: any) => (
                              <Col md={6} key={k}>
                                <Form.Check
                                  type="checkbox"
                                  label={k.replace(/_/g, " ")}
                                  checked={values.entrada_salida[k]}
                                  onChange={(ev: any) =>
                                    setFieldValue(`entrada_salida.${k}`, ev.target.checked)
                                  }
                                />
                              </Col>
                            ))}
                          </Row>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Instalación eléctrica</Form.Label>
                          <Form.Select name="instalacion_electrica" value={values.instalacion_electrica} onChange={handleChange}>
                            <option value="">Seleccione...</option>
                            <option value="subterranea">Subterránea</option>
                            <option value="en_postes">En postes</option>
                            <option value="nula">Nula</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Comentarios</Form.Label>
                          <Form.Control as="textarea" rows={4} name="comentarios_zona" value={values.comentarios_zona} onChange={handleChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={prev}>
                          Atrás
                        </Button>
                        <Button variant="primary" onClick={next}>
                          Siguiente
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}

                {/* STEP 4 — Descripción de las mejoras */}
                {step === 4 && (
                  <>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Año de construcción</Form.Label>
                          <Form.Control name="ano_construccion" type="number" value={values.ano_construccion} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Check
                            type="checkbox"
                            label="Construcción terminada"
                            name="construccion_terminada"
                            checked={values.construccion_terminada}
                            onChange={(ev: any) => setFieldValue("construccion_terminada", ev.target.checked)}
                          />
                        </Form.Group>

                        <FieldArray name="pisos">
                          {(arrayHelpers) => (
                            <>
                              <div className="d-flex justify-content-between align-items-center">
                                <h6>Pisos</h6>
                                <Button variant="link" onClick={() => arrayHelpers.push({ nivel: (values.pisos?.length || 0) + 1, area_m2: "" })}>Agregar Piso</Button>
                              </div>
                              {(values.pisos || []).map((p: any, idx: number) => (
                                <Row key={idx} className="align-items-center mb-2">
                                  <Col md={4}>
                                    <Form.Control value={p.nivel} readOnly />
                                  </Col>
                                  <Col md={6}>
                                    <Form.Control
                                      placeholder="Área (m2)"
                                      value={p.area_m2}
                                      onChange={(e: any) => setFieldValue(`pisos.${idx}.area_m2`, e.target.value)}
                                      type="number"
                                    />
                                  </Col>
                                  <Col md={2}>
                                    <Button variant="danger" size="sm" onClick={() => arrayHelpers.remove(idx)}>X</Button>
                                  </Col>
                                </Row>
                              ))}
                              <div className="mt-2">Total m² pisos: <strong>{totalPisosArea()}</strong></div>
                            </>
                          )}
                        </FieldArray>

                        <Form.Group className="mb-2">
                          <Form.Label>Edad efectiva (años)</Form.Label>
                          <Form.Control name="edad_efectiva" type="number" value={values.edad_efectiva} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Antigüedad aproximada (años)</Form.Label>
                          <Form.Control name="antiguedad_aprox" type="number" value={values.antiguedad_aprox} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>% Terminación</Form.Label>
                          <Form.Control name="porcentaje_terminacion" type="number" value={values.porcentaje_terminacion} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Vida estimada (años)</Form.Label>
                          <Form.Control name="vida_estimada" type="number" value={values.vida_estimada} onChange={handleChange} />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Sótano</Form.Label>
                          <Form.Select name="sotano_tipo" value={values.sotano_tipo} onChange={handleChange}>
                            <option value="no_posee">No posee</option>
                            <option value="completo">Completo</option>
                            <option value="parcial">Parcial</option>
                          </Form.Select>
                          {values.sotano_tipo !== "no_posee" && (
                            <Form.Control className="mt-2" placeholder="Área sótano (m2)" name="sotano_area_m2" type="number" value={values.sotano_area_m2} onChange={handleChange} />
                          )}
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Tipo de inmueble</Form.Label>
                          <Row>
                            {Object.keys(values.tipo_inmueble).map((k: any) => (
                              <Col md={6} key={k}>
                                <Form.Check type="checkbox" label={k.replace(/_/g," ")} checked={values.tipo_inmueble[k]} onChange={(ev:any)=> setFieldValue(`tipo_inmueble.${k}`, ev.target.checked)} />
                              </Col>
                            ))}
                          </Row>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Estructura</Form.Label>
                          <Form.Control name="estructura" value={values.estructura} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Material de construcción</Form.Label>
                          <Row>
                            {Object.keys(values.material_construccion).map((k: any)=>(
                              <Col md={6} key={k}>
                                <Form.Check type="checkbox" label={k.replace(/_/g," ")} checked={values.material_construccion[k]} onChange={(ev:any)=> setFieldValue(`material_construccion.${k}`, ev.target.checked)} />
                              </Col>
                            ))}
                          </Row>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Tipos de marcos de las ventanas</Form.Label>
                          <Form.Control name="tipos_marcos_ventanas" value={values.tipos_marcos_ventanas} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Revestimiento exterior</Form.Label>
                          <Row>
                            {Object.keys(values.revestimiento_exterior).map((k:any)=>(
                              <Col md={6} key={k}>
                                <Form.Check type="checkbox" label={k.replace(/_/g," ")} checked={values.revestimiento_exterior[k]} onChange={(ev:any)=> setFieldValue(`revestimiento_exterior.${k}`, ev.target.checked)} />
                              </Col>
                            ))}
                          </Row>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Material techo</Form.Label>
                          <Row>
                            {Object.keys(values.material_techo).map((k:any)=>(
                              <Col md={6} key={k}>
                                <Form.Check type="checkbox" label={k.replace(/_/g," ")} checked={values.material_techo[k]} onChange={(ev:any)=> setFieldValue(`material_techo.${k}`, ev.target.checked)} />
                              </Col>
                            ))}
                          </Row>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Condición general externa</Form.Label>
                          <Form.Select name="condicion_general_externa" value={values.condicion_general_externa} onChange={handleChange}>
                            <option value="">Seleccione...</option>
                            <option value="muy_buena">Muy buena</option>
                            <option value="buena">Buena</option>
                            <option value="regular">Regular</option>
                            <option value="mala">Mala</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-2">
                          <Form.Label>Comentarios</Form.Label>
                          <Form.Control as="textarea" rows={4} name="comentarios_mejoras" value={values.comentarios_mejoras} onChange={handleChange} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <Col className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={prev}>
                          Atrás
                        </Button>
                        <Button variant="primary" onClick={next}>
                          Siguiente
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}

                {/* BOTONES inferiores si en step 5/6 puedes añadir otras secciones */}
                {step >= 4 && (
                  <Row className="mt-4">
                    <Col className="d-flex justify-content-between">
                      <Button variant="secondary" onClick={prev}>Atrás</Button>
                      <Button type="submit" variant="success">Guardar formulario</Button>
                    </Col>
                  </Row>
                )}

                {/* Modal para visualización de "mapa" (visual only) */}
                <Modal show={showMapModal} onHide={() => setShowMapModal(false)} size="lg">
                  <Modal.Header closeButton><Modal.Title>Seleccionar ubicación (visual)</Modal.Title></Modal.Header>
                  <Modal.Body>
                    <div style={{height: '400px', border: '1px dashed #ccc', display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <div style={{textAlign:'center'}}>
                        <p>Mapa de ubicación (visual). Aquí se puede integrar Leaflet/Google Maps en producción.</p>
                        <Button onClick={()=>{
                          // ejemplo: set coordenadas de prueba
                          setFieldValue("coordenadas_lat", "18.5123892");
                          setFieldValue("coordenadas_lng", "-69.8229529");
                          setShowMapModal(false);
                        }}>Usar coordenadas de ejemplo</Button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </FormikForm>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default AvaluoForm;
