
var http = require('http');
var url = require('url');
var cookieParser = require('./cookieParser');
var querystring = require('querystring');
var KEY = 'zfkey';//和客户端约定的一个key
var session = {};//会话数据存放的位置
var EXPIRE_TIME = 5*1000;//过期时间
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var now = Date.now();
    if(pathname == '/favicon.ico'){
        res.end('404');
    }else {
        var cookieObj = querystring.parse(req.headers.cookie,'; ');
        if(cookieObj[KEY]){//老朋友
            var sessionId = cookieObj[KEY];
            var sessionObj = session[sessionId];
            if(!sessionObj || !(sessionObj.expTime) || sessionObj.expTime.getTime()<now){//不合法
                var sessionObj = {balance:100,expTime:new Date(new Date().getTime()+EXPIRE_TIME)};
                var sessionId =now+'_'+Math.random();//给用户购物卡号
                session[sessionId] = sessionObj;
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8',
                    'Set-Cookie':cookieParser.serialize(KEY,sessionId,{})});
                res.end('欢迎你老朋友，你的卡已到期，你的最新余额是'+sessionObj.balance);
            }else{
                if(sessionObj.balance ==0){
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                    res.end('你卡里没钱了，等会再来吧');
                }else{
                    sessionObj.expTime = new Date(now + EXPIRE_TIME);
                    sessionObj.balance = sessionObj.balance - 10;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                    res.end('欢迎你老朋友，你的余额是'+sessionObj.balance);
                }

            }
        }else{//新朋友
            var sessionObj = {balance:100,expTime:new Date(new Date().getTime()+EXPIRE_TIME)};
            var sessionId =now+'_'+Math.random();//给用户购物卡号
            session[sessionId] = sessionObj;
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8',
            'Set-Cookie':cookieParser.serialize(KEY,sessionId,{})});
            res.end('欢迎你新朋友，你的余额是'+sessionObj.balance);
        }
    }
}).listen(8080);