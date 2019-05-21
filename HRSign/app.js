const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Sequelize = require('sequelize');
//set static folder 
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')));
global.__basedir = __dirname;
//Database 

const db =require('./config/database');


// Test Db 

db.authenticate()
    .then (()=> console.log('Database Connected ......'))
    .catch(err => console.log('Error ' + err))





require('./routes/route')(app);

const PORT = process.env.PORT || 8081 ;




app.listen(PORT , console.log(`Srver Started On Port ${PORT}`));