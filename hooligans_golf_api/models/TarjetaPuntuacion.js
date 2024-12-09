const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TarjetaPuntuacion = sequelize.define('TarjetaPuntuacion', {
  jugadorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Jugadors',
      key: 'id'
    }
  },
  torneoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Torneos',
      key: 'id'
    }
  },
  hoyoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Hoyos',
      key: 'id'
    }
  },
  puntuacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = TarjetaPuntuacion;