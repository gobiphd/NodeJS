/**
 * Import Package
 */
var express = require('express');
var path = require('path');
var handler = require('../handler/baseHandler.js');

//Instance Creation
var route = express.Router();

route.get('/StudentForm', function(req, res){
    res.render('StudentForm',{data:'Data updated Successfully!!!!'});
    res.end();
});

route.post('/AddStudent', function(req, res){
    new Promise(function (resolve, reject) {
        var formData = JSON.stringify(req.body);
        handler.saveStudent(formData, resolve, reject);
    }).then(function(success){
        res.json({data:success});
        res.end();
    }).catch(function(err){
        res.json({data:err});
        res.end();
    });
});

route.post('/EditStudent', function(req, res){
    res.render('StudentForm',{data:'Data updated Successfully!!!!'});
});

route.post('/DeleteStudent', function(req, res){
    res.render('StudentForm',{data:'Data updated Successfully!!!!'});
});

route.post('/FetchStudent', function(req, res){
    res.render('StudentForm',{data:'Data updated Successfully!!!!'});
});

route.post('/FetchAllStudent', function(req, res){
    res.render('StudentForm',{data:'Data updated Successfully!!!!'});
});

module.exports = route;


