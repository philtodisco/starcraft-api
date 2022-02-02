const express = require('express')
const router = express.Router()
const Units = require('../models/units')

// get all
router.get('/', async (req, res) => {
    try {
        const units = await Units.find()
        res.json(units)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})

// get one
router.get('/:id', getUnits, (req, res) => {
    res.json(res.units)
})

// create
router.post('/', async (req, res) => {
    const units = new Units({
        name: req.body.name,
        race: req.body.race,
        type: req.body.type,
        description: req.body.description,
        targets: req.body.targets,
        strongAgainst: req.body.strongAgainst,
        weakAgainst: req.body.weakAgainst,
        
    })
    try {
        const newUnits = await units.save()
        res.status(201).json(newUnits)
    }   catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// update
router.patch('/:id', getUnits, async (req, res) => {
    if (req.body.name != null) {
        res.units.name = req.body.name
    }
    if (req.body.race != null) {
        res.units.race = req.body.race
    }
    if (req.body.type != null) {
        res.units.type = req.body.type
    }
    if (req.body.description != null) {
        res.units.description = req.body.description
    }
    if (req.body.targets != null) {
        res.units.targets = req.body.targets
    }
    if (req.body.strongAgainst != null) {
        res.units.strongAgainst = req.body.strongAgainst
    }
    if (req.body.weakAgainst != null) {
        res.units.weakAgainst = req.body.weakAgainst
    }
    try {
      const updatedUnits = await res.units.save()
      res.json(updatedUnits)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

// delete
router.delete('/:id', getUnits, async (req, res) => {
    try {
        await res.units.remove()
        res.json({ message: 'Deleted Starcraft Unit'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getUnits(req, res, next) {
    let units
    try {
        units = await Units.findById(req.params.id)
        if (units == null) {
            return res.status(404).json({ message : 'Cannot find Starcraft Unit' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.units = units
    next()
}

module.exports = router