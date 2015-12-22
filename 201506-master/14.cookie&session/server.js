var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;

}).listen(8080);