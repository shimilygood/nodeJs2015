
var fs = require('fs');
var count = 0;
var val1='';
var val2='';
fs.readFile('1.txt','utf8',function(err,data){
    val1 = data;
    done();
})
fs.readFile('2.txt','utf8',function(err,data){
    val2 = data;
    done();
})

function done1(){
    count++;
    if(count == 2){
        console.log(val1+" "+val2);//
    }
}
