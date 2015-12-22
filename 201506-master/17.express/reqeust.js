var http = require('http');
var options={
    host:'localhost',
    port:8080,
    path:'/home',
    headers:{
        'connect.sid':'s%3A2eDEe6p_rY--2fQvPje-z4r1nuPjSQhA.Y5AoXgfy1kLSpTQwCiawL%2BbFxekZiZTJXys%2FcZKICcw'
    }
}
/// 'set-cookie': [ 'connect.sid=s%3AKVrcwezvzjMwjRkoG37NcSWj5JzH2OZC.0%2BjqZL11W3F4ycdo5g9iphVaVuNA8Jd1WXcbfZlU3hA; Path=/; Expires=Sat, 19 Sep 2015 10:18:29 GMT; HttpOnly' ],
var req = http.request(options,function(res){
    console.log(res.headers);
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log(data);
    });
})
req.end();