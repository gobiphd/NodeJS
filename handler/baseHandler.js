var basedao = require('../dao/baseDAO.js');

module.exports = {
    saveStudent : function (studentData, resolve, reject){
            return basedao.saveStudent(studentData, resolve, reject);         
    }
};
