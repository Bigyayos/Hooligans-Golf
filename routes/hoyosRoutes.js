module.exports = router;

// routes/hoyosRoutes.js
const express = require('express');
const router = express.Router();
const hoyosController = require('../controllers/hoyosController');

router.get('/', hoyosController.getAllHoyos);
router.get('/:id', hoyosController.getHoyoById);
router.post('/', hoyosController.createHoyo);
router.put('/:id', hoyosController.updateHoyo);
router.delete('/:id', hoyosController.deleteHoyo);

module.exports = router;