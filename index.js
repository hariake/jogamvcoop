const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.use(sessions({
    secret: "thisismysecretkey",
    saveUninitialized: true,
    cookie :{maxAge: 1000 * 60 * 60 * 24},
    resave: false
}))

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass()

const articleRoutes = require('./routes/articles');
app.use('/', articleRoutes);

const authorRoutes = require('./routes/author');
app.use('/', authorRoutes);

app.listen(3025, () =>{
    console.log('App is started at http://localhost:3025')
});