require('dotenv').config()

module.exports = {
    application: {
        port: process.env.PORT,
        environment: process.env.APP_ENV
    },
    db: {
        user: process.env.DB_USER,
        name: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }
}