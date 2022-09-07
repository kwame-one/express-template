require('dotenv').config({path: '../.env'})

module.exports = {
    appPort: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbName: process.env.DB_NAME,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
}