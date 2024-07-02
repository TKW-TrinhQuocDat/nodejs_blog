const express = require('express');
const path = require("path");
const app = express();
const morgan = require('morgan');
//import { engine } from 'express-handlebars';
const hand = require("express-handlebars");
const port = 3000;



app.use(express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"))


// http login
app.use(morgan('combined'))
// template engine
app.engine('hbs', hand.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'resources/views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


console.log("path " + __dirname + '/resources/views')

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
});


