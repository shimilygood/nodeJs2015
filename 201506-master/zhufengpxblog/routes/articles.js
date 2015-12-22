var express = require('express');
var router = express.Router();
var auth = require('../middle/auth');
var markdown = require('markdown').markdown;
router.get('/list/:pageNum/:pageSize',function(req, res, next) {
  var pageNum = req.params.pageNum&&req.params.pageNum>0?parseInt(req.params.pageNum):1;
  var pageSize =req.params.pageSize&&req.params.pageSize>0?parseInt(req.params.pageSize):2;
  var query = {};
  var searchBtn = req.query.searchBtn;
  var keyword = req.query.keyword;
  if(searchBtn){
    req.session.keyword = keyword;
  }
  if(req.session.keyword){
    query['title'] = new RegExp(req.session.keyword,"i");
  }

  Model('Article').count(query,function(err,count){
    Model('Article').find(query).sort({createAt:-1}).skip((pageNum-1)*pageSize).limit(pageSize).populate('user').exec(function(err,articles){
      res.render('index',{
        title:'主页',
        pageNum:pageNum,
        pageSize:pageSize,
        keyword:req.session.keyword,
        totalPage:Math.ceil(count/pageSize),
        articles:articles
      });
    });
  });

});

router.get('/add',function(req, res, next) {
 res.render('add',{title:'增加文章',article:{}});
});

router.get('/delete/:_id',function(req, res, next) {
  Model('Article').remove({_id:req.params._id},function(err,result){
    if(err){
      req.flash('error',err);
      return res.redirect('back');
    }
    req.flash('success','删除文章成功');
    res.redirect('/');
  })
});

router.get('/edit/:_id',function(req, res, next) {
  Model('Article').findOne({_id:req.params._id},function(err,article){
    res.render('add',{title:'编辑文章',article:article});
  });
});

router.get('/detail/:_id',function(req, res, next) {
  Model('Article').findOne({_id:req.params._id},function(err,article){
    article.content = markdown.toHTML(article.content);
    res.render('detail',{title:'查看文章',article:article});
  });
});

router.post('/add',function(req, res, next) {
  var article = req.body;
  var _id = article._id;
  delete article._id;
  if(_id){
    Model('Article').update({_id:_id},{$set:article},function(err,result){
      if(err){
        req.flash('error',err);
        return res.redirect('/articles/add');
      }
      req.flash('success','修改文章成功');
      res.redirect('/');
    });
  }else{
    article.user = req.session.user._id;
    new Model('Article')(article).save(function(err,article){
      if(err){
        req.flash('error',err);
        return res.redirect('/articles/add');
      }
      req.flash('success','发表文章成功');
      res.redirect('/');
    });
  }

});

module.exports = router;
