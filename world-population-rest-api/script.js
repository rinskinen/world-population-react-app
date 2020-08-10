const express = require('express');
const app = express();
const dbserv = require("./dbuserservice");
const weather = require("./weather");
const cors = require('cors');
const request = require('request');

app.use(cors());

app.use(express.json());
var router = express.Router();

router.get('/test', function (req, res) {
    dbserv.countries().then(data => { res.json(data) }); // user_serv.users() returns a promise so this is why we need to use .then(data => { res.json(data) });
});

router.get('/africa', function (req, res) {
    dbserv.allafrica().then(data => {res.json(data) });
});

router.get('/asia', function (req, res) {
    dbserv.allasia().then(data => {res.json(data) });
});

router.get('/antarctica', function (req, res) {
    dbserv.allantarctica().then(data => {res.json(data) });
});

router.get('/europe', function (req, res) {
    dbserv.alleurope().then(data => {res.json(data) });
});

router.get('/oceania', function (req, res) {
    dbserv.alloceania().then(data => {res.json(data) });
});

router.get('/northamerica', function (req, res) {
    dbserv.allnorthamerica().then(data => {res.json(data) });
});

router.get('/southamerica', function (req, res) {
    dbserv.allsouthamerica().then(data => {res.json(data) });
});

router.get('/capitals', function (req, res) {
    dbserv.capitals().then(data => {res.json(data) });
});

router.get('/weather', function(req, res) {
    weather.getWeather().then(data => {res.json(data) });
})

router.get('/weatherpic', function(req, res) {
    var requestSettings = {
        url: 'http://localhost:3002/api/weatherpic',
        method: 'GET',
        encoding: null
    };

    request(requestSettings, function(error, response, body) {
        res.set('Content-Type', 'image/png');
        res.send(body);
    });
})

app.use('/api', router);

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});