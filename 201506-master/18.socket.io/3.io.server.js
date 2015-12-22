var io =require('socket.io')();
//客户端连接上来的时候触发
io.on('connection',function(socket){
 console.log('连接成功');
});
//客户端断开连接的时候触发
io.on('disconnect',function(){
    console.log('用户已经离开');
});

io.listen(8080);
