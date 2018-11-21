const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
    name:{
        required: true,
        type:String,
        trim: true,
        maxlength: 20,
        minlength: 1,
    },

    age:{
        require: true,
        type:Number,
        trim: true,
        minlength:1

    },

    city:{
        require:true,
        type:String,
        trim:true,
        minlength:1
    }
})

module.exports = {
    schema,
    model:mongoose.model('koder',schema)    
}