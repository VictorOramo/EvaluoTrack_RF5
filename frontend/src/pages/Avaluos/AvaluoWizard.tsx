import React, { useState, useEffect } from "react";
import { Formik, Form as FormikForm, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
  InputGroup,
} from "react-bootstrap";
import "./AvaluoForm.scss";

/**
 * AvaluoForm.tsx
 * Formulario por pasos (wizard) para Informe de Avalúo de Propiedad
 * Guarda en localStorage como demo, fotos en base64 (máx 15).
 */

// tipos (simplificados)
type Room = {
  name: string;
  area?: number | "";
};

type Comparable = {
  address: string;
  saleDate?: string;
  price?: number | "";
  m2?: number | "";
  adjustments?: string;
};

type FormValues = {
  // Información inicial
  address_street: string;
  address_number: string;
  address_sector: string;
  address_city: string;
  latitude: string;
  longitude: string;
  owner_name: string;
  owner_phone: string;
  owner_email: string;
  valuador_name: string;
  valuador_id: string;
  applicant_name: string;
  purpose: string;

  // Vecindad
  neighborhood_type: string;
  neighborhood_trend: string;
  distances: string;
  neighborhood_summary: string;

  // Zona
  services: { water: boolean; sewer: boolean; electricity: boolean; gas: boolean; cable: boolean };
  topography: string;
  zoning: string;
  area_m2: number | "";
  zone_comments: string;

  // Mejoras & Interior
  year_built: number | "";
  general_condition: string;
  materials: string;
  interior_description: string;

  // Distribucion
  bedrooms: number | "";
  bathrooms: number | "";
  parking: number | "";
  rooms: Room[];

  // Comparables / enfoque
  comparables: Comparable[];

  // Fotos
  photos: string[]; // base64 strings

  // Conclusiones / valor
  market_value: number | "";
  liquidation_value: number | "";
  conclusions: string;
};

const MAX_PHOTOS = 15;

// validation schemas por paso
const validationSchemas = [
  // Paso 0: Información inicial
  Yup.object().shape({
    address_street: Yup.string().required("Calle es obligatoria"),
    address_city: Yup.string().required("Ciudad es obligatoria"),
    owner_name: Yup.string().required("Propietario es obligatorio"),
    valuador_name: Yup.string().required("Valuador es obligatorio"),
    purpose: Yup.string().required("Propósito es obligatorio"),
  }),
  // Paso 1: Vecindad
  Yup.object().shape({
    neighborhood_type: Yup.string().required("Tipo de vecindad es obligatorio"),
  }),
  // Paso 2: Zona
  Yup.object().shape({
    area_m2: Yup.number().typeError("Área debe ser número").required("Área es obligatoria"),
  }),
  // Paso 3: Mejoras & Interior
  Yup.object().shape({
    year_built: Yup.number().typeError("Año debe ser número").nullable(),
    general_condition: Yup.string().required("Estado general es obligatorio"),
  }),
  // Paso 4: Distribución
  Yup.object().shape({
    bedrooms: Yup.number().typeError("Debe ser número").required("Requerido"),
    bathrooms: Yup.number().typeError("Debe ser número").required("Requerido"),
  }),
  // Paso 5: Comparables & Fotos
  Yup.object().shape({
    comparables: Yup.array().of(
      Yup.object().shape({
        address: Yup.string().required(),
        price: Yup.number().typeError("Precio debe ser número").nullable(),
      })
    ),
    photos: Yup.array().max(MAX_PHOTOS, `Máximo ${MAX_PHOTOS} fotos`),
  }),
  // Paso 6: Conclusiones / Valor
  Yup.object().shape({
    market_value: Yup.number().typeError("Debe ser número").required("Valor de mercado es obligatorio"),
    liquidation_value: Yup.number().typeError("Debe ser número").required("Valor de liquidación es obligatorio"),
  }),
];

