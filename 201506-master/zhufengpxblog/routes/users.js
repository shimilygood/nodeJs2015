var express = require('express');
var router = express.Router();
var auth = require('../middle/auth');
router.get('/reg',function(req, res, next) {
  res.render('reg',{title:'注册'});
});

router.post('/reg', function(req, res, next) {
  var user = req.body;
  if(user.password != user.repassword){
    req.flash('error','两次输入的密码不一致!');
    //req.session.error = '两次输入的密码不一致!'
    return res.redirect('/users/reg');
  }
  delete user.repassword;
  user.password = md5(user.password);
  user.avatar = "https://secure.gravatar.com/avatar/"+md5(user.email)+'?s=48';
  new Model('User')(req.body).save(function(err,user){
    if(err){
      req.flash('error','保存数据库出错!');
      return res.redirect('/users/reg');
    }
    req.flash('success','恭喜你注册成功1!');
    req.flash('success','恭喜你注册成功2!');
    req.session.user = user;
    res.redirect('/');
  });
});

router.get('/login', function(req, res, next) {
  res.render('login',{title:'登录'});
});

router.post('/login', function(req, res, next) {
  var user = req.body;
  user.password = md5(user.password);
  Model('User').findOne(user,function(err,user){
    if(err){
      req.flash('error','登陆失败!');
      return res.redirect('/users/login');
    }
    if(user){
      req.session.user = user;
      req.flash('success','登陆成功');
      res.redirect('/');
    }else{
      req.flash('error','用户或密码不正确');
      res.redirect('/users/login');
    }
  });
});

router.get('/logout', function(req, res, next) {
  req.session.user = null;
  return res.redirect('/users/login');
});

module.exports = router;
