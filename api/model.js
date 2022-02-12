const db = require('../data/db-config');

const findAllProfiles = () => {
    return db('profiles')
}

const findAllRSVPS = () => {
    return db('rsvps')
}

module.exports = {
    findAllProfiles,
    findAllRSVPS
}