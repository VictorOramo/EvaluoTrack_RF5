import { Router } from 'express';
import {
  crearExpediente,
  listarExpedientes,
  obtenerExpediente,
  actualizarExpediente,
  eliminarExpediente
} from '../controllers/expedientes.controller.js';
import { validarExpediente } from '../middleware/validators.js';

const router = Router();

router.post('/', validarExpediente, crearExpediente);
router.get('/', listarExpedientes);
router.get('/:id', obtenerExpediente);
router.put('/:id', validarExpediente, actualizarExpediente);
router.delete('/:id', eliminarExpediente);

export default router;
