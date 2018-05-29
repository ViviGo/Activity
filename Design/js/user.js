$(function () {
    var checkTo=$(".usermlist_right a");
    var activeNum=document.getElementsByName("activeNum");
    var index=0;
    checkTo.click(function () {
        index=checkTo.index(this);
        if(this.innerHTML=="退出报名"){
            cancelActive();
            return true;
        }
        else {
            $("#some").fadeOut(200,function () {
                $("#user_comment").fadeIn(200);
                returnActive();
                $("#comment_apply").click(function () {
                    apply_comment();
                })
            })
        }
    })
    function apply_comment() {
        $.ajax({
            type:"POST",
            url:"/ReleaseProject/servlet/MemberAccessActiveServlet",
            data:{
                activeNumber:activeNum[index].innerHTML,
                activeInformation:$("#commentInfor").innerHTML
            },
            dataType:"json",
            success:function () {
                alert("已经成功发布评价！");
                returnActive();
                againShow();
                return true;
            },
            error:function () {
                alert("出现错误,无法评价!");
                return false;
            }
        })
    }
})
/*查看活动*/
$(function () {
    $.ajax({
        type:"POST",
        url:"/ReleaseProject/servlet/MemberParticipateActivesServlet",
        dataType:"json",
        success:function (data) {
            alert("已经获取mlist");
            if(eval(data).length==0){
                $("#some").fadeOut(200,function () {
                    $("#none").fadeIn(200);
                });
            }
            else{
                user_mlist(data);
            }
        },
        error:function () {
            alert("出现错误,无法获取mlist");
            return false;
        }
    })
    function user_mlist(data) {
        var user_mlist=eval(data);
        /*克隆多个出来,如果过多，则出现滚动条*/
        var title=document.getElementsByName("user_mlist_title");
        var state=document.getElementsByName("user_mlist_state");
        var activeNum=document.getElementsByName("activeNum");
        var change=document.getElementsByName("ret_com");
        for(var i=0;i<mlists.length;i++){
            title[i].innerHTML=data[i].activeName;
            activeNum[i].innerHTML=data[i].activeNumber;
            if(data[i].activeState==1){
                activeNum[i].innerHTML="（进行中）";
                change[i].innerHTML="退出报名";
            }
            else{
                activeNum[i].innerHTML="(已结束)";
                change[i].innerHTML="评价活动";
            }
        }
    }
})


function againShow() {
    $.ajax({
        type:"POST",
        url:"/ReleaseProject/servlet/MemberParticipateActivesServlet",
        dataType:"json",
        success:function (data) {
            alert("已经获取mlist");
            if(eval(data).length==0){
                $("#some").fadeOut(200,function () {
                    $("#none").fadeIn(200);
                });
            }
            else{
                user_mlist(data);
            }
        },
        error:function () {
            alert("出现错误,无法获取mlist");
            return false;
        }
    })
    function user_mlist(data) {
        var user_mlist=eval(data);
        /*克隆多个出来,如果过多，则出现滚动条*/
        var title=document.getElementsByName("user_mlist_title");
        var state=document.getElementsByName("user_mlist_state");
        var activeNum=document.getElementsByName("activeNum");
        var change=document.getElementsByName("ret_com");
        for(var i=0;i<mlists.length;i++){
            title[i].innerHTML=data[i].activeName;
            activeNum[i].innerHTML=data[i].activeNumber;
            if(data[i].activeState==1){
                activeNum[i].innerHTML="（进行中）";
                change[i].innerHTML="退出报名";
            }
            else{
                activeNum[i].innerHTML="(已结束)";
                change[i].innerHTML="评价活动";
            }
        }
    }
}
function cancelActive() {
    $.ajax({
        type:"POST",
        url:"/ReleaseProject/servlet/MemberCancelRegistration",
        data:{activeNumber:activeNum[index].innerHTML},
        dataType:"json",
        success:function () {
            alert("已经成功退出报名了！");
            againShow();
            return true;
        },
        error:function () {
            alert("出现错误,无法退出报名!");
            return false;
        }
    })
}

function returnActive() {
    $(".before").click(function () {
        $("#user_comment").fadeOut(200,function () {
            $("#some").fadeIn(200);
        })
    })
}
