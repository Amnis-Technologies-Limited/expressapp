const express = require('express')
const bodyParset = require('body-parser')
const cors = require('cors')

const app = express()

let corsOptions = {
    origin: 'http://localhost:8081'
}

const db = require('./models')
db.sequelize.sync()
    .then(() => {
        console.log('Synced with DB')
    })
    .catch((err) => {
        console.log('Error connecting to Db: ' + err.message)
    })

app.use(cors(corsOptions))

// Parse request of content-type application/json
app.use(express.json())

// Parse request of content-type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Simple route
app.get("/", (req, res) => {
    res.json({
        message: 'Welcome to Amnis Backend with Node Express & Postgresql'
    })
})

// Set port
const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT)
})