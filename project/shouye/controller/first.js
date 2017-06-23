/**
 * Created by lenovo on 2017/6/22.
 */
angular.module("first",[]).controller("first_con",function($scope,$http){
    setTimeout(function(){
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
        var iscroll = new IScroll(".new_file",{
            scrollX : true
        });
        var mySwiper = new Swiper(".swiper-container",{
            loop:true,
            effect:"fade",
            autoplay:2000,
            slidesperView:1,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplayDisableOnInteraction: false,
            pagination:".swiper-pagination"
        });
    },0)
});
