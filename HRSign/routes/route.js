module.exports = function(app) {
const express = require('express');
const router = express.Router();
const db = require('../config/database');
const model = require('../modules/model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const employees = require('../controllers/controller');
var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "play.html");
		
	});

	 
	// Save a User to MySQL
	app.post('/api/employees/addtask', employees.addTask);
	app.post('/api/employees/addEmp', employees.addemp);
    app.post('/api/employees/save', employees.save);
	app.post('/api/employees/employee', employees.querylog);
	app.get('/api/employees/getdata', employees.getdata);
	app.post('/api/employees/del', employees.del);
	app.post('/api/employees/getOne', employees.getone);
	app.post('/api/employees/update', employees.edit);
	app.get('/api/employees/gettasks', employees.getTasks);
	app.use("/",router);
}
	