var util = require('util');
var Fruit = require('./Fruit');

function Apple(color){
    Fruit.call(this,color);
    this.desc = function(){
        console.log('我是一个苹果，果果果......');
    }
}
util.inherits(Apple,Fruit)

module.exports =Apple;