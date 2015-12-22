var http = require('http');
var users = ['admin','guest'];
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Origin','*');
    res.end(JSON.stringify(users));
}).listen(8080);