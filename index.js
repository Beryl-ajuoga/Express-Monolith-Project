const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = 8080;

//Connecting my mongoDB server

mongoose.connect('mongodb+srv://berrylajuoga:admin@agility-project.jupbq27.mongodb.net/Agility',{
    useNewUrlParser:true, useUnifiedTopology:true
})
.then(()=>{
    console.log('connected to the server');
})
.catch((error)=>{
    console.error('error connecting to server : ', error);
});

//Defining the routes for home, about and contact pages

app.get('/', (req,res)=>{
    res.send('This is the home page')
});

app.get('/about' , (req, res)=>{
    res.send('This is the about page')
});

app.get('/contact', (req, res)=>{
    res.send('Contact us via +2541001002')
});




