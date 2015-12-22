var fs = require('fs');
var BufferSize = 1024;
function copy(src,dest){
    var fdsrc,fddest;
    var readSofar=0;//读到的位置
    var buff = new Buffer(BufferSize);
    fdsrc = fs.openSync(src,'r');
    fddest = fs.openSync(dest,'w');
    var read = 0;//本次读到的字节数
    do{
        read = fs.readSync(fdsrc,buff,0,
            BufferSize,readSofar);
        fs.writeSync(fddest,buff,0,read);
        readSofar += read;
    }while(read == BufferSize)
}

copy('1.txt','2.txt');