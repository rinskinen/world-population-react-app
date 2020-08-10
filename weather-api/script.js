// class QueryString {

//     constructor() {
//         this._queryString = 'api.openweathermap.org/data/2.5/weather';
//         this._apikey = '&apikey=84f3a53415cf69f2c554ff91f6d86032';
//     }
//     addCity(capitalcity) {
//         this._queryString += '?q=' + capitalcity;
//     }
// }
const fetch = require("node-fetch");

const urlstart = "https://api.openweathermap.org/data/2.5/weather?q=";

const apikey = "&apikey=84f3a53415cf69f2c554ff91f6d86032";

const urlpic = "http://openweathermap.org/img/w/";

const clearskyDAY = "01d.png"

const clearskyNIGHT = "01n.png"

const fewcloudsDAY = "02d.png"

const fewcloudsNIGHT = "02n.png"

const apikeypic = "?apikey=84f3a53415cf69f2c554ff91f6d86032";

function getHelsinki() {
    let url = urlstart + 'Helsinki' + apikey;

    return fetch(url, { mode: 'cors' })
        .then(res => res.json())
        .catch((err) => { throw err })
};

function getClearSkyDAY() {
    let url = urlpic + clearskyDAY;
    console.log(url);
    // return Promise.resolve(url);

    return fetch(url, { mode: 'cors' })
        .then(res => res.blob())
        // .then(blob => {
        //     console.log(blob);
        //     return URL.createObjectURL(blob);
        // })
        .catch((err) => { throw err })


}

module.exports = { getHelsinki, getClearSkyDAY }

// export default QueryString;