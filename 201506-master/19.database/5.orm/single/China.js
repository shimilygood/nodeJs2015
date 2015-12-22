var _china;
module.exports = function(name){
  function China(name){
      this.name = name;
      this.say= function(){
          console.log(this.name);
      }
  }
    //China.prototype.

    this.getInstance = function(){
        if(!_china)
            _china=new China(name);
        return _china;
    }
}