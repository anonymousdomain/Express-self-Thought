const app=require("express")()

//init express
//const app=express();

app.get('/',(req,res)=>{
    res.send('hello world')
})

const Port=process.env.PORT||5000

app.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
})