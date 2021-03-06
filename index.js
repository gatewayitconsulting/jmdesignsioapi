require('dotenv').config()

const express = require('express')
const cors = require('cors')

const testRouter = require('./api/route')

const server = express()
const port = process.env.PORT || 8000

server.use(cors())
server.use(express.json())
server.use('/test', testRouter)

server.get('/', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>')
})

server.listen(port, () => {
    console.log(`\n=== Server listening on port ${port} ===\n`)
})