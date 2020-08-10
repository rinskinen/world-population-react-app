const fetch = require("node-fetch");

function getWeather() {
    return fetch('http://localhost:3002/api/weather', {mode: 'cors'})
        .then(res => res.json())
        .catch((err) => { throw err })
}

function getWeatherPIC() {
    return fetch('http://localhost:3002/api/weatherpic', {mode: 'cors'})
        .then(res => res.blob())
        .catch((err) => { throw err })
}

module.exports = { getWeather, getWeatherPIC }