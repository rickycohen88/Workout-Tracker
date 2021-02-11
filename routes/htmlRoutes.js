//dependencies
const path = require("path");

//defines the routes inside an function to be exported
module.exports = function(app) {

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/stats.html'));
    });

    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/exercise.html'));
    });
}