const express=require("express")
const path =require('path')
//init express
const app=express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

const Port=process.env.PORT||5000

app.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})