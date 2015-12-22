//require
exports.name ='zfpx';
var d1 = require('./4.dog');
var d2 = require('./4.dog');
var d3 = require('./4.dog');
d1.log('tom');
d1.log('jerry');
console.log(d1===d2);
d1.i = 4;
console.log(d3.i);

//取得模块的绝对路径
console.log(require.resolve('./4.dog'));
console.log(require('./package.json'));

console.log(Object.keys(require.cache));
delete require.cache[require.resolve('./package.json')];
console.log(Object.keys(require.cache));