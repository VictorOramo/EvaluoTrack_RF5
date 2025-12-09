import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button, Form, Alert, ProgressBar } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AvaluoForm.scss"; // ver archivo SCSS abajo

const MAX_PHOTOS = 15;
const STORAGE_KEY = "avaluoDraft_v1";

type PhotoBase64 = { name: string; dataUrl: string };

type FormValues = {
  // 1. Información inicial
  direccion: string;
  propietario: string;
  valuador: string;
  solicitante: string;

  // 2. Vecindad, zona, mejoras, interior, distribución
  descripcionVecindad: string;
  descripcionZona: string;
  descripcionMejoras: string;
  descripcionInterior: string;
  distribucionHabitaciones: string;

  // 3. Metodología y enfoque
  metodologiaComparables: string;
  enfoqueComparables: string;

  // 4. Conclusiones
  conclusiones: string;

  // metadatos
  area_m2?: number | "";
  anio_construccion?: number | "";
};

const stepTitles = [
  "Información inicial",
  "Vecindad / Zona",
  "Mejoras / Interior / Distribución",
  "Ventas comparables",
  "Conclusiones / Fotos"
];

const validationSchemas = [
  // Step 0
  Yup.object({
    direccion: Yup.string().required("Dirección requerida"),
    propietario: Yup.string().required("Nombre del propietario"),
    valuador: Yup.string().required("Nombre del valuador"),
    solicitante: Yup.string().required("Nombre del solicitante"),
  }),
  // Step 1
  Yup.object({
    descripcionVecindad: Yup.string().required("Descripción de la vecindad obligatoria"),
    descripcionZona: Yup.string().required("Descripción de la zona obligatoria"),
  }),
  // Step 2
  Yup.object({
    descripcionMejoras: Yup.string().required("Descripción de mejoras requerida"),
    descripcionInterior: Yup.string().required("Descripción interior requerida"),
    distribucionHabitaciones: Yup.string().required("Distribución requerida"),
  }),
  // Step 3
  Yup.object({
    metodologiaComparables: Yup.string().required("Metodología requerida"),
    enfoqueComparables: Yup.string().required("Enfoque requerido"),
  }),
  // Step 4
  Yup.object({
    conclusiones: Yup.string().required("Conclusiones requeridas"),
    area_m2: Yup.number().typeError("Debe ser número").positive("Mayor que 0").required("Área requerida"),
    anio_construccion: Yup.number().typeError("Debe ser número").required("Año requerido"),
  })
];

const initialValues: FormValues = {
  direccion: "",
  propietario: "",
  valuador: "",
  solicitante: "",
  descripcionVecindad: "",
  descripcionZona: "",
  descripcionMejoras: "",
  descripcionInterior: "",
  distribucionHabitaciones: "",
  metodologiaComparables: "",
  enfoqueComparables: "",
  conclusiones: "",
  area_m2: "",
  anio_construccion: ""
};

