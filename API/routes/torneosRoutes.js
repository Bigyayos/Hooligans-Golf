// routes/torneosRoutes.js
const express = require('express');
const router = express.Router();
const torneosController = require('../controllers/torneosController');

router.get('/', torneosController.getAllTorneos);
router.get('/:id', torneosController.getTorneoById);
router.post('/', torneosController.createTorneo);
router.put('/:id', torneosController.updateTorneo);
router.delete('/:id', torneosController.deleteTorneo);

module.exports = router;