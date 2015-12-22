#redis
- 开源的 C语言编定民支持网络，也支持内存，也可以持久化。
- key-value 数据库
- 支持多种语言
#特点
- key-value
- 内存数据库
- 多种数据类型 String(字符串) hash(哈希类型) list(链表)　set(无序集合) zset 有序集合

#String(字符串)
最基本的数据类型，也是其它4种的基础，能存储任何字符串，包括二进制
- set key value 设置值
- get key 获取值
- incr key 递增值
- keys * 输出所有的key
#hash(哈希类型)
是一个string类型的字段和字段值的映射表。适合存放对象。
- hset key field value 设置key的field字段值为value
- hget key field 获取key的field字段值
- hgetall key  获取 key的所有字段值
#list(链表)
存放是一个有序的字符串列表 a b c
适合存放一些新鲜消息。
- lpush key value 向链表左端添加元素，返回链表的长度
- rpush key value 向链表右端添加元素，返回链表的长度
- lpop key 向链表左端删除元素，返回被删除的元素
- rpop key 向链表右端删除元素，返回被删除的元素
- lrange key start stop 获取链表的某一个片断
支持负索引 -1

#set(无序集合)
集合中的元素是唯一的。
适合存放标签
- sadd key value
- srem key value
- smembers key
- sinter key1 key2
- sunion key1 key2
- sdiff key1 key2
#zset 有序集合
集合中的元素是唯一的。但是每个元素关联了一个分数
- zadd key score value 向集中添加一个元素
- zrem key value 向集中删除一个元素
- zrange key start stop 按分数的从小到大返回相应的元素
#安装

#启动服务器
./redis-server mac
redis-server
#客户端连接
./redis-cli mac
redis-cli


