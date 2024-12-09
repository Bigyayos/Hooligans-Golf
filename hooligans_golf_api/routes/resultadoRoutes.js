const express = require('express');
const router = express.Router();
const resultadoController = require('../controllers/resultadoController');

router.post('/resultados', resultadoController.createResultado);
router.get('/resultados', resultadoController.getResultados);
router.put('/resultados/:id', resultadoController.updateResultado);
router.delete('/resultados/:id', resultadoController.deleteResultado);

module.exports = router;