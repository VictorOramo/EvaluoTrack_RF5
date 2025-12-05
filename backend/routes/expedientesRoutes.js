const express = require('express');
const router = express.Router();
const controller = require('../controllers/expedientesController');

router.post('/crear', controller.crearExpediente);
router.get('/', controller.obtenerExpedientes);

module.exports = router;