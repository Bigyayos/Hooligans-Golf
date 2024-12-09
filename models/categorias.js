module.exports = (sequelize, DataTypes) => {
    const Torneo = sequelize.define('Torneo', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_fin: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Torneo;
};