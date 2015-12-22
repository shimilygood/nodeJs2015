module.exports = function(){
    var Friend = require('./Friend');
    var friend = new Friend();
    this.kiss = function(){
        friend.hug();
    }
}