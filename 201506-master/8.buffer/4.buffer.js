//1.创建对象，提供长度
var buf1= new Buffer(12);
buf1.fill(0x0f,1,3);
console.log(buf1);
//2.传入一个数组
var buf2 = new Buffer([1,2,3]);
console.log(buf2);
//3.直接通过字符串来创建
var buf3 = new Buffer('珠峰培训');
//e7 8f a0 e5 b3 b0 e5 9f b9 e8 ae ad
console.log(buf3);
//console.log(15*16+15);


//长度
var str = '珠峰培训';
var buf = new Buffer(str);
console.log(str.length);//4
console.log(buf.length);//12

//修改性
str[0] ='我';//不变
buf[0] = 0xff;//会变
console.log(str,buf);

//slice
var subs = str.slice(1,2);//峰
var subb = buf.slice(1,2);//8f
subb[0] = 0x9;
console.log(subb);
console.log(buf);

var buf4 = new Buffer('珠峰培训');
console.log(buf4.toString('utf8',3,9));

var buf5 = new Buffer(12);
buf5.write('珠峰',0,3);
buf5.write('培训',3,3);
console.log(buf5.toString());

//合并
var buff1 = new Buffer('珠峰');
var buff2 = new Buffer('培训');
console.log(Buffer.concat([buff1,buff2],12));
var buff3 = new Buffer(3);
//targetBuffer, targetStart, sourceStart, sourceEnd
buff2.copy(buff3,0,0,6);
console.log(buff3.toString());


console.log(buff3 instanceof Object);
console.log(Buffer.isBuffer(buff3));

console.log(Buffer.byteLength("培训"));

console.log(Buffer.isEncoding('utf8'));



