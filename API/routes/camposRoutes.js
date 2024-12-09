// routes/camposRoutes.js
const express = require('express');
const router = express.Router();
const camposController = require('../controllers/camposController');

router.get('/', camposController.getAllCampos);
router.get('/:id', camposController.getCampoById);
router.post('/', camposController.createCampo);
router.put('/:id', camposController.updateCampo);
router.delete('/:id', camposController.deleteCampo);

module.exports = router;