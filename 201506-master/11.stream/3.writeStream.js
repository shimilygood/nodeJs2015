/**
 * 写入流
 * fs WriteStream 写入文件流
 * net.Socket 可读可写的流
 * http.ServerResponse response
 * process.stdout 标准输出
 * process.stderr 错误输出
 * ungzip 解压缩
 **/
var fs = require('fs');

var out = fs.createWriteStream('./write.txt');

for(var i=0;i<1024*1000;i++){
    var flag = out.write(i.toString());
    //console.log(flag);
}
out.on('drain',function(){
    console.log('缓存区全部输出');
});

/*var out = fs.createWriteStream('./write2.txt');
out.on('error',function(err){
    console.log(err);
});
out.write('123');//写入
out.end('456');//写入并关闭文件
out.write('789');//*/

/*
var readStream = fs.createReadStream('./repl.wmv');
var out = fs.createWriteStream('./repl.bak.wmv');
readStream.on('data',function(data){
    var flag = out.write(data);
    //console.log(flag);
})
out.on('drain',function(){
    console.log('操作系统缓存区已全部输出!');
})*/
