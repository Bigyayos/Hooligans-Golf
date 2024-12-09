const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Torneo = sequelize.define('Torneo', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  // Otros campos necesarios
});

module.exports = Torneo;