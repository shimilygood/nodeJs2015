var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'123.57.143.189',// 主机
    user:'root',
    password:'zfpx2015',
    database:'today'
});
connection.connect();
var username = 'test\'';
var password = '123\' or 1=\'1';
//var password = '123';
var sql = "select * from user where username='"+connection.escape(username)+"' and password='"+connection.escape(password)+"' ";

connection.query(sql,function(err,rows,fileds){
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