const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jugador = sequelize.define('Jugador', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  licencia: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  handicap: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  fotoPerfil: {
    type: DataTypes.STRING,
    allowNull: true
  },
  // Otros campos necesarios
});

module.exports = Jugador;