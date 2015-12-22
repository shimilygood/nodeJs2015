var fs = require('fs');
/**
 * 非流式读取
 **/
var file = fs.createReadStream('./129.txt');//包含end的位置
file.on('readable',function(){
    console.log('readable');
    //console.log(file.read());
  var chunk = file.read(1024*64);
  if(chunk){
      console.log(chunk.length);
  }


});
file.on('end',function(){

});