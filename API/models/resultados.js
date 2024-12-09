module.exports = (sequelize, DataTypes) => {
    const Resultado = sequelize.define('Resultado', {
        puntuacion: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Resultado;
};
