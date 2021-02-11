//*dependencies*
const express = require("express");
//logging middleware
const logger = require("morgan");
//define a port to utilize for messages
const PORT = process.env.PORT || 3001;
//define the server
const Server = express();
Server.use(express.urlencoded({ extended: true }));
Server.use(express.json());
//tells server to use logger
Server.use(logger("dev"));
//tells server where to find static files
Server.use(express.static("public"));
//defines routes
require("./routes/apiRoutes")(Server);
require("./routes/htmlRoutes")(Server);

Server.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});