const userApi = require('./api/userApi')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({
  origin: ['http://icloudbadguy.xyz:9992'],
  methods: ['GET', 'POST'],
  alloweHeaders: ['Content-Type', 'Authorization']
}));
app.use('/api/user', userApi)

app.listen(4000)
console.log('success listen at port:4000......')
