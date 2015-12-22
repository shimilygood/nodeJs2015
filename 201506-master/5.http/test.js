var fs = require('fs');
fs.exists('../../style.css',function(exists){
    console.log(exists);
})