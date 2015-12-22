/**
 * 1. http 超文本传输协议 pop3 ftp smtp https
 * 从WWW服务器传输超文本到本地浏览器
 * 资源是通过uniform resource indentifier
 * uri 来表示
 * 2. 报文 请求 响应
 * 3.
 *
 *
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var util = require('util');

var server = http.createServer();
server.on('connection',function(){
    console.log('连接建立');
});
/**
 * req incommingmessage 可读流 data end
 * res response 可读可写流 write end
 */

server.on('request',function(req,res){
    //req.url = 'http://zhufeng:123@localhost:8080/a/b?username=zhangsan#page';
    res.setHeader('name','zfpx');
    res.setHeader('age','6');
    res.statusCode = 404;
    var urlObj = url.parse(req.url,true);// /?username=zhangsan
    console.log(urlObj);
    res.end(http.STATUS_CODES[404]);
});
server.listen(8080);

