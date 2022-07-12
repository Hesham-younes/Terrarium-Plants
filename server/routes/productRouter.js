const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/plants',productController.getPlants)

module.exports = router;