// Import express to use the ROUTER
const express = require(`express`)

// Create a router
const transactions = express.Router()

//grab data from models
let transactionsArray = require('../models/transaction.model')

// ROUTES
transactions.get('/', (req, res) => {
    res.json({ transactions: transactionsArray})
})

// SHOW
transactions.get('/:id', (req, res) => {
    const {id} = req.params

    const transaction = transactionsArray.find(t => t.id === +id)

    res.json({ transaction})
})



module.exports = transactions