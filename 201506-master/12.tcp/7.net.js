var net = require('net');
console.log(net.isIP('dddd'));//0
console.log(net.isIPv4('192.168.1.1'));//4
console.log(net.isIPv6('fe80::ed7c:4767:9948:9622%12'));//6

