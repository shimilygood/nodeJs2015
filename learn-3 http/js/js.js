/*上下文，及作用域*/

var a = 92;
var b = "sdfx";

function fn(){
	console.log(a);  //92
	console.log(b);  //undefined,此处b指fn函数作用域里的b,但是执行到此处，还未定义
	var b = "sss";
}
fn();

/**************************************/
function Country(){
	this.name = name;
}

function City(){
	this.name = name;
}

function ClassRoom(){
	this.name = name;
}

var country = new Country("中国");

function Factory(){
	var city = new City("北京");

}

Factory();







