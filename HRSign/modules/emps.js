const Sequelize = require('sequelize');
const db = require('../config/database');

const task = db.define('task' , {
    id_emp : {
        type :Sequelize.INTEGER
    },
    TaskName : { 
        type :Sequelize.STRING
    },
    TaskSupv : {
        type :Sequelize.STRING
    },
    TasKStart : {
        type :Sequelize.STRING
    },
    TaskDead : {
        type :Sequelize.STRING
    },
    Description :{
        type :Sequelize.STRING
    }
});


module.exports = task;
