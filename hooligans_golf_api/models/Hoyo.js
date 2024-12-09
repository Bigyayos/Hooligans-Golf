const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hoyo = sequelize.define('Hoyo', {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  par: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  distancia: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  campoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Campos',
      key: 'id'
    }
  }
});

module.exports = Hoyo;