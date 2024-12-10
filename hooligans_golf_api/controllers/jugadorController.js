const Jugador = require('../models/Jugador');
const path = require('path');

exports.createJugador = async (req, res) => {
  try {
    const { nombre, licencia, handicap } = req.body;
    const fotoPerfil = req.file ? req.file.filename : null;
    const jugador = await Jugador.create({ nombre, licencia, handicap, fotoPerfil });
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
    const { id } = req.params;
    const { nombre, licencia, handicap } = req.body;
    const fotoPerfil = req.file ? req.file.filename : null;
    const jugador = await Jugador.findByPk(id);
    if (!jugador) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }
    await jugador.update({ nombre, licencia, handicap, fotoPerfil });
    res.status(200).json(jugador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteJugador = async (req, res) => {
  try {
    const { id } = req.params;
    const jugador = await Jugador.findByPk(id);
    if (!jugador) {
      return res.status(404).json({ error: 'Jugador no encontrado' });
    }
    await jugador.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};