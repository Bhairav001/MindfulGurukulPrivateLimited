const express = require("express");
const { UserModel } = require("../model/User.model");
const jwt = require("jsonwebtoken")
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
            const token = jwt.sign({userID:user[0]._id},"masai")
            res.send({msg:"user login","token":token})
        }else{
            res.send({msg:"Wrong Credintials"})
        }
    } catch (error) {
        console.log({msg:`error while loggin ${error.message}`})
    }
});

UserRouter.get("/",async(req,res)=>{
    try {
        const users = await UserModel.find(req.body)
        res.send(users)
    } catch (error) {
        console.log(error.message)
    }
})
module.exports={
    UserRouter
}