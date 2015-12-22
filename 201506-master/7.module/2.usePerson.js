var Person = require('./2.person');
var person1 = new Person('杨过');
var person2 = new Person('郭襄');
console.log(person1.getName());
console.log(person1.name);
person1.__proto__.name = '侠侣';
console.log(person1.name);