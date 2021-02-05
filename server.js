//dependency import
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//create//assign express server
const server = express();
// set port to listen on
const PORT = process.env.PORT || 2727;
//middleware for the server to read and write in the format needed where and when.
server.use(express.urlencoded({extended:true}));
server.use(express.json());

// tell server to use morgan with tiny preset
server.use(morgan('tiny'));

server.listen(PORT,()=>{console.log("server is listening on port" + PORT)})