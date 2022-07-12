const User = require('../models/userModel');


  exports.addItemToCart =  async (req, res,) => {
    try {
    const user = await User.findById(req.body._id)
    console.log(user,'user from cartContr');
    if(!user) return res.status(400).json({msg : "User dose not exist"})
    await User.findOneAndUpdate({_id: req.body._id},{
      cart: req.body.cart
    })
    return res.json({msg:"Added to cart"})
    } catch(err){
      return res.status(500).json({msg: err.messgae})
    }
    
  }