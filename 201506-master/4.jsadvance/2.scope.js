/**
 * 预解释是基于作用域的预解释
 */

var num =9;
var name = 'zfpx';
function say(){
    console.log(num);//只有函数能形成单独作用域
    console.log(name);
    num = 7;
    var num = 6;
}
say();