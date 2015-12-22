#指令

1.先开始查找并编译指令

3.如果有必要的话，为指令生成新的scope
4.编译指令，再链接scope.
## 二个阶段 compile link
compile 是用来进行模板转换的
link是用来操作元素，添加事件，添加样式。
1. 先从ng-app上开始，递归子层DOM元素，收集所有指令。
2. 编译阶段 根据指令中的template templateUrl
transclude进行DOM结构的转换，如果指令提供了compile函数
也会进行调用,对模板自身的转换，只会执行一次
3.链接阶段 负责模型和视图之间的动态关联，执行多次。
