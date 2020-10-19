const mongoose = require('mongoose')

const FlightSchema = mongoose.Schema({
    type: { type: String, required: true },
    airline: { type: String, required: true },
    flight: { type: String, required: true },
    departing: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: Date, required: true },
    rows: { type: String, required: true }
})

FlightSchema.index({ flight: 1, date: 1 }, { unique: true })

module.exports = mongoose.model('Flight', FlightSchema)
