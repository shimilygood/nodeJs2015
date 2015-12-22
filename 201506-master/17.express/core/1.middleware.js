/**
 * 手工指定路由
 */
var url = require('url');
var http = require('http');
function createApplication(){
    var app = function(req,res){
        var pathname = url.parse(req.url,true).pathname;
        for(var i=0;i<app.routes.length;i++){
            var route = app.routes[i];
            if(pathname == route[0]){
                var action = route[1];
                return action(req,res);
            }
        }
    }
    app.routes = [];//存放路径和回调函数的映射
    //配置路径和回调函数的映射
    app.use = function(path,action){
        app.routes.push([path,action]);
    }
    return app;
}
var app = createApplication();
app.use('/',function(req,res){
    res.end('I am /');
});
app.use('/hello',function(req,res){
    res.end('I am /hello');
});
http.createServer(app).listen(8080);