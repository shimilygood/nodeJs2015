var EventEmitter = require('events').EventEmitter;

var fs = require('fs');
var count = 0;
var val1='';
var val2='';
var e = new EventEmitter();
e.on('1',done1);
e.on('2',done1);
fs.readFile('1.txt','utf8',function(err,data){
    val1 = data;
    e.emit('1');
})
fs.readFile('2.txt','utf8',function(err,data){
    val2 = data;
    e.emit('2');
})

function done1(){
    count++;
    if(count == 2){
        console.log(val1+" "+val2);//
    }
}
