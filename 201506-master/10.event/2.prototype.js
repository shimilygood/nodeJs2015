/**
 *
 */

function Person(){

}
Person.prototype.name = 'zfpx';
Person.prototype.showName = function(){
    console.log(this.name);
}
var person = new Person();
person.showName();

function Animal(name,food){
    this.food = food;
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}

Animal.prototype.food = 'meat';
Animal.prototype.eat = function(){
    console.log('I am eating '+this.food);
}

var tiger = new Animal('tiger');
var mouse = new Animal('mouse','rice');
console.log(tiger.getName = mouse.getName);//false
console.log(tiger.eat == mouse.eat);//true
console.log(tiger.getName());
tiger.eat();// I am eating undefined //构造函数覆盖原型上的值
mouse.eat();//I am eating rice

function Dog(){

}
Object.prototype.name = 'zfpx';
Dog.prototype.name = 'dog';
var d = new Object();
var dog = new Dog();
console.log(d.name);//zfpx
console.log(dog.name);//dog
console.log(dog.__proto__.name);//dog
console.log(dog.__proto__.__proto__.name);//zfpx
console.log(dog.__proto__.constructor.prototype.name);//dog


