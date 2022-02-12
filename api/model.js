const db = require('../data/db-config');

const findAllProfiles = () => {
    return db('profiles')
}

const findAllRSVPS = () => {
    return db('rsvps')
}

const insertRSVP = (rsvp) => {
    return db('rsvps').insert(rsvp);
}

module.exports = {
    findAllProfiles,
    findAllRSVPS,
    insertRSVP,
}