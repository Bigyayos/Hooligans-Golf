// controllers/tarjetasController.js
const { Tarjeta } = require('../models');

// Obtener todas las tarjetas de puntuación
const getAllTarjetas = async (req, res) => {
  try {
    const tarjetas = await Tarjeta.findAll();
    res.json(tarjetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una tarjeta de puntuación por ID
const getTarjetaById = async (req, res) => {
  try {
    const tarjeta = await Tarjeta.findByPk(req.params.id);
    if (tarjeta) {
      res.json(tarjeta);
    } else {
      res.status(404).json({ error: 'Tarjeta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva tarjeta de puntuación
const createTarjeta = async (req, res) => {
  try {
    const nuevaTarjeta = await Tarjeta.create(req.body);
    res.status(201).json(nuevaTarjeta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una tarjeta de puntuación existente
const updateTarjeta = async (req, res) => {
  try {
    const [updated] = await Tarjeta.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTarjeta = await Tarjeta.findByPk(req.params.id);
      res.status(200).json(updatedTarjeta);
    } else {
      res.status(404).json({ error: 'Tarjeta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una tarjeta de puntuación
const deleteTarjeta = async (req, res) => {
  try {
    const deleted = await Tarjeta.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Tarjeta no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTarjetas,
  getTarjetaById,
  createTarjeta,
  updateTarjeta,
  deleteTarjeta
};