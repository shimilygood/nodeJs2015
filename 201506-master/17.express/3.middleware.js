/**
  中间件
 **/

var express = require('express');
var app = express();
var path = require('path');
//中央
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
  res.mny = 100;
  next();
});
//省一级
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.mny = res.mny-20;
    next();
});
//市里一级
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.mny = res.mny-50;
    //res.reason = 'money lost';
    next('money lost');
});
//村
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.mny = res.mny-30;
    console.log('村里');
    res.end('no money');
    //next();
});
//农民
app.use('/mny',function(req,res,next){///是否要继续调用下一个中间件
    res.end(''+res.mny);//最终得到的补贴
});
//错误处理中间件
/*app.use('/mny',function(err,req,res,next){
    console.log(err,'没关系啦');
    next();
});*/
app.use('/mny',function(req,res,next){
    console.log('write log');
});
app.listen(8080);