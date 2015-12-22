/**
  在node.js 默认使用ejs和jade模板 ejs
   1.安装 ejs
 2.
 **/
var express = require('express');
var app = express();
app.set('view engine','ejs');//指定模板引擎
app.set('views','./views');//指定模板存放的路径

app.get('/',function(res,res){
    res.render('user/add');
});
app.get('/del',function(res,res){
    res.render('user/delete');
});
app.listen(8080);