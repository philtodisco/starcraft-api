const mongoose = require('mongoose')

const unitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    goodAgainst: {
        type: String,
        required: true
    },
    weakAgainst: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Units', unitsSchema)