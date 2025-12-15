import { Router } from 'express';
import {
  crearExpediente,
  listarExpedientes,
  obtenerExpediente,
  actualizarExpediente,
  eliminarExpediente
} from '../controllers/expedientes.controller.js';

const router = Router();

router.post('/', crearExpediente);
router.get('/', listarExpedientes);
router.get('/:id', obtenerExpediente);
router.put('/:id', actualizarExpediente);
router.delete('/:id', eliminarExpediente);

export default router;
