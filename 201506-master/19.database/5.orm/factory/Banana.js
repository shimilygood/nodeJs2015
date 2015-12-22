var util = require('util');
var Fruit = require('./Fruit');

function Banana(color){
    Fruit.call(this,color);
    this.desc = function(){
        console.log('我是一个香蕉，蕉蕉蕉......');
    }
}
util.inherits(Banana,Fruit)

module.exports =Banana;