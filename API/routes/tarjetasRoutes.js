// routes/tarjetasRoutes.js
const express = require('express');
const router = express.Router();
const tarjetasController = require('../controllers/tarjetasController');

router.get('/', tarjetasController.getAllTarjetas);
router.get('/:id', tarjetasController.getTarjetaById);
router.post('/', tarjetasController.createTarjeta);
router.put('/:id', tarjetasController.updateTarjeta);
router.delete('/:id', tarjetasController.deleteTarjeta);

module.exports = router;