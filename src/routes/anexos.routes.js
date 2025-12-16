import { Router } from 'express';
import {
  crearAnexo,
  listarAnexosPorExpediente,
  obtenerAnexo,
  eliminarAnexo,
  agregarCoordenadas,
  obtenerAnexosConCoordenadas
} from '../controllers/anexos.controller.js';
import { validarAnexo, validarCoordenadas } from '../middleware/validators.js';

const router = Router();

router.post('/', validarAnexo, crearAnexo);
router.get('/expediente/:expedienteId', listarAnexosPorExpediente);
router.get('/expediente/:expedienteId/coordenadas', obtenerAnexosConCoordenadas);
router.get('/:id', obtenerAnexo);
router.delete('/:id', eliminarAnexo);
router.post('/:id/coordenadas', validarCoordenadas, agregarCoordenadas);

export default router;
