const User =  require('../models/userModel.js')

module.exports.createUser = async({firstname, lastname , email, password})=>{
    if(!firstname|| !email || !password){
        throw new error("All fields are required!")
    }

    // const existingUser = await User.find({email});
    // if(existingUser){
    //     throw new error("user already exists, please login!");
    // }

    const newUser = User.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password  
      })

      return newUser;
}