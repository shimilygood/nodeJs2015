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
    console.log(util.inspect(socket.address()));//将对象转成字符串
    server.getConnections(function (err, count) {
        server.maxConnections = 10;
        console.log('现在有' + count + '用户连接上了');
    });
    socket.setEncoding('utf8');
 /*   socket.on('data', function (chunk) {
        console.log(chunk);
        console.log('读取到的字节数', socket.bytesRead);//读取到的字节数
    });
    socket.on('end', function () {
        console.log('客户端已关闭连接');
    })*/
    socket.pipe(out,{end:false});
    //当客户端主动关闭的时候才会触发
    socket.on('end', function () {
        out.end('over');
    })
    //无论客户端以何种方式关闭都会触发
    socket.on('close', function () {
        //out.end('close');
    })
    socket.on('error',function(){

    });
    //当所有的客户端都关闭的时候触发关闭服务器
    server.unref();
})

server.listen({host:'0.0.0.0',port:8080}, function () {
    console.log('start listen at ' + util.inspect(server.address()));
});