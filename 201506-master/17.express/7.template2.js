/**
  在node.js 默认使用ejs和jade模板 ejs
   1.安装 ejs
 2.
 **/
var fs = require('fs');
var express = require('express');
var app = express();
app.set('view engine','html');//指定模板引擎
app.set('views','./views');//指定模板存放的路径
app.engine('html',require('ejs').__express);

app.get('/',function(req,res){
    // ./views/user/add
    render('user/add',{username:'zfpx',age:7},res);
});
app.get('/del',function(res,res){
    res.render('user/delete');
});
app.listen(8080);

function render(path,data,res){
    var tmpl = fs.readFileSync(app.get('views')+'/'+path+'.'+app.get('view engine'),'utf8');
    var result = tmpl.replace(/<%=([\s\S]+?)%>/g,function(match,code){
        return data[code];
    });
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(result);
}