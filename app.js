const express = require("express")
const path = require('path')
const members = require('./Members')
const log = require('./Middleware')
//init express
const app = express();
//app.use(log);
app.get('/api/members', (req, res) => res.json(members))

app.get('/api/members/:id', (req, res) => {
    const idFound=members.some(member=>member.id===parseInt(req.params.id));
    if(idFound){
        res.json(members.filter(member=>member.id===parseInt(req.params.id)));
    }else{
        res.status(400).json(`memebr with the id of ${req.params.id} is not found`)
    }
   
})


const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})

0912062482