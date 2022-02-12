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

router.post('/rsvps', async (req, res) => {
    console.log(`Received rsvps post with body:`, req.body);
    try {
        const insertResult = await Rsvps.insertRSVP(req.body);
        console.log(`Successfully inserted ${insertResult.rowCount} row(s)`);
        res.sendStatus(200);
    } catch (e) {
        console.log(`Error inserting rsvp`, e);
        res.sendStatus(400);
    }
})


module.exports = router