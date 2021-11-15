const express=require("express")

//init express
const app=express();

app.get('/',(req,res)=>{
    res.send('hello world')
}).listen(5000)