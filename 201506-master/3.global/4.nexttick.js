/**
 *
 */
function say(){
   var sum = 1;
    for(var i=1;i<=100;i++){
        sum = sum*i;
    }
    console.log(sum);
}
//say();
//setTimeout(say,300);
function say1(){
    console.log('say1');
}
function say2(){
    console.log('say2');
}
setImmediate(say2);
process.nextTick(say1);
console.log('welcome1');
console.log('welcome2');
// hello  welcome
var path = require('path');
path.extname()
