const express = require('express');
const path = require("path");
const app = express();
const morgan = require('morgan');
//import { engine } from 'express-handlebars';
const hand = require("express-handlebars");
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// http login
//app.use(morgan('combined'))
// template engine
app.engine('hbs', hand.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'resources/views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));



// route init
route(app);



app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
});


