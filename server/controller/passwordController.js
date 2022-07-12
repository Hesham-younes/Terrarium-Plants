const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const tokenModel = require("../models/tokenModel");
require("dotenv").config();

const auth = {
  service: 'Gmail',
  auth:{
  user: 'terrariumsapp@gmail.com',
  pass: process.env.AUTH_PASS
},
}

let transporter = nodemailer.createTransport(auth);
transporter.verify((err, success) => {
  if (err) {
    console.log(err.message,'error',err); 
  } else {
    console.log(success, "success password");
  }
});

module.exports.resetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User is not registerd");
    const secret = process.env.JWT_SECRET_KEY;
    const payload = {
      email: user.email,
      id: user._id,
    };
    const token = await jwt.sign(payload, secret, { expiresIn: "10m" });
    const newToken = await tokenModel.create({
      userId: user._id,
      token: token,
    });

    const link = `http://localhost:8000/api/reset/forget-password/${user.id}/${token}`;

    console.log(link);
    var mailOptions = {
      from: "terrariumsapp@gmail.com",
      to: user.email,
      subject: "Reset Password link",
      text: link,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error.message);
      else console.log("Email sent:" + info.response);
    });
    res.send(
      "Password reset link has been sent to your email please check your Spam "
    );
  } catch (err) {
    res.status(404).json({ msg: err.messgae });
  }
};

module.exports.getresetPassword = async (req, res) => {
  const { id, token } = req.params;
  const userId = await User.findOne({ _id: id });
  if (!userId) return res.status(401).send("invalied id");
  const checkToken = await tokenModel.findOne({ token: token, userId: userId });
  console.log(checkToken);
  if (!checkToken) return res.status(404).send("invalid token");
  const secret = process.env.JWT_SECRET_KEY;
  try {
    const payload = await jwt.verify(token, secret);
    res.render("resetpassword.ejs", { id: id, token: token });
  } catch (err) {
    res.status(404).json({ msg: err });
  }
};
/* change password*/
module.exports.postrestPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password, confirmPassword } = req.body;
  try {
    const user = await User.findOne({ id });
    console.log(user, "found");
    const checkToken = await tokenModel.findOne({ id, token });
    if (!checkToken) return res.status(404).send("invalid token");
    if (checkToken) console.log(true, "checked");
    const secret = process.env.JWT_SECRET_KEY;
    const payload = await jwt.verify(token, secret);
    if (password !== confirmPassword)
      return res.status(401).send("password mismatch");
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    user.password = hashpassword;
    const updatedUser = await User.updateOne(
      { id: user.id },
      { password: hashpassword },
      { new: true },
    );
     res.status(200).send(`<p>User password updated successfully <a href="http://localhost:3000/">login</a></p>`)
  } catch (err) {
    res.status(404).json({ err: err.message });
    console.log(err.message);
  }
};
