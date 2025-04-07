const express = require('express');
const {Router} = require('express');

const adminRouter = Router();


adminRouter.post("/signup",()=>{

})

adminRouter.post("/signin",()=>{

})

adminRouter.post("/createCourse",()=>{

})

adminRouter.put("/editcourse",()=>{

})

adminRouter.put("/createdCourses",()=>{

})

module.exports = {
    adminRouter:adminRouter
}