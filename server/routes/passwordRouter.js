const express = require('express');
const router = express.Router();
const passwordController = require('../controller/passwordController')


router.post('/forget-password',passwordController.resetPassword)

router.get('/forget-password/:id/:token', passwordController.getresetPassword)

router.post('/forget-password/:id/:token', passwordController.postrestPassword)

module.exports = router;