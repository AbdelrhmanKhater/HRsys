const db = require('../config/database');
const employee = require('../modules/model');
const task = require('../modules/emps');
const emp = require('../modules/employees');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
 
// Save FormData - User to MySQL
exports.save = (req, res) => {
	console.log('Post a employee: ' + JSON.stringify(req.body));
	
	employee.create({
		user: req.body.user,
        pass: req.body.pass,
        company_id: req.body.company_id,
        fname: req.body.fname,
        lname: req.body.lname,
	},{
		attributes: {include: ['user', 'pass', 'company_id', 'fname', 'lname']}
	}).then(employee => {
		res.send(employee);
	}).catch(err=>{
		console.log(err);
	})
};
// Fetch all Users
exports.querylog = (req, res) => {
	console.log("Check employee" + JSON.stringify(req.body));
	employee.findOne({
		where: {user: req.body.user ,
			pass: req.body.pass	
		},attributes: ['user', 'pass']	
	}).then(users => {
		console.log("user " + users);
		if (!users.user)
		{
			res.send(false);
		}
	   else
	   {
		   res.send(true);
	   }
	});
};
//add task
exports.addTask = (req, res) => {
	console.log('Post a employee: ' + JSON.stringify(req.body));
	task.create({
		id_emp : req.body.id_emp,
		TaskName :  req.body.TaskName,
		TaskSupv : req.body.TaskSupv,
		TaskStart : req.body.TaskStart,
		TaskDead : req.body.TaskDead,
		Description : req.body.Description
	},{
		attributes: {include: ['id_emp', 'TaskName', 'TaskSupv', 'TaskStart', 'TaskDead', 'Description']}
	}).then(employee => {
		res.send(employee);
	}).catch(err=>{
		console.log(err);
	})
};
exports.addemp = (req, res) => {
	console.log("Post a employee" + JSON.stringify(req.body));
	emp.create({
		EmployeeName : req.body.EmployeeName,
		EmployeeAge :  req.body.EmployeeAge,
		EmployeeDep : req.body.EmployeeDep,
		EmployeeCity : req.body.EmployeeCity,
		EmployeeMobile : req.body.EmployeeMobile,
		EmployeeEmail : req.body.EmployeeEmail,
		EmployeeState : req.body.EmployeeState,
		EmployeeRole : req.body.EmployeeRole,
		EmployeeImage : req.body.EmployeeImage
	},{
		attributes: {include: ['EmployeeName', 'EmployeeAge', 'EmployeeDep', 'EmployeeCity', 'EmployeeMobile', 'EmployeeEmail', 'EmployeeState', 'EmployeeRole', "EmployeeImage"]}
	}).then(employee => {
		res.send(employee);
	}).catch(err=>{
		console.log(err);
	})
};
exports.getdata = (req, res) => {
	console.log("Data has arrived");
	emp.findAll({
		attributes:  ['id', 'EmployeeName', 'EmployeeAge', 'EmployeeDep', 'EmployeeCity', 'EmployeeMobile', 'EmployeeEmail', 'EmployeeState', 'EmployeeRole', "EmployeeImage"]
	}).then(users => {
	   res.send(users);
	});
};
exports.edit=(req,res) =>{
	console.log( req.body.EmployeeName);
	console.log('edit a employee: ' + JSON.stringify(req.body));
	emp.update({
		EmployeeName : req.body.EmployeeName,
		EmployeeAge :  req.body.EmployeeAge,
		EmployeeDep : req.body.EmployeeDep,
		EmployeeCity : req.body.EmployeeCity,
		EmployeeMobile : req.body.EmployeeMobile,
		EmployeeEmail : req.body.EmployeeEmail,
		EmployeeState : req.body.EmployeeState,
		EmployeeRole : req.body.EmployeeRole,
		EmployeeImage : req.body.EmployeeImage
	}, {where: {EmployeeName: req.body.EmployeeName}})
	.then(users => {
	})
};


exports.del=(req,res) =>{	
	console.log('edit a employee: ' + JSON.stringify(req.body));
	emp.destroy({where: {EmployeeName: req.body.name }})
		.then(users => {
			console.log("user " + users);

	})
};

exports.getone=(req,res) =>{	
	console.log('edit a employee: ' + JSON.stringify(req.body));
	employee.findOne({where: {EmployeeName: req.body.Name }},{
		attributes: {include: ['EmployeeName', 'EmployeeAge', 'EmployeeDep', 'EmployeeCity', 'EmployeeMobile', 'EmployeeEmail', 'EmployeeState', 'EmployeeRole', "EmployeeImage"]}
	}).then(users => {
			console.log("user " + users);
			res.send(users);
	})
};

exports.getTasks=(req,res) =>{	
	task.findAll({
		attributes: {include:['id_emp', 'TaskName', 'TaskSupv', 'TaskStart', 'TaskDead', 'Description']}
	}).then(users => {
			console.log("user " + users);
			res.send(users);
	})
};
	