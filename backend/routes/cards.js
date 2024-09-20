const express = require('express')
const {getCardById, postCard, deleteCardById} = require('../controllers/cardsController')

const cardsRouter = express.Router()

// Get card by id, '/api/cards?id=1'
cardsRouter.get('/', getCardById)
// Post a card, '/api/cards
cardsRouter.post('/', postCard)
// Delete a card by id, '/api/cards/:card_id
cardsRouter.delete('/:card_id', deleteCardById)

module.exports = cardsRouter