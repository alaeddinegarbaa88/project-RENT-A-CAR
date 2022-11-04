//Importes libreries
const express = require("express");
const { createUser, login } = require("../controllers/user");

//Define Route
const userRouter = express.Router();
//Add new user
userRouter.post("/createuser",createUser);
//Login 
userRouter.post("/login",login);

module.exports = userRouter
