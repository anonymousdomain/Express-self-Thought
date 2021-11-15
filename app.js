const express = require("express")
const path = require('path')
const members=require('./Members')
//init express
const app = express();

const log=(req,res,next)=>{
    console.log('init')
    next()
}

app.use(log);
app.get('/api/members', (req, res) =>res.json(members))

const Port = process.env.PORT || 5000

app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})