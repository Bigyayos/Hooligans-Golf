module.exports = (sequelize, DataTypes) => {
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
        }
    });

    return Hoyo;
};