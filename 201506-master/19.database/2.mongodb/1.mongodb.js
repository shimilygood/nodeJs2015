var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://123.57.143.189/today',function(err,db){
    console.log('connected to server');
    //插入数据
    /*db.collection('person').insertOne({name:'zfpx2'},function(err,ret){
        console.log(ret);
    });*/
    //批量插入
   /* db.collection('person').insertMany([{name:'zfpx3'},{name:'zfpx4'}],function(err,ret){
        console.log(ret);
    });*/
    //分页查询
     /*db.collection('person').count(function(err,count){
         console.log('一共有'+count+'记录');
         db.collection('person').find({}).skip(5).limit(5).sort({name:1}).toArray(function(err,result){
            console.log(result);
         });
     });*/
    //55fe835a304096cf09be3ed0
    db.collection('person').findOne({_id:require('mongodb').ObjectID('55fe87e7304096cf09be3edb')},function(err,result){
        console.log(result);
    });
    /**
    db.collection('person').find().toArray(function(err,result){
        console.log(result);
    });*/
/**
    db.collection('person').updateMany({},{$set:{age:100}},function(err,result){
        console.log(arguments);
    });

    db.collection('person').removeMany({},function(){

    });
 */
})