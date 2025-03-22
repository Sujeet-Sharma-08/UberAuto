const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const DBconnection = require('./db/db.js');
DBconnection();

const cors = require('cors');
app.use(cors());

const userRoutes = require("./routes/userRoute.js");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRoutes);



app.get('/', (req,res)=>{
    res.send("hello World");
})


module.exports = app;