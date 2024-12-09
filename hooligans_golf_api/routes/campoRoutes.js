const express = require('express');
const router = express.Router();
const campoController = require('../controllers/campoController');

router.post('/campos', campoController.createCampo);
router.get('/campos', campoController.getCampos);
router.put('/campos/:id', campoController.updateCampo);
router.delete('/campos/:id', campoController.deleteCampo);

module.exports = router;