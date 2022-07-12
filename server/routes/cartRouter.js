
const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');


router.post('/addcart',cartController.addItemToCart)





module.exports = router