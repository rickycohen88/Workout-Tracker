//dependency import
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const HTMLrouter = require('./routes/htmlRoutes');
const ApiRouter = require('./routes/apiRoutes');

//create//assign express server
const server = express();
// set port to listen on
const PORT = process.env.PORT || 3001;
//middleware for the server to read and write in the format needed where and when.
server.use(express.urlencoded({extended:true}));
server.use(express.json());

//tells the server where to find public files
server.use(express.static('./public'));
// tell server to use morgan with tiny preset
server.use(morgan('tiny'));

//setting up routing
server.use(HTMLrouter);
server.use(ApiRouter);

//mongo database
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/fitnessTracker',
 {
        useNewUrlParser: true, 
     useUnifiedTopology: true,
         useCreateIndex: true,
       useFindAndModify: false,
 }); // , autoIndex: false 


server.listen(PORT,()=>{console.log(`server is listening on port ${PORT}`)})