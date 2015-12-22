/**
 * var function 是需要预解释的
 *
 */
console.log(num);//undefined
var num = 9;//变量是声明不赋值
hello();
//world();
function hello(){ //函数定义是声明并赋值
    console.log('先执行后定义');
}
var world = function(){
    console.log('先执行后定义可以吗?');
}