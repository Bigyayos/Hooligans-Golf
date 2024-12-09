const TarjetaPuntuacion = require('../models/TarjetaPuntuacion');

exports.createTarjetaPuntuacion = async (req, res) => {
  try {
    const tarjetaPuntuacion = await TarjetaPuntuacion.create(req.body);
    res.status(201).json(tarjetaPuntuacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTarjetasPuntuacion = async (req, res) => {
  try {
    const tarjetasPuntuacion = await TarjetaPuntuacion.findAll();
    res.status(200).json(tarjetasPuntuacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTarjetaPuntuacion = async (req, res) => {
  try {
    const tarjetaPuntuacion = await TarjetaPuntuacion.findByPk(req.params.id);
    if (!tarjetaPuntuacion) {
      return res.status(404).json({ error: 'Tarjeta de puntuación no encontrada' });
    }
    await tarjetaPuntuacion.update(req.body);
    res.status(200).json(tarjetaPuntuacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTarjetaPuntuacion = async (req, res) => {
  try {
    const tarjetaPuntuacion = await TarjetaPuntuacion.findByPk(req.params.id);
    if (!tarjetaPuntuacion) {
      return res.status(404).json({ error: 'Tarjeta de puntuación no encontrada' });
    }
    await tarjetaPuntuacion.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};