const TarjetaPuntuacion = require('../models/TarjetaPuntuacion');

exports.createTarjetaPuntuacion = async (req, res) => {
  try {
    const {
      jugadorId, torneoId, hoyo_1, hoyo_2, hoyo_3, hoyo_4, hoyo_5, hoyo_6, hoyo_7, hoyo_8, hoyo_9,
      hoyo_10, hoyo_11, hoyo_12, hoyo_13, hoyo_14, hoyo_15, hoyo_16, hoyo_17, hoyo_18, total, puntuacion
    } = req.body;

    if (!jugadorId || !torneoId || !puntuacion) {
      return res.status(400).json({ error: 'Los campos jugadorId, torneoId y puntuacion son obligatorios' });
    }

    const tarjetaPuntuacion = await TarjetaPuntuacion.create({
      jugadorId, torneoId, hoyo_1, hoyo_2, hoyo_3, hoyo_4, hoyo_5, hoyo_6, hoyo_7, hoyo_8, hoyo_9,
      hoyo_10, hoyo_11, hoyo_12, hoyo_13, hoyo_14, hoyo_15, hoyo_16, hoyo_17, hoyo_18, total, puntuacion
    });

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