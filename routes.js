const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the application!")
})

app.get('/test', (req, res) => {
    res.status(200).send("Hello World!")
})


module.exports = app
