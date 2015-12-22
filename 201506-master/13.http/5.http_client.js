/**
 * http 客户端
 *
 **/
var http = require('http');
var options ={
    host:'localhost',
    port:8080,
    method:'POST',
    path:'/post',
    headers:{name:'china'}
}
var req = http.request(options,function(res){
    console.log(res.statusCode);
    console.log(res.headers);
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log('响应内容',data);
    })
})
req.on('error',function(err){
    console.error(err);
});
req.write('name=zfpx&age=6');
req.end();