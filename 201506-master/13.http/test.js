var fs = require('fs');
var c1 = fs.readFileSync('./gigi.jpg','utf8');
fs.writeFile('./g.jpg',c1,'utf8');

/*
var a = new Buffer('a').toString('base64');
var b = new Buffer('b').toString('base64');
var c = new Buffer('ab').toString('base64');
console.log(a,b,c);*/
