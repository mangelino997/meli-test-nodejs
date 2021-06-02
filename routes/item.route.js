const express = require('express')
const api = express.Router()
const { getItems, getItemDescription  } = require('../controllers/item.controller')

api.get('/items', getItems)
api.get('/items/:itemId', getItemDescription)

module.exports = api