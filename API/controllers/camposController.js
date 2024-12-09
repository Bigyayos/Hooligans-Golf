// controllers/camposController.js
const { Campo } = require('../models');

// Obtener todos los campos
const getAllCampos = async (req, res) => {
  try {
    const campos = await Campo.findAll();
    res.json(campos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un campo por ID
const getCampoById = async (req, res) => {
  try {
    const campo = await Campo.findByPk(req.params.id);
    if (campo) {
      res.json(campo);
    } else {
      res.status(404).json({ error: 'Campo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo campo
const createCampo = async (req, res) => {
  try {
    const nuevoCampo = await Campo.create(req.body);
    res.status(201).json(nuevoCampo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un campo existente
const updateCampo = async (req, res) => {
  try {
    const [updated] = await Campo.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCampo = await Campo.findByPk(req.params.id);
      res.status(200).json(updatedCampo);
    } else {
      res.status(404).json({ error: 'Campo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un campo
const deleteCampo = async (req, res) => {
  try {
    const deleted = await Campo.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Campo no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCampos,
  getCampoById,
  createCampo,
  updateCampo,
  deleteCampo
};