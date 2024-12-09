// controllers/hoyosController.js
const { Hoyo } = require('../models');

// Obtener todos los hoyos
const getAllHoyos = async (req, res) => {
  try {
    const hoyos = await Hoyo.findAll();
    res.json(hoyos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un hoyo por ID
const getHoyoById = async (req, res) => {
  try {
    const hoyo = await Hoyo.findByPk(req.params.id);
    if (hoyo) {
      res.json(hoyo);
    } else {
      res.status(404).json({ error: 'Hoyo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo hoyo
const createHoyo = async (req, res) => {
  try {
    const nuevoHoyo = await Hoyo.create(req.body);
    res.status(201).json(nuevoHoyo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un hoyo existente
const updateHoyo = async (req, res) => {
  try {
    const [updated] = await Hoyo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedHoyo = await Hoyo.findByPk(req.params.id);
      res.status(200).json(updatedHoyo);
    } else {
      res.status(404).json({ error: 'Hoyo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un hoyo
const deleteHoyo = async (req, res) => {
  try {
    const deleted = await Hoyo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Hoyo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllHoyos,
  getHoyoById,
  createHoyo,
  updateHoyo,
  deleteHoyo
};