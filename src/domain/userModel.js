const { DataTypes } = require('sequelize');
const {sequelize} = require('../configs/db');

const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    }
}, {

});

exports.User = User