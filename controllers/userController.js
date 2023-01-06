const User = require("../models/userModel")

const bcrypt = require("bcryptjs")

const registerUser = async(req,res)=>{
    try{
        new User({
            
        })

    }catch(error){
        res.status(400).send(error.message)
        console.log(error.message)
    }
}