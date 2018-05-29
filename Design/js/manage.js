$(function () {
    // var resourse =document.getElementById("first");
    // for(var j=0;j<6;j++){
    //     var clone=resourse.cloneNode(true);
    //     alert(j);
    //     $(".comment_list ul").appendChild(clone);
    // }
    // if (true){
    //     $(".comment_list").fadeOut(200,function () {
    //         $(".noneComment").fadeIn(200);
    //     })
    // }
    $.ajax({
        type:"GET",
        url:"",     /*路径*/
        dataType:"json",
        success:function (data,id) {
            $("#userPic").attr("src","../personalPortrait/"+data['personalPortrait']);
            $("#userId").innerHTML=id;      /*这里输出图片下方用户id*/
            return true;
        }
    })
})
// function myCheck1()
// {
//     var a=document.form1.elements;
//     for(var i=0;i<a.length-1;i++)
//     {
//         if(a[i].value=="")
//         {
//             alert("当前表单不能有空项");
//             a[i].focus();
//             return false;
//         }
//     }
//     // alert($("#form1").serialize());
//     // $.ajax({
//     //     /*发送ajax请求*/
//     //     type: "POST",
//     //     url: " ", /*路径*/
//     //     data: $("#form1").serialize(), //提交表单序列化值
//     //     dataType: "json",
//     //     success: function (data) {
//     //         alert("成功修改个人资料");
//     //         return true;
//     //     },
//     //     error:function (data) {
//     //         alert("请重新修改个人资料");
//     //         return false;
//     //     }
//     // })
// }
// function myCheck2() {
//     var b=document.form2.elements;
//     for(var i=0;i<b.length-1;i++)
//     {
//         if(b[i].value=="")
//         {
//             alert("当前表单不能有空项");
//             b[i].focus();
//             return false;
//         }
//     }
//     // alert($("#form2").serialize());
//     // $.ajax({
//     //     /*发送ajax请求*/
//     //     type: "POST",
//     //     url: " ", /*路径*/
//     //     data: $("#form2").serialize(), //提交表单序列化值
//     //     dataType: "json",
//     //     success: function (data) {
//     //         alert("成功发布活动");
//     //         return true;
//     //     },
//     //     error:function (data) {
//     //         alert("请重新填写活动资料");
//     //         return false;
//     //     }
//     // })
//     return true;
// }
// function myCheck3() {
//     var b=document.form3.elements;
//     for(var i=0;i<b.length-1;i++)
//     {
//         if(b[i].value=="")
//         {
//             alert("当前表单不能有空项");
//             b[i].focus();
//             return false;
//         }
//     }
//     // alert($("#form3").serialize());
//     // $.ajax({
//     //     /*发送ajax请求*/
//     //     type: "POST",
//     //     url: " ", /*路径*/
//     //     data: $("#form3").serialize(), //提交表单序列化值
//     //     dataType: "json",
//     //     success: function (data) {
//     //         alert("成功发布活动");
//     //         return true;
//     //     },
//     //     error:function (data) {
//     //         alert("请重新填写活动资料");
//     //         return false;
//     //     }
//     // })
//     return true;
// }
function getFullPath(obj) {    //得到图片的完整路径
    if (obj) {
        //ie
        if (window.navigator.userAgent.indexOf("MSIE") >= 1) {
            obj.select();
            return document.selection.createRange().text;
        }
        //firefox
        else if (window.navigator.userAgent.indexOf("Firefox") >= 1) {
            if (obj.files) {
                return obj.files.item(0).getAsDataURL();
            }
            return obj.value;
        }
        return obj.value;
    }
}
$(function () {
    //用户一点击添加图片按钮就能触发
    $("#personalPortrait").change(function () {
        var strSrc = $("#personalPortrait").val();
        img = new Image();
        img.src = getFullPath(strSrc);
        //验证上传文件格式是否正确
        var pos = strSrc.lastIndexOf(".");
        var lastname = strSrc.substring(pos, strSrc.length)
        if (lastname.toLowerCase() != ".jpg") {
            alert("您上传的文件类型为" + lastname + "，图片必须为 JPG 类型");
            return false;
        }
        var prevDiv = document.getElementById('preview1');
        if (this.files && this.files[0])
        {
            var reader = new FileReader();
            reader.onload = function(evt){
                prevDiv.innerHTML = '<img src="' + evt.target.result + '" class="unloadPhoto" />';
            }
            reader.readAsDataURL(this.files[0]);
        }
        else
        {
            prevDiv.innerHTML = '<div class="unloadPhoto img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>';
        }
        // $("#preview1").attr("src",preview(this));
        $("#preview1").css("display","block");
    })

    $("#activityImageUrl").change(function () {
        var strSrc = $("#activityImageUrl").val();
        img = new Image();
        img.src = getFullPath(strSrc);
        //验证上传文件格式是否正确
        var pos = strSrc.lastIndexOf(".");
        var lastname = strSrc.substring(pos, strSrc.length)
        if (lastname.toLowerCase() != ".jpg") {
            alert("您上传的文件类型为" + lastname + "，图片必须为 JPG 类型");
            return false;
        }
        var prevDiv = document.getElementById('preview2');
        if (this.files && this.files[0])
        {
            var reader = new FileReader();
            reader.onload = function(evt){
                prevDiv.innerHTML = '<img src="' + evt.target.result + '" class="unloadPhoto" />';
            }
            reader.readAsDataURL(this.files[0]);
        }
        else
        {
            prevDiv.innerHTML = '<div class="unloadPhoto img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>';
        }
        // $("#preview2").attr("src",getFullPath(this));
        $("#preview2").css("display","block");
    })
    $("#activityImageUrl2").change(function () {
        var strSrc = $("#activityImageUrl2").val();
        img = new Image();
        img.src = getFullPath(strSrc);
        //验证上传文件格式是否正确
        var pos = strSrc.lastIndexOf(".");
        var lastname = strSrc.substring(pos, strSrc.length)
        if (lastname.toLowerCase() != ".jpg") {
            alert("您上传的文件类型为" + lastname + "，图片必须为 JPG 类型");
            return false;
        }
        var prevDiv = document.getElementById('preview3');
        if (this.files && this.files[0])
        {
            var reader = new FileReader();
            reader.onload = function(evt){
                prevDiv.innerHTML = '<img src="' + evt.target.result + '" class="unloadPhoto" />';
            }
            reader.readAsDataURL(this.files[0]);
        }
        else
        {
            prevDiv.innerHTML = '<div class="unloadPhoto img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>';
        }
        // $("#preview3").attr("src",getFullPath(this));
        $("#preview3").css("display","block");
    })
    $("#activityImageUrl3").change(function () {
        var strSrc = $("#activityImageUrl3").val();
        img = new Image();
        img.src = getFullPath(strSrc);
        //验证上传文件格式是否正确
        var pos = strSrc.lastIndexOf(".");
        var lastname = strSrc.substring(pos, strSrc.length)
        if (lastname.toLowerCase() != ".jpg") {
            alert("您上传的文件类型为" + lastname + "，图片必须为 JPG 类型");
            return false;
        }
        var prevDiv = document.getElementById('preview4');
        if (this.files && this.files[0])
        {
            var reader = new FileReader();
            reader.onload = function(evt){
                prevDiv.innerHTML = '<img src="' + evt.target.result + '" class="unloadPhoto" />';
            }
            reader.readAsDataURL(this.files[0]);
        }
        else
        {
            prevDiv.innerHTML = '<div class="unloadPhoto img" style="filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src=\'' + this.value + '\'"></div>';
        }
        // $("#preview4").attr("src",getFullPath(this));
        $("#preview4").css("display","block");
    })
    //这里获取学号手机号的信息
    if($("#personalId").val()==""||$("#personalPhone").val()==""){
        $.ajax({
            type:"POST",
            url:"",
            dataType:"json",
            success:function (data) {
                alert("已经获取个人数据");
                addForm1(data);
            },
            error:function () {
                alert("出现错误");
                return false;
            }
        })
    }
})
function addForm1(data) {
    var a=document.form1.elements;
    a[0].value=data['managerId'];
    a[1].value=data['managerName'];
    a[2].value=data['managerDepartment'];
    a[3].value=data['managerOrganize'];
    a[4].value=data['managerPhone'];
    a[5].value=data['managerPortrait'];
    a[6].value=data['managerInformation'];
}
/* 对发布活动的添加附近按钮设置点击事件*/
$(function () {
    $("#fileName").on("change","input[type='file']",function () {
        var filePath=$(this).val();
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        $("#fileName").html(fileName+"<input type='file' id='input_spe'>");
    })
})


