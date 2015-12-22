/**
 *
 */
var n = 1;
var s = 'hello';
var f = 'global f';
console.log(this);
var obj = {fn:function(){
    console.log(n);//undefined
    console.log(s);//hello
    console.log(this);
    n = 2;
    var n = 3;
    var f = 'fn f';

    this.inner = function(){
        console.log(n);//上级的3
        console.log(s);//顶级的hello
        console.log(f);// undefined
        console.log(this);
        var f = 'f';
    }
    this.inner();
}}

obj.fn();
