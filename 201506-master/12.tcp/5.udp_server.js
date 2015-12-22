/**
 * UDP 非连接的协议，可以直接 发送数据包
 * 不要求按顺序到达传输层中
 * 受网络影响 可以丢失包
 * 资源消耗少，处理速度 快，适合视频 音频 QQ
 *
 */
var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
//监听对方的消息
socket.on('message',function(msg,rinfo){
  console.log('接收到了',msg);
    console.log('客户端地址为',rinfo);
    var buf = new Buffer('确认信息:'+msg);
  //向对方发消息
    socket.send(buf,0,buf.length,rinfo.port
        ,rinfo.address);
});
socket.on('listening',function(){
  console.log('开始监听',socket.address());
})
//绑定IP和地址
socket.bind(44444,'localhost');