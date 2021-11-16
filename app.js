
import express from "express"
import { engine } from "express-handlebars"
import path from "path"
import router from "./routes/api/members.js"
import members from "./Members.js"

//init express
const app = express();

//Handlebars middleware
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.set('views', './views')

app.get('/', (req, res) => res.render('index',{
    appTitle:"devo Member app",
    members:members
}))
app.get('/api/members', (req, res) => res.render('index',{

}))

//body parser meddleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }))
//members api routes
app.use('/api/members', router)

const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`server running on port ${Port}`)
})

