var fs = require('fs');
fs.readFile('./file.txt',function(err,data){
  //<Buffer 31 32 33>
    console.log(data);
})