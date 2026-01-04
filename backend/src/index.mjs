import express from 'express';
import cors from 'cors';
import expedientesRoutes from './routes/expedientes.routes.js';
import fichasRoutes from './routes/fichas.routes.js';
import anexosRoutes from './routes/anexos.routes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API EvaluoTrack - Sistema de Tasación Catastral',
    version: '1.0.0',
    endpoints: {
      expedientes: '/api/expedientes',
      fichas: '/api/fichas',
      anexos: '/api/anexos'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.get("/api/prueba", (req, res) => {
  res.json({
    success: true,
    mensaje: "Conexión frontend-backend OK"
  });

app.use('/api/expedientes', expedientesRoutes);
app.use('/api/fichas', fichasRoutes);
app.use('/api/anexos', anexosRoutes);

app.use(notFound);
app.use(errorHandler);


});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
