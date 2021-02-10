//dependencies
const express = require('express');
const path = require('path');
const ApiRouter = express.Router();
const schema = require('../models/schema');
//routes
ApiRouter.get("api/workouts",(req,res) => {
    schema.find({})
    .sort({date: -1})
    .then()
});

ApiRouter.post("api/workouts",(req,res) => {});

ApiRouter.put("api/workouts/:id",(req,res) => {});

ApiRouter.get("api/workouts/range",(req,res)=>{})
//export routes
module.exports = ApiRouter;