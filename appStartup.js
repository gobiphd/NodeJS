/**
 * Import Package
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//Import JS
var sms = require('./routes/baseRoutes.js');
//var mail = require('./utils/mailConfig.js');

//Instance Creation
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views',path.join(__dirname,'templates'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'node_modules/jquery/dist')));


//Basic Mapping Start

app.get('/',function(req,res){
    console.log('Welcome To our Project!!!');
    res.end();
});

// Module Declaration
app.use('/sms',sms);

// Server Creation
var server = app.listen(5000, function(){
    console.log('Server is Running!!! : '+server.address().port);
});