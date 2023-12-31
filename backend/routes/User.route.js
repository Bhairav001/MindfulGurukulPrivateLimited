const express = require("express");
const { UserModel } = require("../model/User.model");

const UserRouter = express.Router();


//API - http://localhost:8080/users/register
UserRouter.post("/register",async(req,res)=>{
     const payload = req.body;
     console.log(req.body)
     try {
        const user = new UserModel(payload);
         await user.save();
         console.log("user",user)
        res.send({msg:"New User Register"})
     } catch (error) {
        console.log({msg:`error while new user registered ${error.message}`})
     }
})



UserRouter.post("/login",async(req,res)=>{
    const {email} = req.body;
    console.log(email)
    try {
        const user = await UserModel.find({email:email});
        console.log("user",user)
        if(user.length>0){
            res.send({msg:"user login"})
        }else{
            res.send({msg:"Wrong Credintials"})
        }
    } catch (error) {
        console.log({msg:`error while loggin ${error.message}`})
    }
});

module.exports={
    UserRouter
}