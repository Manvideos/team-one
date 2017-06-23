/**
 * Created by lenovo on 2017/6/22.
 */
angular.module("four",[]).controller("four_con",function($scope,$http){
    $http.get("../yichu/data/wardrove01.json").success(function(data){
        $scope.list = data;
        console.log(data);
        document.addEventListener("touchmove",function (ev) {
            ev.preventDefault();
        },{passive:false});
        var myScroll = new IScroll(".wrapper",{
            click:true,
            tap:true
        });
        setTimeout(function(){
            myScroll.refresh();
        },500);
    });
    $('.main-btn').click(function(){
        $(this).toggleClass('main-btn-on green');
    });
});
