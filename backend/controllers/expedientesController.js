exports.crearExpediente = (req, res) => {
  const datosRecibidos = req.body;
  console.log("--> RECIBIDO EN BACKEND:", datosRecibidos);
  // Respondemos éxito falso
  res.status(201).json({
    mensaje: "Expediente creado exitosamente (Simulación)",
    datos: datosRecibidos
  });
};

exports.obtenerExpedientes = (req, res) => {
  res.json([
    { id: 1, solicitante: "Juan Perez", estado: "pendiente" },
    { id: 2, solicitante: "Maria Lopez", estado: "aprobado" }
  ]);
};
