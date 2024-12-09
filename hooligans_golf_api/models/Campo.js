const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Campo = sequelize.define('Campo', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Otros campos necesarios
});

module.exports = Campo;