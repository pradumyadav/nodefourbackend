

    const express = require("express")
    const cors= require("cors")
const controller = require("./controller/controller");
const home = require("./controller/home");
//const auth = require("./auth/auth");
    const app=express()
app.use(cors({
    origin:"*"
}))

    app.use(express.json()) ;
    app.use("/api",controller)
    app.use('/',home)


    app.listen(4005,()=>{
        try{
            console.log("Running on 4005")
        }
        catch(err){
            console.log("Error", err)
        }
    })