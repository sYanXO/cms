const express = require('express');
const {Router} = require('express');

const courseRouter = Router();
    courseRouter.get("/preview",(req,res)=>{ // global courses ep
        res.json({
            msg:"Courses preview Page"
        })
    })
    courseRouter.post("/purchase",(req,res)=>{
        
    })


module.exports ={
    courseRouter:courseRouter
}