const auth = require("../auth/auth")



const home =require("express").Router()

home.get("/",auth,(req,res)=>{
    res.send("This is our home page")
})

module.exports= home ;