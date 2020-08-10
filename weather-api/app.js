const express = require('express');
const app = express();
const dbserv = require("./script.js");
const request = require("request");

app.use(express.json());
var router = express.Router();

router.get('/weather', function (req, res) {
    dbserv.getHelsinki().then(data => { res.json(data) }); // user_serv.users() returns a promise so this is why we need to use .then(data => { res.json(data) });
});

router.get('/weatherpic', function (req, res) {

    var requestSettings = {
        url: 'http://openweathermap.org/img/w/01d.png',
        method: 'GET',
        encoding: null
    };

    request(requestSettings, function(error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
});

app.use('/api', router);

app.listen(3002, function () {
    console.log('Express server is listening on port 3002');
});