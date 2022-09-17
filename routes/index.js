module.exports = (app) => {
    app.use('/api/users', require('./endpoints/userRoute'))
}