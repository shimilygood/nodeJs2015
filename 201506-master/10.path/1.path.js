var path = require('path');
var fs = require('fs');

/**
 * 把非标准的路径转化为标准路径
 * 1. 解析 . ..
 * 2.多个杠转成一个杠
 * 3 window下/转成\
 * 4.如果以杠结尾 ，则保留
 */
console.log(path.normalize('.//a////b//d//..//c//e//..//'));
// a\b\c\

/**
 * join 多个参数值转成一个路径字符串
 **/
console.log(path.join(__dirname,'a','b','..','c'));
// e:\gitdemo\10.path\a\c
//读取当前文件夹下面的子文件
fs.readdir(__dirname,function(err,files){
    fs.stat(path.join(__dirname,files[0]),function(err,stat){
        if(!stat.isDirectory()){
            fs.readFile(path.join(__dirname,files[0]),function(err,result){
               // console.log(result.toString());
            })
        }
    })
})

/**
 * basename 获取 一个路径中的文件名
 *
 **/
  console.log(path.basename('./path.js','.js'));
console.log(path.extname('./path.js'));
console.log(path.sep);//文件路径 符 \a\b\c  /a/b/c