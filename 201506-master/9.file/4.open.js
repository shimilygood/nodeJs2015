/**
 * 可以读取一部分数据
 *
 **/
var fs = require('fs');
// read 4    write 2   execute 1
//所有人，所属组 其它
console.log(6+6*8+6*64);
/*process.stdin.on('data',function(data){
    console.log('echo '+data.toString());//0
});*/
process.stdout.write('log');//标准输出 1
process.stderr.write('error');//错误输出 2

//0 stdin 1 stdout  2 stderr
buffer = new Buffer(1);
fs.open('1.txt', 'sr+', 438 /*=0666*/, function(err, fd) {
    console.log(fd);
  /*  //fd, buffer, offset, length, position, callback
    fs.write(fd,new Buffer('B'),0,1,1,function(){
        console.log(arguments);
        //分块读取文件
        //fd, buffer, offset, length, position
        //
        fs.read(fd, buffer, 0, 1, 1, function(err,bytesRead,data){
            console.log(buffer.toString());
        });
    })*/
    fs.close(fd,function(){
        fs.open('1.txt', 'sr+', 438 /*=0666*/, function(err, fd) {
            console.log(fd);
        });
    });
});

setTimeout(function(){
    var buf = new Buffer(1);
    fs.read(0,buf,0,1,0,function(){
        console.log(buf.toString());
    });
},5000);


