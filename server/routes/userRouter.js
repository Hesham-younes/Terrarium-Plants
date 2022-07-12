const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const {restrectTo,requireAuth} = require('../middleware/authMiddleware');
const authAdmin = require('../middleware/authAdmin'); 

router.get('/', requireAuth,userController.getUser);


//update user data
router.patch("/:id", userController.petchUser);

//update role
router.patch('/role/:id' ,authAdmin, restrectTo('admin'), userController.petchRole)


module.exports = router