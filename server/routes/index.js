var express = require('express')
var router = express.Router()
var Product = require('../models/product')


router.get('/products', Product.all)
      .post('/products', Product.create)
router.get('/products/:id', Product.findById)
      // .put('/products/:id', Product.update)
      // .delete('/products/:id', Product.destroy)

module.exports = router
