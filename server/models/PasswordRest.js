const mongoose = require('mongoose');


const PasswordResetSchema = new mongoose.Schema({
    userId:{
       type: String,
    } ,
    resetString: true,
    createdAt: Date,
    expiresIn: Date,
});

const PasswordReset = mongoose.model('PasswordReset',PasswordResetSchema )
module.exports = PasswordReset;