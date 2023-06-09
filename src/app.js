const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();
const port = process.env.PORT || 3000;

//Define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('/', (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Harsh Patel"
    })
});

app.get('/about', (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Harsh Patel",
        developer : "Developer : Harsh Patel",
        email : "Email : harsh239001@gmail.com"
    })
});

app.get('/help', (req, res) => {
    res.render("help", {
        title: 'Help',
        name: "Harsh Patel",
        helptext: 'If you find any bug in this app then contact me on this email id: harsh239001@gmail.com'
    })
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'you must provide a address term'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error });
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            });
        })
    })
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Harsh Patel',
        errorMessage: "Help Page not found.."
    })
});

app.get('/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Harsh Patel',
        errorMessage: "Page not found.."
    })
});



app.listen(port, () => {
    console.log('server is up on port' + port);
})
