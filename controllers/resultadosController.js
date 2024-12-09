// controllers/resultadosController.js
const { Resultado } = require('../models');

// Obtener todos los resultados
const getAllResultados = async (req, res) => {
  try {
    const resultados = await Resultado.findAll();
    res.json(resultados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un resultado por ID
const getResultadoById = async (req, res) => {
  try {
    const resultado = await Resultado.findByPk(req.params.id);
    if (resultado) {
      res.json(resultado);
    } else {
      res.status(404).json({ error: 'Resultado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo resultado
const createResultado = async (req, res) => {
  try {
    const nuevoResultado = await Resultado.create(req.body);
    res.status(201).json(nuevoResultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un resultado existente
const updateResultado = async (req, res) => {
  try {
    const [updated] = await Resultado.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedResultado = await Resultado.findByPk(req.params.id);
      res.status(200).json(updatedResultado);
    } else {
      res.status(404).json({ error: 'Resultado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un resultado
const deleteResultado = async (req, res) => {
  try {
    const deleted = await Resultado.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Resultado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllResultados,
  getResultadoById,
  createResultado,
  updateResultado,
  deleteResultado
};