/*查看活动*/
$(function () {
    $.ajax({
        type:"POST",
        url:"/ReleaseProject/servlet/ManagerAllActive",
        dataType:"json",
        success:function (data) {
            alert("已经获取mlist");
            if(eval(data).length==0){
                $("#some").fadeOut(200,function () {
                    $("#none").fadeIn(200);
                });
            }
            else{
                mlist(data);
            }
        },
        error:function () {
            alert("出现错误,无法获取mlist");
            return false;
        }
    })
    function mlist(data) {
        var mlists=eval(data);
        /*克隆多个出来,如果过多，则出现滚动条*/
        var resourse =document.getElementsByClassName("webList");
        var clone=$(".comment_list ul .webList").clone(true);
        for(var j=0;j<mlists.length;j++){
            $(".comment_list ul").append().clone;
        }
        var title=document.getElementsByName("mlist_title");
        var state=document.getElementsByName("mlist_state");
        var activeNum=document.getElementsByName("activeNum");
        var change=document.getElementsByName("det_com");
        for(var i=0;i<mlists.length;i++){
            title[i].innerHTML=data[i].activeName;
            activeNum[i].innerHTML=data[i].activeNumber;
            if(data[i].activeState==1){
                state[i].innerHTML="（进行中）";
                change[i].innerHTML="查看详情";
            }
            else{
                state[i].innerHTML="(已结束)";
                change[i].innerHTML="查看反馈";
            }
        }
    }
})

