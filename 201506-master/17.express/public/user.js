var express = require('express');
var router = express.Router();//路由的一个实例
router.use('/add',function(req,res,next){
    console.log('准备添加');
    next();
});
router.get('/add',function(req,res,next){
    console.log(arguments.length);
    console.log('user add');
    res.end('user add');
    next();
});

router.get('/delete',function(){
    console.log('user delete');
    res.end('user delete');
});
module.exports = router
