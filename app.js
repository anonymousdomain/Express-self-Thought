const express = require("express")
const path = require('path')
//init express
const app = express();
members = [
    { 
        id:1,
        name:"dawit",
        email:"devo@gmail.com",
        status:"active"
    },
    { 
        id:2,
        name:"kal",
        email:"kal@gmail.com",
        status:"active"
    },
    { 
        id:3,
        name:"nahom",
        email:"nahom@gmail.com",
        status:"inactive"
    },
];
app.get('/api/members', (req, res) =>res.json(members))

const Port = process.env.PORT || 5000

app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})