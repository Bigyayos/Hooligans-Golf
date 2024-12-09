const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hooligans_golf', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.jugadores = require('./jugadores')(sequelize, Sequelize);
db.torneos = require('./torneos')(sequelize, Sequelize);
db.categorias = require('./categorias')(sequelize, Sequelize);
db.campos = require('./campos')(sequelize, Sequelize);
db.hoyos = require('./hoyos')(sequelize, Sequelize);
db.tarjetas = require('./tarjetas')(sequelize, Sequelize);
db.resultados = require('./resultados')(sequelize, Sequelize);

module.exports = db;