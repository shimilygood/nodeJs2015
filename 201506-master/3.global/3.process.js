/**
 * process 代表node.js应用程序的进程
 * 可以在任何模块中访问
 * title
 *version node版本
 * versions 依赖的第三方库的版本
 * moduleLoadList
 * arch 架构
 * platform 操作系统
 * argv
 * env
 * pid 进程的ID号
 * chdir
 * cwd
 * memoryUsage
 * nextTick
 * stdout: [Getter],
 * stderr: [Getter],
 * stdin: [Getter],
 * kill
 * exit
 */
//console.log(process);
process.argv.forEach(function(arg){

})
console.log(process.argv[2],process.argv[3]);
console.log(process.pid);
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(data){
    console.log(data);
    if(data == 'exit\n'){
        console.log('will exit');
        process.exit();
    }
});// \r 0d   \n  0a

console.log(process.cwd());
console.log(__dirname);
process.chdir('..');
console.log(process.cwd());
console.log(__dirname);