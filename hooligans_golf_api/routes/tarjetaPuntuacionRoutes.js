const express = require('express');
const router = express.Router();
const tarjetaPuntuacionController = require('../controllers/tarjetaPuntuacionController');

router.post('/tarjetas-puntuacion', tarjetaPuntuacionController.createTarjetaPuntuacion);
router.get('/tarjetas-puntuacion', tarjetaPuntuacionController.getTarjetasPuntuacion);
router.put('/tarjetas-puntuacion/:id', tarjetaPuntuacionController.updateTarjetaPuntuacion);
router.delete('/tarjetas-puntuacion/:id', tarjetaPuntuacionController.deleteTarjetaPuntuacion);

module.exports = router;