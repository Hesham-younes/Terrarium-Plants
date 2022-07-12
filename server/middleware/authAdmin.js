const User = require('../models/userModel');

const authAdmin = async (req,res,next) => {
    try{
        //get user information
        const user = await User.findOne({
            id: req.user.id
        })
        console.log(user);
        if(user.role === 'user'){
            return res.status(400).json({msg: "Admin resources access denied"})
        }
        next();
    } catch (err) {
        return res.status(500).json({
            msg: err.message
        })
    }
}

module.exports = authAdmin;
