var Coffee = require('./Coffee');
module.exports = function(){
    this.make = function(){
        new Coffee().make();
        console.log('add milk');
    }
}