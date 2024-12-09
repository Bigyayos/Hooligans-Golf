module.exports = (sequelize, DataTypes) => {
    const Jugador = sequelize.define('Jugador', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        fecha_registro: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return Jugador;
};
