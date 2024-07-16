const express = require('express');
const path = require("path");
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override')
const hand = require("express-handlebars");
const port = 3000;
const db = require('./config/db');
const route = require("./routes/index");


// connect db
db.connect();


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// http login
app.use(morgan('combined'))
// template engine
app.engine('hbs', hand.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'resources/views', 'partials'),
  helpers: {
    sum : (a, b) => a + b,
    divide: (a , b) => a - b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(methodOverride('_method'))

//  sử dụng tệp tĩnh
app.use(express.static(path.join(__dirname, 'src/public')));

// route init
route(app);




app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
});


