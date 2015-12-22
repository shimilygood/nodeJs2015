var http = require('http');
var users = ['admin','guest'];
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Origin','*');
    var username;
    req.on('data',function(data){
        username = JSON.parse(data.toString()).username;
    });

    req.on('end',function(){
        var exists = false;
        for(var i=0;i<users.length;i++){
            if(users[i] ==username ){
                exists = true;
                break;
            }
        }
        res.end(JSON.stringify({exists:exists}));
    });
}).listen(8080);