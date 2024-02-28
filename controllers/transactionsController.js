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

//CREATE
transactions.post('/', (req, res) => {
    let id = transactionsArray[transactionsArray.length - 1].id + 1
    req.body.id = id
    transactionsArray.push(req.body)
    res.json({transactions: transactionsArray})
})

module.exports = transactions