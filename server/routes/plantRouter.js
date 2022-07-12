const router = require('express').Router();
const plantidController = require('../controller/plantidController')
const plantHealthController = require('../controller/plantHealthController')
router.post('/identify', plantidController.plant_id)
router.post('/health', plantHealthController.plant_health)

module.exports = router