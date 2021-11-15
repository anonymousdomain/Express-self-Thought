const express = require("express")
const path = require('path')
const log = require('./Middleware')
//init express
const app = express();
//app.use(log);
//members api routes
app.use('/api/members', require('./routes/api/members'))

const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})

0912062482