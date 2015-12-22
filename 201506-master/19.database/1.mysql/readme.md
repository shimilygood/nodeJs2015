#mysql
- 多用户
- SQL 结构化查询语言
- 区分大小写
#创建数据库
create database today;
#显示所有数据库
show databases;
#删除数据库
drop database today
#创建表
create table score(sid int,cid int,score int);
#添加数据
insert into score(sid,cid,score) values(1,1,100);
insert into score(sid,cid,score) values(2,2,80);
insert into score(sid,cid,score) values(3,3,70);
#查询记录
select * from score;
#查询语句规则
select column_list   //显示哪些列
from table_list      //从哪些表里面查询
where condition //行必须满足什么条件
group by group by column //对列进行分组

select sid,avg(score) //显示哪些列
from score  //从哪些表里面查询
where score<100 //行必须满足什么条件
group by sid  //对列进行分组
having avg(score)<80 //对分组后的数据进行过滤
order by avg(score) desc 对分组的数据进行排序
limit 2 限定返回记录数

#删除记录
delete from score where score<0
#更新记录
update score set score = 0 where sid=1 and cid=1;

