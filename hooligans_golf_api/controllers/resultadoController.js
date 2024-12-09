const Resultado = require('../models/Resultado');

exports.createResultado = async (req, res) => {
  try {
    const resultado = await Resultado.create(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getResultados = async (req, res) => {
  try {
    const resultados = await Resultado.findAll();
    res.status(200).json(resultados);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateResultado = async (req, res) => {
  try {
    const resultado = await Resultado.findByPk(req.params.id);
    if (!resultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }
    await resultado.update(req.body);
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteResultado = async (req, res) => {
  try {
    const resultado = await Resultado.findByPk(req.params.id);
    if (!resultado) {
      return res.status(404).json({ error: 'Resultado no encontrado' });
    }
    await resultado.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};