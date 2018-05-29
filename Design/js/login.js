/*检查学号输入框的代码*/
function CheckStudentID()
{
    var str=document.getElementById("studentId");
    var tip1=document.getElementById("tipOne");
    if (str.value=="")    /*如果输入值为空*/
    {    /*显示提示消息*/
        tip1.style.visibility="visible";
        tip1.innerHTML="请输入学号";
        return false;
    } else
    {
        tip1.style.visibility="hidden";
        return true;
    }
}

/*检查密码输入框的代码*/
function CheckPassword()
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

/*点击登录提交按钮是传递数据，并且由后端返回是否能登录*/
function CheckLogin()
{
    var tip1=document.getElementById("tipOne");
    var studentId= document.getElementById("studentId");
    var tip2=document.getElementById("tipTwo");
    var password= document.getElementById("password");
    if(CheckPassword()&&CheckStudentID())   /*如果两个输入框都不为空*/
    {
        $.ajax({
            type:"POST",
            url:"/ReleaseProject/servlet/LoginServlet",
            data:{
                studentId:$("#studentId").val(),
                password:$("#password").val()
            },
            dataType:"json",
            success:function (state) {
                // alert("返回数据");
                if(state==1){
                    tip1.style.visibility="visible";
                    tip1.innerHTML="学号错误，请重新输入";
                    return false;
                }else if(state==2){
                    tip2.style.visibility="visible";
                    tip2.innerHTML="密码错误，请重新输入";
                    return false;
                }
                window.location="../html/activity.html";
                return true;
            },
            error:function () {
                // alert("登陆出错");
            }
        })
        // alert("输入正确，开始进入请求服务器阶段");
        // var xmlhttp;
        // if (window.XMLHttpRequest)
        // {   // 兼容 IE7+, Firefox, Chrome, Opera, Safari 代码
        //     xmlhttp=new XMLHttpRequest();
        // }
        // else
        // {   // 兼容 IE6, IE5 代码
        //     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        // }
        // xmlhttp.onreadystatechange=function()
        // {
        //     if (xmlhttp.readyState==4 && xmlhttp.status==200)   /*readyState 等于 4 且状态为 200，响应就绪*/
        //     {
        //         xmlhttp.success=function () {
        //             window.location.href="index.html";
        //         }
        //     }
        //     else{
        //         xmlhttp.fault=function () {
        //             if(xmlhttp.responseText=="1"){      /*后台返回 1 代表学号出错*/
        //                 tip1.style.visibility="visible";
        //                 tip1.innerHTML="学号错误，请重新输入";
        //                 return;
        //             }
        //             else if(xmlhttp.responseText=="2"){     /*后台返回 2 代表学号正确但是密码错误*/
        //                 tip2.style.visibility="visible";
        //                 tip2.innerHTML="密码错误，请重新输入";
        //                 return;
        //             }
        //         }
        //     }
        // }
        // xmlhttp.open("POST","url?studentId="+$("#studentId").val()+"&password="+$("#password").val(),true); /*发送studentId（学号）和password（密码）的值*/
        // xmlhttp.send();         /*将请求发送到服务器*/
    }
}




