const Torneo = require('../models/Torneo');

exports.createTorneo = async (req, res) => {
  try {
    const torneo = await Torneo.create(req.body);
    res.status(201).json(torneo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTorneos = async (req, res) => {
  try {
    const torneos = await Torneo.findAll();
    res.status(200).json(torneos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTorneo = async (req, res) => {
  try {
    const torneo = await Torneo.findByPk(req.params.id);
    if (!torneo) {
      return res.status(404).json({ error: 'Torneo no encontrado' });
    }
    await torneo.update(req.body);
    res.status(200).json(torneo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTorneo = async (req, res) => {
  try {
    const torneo = await Torneo.findByPk(req.params.id);
    if (!torneo) {
      return res.status(404).json({ error: 'Torneo no encontrado' });
    }
    await torneo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};