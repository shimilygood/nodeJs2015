/**

 **/
var express = require('express');
var path = require('path');
var app = express();
var url = require('url');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now()+'.'+file.mimetype.slice(file.mimetype.indexOf('/')+1))
    }
})
var upload = multer({ storage:storage})
//app.use(bodyParser.urlencoded({extended:true}));//req.body
/*app.use(function(req,res,next){
    var form;
    req.setEncoding('utf8');
    req.on('data',function(data){
        form = data;
    });
    req.on('end',function(){
        req.body = require('querystring').parse(form);
        next();
    });
});*/
/**
 * 1. 查询字符串 req.query
 * 2. 请求体 body
 * 3. header
 */
app.get('/',function(req,res,next){
   fs.createReadStream('./post.html').pipe(res);
});
app.post('/post',upload.fields([
    { name: 'avatar1', maxCount: 1 },
    { name: 'avatar2', maxCount: 8 }
]),function(req,res){
    console.log(req.files);
    console.log(req.body);
    res.send(req.body);
});
//路径参数
app.get('/user/delete/:id',function(req,res){
    res.end(req.params.id);
});
//路径参数
app.get('/user/add/:username/:password',function(req,res){
    console.log(req.params);
    res.end(req.params.username+req.params.password);
});
app.listen(8080);