const initialValues: FormValues = {
  address_street: "",
  address_number: "",
  address_sector: "",
  address_city: "",
  latitude: "",
  longitude: "",
  owner_name: "",
  owner_phone: "",
  owner_email: "",
  valuador_name: "",
  valuador_id: "",
  applicant_name: "",
  purpose: "",

  neighborhood_type: "",
  neighborhood_trend: "",
  distances: "",
  neighborhood_summary: "",

  services: { water: true, sewer: true, electricity: true, gas: false, cable: false },
  topography: "",
  zoning: "",
  area_m2: "",
  zone_comments: "",

  year_built: "",
  general_condition: "",
  materials: "",
  interior_description: "",

  bedrooms: "",
  bathrooms: "",
  parking: "",
  rooms: [],

  comparables: [{ address: "", saleDate: "", price: "", m2: "", adjustments: "" }],

  photos: [],

  market_value: "",
  liquidation_value: "",
  conclusions: "",
};

const AvaluoForm: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [savedAlert, setSavedAlert] = useState<string | null>(null);

  // helper: convierte FileList a base64
  const filesToBase64 = (files: FileList | null): Promise<string[]> => {
    if (!files) return Promise.resolve([]);
    const arr = Array.from(files).slice(0, MAX_PHOTOS);
    const readers = arr.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(String(reader.result));
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        })
    );
    return Promise.all(readers);
  };

  // guardar en localStorage (vector de envíos)
  const persistToLocal = (values: FormValues) => {
    const key = "avaluo_submissions";
    try {
      const prevRaw = localStorage.getItem(key);
      const prev = prevRaw ? JSON.parse(prevRaw) : [];
      prev.push({ id: Date.now(), ...values });
      localStorage.setItem(key, JSON.stringify(prev));
      setSavedAlert("Formulario guardado localmente.");
      setTimeout(() => setSavedAlert(null), 3500);
    } catch (err) {
      console.error("Error persistiendo:", err);
    }
  };

  return (
    <div className="avaluo-form-wrapper">
      <Container fluid="lg">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="mb-4">
              <Card.Body>
                <h3 className="mb-3">Informe de Avalúo de Propiedad</h3>
                <div className="wizard-steps mb-3">
                  Step {step + 1} / 7
                </div>

                {savedAlert && <Alert variant="success">{savedAlert}</Alert>}

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchemas[step]}
                  onSubmit={(values, actions) => {
                    // submit final: persist local (por ahora)
                    persistToLocal(values);
                    actions.setSubmitting(false);
                  }}
                >
                  {({ values, errors, touched, handleChange, handleBlur, setFieldValue, isSubmitting, validateForm }) => (
                    <FormikForm>
                      {/* STEP 0: Información inicial */}
                      {step === 0 && (
                        <>
                          <Row>
                            <Col md={8}>
                              <Form.Group className="mb-3">
                                <Form.Label>Dirección</Form.Label>
                                <InputGroup>
                                  <Form.Control
                                    name="address_street"
                                    placeholder="Calle (ej: Av. Libertad)"
                                    value={values.address_street}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!(touched.address_street && errors.address_street)}
                                  />
                                  <Form.Control
                                    name="address_number"
                                    placeholder="N° casa"
                                    value={values.address_number}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                </InputGroup>
                                <Form.Text className="text-muted">Ingrese: calle, número, sector y ciudad.</Form.Text>
                                <Row className="mt-2">
                                  <Col md={6}>
                                    <Form.Control
                                      name="address_sector"
                                      placeholder="Sector"
                                      value={values.address_sector}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                  </Col>
                                  <Col md={6}>
                                    <Form.Control
                                      name="address_city"
                                      placeholder="Ciudad"
                                      value={values.address_city}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      isInvalid={!!(touched.address_city && errors.address_city)}
                                    />
                                  </Col>
                                </Row>
                              </Form.Group>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Coordenadas (lat)</Form.Label>
                                    <Form.Control
                                      name="latitude"
                                      placeholder="18.5123"
                                      value={values.latitude}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Label>Coordenadas (lng)</Form.Label>
                                    <Form.Control
                                      name="longitude"
                                      placeholder="-69.8229"
                                      value={values.longitude}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>

                            <Col md={4}>
                              <Card className="p-2">
                                <h6>Propietario</h6>
                                <Form.Group className="mb-2">
                                  <Form.Label>Nombre</Form.Label>
                                  <Form.Control name="owner_name" value={values.owner_name} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.owner_name && errors.owner_name)} />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                  <Form.Label>Teléfono</Form.Label>
                                  <Form.Control name="owner_phone" value={values.owner_phone} onChange={handleChange} onBlur={handleBlur} />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                  <Form.Label>Email</Form.Label>
                                  <Form.Control name="owner_email" value={values.owner_email} onChange={handleChange} onBlur={handleBlur} />
                                </Form.Group>
                                <hr />
                                <h6>Valuador</h6>
                                <Form.Group className="mb-2">
                                  <Form.Label>Nombre</Form.Label>
                                  <Form.Control name="valuador_name" value={values.valuador_name} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.valuador_name && errors.valuador_name)} />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                  <Form.Label>ID</Form.Label>
                                  <Form.Control name="valuador_id" value={values.valuador_id} onChange={handleChange} onBlur={handleBlur} />
                                </Form.Group>
                              </Card>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Nombre del solicitante</Form.Label>
                                <Form.Control name="applicant_name" value={values.applicant_name} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Propósito del avalúo</Form.Label>
                                <Form.Select name="purpose" value={values.purpose} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.purpose && errors.purpose)}>
                                  <option value="">Seleccione...</option>
                                  <option value="mercado">Valor de mercado</option>
                                  <option value="garantia">Garantía hipotecaria</option>
                                  <option value="tributario">Propósitos tributarios</option>
                                  <option value="otro">Otro</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>
                        </>
                      )}

                      {/* STEP 1: Vecindad */}
                      {step === 1 && (
                        <>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Tipo de vecindad</Form.Label>
                                <Form.Select name="neighborhood_type" value={values.neighborhood_type} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.neighborhood_type && errors.neighborhood_type)}>
                                  <option value="">Seleccione...</option>
                                  <option value="urbana">Urbana</option>
                                  <option value="rural">Rural</option>
                                  <option value="mixta">Mixta</option>
                                </Form.Select>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Tendencias / Distancias</Form.Label>
                                <Form.Control as="textarea" rows={3} name="distances" value={values.distances} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Resumen / factores desfavorables</Form.Label>
                                <Form.Control as="textarea" rows={6} name="neighborhood_summary" value={values.neighborhood_summary} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                          </Row>
                        </>
                      )}

                      {/* STEP 2: Zona */}
                      {step === 2 && (
                        <>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Servicios disponibles</Form.Label>
                                <div className="d-flex flex-wrap gap-2">
                                  <Form.Check inline label="Agua" name="services.water" checked={values.services.water} onChange={() => setFieldValue("services", { ...values.services, water: !values.services.water })} />
                                  <Form.Check inline label="Alcantarillado" name="services.sewer" checked={values.services.sewer} onChange={() => setFieldValue("services", { ...values.services, sewer: !values.services.sewer })} />
                                  <Form.Check inline label="Electricidad" name="services.electricity" checked={values.services.electricity} onChange={() => setFieldValue("services", { ...values.services, electricity: !values.services.electricity })} />
                                  <Form.Check inline label="Gas" name="services.gas" checked={values.services.gas} onChange={() => setFieldValue("services", { ...values.services, gas: !values.services.gas })} />
                                  <Form.Check inline label="Cable" name="services.cable" checked={values.services.cable} onChange={() => setFieldValue("services", { ...values.services, cable: !values.services.cable })} />
                                </div>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Label>Topografía</Form.Label>
                                <Form.Control name="topography" value={values.topography} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Zonificación</Form.Label>
                                <Form.Control name="zoning" value={values.zoning} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Área (m²)</Form.Label>
                                <Form.Control type="number" name="area_m2" value={values.area_m2 as any} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.area_m2 && errors.area_m2)} />
                              </Form.Group>
                              <Form.Group className="mb-3">
                                <Form.Label>Comentarios Zona</Form.Label>
                                <Form.Control as="textarea" rows={3} name="zone_comments" value={values.zone_comments} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                          </Row>
                        </>
                      )}

                      {/* STEP 3: Mejoras & Interior */}
                      {step === 3 && (
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Año de construcción</Form.Label>
                              <Form.Control type="number" name="year_built" value={values.year_built as any} onChange={handleChange} onBlur={handleBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Estado general</Form.Label>
                              <Form.Select name="general_condition" value={values.general_condition} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.general_condition && errors.general_condition)}>
                                <option value="">Seleccione...</option>
                                <option value="excelente">Excelente</option>
                                <option value="bueno">Bueno</option>
                                <option value="regular">Regular</option>
                                <option value="malo">Malo</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Materiales</Form.Label>
                              <Form.Control name="materials" value={values.materials} onChange={handleChange} onBlur={handleBlur} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <Form.Label>Descripción interior</Form.Label>
                              <Form.Control as="textarea" rows={4} name="interior_description" value={values.interior_description} onChange={handleChange} onBlur={handleBlur} />
                            </Form.Group>
                          </Col>
                        </Row>
                      )}

                      {/* STEP 4: Distribución de habitaciones */}
                      {step === 4 && (
                        <>
                          <Row>
                            <Col md={4}>
                              <Form.Group className="mb-3">
                                <Form.Label>Dormitorios</Form.Label>
                                <Form.Control type="number" name="bedrooms" value={values.bedrooms as any} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                            <Col md={4}>
                              <Form.Group className="mb-3">
                                <Form.Label>Baños</Form.Label>
                                <Form.Control type="number" name="bathrooms" value={values.bathrooms as any} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                            <Col md={4}>
                              <Form.Group className="mb-3">
                                <Form.Label>Parqueos</Form.Label>
                                <Form.Control type="number" name="parking" value={values.parking as any} onChange={handleChange} onBlur={handleBlur} />
                              </Form.Group>
                            </Col>
                          </Row>

                          <FieldArray name="rooms">
                            {({ push, remove }) => (
                              <>
                                <h6>Lista de habitaciones (opcional)</h6>
                                {values.rooms && values.rooms.length > 0 ? (
                                  values.rooms.map((room, idx) => (
                                    <Row key={idx} className="align-items-end">
                                      <Col md={6}>
                                        <Form.Group className="mb-2">
                                          <Form.Label>Nombre habitación</Form.Label>
                                          <Form.Control name={`rooms[${idx}].name`} value={room.name} onChange={handleChange} />
                                        </Form.Group>
                                      </Col>
                                      <Col md={4}>
                                        <Form.Group className="mb-2">
                                          <Form.Label>Área (m2)</Form.Label>
                                          <Form.Control type="number" name={`rooms[${idx}].area`} value={room.area as any} onChange={handleChange} />
                                        </Form.Group>
                                      </Col>
                                      <Col md={2}>
                                        <Button variant="danger" onClick={() => remove(idx)}>Eliminar</Button>
                                      </Col>
                                    </Row>
                                  ))
                                ) : (
                                  <div className="mb-2 text-muted">No hay habitaciones añadidas</div>
                                )}
                                <Button onClick={() => push({ name: "", area: "" })} className="mt-2">Agregar habitación</Button>
                              </>
                            )}
                          </FieldArray>
                        </>
                      )}

                      {/* STEP 5: Metodología / Comparables & Fotos */}
                      {step === 5 && (
                        <>
                          <FieldArray name="comparables">
                            {({ push, remove }) => (
                              <>
                                <h6>Comparables</h6>
                                {values.comparables && values.comparables.length > 0 && values.comparables.map((c, i) => (
                                  <Card className="mb-2 p-2" key={i}>
                                    <Row>
                                      <Col md={6}>
                                        <Form.Group className="mb-2">
                                          <Form.Label>Dirección</Form.Label>
                                          <Form.Control name={`comparables[${i}].address`} value={c.address} onChange={handleChange} />
                                        </Form.Group>
                                      </Col>
                                      <Col md={3}>
                                        <Form.Group className="mb-2">
                                          <Form.Label>Fecha venta</Form.Label>
                                          <Form.Control type="date" name={`comparables[${i}].saleDate`} value={c.saleDate} onChange={handleChange} />
                                        </Form.Group>
                                      </Col>
                                      <Col md={3}>
                                        <Form.Group className="mb-2">
                                          <Form.Label>Precio</Form.Label>
                                          <Form.Control type="number" name={`comparables[${i}].price`} value={c.price as any} onChange={handleChange} />
                                        </Form.Group>
                                      </Col>
                                    </Row>
                                    <Row>
                                      <Col md={3}>
                                        <Form.Group className="mb-2">
                                          <Form.Label>m²</Form.Label>
                                          <Form.Control type="number" name={`comparables[${i}].m2`} value={c.m2 as any} onChange={handleChange} />
                                        </Form.Group>
                                      </Col>
                                      <Col md={9}>
                                        <Form.Group className="mb-2">
                                          <Form.Label>Ajustes</Form.Label>
                                          <Form.Control name={`comparables[${i}].adjustments`} value={c.adjustments} onChange={handleChange} />
                                        </Form.Group>
                                      </Col>
                                    </Row>
                                    <div>
                                      <Button variant="danger" onClick={() => remove(i)}>Eliminar</Button>
                                    </div>
                                  </Card>
                                ))}
                                <Button onClick={() => push({ address: "", saleDate: "", price: "", m2: "", adjustments: "" })}>Agregar comparable</Button>
                              </>
                            )}
                          </FieldArray>

                          <hr />
                          <Form.Group className="mb-3">
                            <Form.Label>Fotos (máx {MAX_PHOTOS})</Form.Label>
                            <Form.Control
                              type="file"
                              accept="image/*"
                              multiple
                              onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                                const files = e.currentTarget.files;
                                if (!files) return;
                                const arr = Array.from(files);
                                if (arr.length + values.photos.length > MAX_PHOTOS) {
                                  alert(`Máximo ${MAX_PHOTOS} fotos en total.`);
                                  return;
                                }
                                const b64 = await filesToBase64(files);
                                setFieldValue("photos", [...values.photos, ...b64]);
                              }}
                            />
                            <Form.Text className="text-muted">Se guardarán como base64 (demo)</Form.Text>

                            <div className="photo-previews mt-2 d-flex flex-wrap gap-2">
                              {values.photos && values.photos.map((p, i) => (
                                <div key={i} className="preview">
                                  <img src={p} alt={`img-${i}`} />
                                  <Button size="sm" variant="danger" onClick={() => {
                                    const newPhotos = values.photos.filter((_, idx) => idx !== i);
                                    setFieldValue("photos", newPhotos);
                                  }}>Eliminar</Button>
                                </div>
                              ))}
                            </div>
                          </Form.Group>
                        </>
                      )}

                      {/* STEP 6: Conclusiones / Valor */}
                      {step === 6 && (
                        <>
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Valor estimado (RD$)</Form.Label>
                                <Form.Control type="number" name="market_value" value={values.market_value as any} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.market_value && errors.market_value)} />
                              </Form.Group>
                            </Col>
                            <Col md={6}>
                              <Form.Group className="mb-3">
                                <Form.Label>Valor liquidación (RD$)</Form.Label>
                                <Form.Control type="number" name="liquidation_value" value={values.liquidation_value as any} onChange={handleChange} onBlur={handleBlur} isInvalid={!!(touched.liquidation_value && errors.liquidation_value)} />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Form.Group className="mb-3">
                            <Form.Label>Conclusiones</Form.Label>
                            <Form.Control as="textarea" rows={6} name="conclusions" value={values.conclusions} onChange={handleChange} onBlur={handleBlur} />
                          </Form.Group>
                        </>
                      )}

                      {/* Botones del wizard */}
                      <div className="d-flex justify-content-between mt-3">
                        <div>
                          {step > 0 && <Button variant="secondary" onClick={() => setStep(step - 1)}>Atrás</Button>}
                        </div>

                        <div>
                          {step < validationSchemas.length - 1 && (
                            <Button
                              variant="primary"
                              onClick={async () => {
                                // validar campos del paso actual
                                const err = await validateForm();
                                // if errors object contains keys of current step fields, block
                                // we'll rely on Yup via validationSchema prop: Formik runs it, but we'll check errors:
                                const keysForThisStep = Object.keys(validationSchemas[step].fields || {});
                                const stepHasErrors = keysForThisStep.some(k => (err as any)[k]);
                                if (stepHasErrors) {
                                  // show alert or let Formik show invalid fields
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                  return;
                                }
                                setStep(step + 1);
                              }}
                            >
                              Siguiente
                            </Button>
                          )}

                          {step === validationSchemas.length - 1 && (
                            <Button variant="success" type="submit" disabled={isSubmitting}>
                              Guardar & Finalizar
                            </Button>
                          )}
                        </div>
                      </div>
                    </FormikForm>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AvaluoForm;
