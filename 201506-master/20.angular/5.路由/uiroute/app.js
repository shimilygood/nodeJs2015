var routeApp = angular.module('routerApp',['ui.router']);
routeApp.config(function($stateProvider){
    $stateProvider.state('user',{
        url:'/user',
        templateUrl:'part-user.html'
    }).state('user.list',{
        url:'/list',
        templateUrl:'part-user-list.html',
        controller:function($scope){
            $scope.users = ['张三','李四','王五'];
        }
    }).state('user.add',{
        url:'/add',
        template:'用户名:<input >'
    }).state('article',{
        url:'/article',
        views:{
           '':{
                templateUrl:'part-article.html'
            },
            'one@article':{
                template:'<div>文章列表</div>'
            },
            'two@article':{
                templateUrl:'table.html',
                controller:'articleController'
            }
        }
    });
});

routeApp.controller('articleController',function($scope){
    $scope.articles = [{
        user:'张三',
        title:'我是张三'
    },{
        user:'李四',
        title:'我是李四'
    },{
        user:'王五',
        title:'我是王五'
    }]
});