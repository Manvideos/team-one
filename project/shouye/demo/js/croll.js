/**
 * Created by lenovo on 2017/6/21.
 */
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