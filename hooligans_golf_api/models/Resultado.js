const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Resultado = sequelize.define('Resultado', {
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
  puntuacionTotal: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Resultado;