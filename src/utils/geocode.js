const request = require('postman-request');

const geocode = (address, callback) => {
    const url = process.env.GEOCODE_URL+`${address}&limit=1`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback(`unable to connect to location service!`, undefined);
        } else if (body.error || body.data.length === 0) {
            callback("unable to find location. try another search.", undefined);
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location : body.data[0].label
            })
        }
    });
}

module.exports = geocode;