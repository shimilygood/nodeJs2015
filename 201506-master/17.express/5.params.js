/**

 **/
var express = require('express');
var path = require('path');
var app = express();
// /images/gigi.jpg /style.css /user.js /test.js
var url = require('url');
var fs = require('fs');
app.use(express.static(path.join(__dirname,'public')));
/*
app.use(function(req,res,next){
    /!*var out = fs.createReadStream('./public'+req.path);
    out.on('error',function(){
        next();
    })
    out.pipe(res);*!/
    var path = './public'+req.path;
    if(path.slice(path.length-1)=='/'){
        path+='index.html';
    }
    if(fs.existsSync(path)){
        fs.createReadStream(path).pipe(res);
    }else{
        next();
    }
})*/

app.use(function(req,res,next){
    req.host = req.header.host;
    req.path = require('url').parse(req.url).pathname;
    next();
});
app.get('/home',function(req,res,next){
    console.log(req.host);//主机名
    console.log(req.path);//URL路径名
    res.end('/home');
});
app.listen(8080);