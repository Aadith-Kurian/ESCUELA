const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const router = require("../router/auth");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password : {
        type:String,
        required:true
    },
    regno:{
        type:Number,
        required:true 
    },
    dept:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    },
    messages:[{
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        }

    }],
    certificates : [
        {
            title:{
                type:String,
                required:true
            },
            selectedFile:{
                data : Buffer,
                type:String,
                required:true
            },
            createdAt: {
                type: Date,
                default: new Date(),
            },
        }
    ],
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],

   
});

var salt = bcrypt.genSaltSync(10);

userSchema.pre('save',async function (next) {
 if(this.isModified("password")){
    this.password = bcrypt.hashSync(this.password,salt); }
 next();
});

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token; 
    }catch(err){
        console.log(err);
    }
}

userSchema.methods.addMessage = async function(name,email,message){
    try{
        this.messages = this.messages.concat({name,email,message});
        await this.save();
        return this.messages;
    }catch(error){
        console.log(error);
    }

}

userSchema.methods.addCertificate = async function (title,selectedFile)
{
    try {
        this.certificates = this.certificates.concat({title,selectedFile});
        await this.save();
        return this.certificates;
    } catch (error) {
        console.log(error);
    }
}

const User = mongoose.model("USER", userSchema);

module.exports = User;