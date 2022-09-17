const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./configs/db')
const {application, db} = require('./configs/app')
const route = require('./routes')
const {host, user, password, port, name} = db

const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)
app.use(urlencodedParser)

route(app)

connectDB(host, name, port, user, password)
    .then(_ => console.log('connected to db'))
    .catch(err => console.log(err))

app.listen(application.port, () => {
    console.log(`app listening on port ${application.port}`)
})