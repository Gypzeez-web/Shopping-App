const mongoose=require('mongoose');
const findOrCreate = require('mongoose-findorcreate')
const validator = require('mongoose-validator')


const SignupTemplate=new mongoose.Schema({
    fullName:{
        type:String,
        trim:true,
        required:true
    },
    userName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        validate:[
            validator({
                validator:'isEmail',
                message:'Oops Please Enter Valid Email'
            })
        ],
        required:true
    },
    password:{
        type:String,
        trim:true,
        minlength:8,
        maxlength:16,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('SignupTemplates',SignupTemplate)