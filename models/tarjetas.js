module.exports = (sequelize, DataTypes) => {
    const Tarjeta = sequelize.define('Tarjeta', {
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Tarjeta;
};