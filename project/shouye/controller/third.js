/**
 * Created by lenovo on 2017/6/22.
 */
angular.module("third",[]).controller("third_con",function($scope,$http){
    $http.get("../community/GCX/Gmeiribikan/ind.json").success(function(data){
        console.log(data);
        $scope.datas = data;
    });
    var myScroll = new IScroll(".wrapper",{
        click:true,
        tap:true
    });
    setTimeout(function(){
        myScroll.refresh();
    },500);
});
