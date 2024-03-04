// Import express to use the ROUTER
const express = require(`express`)

function validateForm (req,res,next) {
    const alphabet = /^[a-zA-Z\s]*$/;

    if(!req.body.item_name || !req.body.category || !req.body.amount || !req.body.date || !req.body.from || !alphabet.test(req.body.item_name) || !alphabet.test(req.body.from) || !alphabet.test(req.body.category) ) res.status(400).json({message: `Invalid Inputs`}) 
    else next()
  }

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
transactions.post('/', validateForm, (req, res) => {
    let id = transactionsArray.length > 0 ? transactionsArray[transactionsArray.length - 1].id + 1 : 1
    req.body.id = id
    transactionsArray.push(req.body)
    res.json({transactions: transactionsArray})
})

//EDIT
transactions.put("/:id", validateForm, (req,res) => {
    const {id} = req.params

    const transactionIndex = transactionsArray.findIndex(t => t.id === +id)

    if(transactionIndex > -1) {
        transactionsArray[transactionIndex] = req.body
        res.json({transactions: transactionsArray})
    } else {
        res.json({error: "ERROR"})
    }
})

//DELETE
transactions.delete("/:id", (req, res) => {
    const {id} = req.params

    transactionsArray = transactionsArray.filter(t => t.id !== +id)

    res.json({transactions: transactionsArray})
})
module.exports = transactions