function returnDetCom(num) {
    var detail=$("#look_detail");
    var comment=$("#look_comment");
    var some=$("#some");
    if(num==1){
        detail.fadeOut(200,function () {
            some.fadeIn(200);
        })
    }
    else{
        comment.fadeOut(200,function () {
            some.fadeIn(200);
        })
    }
}
function enterDetOrCom(num) {
    var detail=$("#look_detail");
    var comment=$("#look_comment");
    var some=$("#some");
    if(num==1){
        some.fadeOut(200,function () {
            detail.fadeIn(200);
        })
    }
    else if(num==2){
        some.fadeOut(200,function () {
            comment.fadeIn(200);
        })
    }
}
$(function () {
    var checkTo=$(".mlist_right a");
    var activeNum=document.getElementsByName("activeNum");
    var index=0;
    checkTo.click(function () {
        index=checkTo.index(this);
        if(this.innerHTML=="查看详情"){
            enterDetOrCom(1);
            ActiveMes(index);
        }
        else {
            enterDetOrCom(2);
            Comment(index);
        }
    })
})
/*调用活动详情页方法*/
function ActiveMes(index) {
    var activeNum=document.getElementsByName("activeNum");
    $.ajax({
        type:"POST",
        url:"/ReleaseProject/servlet/LookActivingServlet",
        data:{activeNumber:activeNum[index].innerHTML},
        dataType:"json",
        success:function (data) {
            alert("已经获取活动详情");
            addForm3(data);
        },
        error:function () {
            return false;
        }
    })
}
/*调用活动反馈*/
function Comment(index) {
    var activeNum=document.getElementsByName("activeNum");
    $.ajax({
        type:"POST",
        url:"/ReleaseProject/servlet/LookAccessServlet",
        data:{activeNumber:activeNum[index].innerHTML},
        dataType:"json",
        success:function (data) {
            alert("已经获取活动反馈");
            if(eval(data).length==0){
                $(".comment_list").fadeOut(200,function () {
                    $(".noneComment").fadeIn(200);
                })
            }
            else{
                addComment(data);
            }
        },
        error:function () {
            return false;
        }
    })
}
/*填入活动反馈具体数据方法*/
function addComment(data) {
    var showActive=document.getElementsByName("showActiveDetail");
    showActive[1].innerHTML=data.activeName+"用户反馈";
    var mlists=eval(data);
    /*克隆多个出来,如果过多，则出现滚动条*/
    var comment=document.getElementsByName("mlist_comment");
    var commentId=document.getElementsByName("commentID");
    for(var i=0;i<mlists.length;i++){
        comment[i].innerHTML=data[i].PeopleComment;//评价
        commentId[i].innerHTML=data[i].PeopleId;//用户名
    }
}
/*填入活动详情具体数据方法*/
function addForm3(data) {
    var showActive=document.getElementsByName("showActiveDetail");
    showActive[0].innerHTML=data['activeName']+"活动详情";
    var a=document.form3.elements;
    a[0].value=data['activeName'];
    a[1].value=data['activeDepartment'];
    a[2].value=data['activeOrganize'];
    a[3].value=data['ActiveBeginDate'];
    /*这里需要输入具体时间*/
        a[4].value=data['Beginhour'];
        a[5].value=data['Beginmin'];

    a[6].value=data['ActiveEndDate'];
    /*这里需要输入具体时间*/
        a[7].value=data['Endhour'];
        a[8].value=data['Endmin'];

    a[9].value=data['activeObject'];
    /*三张图片我按顺序排的*/
    a[10].value=data['activeImageUrl1'];
    a[11].value=data['activeImageUrl2'];
    a[12].value=data['activeImageUrl3'];

    a[13].value=data['activeInformation'];
    a[14].value=data['activeFileUrl'];
}

