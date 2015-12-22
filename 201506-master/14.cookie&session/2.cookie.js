
var http = require('http');
var url = require('url');
var querystring = require('querystring');
/**
 * Name key
 * Value  值
 * Domain 域名
 * Path 路径 pathname
 * Expires/Max-Age 过期时间
 * HTTP  HttpOnly 不能通过JS访问
 * Secure  只能用于HTTPS
 * /etc/hosts
 * window C:\Windows\System32\drivers\etc\hosts
 */
var cookieParser = require('./cookieParser');
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/favicon.ico'){
        res.end('404');
    }else if(pathname == '/write'){//写入cookie
      res.statusCode = 200;
      res.setHeader('Set-Cookie',[cookieParser.serialize('name','zfpx',{

      }),cookieParser.serialize('vip','1',{

      })]);
        res.end('ok');
    }else{
        res.setHeader('Content-Type','text/html;charset=utf-8')
        //Cookie:   name=zfpx2; age=6
        //query     name=zfpx&age=6
        var cookie = req.headers.cookie;
        var cookieObj = querystring.parse(cookie,'; ');
        if(cookieObj.name){
            if(cookieObj.vip){
                //  999.99999
                res.end('欢迎你，尊贵的VIP');
            }else{
                res.end('你又来了');
            }
        }else{
res.end('新朋友');
        }
    }
}).listen(8080);