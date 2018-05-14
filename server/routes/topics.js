var express = require('express')
var router = express.Router()
var Topic = require('../models/topic')


router.get('/', Topic.all)
//       .post('/', Topic.create)
// router.get('/:id', Topic.findById)

module.exports = router
