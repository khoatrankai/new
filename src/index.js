const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const route = require('./routes')
const methodOverride = require('method-override')
const app = express()
const port = 5000;
const host = '0.0.0.0'
const db = require('./config/db')

db.connect();



app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b
  }
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))
// console.log(path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

//ROUTE
route(app)


app.listen(port, host);
console.log(`running on http://${host}:${port}`);
