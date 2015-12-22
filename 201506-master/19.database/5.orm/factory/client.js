var factory = require('./Factory');
var apple = factory.create('Apple','red');
console.log(apple.color);
apple.desc();

var banana = factory.create('Banana','yellow');
console.log(banana.color);
banana.desc();