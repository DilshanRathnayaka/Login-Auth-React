const mongoose = require("mongoose");
const message = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Message",message) ;
