#生成项目
#路由规划
/ 首页 显示文章列表
get /users/reg 显示注册页面
post /users/reg 进行数据库注册

get /users/login 显示登录页面
post /users/login 进行登录
get /users/logout 登出

get  /article/add 显示增加文章页面
post /article/add 增加文章
