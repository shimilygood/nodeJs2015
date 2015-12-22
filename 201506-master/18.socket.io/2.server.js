/**
 * 安装模块 npm install ws
 *
 **/
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8080});//创建ws服务器
wss.on('connection',function(ws){//当连接建立的时候进行监听 客户端消息
    ws.on('message',function(message){
        console.log('received:%s',message);
        ws.send('hello client');//向客户端消息
    });
    setInterval(function(){
        ws.send(new Date().toLocaleString());
    },1000);
    ws.on('close',function(){
        console.log('close');
    })
});

wss.on('close',function(){
    console.log('close');
})