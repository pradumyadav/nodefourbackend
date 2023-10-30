const auth = require("../auth/auth")



const home =require("express").Router()

home.get("/home",(req,res)=>{
    res.send("This is our home page")
})

module.exports= home ;