const express=require("express")
const path =require('path')
//init express
const app=express();

app.use(express.static(path.join(__dirname,'public')))
const Port=process.env.PORT||5000

app.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})