require('dotenv').config()

const express = require('express')
const app = express ()
const mongoose = require('mongoose')
let port = process.env.PORT || 3000

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const starcraftRouter = require('./routes/units')
app.use('/units', starcraftRouter)

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
