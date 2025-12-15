import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
