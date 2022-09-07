const express = require('express')
const bodyParser = require('body-parser')
const {establishDBConnection} = require('./configs/db')
const {UserRoute} = require('./routes')
const {appPort} = require('./configs/app')

const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser)
app.use(urlencodedParser)

app.use('/api/users', UserRoute)

establishDBConnection()
    .then(r => console.log(r))
    .catch(err => console.log(err))

app.listen(appPort, () => {
    console.log(`Example app listening on port ${appPort}`)
})