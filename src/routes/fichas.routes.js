import { Router } from 'express';
import {
  crearFicha,
  obtenerFichaPorExpediente,
  actualizarFicha,
  eliminarFicha
} from '../controllers/fichas.controller.js';
import { validarFichaCatastral } from '../middleware/validators.js';

const router = Router();

router.post('/', validarFichaCatastral, crearFicha);
router.get('/expediente/:expedienteId', obtenerFichaPorExpediente);
router.put('/:id', validarFichaCatastral, actualizarFicha);
router.delete('/:id', eliminarFicha);

export default router;
