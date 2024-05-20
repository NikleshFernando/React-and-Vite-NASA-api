const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User",userSchema);

module.exports  = User;