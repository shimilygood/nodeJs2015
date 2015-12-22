var express = require('express');
var router = express.Router();
var Todo = require('../models');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/todos', function(req, res, next) {
  getTodos(res);
});
function getTodos(res){
  Todo.find({},function(err,todos){
    if(err)
      res.send(err);
    res.json(todos);
  })
}

router.post('/api/todos/batchDelete', function(req, res, next) {
  var ids = req.body.ids;
  Todo.remove({_id:{$in:ids}},function(err,todo){
    if(err){
      next(err);
    }
    getTodos(res);
  });
});

router.post('/api/todos', function(req, res, next) {
  var todo = req.body;
  var _id = todo._id;
  if(_id){
    Todo.update({_id:_id},{$set:{text:todo.text}},function(err,todo){
      if(err){
        next(err);
      }
      getTodos(res);
    });
  }else{
    Todo.create(todo,function(err,todo){
      if(err){
        next(err);
      }
      getTodos(res);
    })
  }

});

module.exports = router;
