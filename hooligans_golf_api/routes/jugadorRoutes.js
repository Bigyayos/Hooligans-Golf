const express = require('express');
const router = express.Router();
const jugadorController = require('../controllers/jugadorController');

router.post('/jugadores', jugadorController.createJugador);
router.get('/jugadores', jugadorController.getJugadores);
router.put('/jugadores/:id', jugadorController.updateJugador);
router.delete('/jugadores/:id', jugadorController.deleteJugador);

// Otras rutas para actualizar, eliminar, etc.

module.exports = router;