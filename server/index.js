const userApi = require('./api/userApi')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/user', userApi)

app.listen(4000)
console.log('success listen at port:4000......')
