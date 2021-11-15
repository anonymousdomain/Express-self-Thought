const express = require("express")
const path = require('path')
const members=require('./Members')
const middleware =require('./Middleware')
//init express
const app = express();
app.use(log);
app.get('/api/members', (req, res) =>res.json(members))

const Port = process.env.PORT || 5000

app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})