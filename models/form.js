var mongoose = require('mongoose')

var Schema = mongoose.Schema

var FormCart = new Schema({

    email:{type:String},
    password:{type:String}


})

module.exports=mongoose.model('users',FormCart)