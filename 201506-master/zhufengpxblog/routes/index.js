var express = require('express');
var router = express.Router();//生成一个路由的实例


router.get('/', function(req, res, next) {
  res.redirect('/articles/list/1/2');
});

module.exports = router;
