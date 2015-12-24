
/*js中常用的异步：即打乱js的执行顺序*/
var hello = function(){
	console.log("hello word");
}

setTimeout(hello,2000);

console.log("我也马上执行")

//https://nodejs.org/api
var fs = require('fs');

fs.readFile('../index.md',function(){
	console.log(arguments);
});

console.log("next")






