/**
 * tcp 传输控制协议
 * 实现的端到端的数据传输，完整有序，而且 延迟率和丢包率不高
 * 发送方将字节流转成报文，将数据交给IP层，接收方重新组装
 * 对字符字符编码完全无知。
 * 传输要经过三次握手，建立连接后才能传递
 * 会话中，服务器和客户端各提供一个socket,两个socket共同形成一个连接。
 *
 */
var net = require('net');
var util = require('util');
var fs = require('fs');
var out = fs.createWriteStream('out.txt');
var server = net.createServer(function (socket) { //net.Socket
    console.log('a new connection');
    socket.setEncoding('utf8');
    //有数据先暂停
    socket.on('data',function(data){
        socket.pause();
    });
    socket.setTimeout(3000,function(){
        socket.resume();
        socket.pipe(out,{end:false});
    })


})

server.listen(9999,'192.168.1.107', function () {
    console.log('start listen at ' + util.inspect(server.address()));
});