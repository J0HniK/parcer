const request = require("request");
const fs = require("fs");

let objShazam = {}

request('https://www.shazam.com/shazam/v2/ru/UA/web/-/tracks/world-chart-world?pageSize=200&startFrom=0', (err, response, json) => {
    if (!err && response.statusCode === 200) {
        let obj = JSON.parse(json);
        for (let i = 0; i < 200; i++) {
            let name = obj['chart'][i]['share']['subject']
            let link = obj['chart'][i]['share']['href']
            objShazam[i] = {
                [name]: {
                    link
                }
            }
        }
    }
    // console.log(objShazam);
    var save = 1;

    if (save != 0) {
        var obj = JSON.stringify(objShazam);
        fs.appendFileSync('JSONShazam.json', obj);
    }
})