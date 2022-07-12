const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const nodemailer = require("nodemailer");
require('dotenv').config();



  const auth = {
    service: 'Gmail',
    auth:{
    user: 'terrariumsapp@gmail.com',
    pass: process.env.AUTH_PASS
  },
  }

 let transporter = nodemailer.createTransport(auth);

 

  transporter.verify((err,success)=> {
  if(err){
    console.log(err.message);
  }else {
    console.log(success,'success userController');
  }
})




//
let fileName;
//upload images to pupilc
const storageSet = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    fileName = "a" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage: storageSet }).single("avatarUrl");

module.exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports.petchUser = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(400).send({ msg: err.message });
    else {
      const { id } = req.params;
      //sceur the update role "important"
      const { role, ...others } = req.body;
      try {
        //if user update password hasssSH it !!
        const profile = JSON.parse(req.body.updatedUser);
        
        if (profile.password) {
          const salt = await bcrypt.genSalt(10);
          profile.password = await bcrypt.hash(profile.password, salt);
        }
        
        profile.img = fileName;
        const updateUser = await User.findByIdAndUpdate(id, profile, {
          new: true,
        });
        console.log("updateUser", updateUser);
        res.status(200).json({
          status: true,
          updateUser,
        });
      } catch (error) {
        res.status(404).json({
          status: false,
          message: error.message,
        });
      }
    }
  });
};

module.exports.petchRole = async (req, res) => {};





