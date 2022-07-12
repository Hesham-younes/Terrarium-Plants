const express = require('express');
const router = express.Router();
const auth = require('../controller/authController');



router.post('/register',auth.register);
router.post('/login',auth.login);
router.get('/login',auth.login);
router.get('/register',auth.register);





module.exports = router