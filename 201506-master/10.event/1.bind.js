/**
 *
 */
var person = {
    name:'zfpx',
    say:function(words) {
        console.log(this.name + ' say '+words);
    }
}
person.say('hello');
var p = {
    name:'node.js'
}
person.say.call(p,'hello');//把p作为this
//永久绑定this

Function.prototype.b = function(obj){
    var self = this;
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        self.apply(obj,args);
    }
}
var newSay = person.say.b(p,'hello');
newSay();



