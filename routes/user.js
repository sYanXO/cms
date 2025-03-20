const express = require('express');
const {Router} = require('express');

const userRouter = Router();
    userRouter.post("/signup",(req,res)=>{

    })
    
    userRouter.post("/signin",(req,res)=>{
    
    })

    userRouter.get("/purchasedCourses",(req,res)=>{ // users purchased courses only

    })


module.exports = {
    userRouter:userRouter
}