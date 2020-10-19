require('dotenv').config()
const cors = require('cors')
const express = require('express')
const moongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
const Flight = require('./db/models/Flight')

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    try {
        const flights = await Flight.find()
        res.json(flights)
    } catch (error) {
        res.json({ message: error })
    }
})

app.post('/updateDB', (req, res) => {
    console.log('Received')
    const flight = new Flight({
        type: req.body.type,
        airline: req.body.airline,
        flight: req.body.flight,
        departing: req.body.departing,
        destination: req.body.destination,
        date: req.body.date,
        rows: req.body.rows
    })

    flight
        .save()
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.json({ message: error })
        })
})

moongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to database successfuly')
    }
)

app.listen(5000, () => {
    console.log('Listening on port 5000')
})
