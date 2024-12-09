const express = require('express');
const router = express.Router();
const torneoController = require('../controllers/torneoController');

router.post('/torneos', torneoController.createTorneo);
router.get('/torneos', torneoController.getTorneos);
router.put('/torneos/:id', torneoController.updateTorneo);
router.delete('/torneos/:id', torneoController.deleteTorneo);

module.exports = router;