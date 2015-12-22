/**
 *
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Girl(name){
    this.name = name;
}
util.inherits(Girl,EventEmitter);
//Person.prototype = new EventEmitter();
var girl = new Girl();
var 屌丝 = function(things){
    console.log('喜欢就多看看吧');
};
girl.addListener('看了好久',屌丝);

var 高帅富 = function(things){
    console.log('给你买十台');
};
//girl.on('看了好久',高帅富);
girl.once('看了好久',高帅富);
console.log(girl.listeners('看了好久'));
girl.emit('看了好久','iphone6s plus');

girl.removeListener('看了好久',屌丝);
girl.emit('看了好久','diamond');
girl.removeAllListeners('看了好久');
girl.emit('看了好久','xxx');