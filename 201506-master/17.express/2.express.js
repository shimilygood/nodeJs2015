/**
 * express
 * 模板解析
 * 静态文件
 * (中间件 路由控制)
 * 异常处理
 * 1. npm install express
 * 2.
 **/

var express = require('express');
var app = express();//创建一个app


app.get('/',function(req,res){//配置路由 针对不同的路径进行不同的处理
    res.end('hello world');
});
app.get('/contact',function(req,res){
    res.send('welcome to concat us');
});
app.get('/statcode',function(req,res){
    res.sendStatus(404);
});
app.post('/person',function(req,res){
    res.send({name:'zfpx'});
});

app.get('*',function(req,res){
    res.sendStatus(404);
});

app.listen(8080);//开始在8080端口上进行监听

