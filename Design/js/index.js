$(function () {
    $.ajax({
        /*发送ajax请求*/
        type: "POST",
        url: "/ReleaseProject/servlet/ReturnInformation", /*路径*/
        dataType: "json",
        success: function (data) {
            alert("传用户名和密码");
            if(eval(data).length==0){
                // alert("无");
            }else{
                $(".user_ses").innerHTML=data.role;
                $(".userid_ses").innerHTML=data.id;
                $(".LogAndReg").fadeOut(200,function () {
                    $(".login_hide").fadeIn(200);
                })
            }

        }
    })
})