const express = require("express");
const router = express.Router();
require('../db/conn');
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/Authenticate");


router.get('/',async (req,res)=>{
    res.send(`Hello backend from router`);
});
router.post('/register',async (req,res)=>{

    const {name,email,password,regno,dept,year} = req.body;
    if(!name || !email || !password || !regno || !dept || !year){
        return res.status(422).json({error:"Fill all fields"})
    }
    try{
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"User already exist"})
        }else{
            const user = new User({name,email,password,regno,dept,year});
            await user.save();
            res.status(201).json({message:"User created successfully"});
        }
    
    }catch(err){
        console.log(err);

    }
   });



router.post('/login',async (req,res)=>{

    try{
       const {email,password} = req.body;
       if(!email || !password){
           return res.status(400).json({error:"Fill all fields"})
       }
         const userLogin = await User.findOne({email:email});
            if(userLogin){
                const isMatch = await bcrypt.compare(password,userLogin.password);

                const token =await userLogin.generateAuthToken();
                res.cookie('jwtoken',token,{
                    httpOnly:true,
                    expires:new Date(Date.now() + 3600000)
                });
                    if(!isMatch){
                        res.status(400).json({error:"Invalid credentials"});
                    }else{
                        res.status(200).json({message:"signin success"});
            }
            }else{
                res.status(400).json({error:"Invalid credentials"});
            }

    }catch(err){
        console.log(err);
    }
});

router.get('/profile',authenticate,(req,res)=>{
    console.log(`about`);
    res.send(req.rootUser);
});

router.get('/getData',authenticate,(req,res)=>{
    console.log(`Contact`);
    res.send(req.rootUser);
})
// contact us
router.post('/contact',authenticate, async(req,res)=>{
    try{
        const {name,email,message} =req.body;
        if(!name || !email  || !message){
            console.log("error in contact");
            return res.status(422).json({error:"Fill all contact fields"})
        }
        const userContact = await User.findOne({_id:req.rootUserId});
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,message);
            await userContact.save();
           return res.status(201).json({message:"Message sent successfully"});
        }

    }catch(error){
        console.log(error);
    }
});
router.post('/certificate',authenticate,async(req,res)=>{
        try {
        const{title,selectedFile}=req.body;
        if(!title || !selectedFile)
        {
            console.log("error in certificate")
            return res.status(422).json({error : "Please fill all fields"})
        }
        const dataExist = await User.findOne({_id:req.rootUserId})
        if(dataExist)
        {
            console.log("hello");
            const userCertificate = await dataExist.addCertificate(title,selectedFile);
            await dataExist.save();
            return res.status(201).json({message:"DATA sabved"})
        }
        } catch (error) {
            console.log("inga than error"+error);
        }
    });
// logout

router.get('/logout',(req,res)=>{
    console.log(`logout`);
    // res.send(`Hello about`);
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send(`userLogout`);
});
router.get('/getAllData',async(req,res)=>{
    try {
        const allCertificates =await User.find();
        res.status(200).json(allCertificates);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

module.exports = router;