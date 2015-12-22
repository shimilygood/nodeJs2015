var fs = require('fs');
/**
 * s 有文件和目录的操作
 *
 **/
var data = fs.readFileSync('./1.txt','utf8');
console.log(data);
fs.readFile('./1.txt','utf8',function(err,data){
    console.log(data);
});

fs.readFile('./1.txt','utf8',function(err,data){
    console.log('1');
});

fs.readFile('./1.txt','utf8',function(err,data){
    console.log('2');
});


