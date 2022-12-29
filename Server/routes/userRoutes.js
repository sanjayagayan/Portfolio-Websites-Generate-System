const express = require('express')
const router = express.Router()
const {getUser,addUser} = require('../controllers/userControllers') 


router.get('/:id',getUser)
router.post('/',addUser)

module.exports = router