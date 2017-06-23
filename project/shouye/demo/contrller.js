/**
 * Created by lenovo on 2017/6/21.
 */
angular.module("first",[]).controller("first_con",function(){
    var myScroll = new IScroll("main");
    setTimeout(function(){
        myScroll.refresh()
    });
});