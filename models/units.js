const mongoose = require('mongoose')

const unitsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
    type: String,
        required: true
    },
    targets: {
        type: String,
        required: false
    },
    strongAgainst: {
        type: String,
        required: false
    },
    weakAgainst: {
        type: String,
        required: false
    }
    
})

module.exports = mongoose.model('Units', unitsSchema)