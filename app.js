const express = require("express")
const { engine } = require('express-handlebars')
const path = require('path')
const members=require('./Members')
const log = require('./Middleware')
//init express
const app = express();
//app.use(log);

//Handlebars middleware
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.set('views', './views')

app.get('/', (req, res) => res.render('index',{
    appTitle:"devo Member app",
    members:members
}))
//body parser meddleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
//members api routes
app.use('/api/members', require('./routes/api/members'))

const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})

