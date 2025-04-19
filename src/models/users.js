const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firestNmae:{
        type:String,
        required:true
    },
    lastNmae:{
        type:String,
        required:true
    },
    grnder:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("user",userSchema);