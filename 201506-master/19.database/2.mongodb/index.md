#mongodb
分布式的文件存储数据库
高性能 开源 无模式
功能非常丰富，nosql mysql一个桥梁
#存储结构
-bson
binary json
{name:'zfpx',age:6}
mysql 数据库  对应 mongodb 数据库
       表                 collection集合
       记录                 Document 文档
#语法
#查看数据库
show dbs;
#切换数据库
use today;
##插入一个文档
db.person.insert({name:'zfpx',age:6});
##批量插入文档
db.person.insert([{name:'zfpx',age:6},{name:'zfpx7',age:7}]);
#查询文档
数据库.集合.find(查询条件，查询字段)
db.person.find({name:'zfpx'},{age:1})
db.person.find({_id:ObjectId('55fe7a17304096cf09be3eb2')},{age:1,_id:0})
#排序
db.person.find({}).sort({age:-1});
#通过JS插入
> for(var i=1;i<=10;i++){
... db.person.save({name:'zfpx'+i});
... }

db.person.find({}).skip(3).limit(3);
db.person.count({});
添加字段
db.person.update({name:{$lt:'zfpx6'}},{$set:{age:10}});
更新匹配到的所有记录，默认只更新一条
db.person.update({name:{$lt:'zfpx6'}},{$set:{age:10}},{multi:true});
删除文档
db.person.remove({name:/zfpd/})

