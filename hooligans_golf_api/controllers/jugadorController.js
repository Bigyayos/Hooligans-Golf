const Jugador = require('../models/Jugador');

exports.createJugador = async (req, res) => {
  try {
    const jugador = await Jugador.create(req.body);
    res.status(201).json(jugador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getJugadores = async (req, res) => {
  try {
    const jugadores = await Jugador.findAll();
    res.status(200).json(jugadores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateJugador = async (req, res) => {
  try {
    const jugador = await Jugador.findByPk(req.params.id);
    if (!jugador) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }
    await jugador.update(req.body);
    res.status(200).json(jugador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteJugador = async (req, res) => {
  try {
    const jugador = await Jugador.findByPk(req.params.id);
    if (!jugador) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }
    await jugador.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Otros métodos para actualizar, eliminar, etc.