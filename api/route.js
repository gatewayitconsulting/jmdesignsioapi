const router = require('express').Router()
const dbConfig = require('../data/db-config')
const Profiles = require('./model')
const Rsvps = require('./model')

router.get('/', async (req, res) => {
    const profiles = await Profiles.findAllProfiles()
    res.json(profiles)
})

router.get('/rsvps', async (req, res) => {
    const rsvps = await Rsvps.findAllRSVPS()
    res.json(rsvps)
})


module.exports = router