const mongoose = require('mongoose'); 


const userSchema = new mongoose.Schema({
    userName:{type:String,required:true},
    email:{type:String,required:true,unique:true}, 
    password:{type:String,required:true,minlength:8}, 
    isAdmin:{type:Boolean,default:false},
    isSupperAdmin:{type:Boolean,default:false},
    status:{type:String,default:"Active"}
},{timestamps:true})



module.exports = mongoose.model('User',userSchema); 
