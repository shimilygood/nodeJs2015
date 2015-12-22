#git
备份工具
历史工具
协作工具
#步骤
##初始化仓库
git init
##添加文件
git add  1.txt
##查看修改状态
git status
##查看提交的log
git log
##提交
git commit 1.txt -m"增加 1.txt"
##在github上创建项目
https://github.com/zhufengnodejs
##创建远程 仓库
git remote add origin xxxxx
##推送代码到远程仓库
git push origin master
#ssh
##生成key
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
##添加key
cat id_rsa.pub

