const mongoose = require('mongoose');


const tokenSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    token: { 
        type: String,
        required: true
    },
   
    createdAt: {
        type: Date,
        default: Date.now,
        expiers: 3600
    }
})
const tokenModel = mongoose.model('tokenModel',tokenSchema)
module.exports = tokenModel