export default function AvaluoForm() {
  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState<PhotoBase64[]>([]);
  const [saveMsg, setSaveMsg] = useState<string | null>(null);

  // cargar borrador si existe
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        formik.setValues({ ...initialValues, ...parsed.values });
        setPhotos(parsed.photos || []);
      } catch (e) {
        // ignore
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchemas[step],
    enableReinitialize: true,
    onSubmit: (values) => {
      // Guardar localmente (simula guardar en API)
      const payload = { values, photos, savedAt: new Date().toISOString() };
      // se puede guardar en vector: tomamos historial
      const historyRaw = localStorage.getItem("avaluoHistory") || "[]";
      const history = JSON.parse(historyRaw);
      history.push(payload);
      localStorage.setItem("avaluoHistory", JSON.stringify(history));

      setSaveMsg("Formulario guardado localmente. (Simulado)");
      // Si fuera el último paso: enviar a API real (Supabase) aquí.
      setTimeout(() => setSaveMsg(null), 3000);
    }
  });

  // helpers para avanzar/retroceder
  const nextStep = async () => {
    // validar el esquema actual
    try {
      await validationSchemas[step].validate(formik.values, { abortEarly: false });
      if (step < stepTitles.length - 1) {
        setStep(step + 1);
      }
    } catch (err: any) {
      const errors: Record<string, string> = {};
      err.inner?.forEach((e: any) => (errors[e.path] = e.message));
      formik.setErrors(errors);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => setStep(Math.max(0, step - 1));

  // MANEJO ARCHIVOS: e.target.files typing fijo
  const handleFiles = async (files: FileList | null) => {
    if (!files) return;
    const incoming = Array.from(files).slice(0, MAX_PHOTOS - photos.length);
    if (incoming.length === 0) {
      alert(`Máximo ${MAX_PHOTOS} imágenes permitidas`);
      return;
    }
    const toBase64 = incoming.map(file => fileToBase64(file).then(dataUrl => ({ name: file.name, dataUrl })));
    const results = await Promise.all(toBase64);
    setPhotos(prev => {
      const merged = [...prev, ...results].slice(0, MAX_PHOTOS);
      return merged;
    });
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const saveDraft = () => {
    const draft = { values: formik.values, photos };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    setSaveMsg("Borrador guardado localmente.");
    setTimeout(() => setSaveMsg(null), 2000);
  };

  const clearDraft = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("avaluoHistory");
    setSaveMsg("Borrador eliminado.");
    setTimeout(() => setSaveMsg(null), 2000);
  };

  // progress
  const progress = Math.round(((step + 1) / stepTitles.length) * 100);

  return (
    <div className="avaluo-page page-content"> {/* IMPORTANT: page-content fixes menu overlap (ver SCSS) */}
      <Row className="justify-content-center">
        <Col lg={10}>
          <Card className="mb-4">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4>{stepTitles[step]}</h4>
                <div style={{ width: 240 }}>
                  <ProgressBar now={progress} label={`${progress}%`} />
                </div>
              </div>

              {saveMsg && <Alert variant="success">{saveMsg}</Alert>}

              <Form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(); }}>
                {/* Step 0: Info inicial */}
                {step === 0 && (
                  <>
                    <Form.Group className="mb-3" controlId="direccion">
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control
                        name="direccion"
                        value={formik.values.direccion}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.direccion}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.direccion}</Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="propietario">
                          <Form.Label>Propietario</Form.Label>
                          <Form.Control
                            name="propietario"
                            value={formik.values.propietario}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.propietario}
                          />
                          <Form.Control.Feedback type="invalid">{formik.errors.propietario}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="valuador">
                          <Form.Label>Valuador</Form.Label>
                          <Form.Control
                            name="valuador"
                            value={formik.values.valuador}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.valuador}
                          />
                          <Form.Control.Feedback type="invalid">{formik.errors.valuador}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="solicitante">
                      <Form.Label>Nombre del solicitante</Form.Label>
                      <Form.Control
                        name="solicitante"
                        value={formik.values.solicitante}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.solicitante}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.solicitante}</Form.Control.Feedback>
                    </Form.Group>
                  </>
                )}

                {/* Step 1: Vecindad / Zona */}
                {step === 1 && (
                  <>
                    <Form.Group className="mb-3" controlId="descripcionVecindad">
                      <Form.Label>Descripción de la vecindad</Form.Label>
                      <Form.Control as="textarea" rows={4}
                        name="descripcionVecindad"
                        value={formik.values.descripcionVecindad}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.descripcionVecindad}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.descripcionVecindad}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcionZona">
                      <Form.Label>Descripción de la zona</Form.Label>
                      <Form.Control as="textarea" rows={4}
                        name="descripcionZona"
                        value={formik.values.descripcionZona}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.descripcionZona}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.descripcionZona}</Form.Control.Feedback>
                    </Form.Group>
                  </>
                )}

                {/* Step 2: Mejoras / Interior / Distribución */}
                {step === 2 && (
                  <>
                    <Form.Group className="mb-3" controlId="descripcionMejoras">
                      <Form.Label>Descripción de las mejoras</Form.Label>
                      <Form.Control as="textarea" rows={3}
                        name="descripcionMejoras"
                        value={formik.values.descripcionMejoras}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.descripcionMejoras}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.descripcionMejoras}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="descripcionInterior">
                      <Form.Label>Descripción interior</Form.Label>
                      <Form.Control as="textarea" rows={3}
                        name="descripcionInterior"
                        value={formik.values.descripcionInterior}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.descripcionInterior}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.descripcionInterior}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="distribucionHabitaciones">
                      <Form.Label>Distribución de las habitaciones</Form.Label>
                      <Form.Control as="textarea" rows={2}
                        name="distribucionHabitaciones"
                        value={formik.values.distribucionHabitaciones}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.distribucionHabitaciones}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.distribucionHabitaciones}</Form.Control.Feedback>
                    </Form.Group>
                  </>
                )}

                {/* Step 3: Comparables */}
                {step === 3 && (
                  <>
                    <Form.Group className="mb-3" controlId="metodologiaComparables">
                      <Form.Label>Metodología de ventas comparables</Form.Label>
                      <Form.Control as="textarea" rows={4}
                        name="metodologiaComparables"
                        value={formik.values.metodologiaComparables}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.metodologiaComparables}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.metodologiaComparables}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="enfoqueComparables">
                      <Form.Label>Enfoque de ventas comparables</Form.Label>
                      <Form.Control as="textarea" rows={4}
                        name="enfoqueComparables"
                        value={formik.values.enfoqueComparables}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.enfoqueComparables}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.enfoqueComparables}</Form.Control.Feedback>
                    </Form.Group>
                  </>
                )}

                {/* Step 4: Conclusiones y fotos */}
                {step === 4 && (
                  <>
                    <Form.Group className="mb-3" controlId="area_m2">
                      <Form.Label>Área (m²)</Form.Label>
                      <Form.Control
                        name="area_m2"
                        value={formik.values.area_m2 as any}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.area_m2}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.area_m2}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="anio_construccion">
                      <Form.Label>Año de construcción</Form.Label>
                      <Form.Control
                        name="anio_construccion"
                        value={formik.values.anio_construccion as any}
                        onChange={(e) => {
                          // restringir solo números (ejemplo)
                          const v = e.target.value.replace(/\D/g, "");
                          formik.setFieldValue("anio_construccion", v);
                        }}
                        isInvalid={!!formik.errors.anio_construccion}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.anio_construccion}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Conclusiones</Form.Label>
                      <Form.Control as="textarea" rows={4}
                        name="conclusiones"
                        value={formik.values.conclusiones}
                        onChange={formik.handleChange}
                        isInvalid={!!formik.errors.conclusiones}
                      />
                      <Form.Control.Feedback type="invalid">{formik.errors.conclusiones}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Fotos (máx {MAX_PHOTOS})</Form.Label>
                      {/* Aquí el cambio de tipado: onChange recibe ChangeEvent<HTMLInputElement> */}
                      <Form.Control
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
                      />
                      <Form.Text className="text-muted">Se guardarán como base64 (demo). Máximo {MAX_PHOTOS} imágenes.</Form.Text>
                    </Form.Group>

                    <div className="photo-grid">
                      {photos.map((p, idx) => (
                        <div key={idx} className="photo-item">
                          <img src={p.dataUrl} alt={p.name} />
                          <button type="button" className="btn btn-sm btn-danger" onClick={() => removePhoto(idx)}>Eliminar</button>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <Button variant="secondary" onClick={prevStep} disabled={step === 0}>Atrás</Button>{" "}
                    <Button variant="outline-primary" onClick={saveDraft}>Guardar borrador</Button>{" "}
                    <Button variant="outline-danger" onClick={clearDraft}>Eliminar borrador</Button>
                  </div>

                  <div>
                    {step < stepTitles.length - 1 && (
                      <Button variant="primary" onClick={nextStep}>Siguiente</Button>
                    )}
                    {step === stepTitles.length - 1 && (
                      <Button variant="success" type="submit">Enviar / Guardar</Button>
                    )}
                  </div>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

// helper para convertir file -> base64
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}
