const express = require('express')
const app = express()

const register = require('./routes/register')
const login = require('./routes/login')
const nodemailer = require('./routes/nodemailer')
const verification = require('./routes/code')

const cors = require('cors')
const connect = require('./database/connect')

require('dotenv').config()

app.use(express.json())
app.use(cors())

app.use(register);
app.use(login);
app.use(nodemailer);
app.use(verification);

connect()

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
