function timeVer(o) {
    $.ajax({
        type:"POST",
        url:"",
        data:{phone:$("#phone").val()},
        dataType:"json",
        success:function () {
            alert("成功发送短信");
        }
        // error:function () {
        //     alert("error");
        //     alert($("#phone").val());
        //     return false;
        // }
    })
    time(o);
}
var wait=60;
function time(o) {
    if (wait == 0) {
        o.style.backgroundColor="#ffde51";
        o.removeAttribute("disabled");
        o.value="获取验证码";
        wait = 60;
    } else {
        o.style.backgroundColor="#dddddd";
        o.setAttribute("disabled", true);
        o.value=wait+"秒后重新发送";
        wait--;
        setTimeout(function() {
                time(o)
            },
            1000)
    }
}
/*切换input的类型type，使得密码可视*/
function transType() {
    if ($("#password").attr("type") == "password") {
        $("#password").attr("type", "text");
    }
    else {
        $("#password").attr("type", "password");
    }
}
function checkStudentId() {
    var tip1=document.getElementById("tipOne");
    var studentId=document.getElementById("studentId");
    if(studentId.value!=""){
        $.ajax({
            type:"POST",
            url:"",
            data:{studentId:$("#studentId").val()},
            dataType:"json",
            success:function (state) {
                alert("bb");
                if(state==-1){
                    tip1.style.visibility="visible";
                    tip1.innerHTML="账号注册失败，请检查一下！";
                    return false;
                }
                else{
                    tip1.style.visibility="hidden";
                    return true;
                }
                return true;
            },
            error:function () {
                alert("学号出错");
                tip1.style.visibility="visible";
                tip1.innerHTML="学号已经被注册";
                return false;
            }
        })
    }else {
        tip1.style.visibility="visible";
        tip1.innerHTML="学号不能为空";
        return false;
    }
}
/*检查密码输入框的代码*/
function checkPas()
{
    var str=document.getElementById("password");
    var tip2=document.getElementById("tipTwo");
    if (str.value=="")    /*如果输入值为空*/
    {
        tip2.style.visibility="visible";
        tip2.innerHTML="请输入密码";
        return false;
    } else
    {
        tip2.style.visibility="hidden";
        return true;
    }
}
function checkPhone() {
    var str=document.getElementById("phone");
    var tip3=document.getElementById("tipThree");
    if (str.value=="")    /*如果输入值为空*/
    {
        tip3.style.visibility="visible";
        tip3.innerHTML="请输入手机号码";
        return false;
    }
    else {
        tip3.style.visibility="hidden";
        return true;
    }
}
function checkVerify() {
    var verify=document.getElementById("verify");
    var tip4=document.getElementById("tipFour");
    if(verify.value==""){
        tip4.style.visibility="visible";
        tip4.innerHTML="请输入验证码";
        return false;
    }else {
        tip4.style.visibility="hidden";
        return true;
    }
}

$(function () {
    $("#regbtn").click(function () {
        // alert(checkStudentId());
        if(checkVerify()&&checkStudentId()&&checkPas()&&checkPhone()){
            // alert("正确输入，开始进入请求服务器阶段");
            $.ajax({
                /*发送ajax请求*/
                type: "POST",
                url: "/ReleaseProject/servlet/RegistrationServlet", /*路径*/
                data: {
                    studentId: $("#studentId").val(),
                    password: $("#password").val(),
                    phone:$("#phone").val(),
                    verify:$("#verify").val()
                }, //组装参数
                dataType: "json",
                success: function (code) {
                    alert("tatally");
                    if(code==-1){
                        tip4.style.visibility="visible";
                        tip4.innerHTML="验证码错误";
                        return false;
                    }
                    alert('正在登录，请稍候');
                    window.location = "../html/activity.html";     //注册成功就跳转到activity.html
                }
            })
        }
    })
})
