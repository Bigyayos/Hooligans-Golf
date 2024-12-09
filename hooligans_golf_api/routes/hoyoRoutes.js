const express = require('express');
const router = express.Router();
const hoyoController = require('../controllers/hoyoController');

router.post('/hoyos', hoyoController.createHoyo);
router.get('/hoyos', hoyoController.getHoyos);
router.put('/hoyos/:id', hoyoController.updateHoyo);
router.delete('/hoyos/:id', hoyoController.deleteHoyo);

module.exports = router;