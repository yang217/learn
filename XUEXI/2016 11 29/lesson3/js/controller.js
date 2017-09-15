/**
 * Created by Administrator on 2016/11/29/029.
 */

//如果想使用ngFilter模块的功能 在[]加入模块引用
var app = angular.module('app',['ngFilter']);
app.controller("indexCtrl",function($scope) {
    $scope.sex=true;
})