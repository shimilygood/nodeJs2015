#http
angular内部提供的封装了$ajax的服务
#服务
##服务的特点
1. service都是单例的
2. 是由$injector实例化的，你不要自己去创建
3. 在整个应用的生命周期内存在，可以共享数据。
4. 使用的时候可以依赖注入
5. 自定义的服务放在系统提供的服务后面
6. 内置服务用$开头，自己的服务不要$开头

#
service factory provider  本质 上都是provider