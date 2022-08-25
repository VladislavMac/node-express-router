import express from "express";
import path from "path";

const __dirname = path.resolve();
const PORT = process.env.PORT || 3100;

const app = express();

app.use(express.static(path.resolve(__dirname, 'static')))

app.set('view engine', 'ejs'); // Создаем ejs
app.set('views', 'static/view') // Переназначаем папку с views в static

// route

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/about.html', (req, res) =>{
    res.render('about') 
})

app.get('/projects.html', (req, res) =>{
    res.render('projects') 
})

// start server

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT} PORT`)
})

