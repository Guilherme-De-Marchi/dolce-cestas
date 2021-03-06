const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require(`${__dirname}/../../databases/index`).main;

const Package = sequelize.define('Package', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: 'Without description',
    },

    multiplicator: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 1.0,
    },

});

(async () => {
    await sequelize.sync();
})();