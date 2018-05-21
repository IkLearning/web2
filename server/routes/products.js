var express = require('express')
var router = express.Router()
var Product = require('../models/product')


router.get('/', Product.all)
//       .post('/', Topic.create)
// router.get('/:id', Topic.findById)

module.exports = router
