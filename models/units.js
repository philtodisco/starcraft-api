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
    targets: {
        type: String,
        required: true
    },
    strongAgainst: {
        type: String,
        required: true
    },
    weakAgainst: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('Units', unitsSchema)