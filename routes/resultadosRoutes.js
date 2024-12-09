// routes/resultadosRoutes.js
const express = require('express');
const router = express.Router();
const resultadosController = require('../controllers/resultadosController');

router.get('/', resultadosController.getAllResultados);
router.get('/:id', resultadosController.getResultadoById);
router.post('/', resultadosController.createResultado);
router.put('/:id', resultadosController.updateResultado);
router.delete('/:id', resultadosController.deleteResultado);

module.exports = router;