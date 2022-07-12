const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

module.exports.register = async (req,res)=> {
    try{
        /* check if user allready registerd or has account */
        let userCheck = await User.findOne({email:req.body.email});
        if(userCheck) {
             return res.status(401).send('User already registered')
            }   
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
            salt : salt
        });
        console.log(newUser);
        const maxAge = 3 * 24 * 60 * 60 ; /*expect second 3d in sce */
        const token = await jwt.sign({id: newUser._id},process.env.JWT_SECRET_KEY,{expiresIn: maxAge})
        res.cookie(token,{httpOnly: true, maxAge: maxAge * 1000}) 
        
        res.status(201).json({
            status: true,
            newUser,
            token,
           
        })
        
    }catch(err){
        console.log(err);
        res.status(404).json({
            status: false,
            message: err.message
        })
    }
}

module.exports.login = async (req,res) => {
    const {email, password} = req.body;
    console.log(req.body);
    try{
        const logedUser = await User.findOne({email});
        if(!logedUser) {
            return res.status(404).json("not registerd User");
        }
        const isPasswordTrue = await bcrypt.compare(password,logedUser.password);
        if(!isPasswordTrue) {
            return res.status(404).json('Wrong credentials');
        }
        const maxAge = 3 * 24 * 60 * 60 ; /*expect second 3d in sce */
        const token = await jwt.sign({id: logedUser._id},process.env.JWT_SECRET_KEY,{expiresIn: maxAge})
        res.cookie(token,{httpOnly: true, maxAge: maxAge * 1000}) 
        res.status(200).json({
            status: true,
            logedUser,
            token,
            
        })
    }catch(error){
        console.log(error);
        res.status(404).json({
            status: false,
            messge: "Error registerition"
        })
    }

    }


