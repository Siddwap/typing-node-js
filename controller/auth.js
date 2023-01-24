const User = require('../models/user'); 
const path = require('path');
const { models } = require('mongoose');

const loginController = async (req, res)=>{
    console.log('Login Controller Working...');
    const email = req.body.email;
    const password = req.body.password;
    if(req.body && (!req.body.email || !req.body.password)){
        res.send("Email and Password are required")
        return;
    }
    const user = await User.findOne({email});
    if(!user){
        res.send("User Not Found");
        return;
    }
    if(password !== user.password){
        res.send("Invalid Password");
        return;
    }
    res.sendFile(path.join(__dirname, '../models/typingtest.html'));
};

const signupController = async (req, res)=>{
    console.log('Signup Controller Working...');
    const email = req.body.email;
    const password = req.body.password;
    if(req.body && (!req.body.email || !req.body.password)){
        res.send("Email and Password are required")
        return;
    }
    const user = await User.findOne({email});
    if(user){
        res.send("Email Already Exists. Try With Another Email...");
        return;
    }
    const newUser = new User({email,password});
    await newUser.save();
    console.log(newUser);
    res.send(`Signup Successfully... You can Login Now <a href="../../">Click Here</a>`);

};

module.exports = {
    loginController,signupController
}