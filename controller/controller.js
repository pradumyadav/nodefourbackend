const { register, login } = require("../callbackfunc/callbackfunc");


const controller = require("express").Router()

    controller.post("/register",register)
    controller.post("/login",login)

module.exports=controller ;