var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));//解析form /applicatoin-www-form-urlencoded
app.get('/user',function(req,res){
    res.send({username:'zfpx',email:'zfpx@126.com'});
});
app.post('/user',function(req,res){
    var user = req.body;
    console.log(user);
    res.send(user);
});
app.get('/',function (req,res){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.sendfile('./2.form.html');
});
app.get('/angular.js',function (req,res){
    res.setHeader('Content-Type','text/javascript;charset=utf-8');
    res.sendfile('./angular.js');
});
app.listen(80);