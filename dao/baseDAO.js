const Sequelize = require('sequelize');
var sequelize = require('../db/database.js');

const Student = sequelize.define('students', {
    userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    surName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobileNo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isActive: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Student.sync({
    force: false
}).then(() => {
    // Table created
    console.log('Table Synced!!!!');
});

module.exports = {
    saveStudent: function (data, resolve, reject) {
        var objData = JSON.parse(data);
        Student.create(objData).then(function (data) {
            console.log('Data Inserted Successfully!!!');
        return resolve(data);
        }).catch(function (err, data) {
            if (err) {
                console.log(err);
                console.log('Insertion did not happen ..see logs');
            }
        return reject(err);
        });
    }
};