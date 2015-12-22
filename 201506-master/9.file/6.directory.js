/**
 * 目录
 */
var fs = require('fs');

/*makeP('test3/test4/test5',function(err){
    if(err)
        console.log('创建目录失败');
    else{
        console.log('成功成功成功');
    }
})*/


function makeP(path){
    var paths = path.split('/');
    for(var i=1;i<=paths.length;i++){
        var p = paths.slice(0,i).join('/');
        var exists = fs.existsSync(p);
        if(exists){
            continue;
        }else{
            fs.mkdirSync(p);
        }
    }
}

/*
fs.stat('1.txt',function(err,stat){
    console.log(stat);
})
fs.exists('12.txt',function(e){
    console.log(e);
})*/
//删除空文件夹
//fs.rmdirSync('test3/test4/test5');
//删除文件
//fs.unlinkSync('./1.txt');

fs.realpath('./2.txt',function(err,path){
    console.log(path);
});
//实现级联删除
function deleteP(){

}

deleteP('test3');