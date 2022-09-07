const {Sequelize} = require('sequelize');

const {dbPort, dbPassword, dbName, dbHost, dbUser} = require('./app')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`)

exports.sequelize = sequelize

exports.establishDBConnection = () => {
    return new Promise((resolve, reject) => {
        sequelize.authenticate()
            .then(_ => resolve('connection to db successful'))
            .catch(err => reject(`error connecting to db: ${err}`))
    })
}


