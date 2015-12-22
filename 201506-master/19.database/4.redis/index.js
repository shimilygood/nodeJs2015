var redis  = require('redis');
var client = redis.createClient(6379,'123.57.143.189');

client.set('name','zfpx',redis.print);//设置字符串值
client.hset('zry','name','zf',redis.print);//设置哈希值
client.hset('zry','age','85',redis.print);
client.hkeys('zry',function(err,replies){
    console.log(replies);
    replies.forEach(function(reply){
        client.hget('zry',reply,redis.print);
    });
});

