var hello = function(){
    console.log('1');
}
setTimeout(hello,2000);

console.log('2');

//https://nodejs.org/api/
var fs = require('fs');
fs.readFile('./test.txt',function(err,data){
    console.error(err);
    console.log('3');
});
console.log('4');
//加sync后缀表示同步
var content = fs.readFileSync('./test.txt');
console.log('5');
