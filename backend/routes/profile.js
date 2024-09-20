const express = require('express')
const profileRouter = express.Router()
const {getProfile} = require('../controllers/profileController')
// {} is used because profileController.js has used {} while exporting

// 'await' is used with 'async'
profileRouter.get('/', getProfile)



module.exports = profileRouter