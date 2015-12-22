var fs = require('fs');
var read = fs.createReadStream('./source.txt');
var write = fs.createWriteStream('./target.txt');
/*
read.on('data', function (data) {
    var flag = write.write(data);
    if(!flag){
        read.pause();//暂停读读文件，也不会再触发data事件
    }
});

read.on('end', function (data) {
    write.end(data);
});

write.on('drain', function () {
    read.resume();//重新启动触发data事件
});*/
read.pipe(write);