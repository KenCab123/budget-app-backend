// import express and cors
const express = require(`express`)
const cors = require('cors')


//Invoke express function
const app = express()

let transactionsController = require(`./controllers/transactionsController`)


// Middleware packages
app.use(cors())

app.use(express.json())

// Middleware for controllers
app.use(`/api/transactions`, transactionsController)

//ROUTES
app.get('/', (req, res) => {
    res.send(`Welcome to Budget App`)
})

app.get('*', (req, res) => {
    res.json({error: "Page not found"})
})


module.exports = app
