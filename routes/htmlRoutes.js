//dependencies
const express = require('express');
const path = require('path');
const HTMLrouter = express.Router();

//routes
HTMLrouter.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/index"));
});

HTMLrouter.get("exercise",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

HTMLrouter.get("stats",(req,res)=>{
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = HTMLrouter;