/**
 监控文件和文件夹的变化
 */
var fs = require('fs');
//STAT
function exec(current,previous){
    console.log(previous);
  if( Date.parse(previous.ctime) !=Date.parse(previous.mtime)){
      console.log('修改了');
  }else if (Date.parse(current.ctime) ==0){
    console.log('删除了');
  }else{
      console.log('新建的文件');
  }
}
fs.watchFile('2.txt',{interval:0},exec);

console.log(Date.parse('Sat Sep 05 2015 17:47:27 GMT+0800'));