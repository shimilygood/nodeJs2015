var China = require('./China');
var china1 = new China('大陆').getInstance();
var china2 = new China('台湾').getInstance();
console.log(china1 === china2);
china1.say();
china2.say();