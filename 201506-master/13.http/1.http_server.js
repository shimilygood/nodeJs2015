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
    console.log(req.method,req.httpVersionMajor,req.httpVersionMinor);
    console.log(res.sendDate);
    console.log(req.url);
    console.log(req.method);
    console.log(req.httpVersion);
    //console.log(req.headers);
    res.write('hello');
    res.end('hello');
});
server.listen(8080);


/**
 * { host: 'localhost:8080',
  connection: 'keep-alive',
  'cache-control': 'max-age=0',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,;q=0.8',
  upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.125 Safari/537.36',
    'accept-encoding': 'gzip, deflate, sdch',
    'accept-language': 'en,zh-CN;q=0.8,zh;q=0.6'
 */
