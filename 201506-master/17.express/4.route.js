/**
 *
 **/

var express = require('express');
var app = express();
var path = require('path');
app.use('/user',function(req,res,next){
    console.log('中间件1');
    next();
});
app.use('/user',function(req,res,next){
    console.log('中间件2');
    next();
});
// /user/add /user/delete
app.use('/user',require('./route/user'));
app.use('/user',function(req,res,next){
    console.log('中间件3');
    next();
});
//app.use('/article',require('./route/article'));
/*app.get('/home',function(req,res){
    res.end('get home');
});
app.post('/home',function(req,res){
    res.end('post home');
});*/
var fs = require('fs');
app.use(function(req,res,next){
    res.setHeader('Content-Type','text/html;charset=utf-8');
    next();
});
/*app.use(function(req,res,next){
    var log = req.method+'-'+req.url+'-'+new Date().toLocaleString()+'\r\n';
    fs.appendFile('access.log',log,function(err){
        next();
    })
});*/
app.use(function(req,res,next){
    var end = res.end;
    var write = res.write;
    res.data = '';
    res.write = function(data){
        res.data+=data;
        write.apply(res,Array.prototype.slice.call(arguments,0));
    }
    res.end = function(data){
        res.data+=data;
        var length = res.data.length;
        var log = req.method+' '+req.url+' '+new Date().toLocaleString()+' '+length+' '+res.data+'\r\n';
        fs.appendFileSync('access.log',log);
        end.apply(res,Array.prototype.slice.call(arguments,0));
    }
    next();
});
//匹配所有的方法
app.all('/home',function(req,res){
    res.write('我好孤独');
    res.end('我想要一个家');
});
app.all('/home2',function(req,res){
    res.end('我想要两个家');
});
app.listen(8080);