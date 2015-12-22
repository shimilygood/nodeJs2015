/**
 * 1. readFile writeFile 将文件作为一个整体
 * 2. read write 需要非常精确的控制大小
 * 3. 不关心文件的内容大小，只关注 是否读取的数据,用到流
 * 一组有序的，有起点和终点的字节数据传输手段。
 * 网络上传输的时候，先将对象转成字节流，再经过流的传输，到达目的地之后再将字节流转成对象。
 * 很多种类型，也有很多的方法，也有很多的事件
 * 流式读式
 * \
 * fs.ReadStream
 * process.stdin 标准输入流
 *
 * gzip 压缩
 * net.Socket TCP
 * http.IncomingMessage  request
 *
 *
 */

var fs = require('fs');
var file = fs.createReadStream('./1.txt');//包含end的位置
file.on('open', function () {
    console.log('文件打开了');
});
setTimeout(function(){
    //获取读到的数据
    file.on('data', function (data) {
        console.log('data');
    });
},5000);

file.on('end', function () {
    console.log('全部读完了');
});

file.on('close', function () {
    console.log('文件关闭了');
});
file.on('error', function (err) {
    console.log(err);
});

