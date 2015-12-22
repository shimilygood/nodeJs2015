/**
  * 发布和订阅是一种消息通信方式 解发布者和订阅者的关系
 *
 **/

var redis  = require('redis');
var client1 = redis.createClient(6379,'123.57.143.189');
var client2 = redis.createClient(6379,'123.57.143.189');
//当订阅成功的时候执行加
var count = 0;
client1.on('subscribe',function(){
    console.log('subscribe global times ');
    //发布消息
    setInterval(function(){
        client2.publish('global times','xin'+count+' go to USA.');
    },1000);
});

//当消息发生的时候执行回调
client1.on('message',function(eventname,message){
    console.log(eventname,':',message);
    if(count++==2){
        client1.unsubscribe();//取消订阅
        console.log('unsubscribe');
    }
});
//订阅消息
client1.subscribe('global times');