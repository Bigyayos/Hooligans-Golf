const Hoyo = require('../models/Hoyo');

exports.createHoyo = async (req, res) => {
  try {
    const hoyo = await Hoyo.create(req.body);
    res.status(201).json(hoyo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getHoyos = async (req, res) => {
  try {
    const hoyos = await Hoyo.findAll();
    res.status(200).json(hoyos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateHoyo = async (req, res) => {
  try {
    const hoyo = await Hoyo.findByPk(req.params.id);
    if (!hoyo) {
      return res.status(404).json({ error: 'Hoyo no encontrado' });
    }
    await hoyo.update(req.body);
    res.status(200).json(hoyo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteHoyo = async (req, res) => {
  try {
    const hoyo = await Hoyo.findByPk(req.params.id);
    if (!hoyo) {
      return res.status(404).json({ error: 'Hoyo no encontrado' });
    }
    await hoyo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};