const Campo = require('../models/Campo');

exports.createCampo = async (req, res) => {
  try {
    const campo = await Campo.create(req.body);
    res.status(201).json(campo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCampos = async (req, res) => {
  try {
    const campos = await Campo.findAll();
    res.status(200).json(campos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateCampo = async (req, res) => {
  try {
    const campo = await Campo.findByPk(req.params.id);
    if (!campo) {
      return res.status(404).json({ error: 'Campo no encontrado' });
    }
    await campo.update(req.body);
    res.status(200).json(campo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCampo = async (req, res) => {
  try {
    const campo = await Campo.findByPk(req.params.id);
    if (!campo) {
      return res.status(404).json({ error: 'Campo no encontrado' });
    }
    await campo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};