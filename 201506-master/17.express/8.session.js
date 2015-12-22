/**
  在node.js 默认使用ejs和jade模板 ejs
   1.安装 ejs
 2.
 **/
var fs = require('fs');
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.set('view engine','html');//指定模板引擎
app.set('views','./views');//指定模板存放的路径
app.engine('html',require('ejs').__express);
app.use(cookieParser());// req.cookie
app.use(session({ // req.session
    resave:true,
    saveUninitialized:true,
    secret:'zfpxkey',
    cookie:{
        maxAge:1000*10
    }
}));
app.get('/reg',function(req,res){
    //req.session.username = 'zhangsan';
    res.end('success');
});
app.get('/home',function(req,res){
    res.end(req.session.username);
});
app.listen(8080);