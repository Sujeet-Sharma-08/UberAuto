const User = require('../models/userModel.js')
const userService = require('../services/user.service.js');
const {validationResult} = require('express-validator');

module.exports.registerUser = async(req,res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            message:"Validation Error",
            errors:errors.array()});
    }

  
    const {fullname, email, password} = req.body; 

    const hashedPassword = await User.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hashedPassword
    })

    const token = user.generateAuthToken();

    res.status(201).json({token, user});
    next();
}


//login Controller

exports.loginUser = async(req,res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            message:"Validation Error",
            errors:errors.array()
        });
    }
    const {email, password} = req.body;

    const existingUser = await User.findOne({email}).select("+password");//means email and paasword both will be selected
    
    if(!existingUser){
        return res.status(401).json("Invalid email or password");
    }

    const isMatch = await existingUser.comparePassword(password);

    if(!isMatch){
        return res.status(401).json("Invalid email or password")
    }

    const token = existingUser.generateAuthToken();


    res.status(200).json({token,existingUser});

}