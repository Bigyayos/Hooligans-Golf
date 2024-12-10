const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TarjetaPuntuacion = sequelize.define('TarjetaPuntuacion', {
  jugadorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Jugadors',
      key: 'id'
    }
  },
  torneoId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Torneos',
      key: 'id'
    }
  },
  hoyo_1: DataTypes.INTEGER,
  hoyo_2: DataTypes.INTEGER,
  hoyo_3: DataTypes.INTEGER,
  hoyo_4: DataTypes.INTEGER,
  hoyo_5: DataTypes.INTEGER,
  hoyo_6: DataTypes.INTEGER,
  hoyo_7: DataTypes.INTEGER,
  hoyo_8: DataTypes.INTEGER,
  hoyo_9: DataTypes.INTEGER,
  hoyo_10: DataTypes.INTEGER,
  hoyo_11: DataTypes.INTEGER,
  hoyo_12: DataTypes.INTEGER,
  hoyo_13: DataTypes.INTEGER,
  hoyo_14: DataTypes.INTEGER,
  hoyo_15: DataTypes.INTEGER,
  hoyo_16: DataTypes.INTEGER,
  hoyo_17: DataTypes.INTEGER,
  hoyo_18: DataTypes.INTEGER,
  total: DataTypes.INTEGER,
  puntuacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = TarjetaPuntuacion;