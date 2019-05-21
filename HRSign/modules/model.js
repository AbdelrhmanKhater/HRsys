const Sequelize = require('sequelize');
const db = require('../config/database');

const model = db.define('employee' , {
    user : {
        type :Sequelize.STRING
    },
    pass : {
        type :Sequelize.STRING
    },
    company_id : {
        type :Sequelize.STRING
    },
    fname : {
        type :Sequelize.STRING
    },
    lname : {
        type :Sequelize.STRING
    }
});


module.exports = model ;
