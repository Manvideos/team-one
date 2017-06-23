/**
 * Created by lenovo on 2017/6/15.
 */
$(function(){
    $(".form>input").click(function(){
        $(this)[0].placeholder ="";
    });
    //表单验证
    $("#btn").click(function(){
        reg = /^([0-9A-Za-z]){6,10}$/;
        reg1 = /^[1][0-9]{10}$/;
        if (phone.value == "" || password.value == "") {
            alert("信息不能为空")
        }else if (!reg1.test(phone.value) && !reg.test(password.value)) {
            alert("信息格式错误")
        }else{
            window.location.href = "";
        }
    })
})