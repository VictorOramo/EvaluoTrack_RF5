const express = require('express');
const cors = require('cors');
const expedientesRoutes = require('./routes/expedientesRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Permite que React (puerto 3000) hable con Node (puerto 5000)
app.use(express.json()); // Permite recibir JSON

// Rutas
app.use('/api/expedientes', expedientesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});