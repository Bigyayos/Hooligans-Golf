const express = require('express');
const router = express.Router();
const jugadoresController = require('../controllers/jugadoresController');

router.post('/', jugadoresController.create);
router.get('/', jugadoresController.findAll);
router.get('/:id', jugadoresController.findOne);
router.put('/:id', jugadoresController.update);
router.delete('/:id', jugadoresController.delete);

module.exports = router;