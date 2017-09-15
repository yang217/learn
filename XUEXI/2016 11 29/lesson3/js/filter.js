/**
 * Created by Administrator on 2016/11/29/029.
 */

//初始化一个ng的功能模块 用于数据的过滤和筛选
var filter = angular.module("ngFilter",[]);
filter.filter("sexFilter",function() {
    return function(v) {
    	console.log(v)
        var sex = '男';
        if(v==0) {
            sex='女';
        }
        return sex;
    }
})