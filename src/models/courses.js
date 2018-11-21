const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name:{
        required:true,
        type:String,
        minlength:3
    },
    mentors:{
        required:true,
        type:[String]
    },
    koders:{
        required:true,
        type:[String]
    }
});

module.exports = {
    model:mongoose.model('course',schema),
    schema
}