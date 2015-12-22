/**
  根据我们的请求路径自动映射
 **/
var url = require('url');
var http = require('http');
var fs = require('fs');
// /userManage/user.js/add/zhangsan/123456
http.createServer(function(req,res){
     var pathname = url.parse(req.url).pathname;
     var paths = pathname.split('/');
     var handlerPath = './handler';
     var retry = false;//是否尝试过加后缀
     for(var i=1;i<paths.length;i++){
         handlerPath = handlerPath+'/'+paths[i];
         var exists = fs.existsSync(handlerPath);
         if(exists){
            var stat = fs.statSync(handlerPath);
             if(stat.isFile()){
                 break;
             }
         }else{
            if(retry ==true){
                return res.end('404');
            }else{
                paths[i] = paths[i]+'.js';
                // /userManage/user.js
                // user -> user.js
                handlerPath = handlerPath.slice(0,handlerPath.lastIndexOf('/'))
                i--;
                retry = true;
            }
         }
     }
    var arg=paths.slice(i+2);
    var route = require(handlerPath);
    route[paths[i+1]].apply(null,[req,res].concat(arg));
}).listen(8080);