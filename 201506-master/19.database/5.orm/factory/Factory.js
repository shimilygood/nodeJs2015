var Apple = require('./Apple');
var Banana = require('./Banana');
exports.create = function(type,color){
    switch(type){
        case 'Apple': return new Apple(color);
        case 'Banana': return new Banana(color);
    }
}