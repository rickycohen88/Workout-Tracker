//dependencies
const express = require('express');
const path = require('path');
const ApiRouter = express.Router();

//routes
ApiRouter.get("api/workouts",(req,res) => {});

ApiRouter.post("api/workouts",(req,res) => {});

ApiRouter.put("api/workouts",(req,res) => {});

ApiRouter.get("api/workouts/range",(req,res)=>{})
//export routes
module.exports = ApiRouter;