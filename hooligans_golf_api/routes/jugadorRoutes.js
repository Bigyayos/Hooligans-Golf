const express = require('express');
const router = express.Router();
const jugadorController = require('../controllers/jugadorController');
const upload = require('../middlewares/upload');

router.post('/jugadores', upload.single('fotoPerfil'), jugadorController.createJugador);
router.get('/jugadores', jugadorController.getJugadores);
router.put('/jugadores/:id', upload.single('fotoPerfil'), jugadorController.updateJugador);
router.delete('/jugadores/:id', jugadorController.deleteJugador);

module.exports = router;