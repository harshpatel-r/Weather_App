const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = process.env.FORCAST_URL+`${latitude},${longitude}`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to connect to weather server', undefined);
        } else if (body.error) {
            callback('unable to find location', undefined);
        } else {
            let data = body.current;
            callback(undefined, `It is currently ${data.temperature} degrees out. It feels like ${data.feelslike} degrees out.`);
        }
    })

}

module.exports = forecast; 
