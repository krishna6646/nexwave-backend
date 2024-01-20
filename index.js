const express = require("express");
const cors = require("cors");
require('./db/config');
//const mongoose = require("mongoose");
const User = require("./db/User");
const app= express(); 
app.use(express.json());
app.use(cors());

app.post("/register",async(req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result);
})
console.log("connected");

app.post("/login",async(req,res)=>{
    if(req.body.password && req.body.email)
    {
        let user = await User.findOne(req.body);
        if(user)
        {
            res.send(user);
        }
        else
        {
            res.send({result:"No user found"})
        }
    }
    else{
        res.send({result:"No user found"})
    }
   

   
})

app.listen(5000);