//JS可以直接16进制
//Buffer 提供对二进制的处理
//在内存中直接分配 ，不受V8内存限制，
//由于是一个由8位字节元素级成的数组
var s = 0xff; // 255
console.log(15+16*15);
// 0   9 a b c d e f


//将任何进制转化为十进制
console.log(parseInt('11',2));//3 二进制转10进制
console.log(parseInt('77',8));//8进制转10进制63
console.log(parseInt('af',16));//175

//将10进制转成任意进制
console.log((154).toString(2));//10011010
console.log((154).toString(16));//9a 16进制
console.log((154).toString(64));//4q 32进制
