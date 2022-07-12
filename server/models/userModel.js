const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        max:20,
        min: 3,
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        min: 8,
    },
    salt:{
        type:String,
        required: true,
    },
    verified: {
        type: Boolean,
    },
    address: {
        type: String,
        default: ''
    },
    number: {
        type: Number,
        default: ''
    },
    cart: {
        type:Array,
        default: []
    },
    img: {
        type:String,
        default: ""
    },
    role: {
        type:String,
        enum:["admin","user","co-host"],
        default: "user"
    }
}, {timestamps: true}
);

const User = mongoose.model('User', userSchema);



module.exports = User;