const db = require('../models');
const Jugador = db.jugadores;

exports.create = async (req, res) => {
    try {
        const jugador = await Jugador.create(req.body);
        res.status(201).json(jugador);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const jugadores = await Jugador.findAll();
        res.status(200).json(jugadores);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const jugador = await Jugador.findByPk(req.params.id);
        if (jugador) {
            res.status(200).json(jugador);
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await Jugador.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedJugador = await Jugador.findByPk(req.params.id);
            res.status(200).json(updatedJugador);
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await Jugador.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(200).json({ message: 'Jugador eliminado' });
        } else {
            res.status(404).json({ error: 'Jugador no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};