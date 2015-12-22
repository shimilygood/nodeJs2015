var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'123.57.143.189',// 主机
    user:'root',
    password:'zfpx2015',
    database:'today'
});
connection.connect();
var username = 'zhangsan';
var password = '123456';
var sql = 'select ?? from user where username=? and password=?';
//console.log(connection.format(sql,[['username'],username,password]));
connection.query(sql,[['username'],username,password],function(err,rows,fileds){
    if(err)
        console.log(err);
    else{
        console.log(rows);
        if(rows.length)
            console.log('用户名和密码正确');
        else
            console.log('用户名和密码错误');
    }

});