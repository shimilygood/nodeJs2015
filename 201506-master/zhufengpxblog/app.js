var express = require('express');
var path = require('path');//处理路径
var favicon = require('serve-favicon');//收藏夹图标
var logger = require('morgan');//写日志的
var cookieParser = require('cookie-parser');//cookie  req.cookies
var bodyParser = require('body-parser');//解析请求体 req.body
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var routes = require('./routes/index');//主页路由
var users = require('./routes/users');//用户路由
var articles = require('./routes/articles');
var app = express();
require('./utils');
require('./models/model');
// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模板的存放路径 res.render('index')
app.set('view engine', 'html');//模板引擎
app.engine('html',require('ejs').__express);
// 把favicon.ico放在public下面
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));//使用日志中间件，指定格式dev
app.use(bodyParser.json());//解析 json数据 content-type = /application/json
app.use(bodyParser.urlencoded({ extended: false }));//解析form /applicatoin-www-form-urlencoded
app.use(cookieParser());//解析cookie
app.use(express.static(path.join(__dirname, 'public')));//静态文件服务
//执行完此中间件之后，req.session
app.use(session({
  resave:true,
  saveUninitialized:true,
  secret:'zfsecret',//密钥，用来防止session被篡改
  key:'zhufengkey',// cookie name 的名字
  cookie:{maxAge:1000*60*60},//设置过期时间
  store:new MongoStore({
    db:'zhufengblog',
    host:'123.57.143.189'
  })
}));
app.use(flash());
var settings = require('./settings');
app.use(function(req,res,next){
  if(settings.checkLoginPath.indexOf(req.path)!=-1){
    if(!req.session.user){
      req.flash('error','未登陆');
      return res.redirect('/usrs/login');
    }
  }
  if(settings.checkNotLoginPath.indexOf(req.path)!=-1){
    if(req.session.user){
      req.flash('error','已登陆');
      return res.redirect('back');
    }
  }
  next();
});
app.use(function(req,res,next){
  res.locals.user = req.session.user;
  res.locals.keyword = req.session.keyword;
  res.locals.success =req.flash('success').toString();
  res.locals.error = req.flash('error').toString();
  next();
});
app.use('/', routes);
app.use('/users', users);
app.use('/articles', articles);
// catch 404 and forward to error handler
//捕获404错误并且跳转到错误处理中间件
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);//如果next有参数值的话就会直接交由错误处理中间处理进行处理
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);//设置服务器端错误状态码
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler 生产环境的错误处理器
// no stacktraces leaked to user 不把错误信息暴露给用户
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
