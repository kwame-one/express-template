const express = require('express')
const router = express.Router()

const {UserController} = require('../controllers')

router.get('/', UserController.index)
router.get('/:id', UserController.show)
router.put('/:id', UserController.update)
router.delete('/:id', UserController.destroy)
router.post('/', UserController.store)
router.get('/custom/action', UserController.temp)

module.exports = router