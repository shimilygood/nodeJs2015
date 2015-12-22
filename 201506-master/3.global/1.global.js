/**
 * global 全局对象
 * 它是全局变量的宿主
 *  全局对象的属性
 *  隐式定义的变量
 *
 */
var a = 10;
b = 5;//永远不要这么写
exports.a = a;

console.log(__dirname);
console.log(__filename);

console.log('a');
console.error();
console.info();
console.warn();

console.dir({name:'zfpx'});
console.log({name:'zfpx'});
console.log(JSON.stringify({name:'zfpx'}));

//console.trace('global');//输出当前的堆栈信息

console.assert(1==2,'1不等于2');