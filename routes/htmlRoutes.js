//dependencies
const express = require('express');
const path = require('path');
const HtmlRouter = express.Router();

//routes
HtmlRouter.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index"));
});

HtmlRouter.get("/exercise",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

HtmlRouter.get("/stats",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//export routes
module.exports = HtmlRouter;