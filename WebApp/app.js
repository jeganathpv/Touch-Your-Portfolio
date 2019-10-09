var express = require('express');
var app = express();

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var today = new Date();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));

const port = 3000;

var config = {
    apiKey: "AIzaSyAle2YW7O_IlOH0cMe92IS2DBQ_eqTZuus",
    authDomain: "touch-your-portfolio.firebaseapp.com",
    databaseURL: "https://touch-your-portfolio.firebaseio.com",
    projectId: "touch-your-portfolio",
    storageBucket: "portfolio",
    messagingSenderId: "305343536981",
    appId: "1:305343536981:web:4b3382f848879106bc99dc",
    measurementId: "G-E30E86G5PN"
};

firebase.initializeApp(config);

app.post('/addFeedback', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var feedback = req.body.feedback;
    firebase.database().ref('Feedback ' + name).set({
        name: name,
        email: email,
        feedback: feedback
    });
    res.send("name submitted");
});

app.get('/index', (req, res) => {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log("Server Strted in Port: ", port);
});