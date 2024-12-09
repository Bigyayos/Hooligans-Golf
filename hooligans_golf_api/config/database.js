const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hooligans_golf', 'root', 'Pab305290Ban', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;