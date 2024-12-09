// controllers/torneosController.js
const { Torneo } = require('../models');

// Obtener todos los torneos
const getAllTorneos = async (req, res) => {
  try {
    const torneos = await Torneo.findAll();
    res.json(torneos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un torneo por ID
const getTorneoById = async (req, res) => {
  try {
    const torneo = await Torneo.findByPk(req.params.id);
    if (torneo) {
      res.json(torneo);
    } else {
      res.status(404).json({ error: 'Torneo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo torneo
const createTorneo = async (req, res) => {
  try {
    const nuevoTorneo = await Torneo.create(req.body);
    res.status(201).json(nuevoTorneo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un torneo existente
const updateTorneo = async (req, res) => {
  try {
    const [updated] = await Torneo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTorneo = await Torneo.findByPk(req.params.id);
      res.status(200).json(updatedTorneo);
    } else {
      res.status(404).json({ error: 'Torneo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un torneo
const deleteTorneo = async (req, res) => {
  try {
    const deleted = await Torneo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Torneo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTorneos,
  getTorneoById,
  createTorneo,
  updateTorneo,
  deleteTorneo
};