$(function () {

})

function transmit(num) {
    $.ajax({
        /*发送ajax请求*/
        type: "POST",
        url: " ", /*路径*/
        data: {pages: num}, //发送用户所填页数
        dataType: "json",
        success: function (data,curPage,totalPage) {
            alert("成功");
            addMes(data,curPage,totalPage);
            return true;
        },
        error: function () {
            alert("没有或者传输失败！");
            return false;
        }
    })
}
function pre() {
    transmit(curPage-1);
}
function next() {
    transmit(curPage+1);
}
function firstPage() {
    transmit(1);
}
function lastPage() {
    transmit(totalPage);
}
function checkPages(curPage,totalPage) {
    if(curPage===0||totalPage===0){
        $("#prePage").attr("disabled",true);
        $("#nextPage").attr("disabled",true);
    }
    else if(curPage===1){
        $("#prePage").attr("disabled",true);
    }
    else if(totalPage===curPage){
        $("#nextPage").attr("disabled",true);
    }
    else {
        $("#prePage").attr("disabled",false);
        $("#nextPage").attr("disabled",false);
    }
}
function addMes(data,curPage,totalPage) {
    var js=eval(data);
    curPage=eval(curPage);
    totalPage=eval(totalPage);
    checkPages(curPage,totalPage);
    var showList=$(".ac_show .showList");
    var a =document.getElementsByName("MesName");
    var b =document.getElementsByName("MesLeader");
    var c =document.getElementsByName("MesObject");
    var d =document.getElementsByName("MesInformation");
    var e =document.getElementsByName("MesJoinNumber"); /*参加人数*/
    var f =document.getElementsByName("MesRemainDays");/*剩余天数*/
    var g =document.getElementById("pictures");/*活动图片*/
    showList.css("display","none");/*首先把所有活动框隐藏*/
    document.getElementById("showPage").innerHTML="第"+curPage+"页（共"+totalPage+"页）";
    for (var j=0;j<=js.length-1;j++){
        a[j].innerHTML=data[j].name;
        b[j].innerHTML=data[j].sponsor;
        c[j].innerHTML=data[j].intro;
        d[j].innerHTML=data[j].academy;
        e[j].innerHTML=data[j].aa ;/*要改参数名*/
        f[j].innerHTML=data[j].bb ;/*要改参数名*/
        $(".showList #picture")[j].src="../img/roll/2.jpg";
        showList.eq(j).css("display","block"); /*再把活动框一个个赋值显示出来*/
    }

}
function addJoinNumber(i) {
    var JoinNumber=$("li[name='MesJoinNumber']");
    $.ajax({
        type: "POST",
        url: "", /*后端接口url*/
        dataType: "json",
        success: function (number) {
            JoinNumber[i].html=number;
            return true;
        },
        error: function () {
            return false;
        }
    })
}
/*这里页面一开始加载和点击报名时传输的代码*/
var signUpBtn=$("#listClass .SignUp");
var a =$("li[name='MesName']");
var de;
function join_click(i) {
    signUpBtn.eq(i).click(function () {      /*点击马上报名按钮*/
        de=a[i].innerText;
        alert(de);
        $.ajax({
            /*非原生ajax，使用了jq库封装好的ajax方法*/
            type: "POST",
            url: "", /*后端接口url*/
            data: {
                joinStudentId: "aa",
                joinActivityName:de,
                "d": "d"
            }, /*暂时没有session不知道该传什么数据*/
            dataType: "json", /*数据类型是json*/
            success: function (number) {    /*数据传递成功就调用success函数*/
                alert("报名成功！");
                $(".showList #number")[i].innerText=number;
                return true;
            },
            error: function () {    /*数据传递不成功就调用error函数*/
                alert("您未登陆，请登录后再报名！");
                return false;
            }
        })
    })
}
$(function () {
    var signUpBtn=$("#listClass .SignUp");
    var a =$("li[name='MesName']");
    var de;
    var JoinNumber=$("li[name='MesJoinNumber']");
    for(let i=0;i<8;i++) {
            signUpBtn.eq(i).click(function () {      /*点击马上报名按钮*/
                de=a[i].innerText;
                alert(de);
                $.ajax({
                    /*非原生ajax，使用了jq库封装好的ajax方法*/
                    type: "POST",
                    url: "", /*后端接口url*/
                    data: {
                        joinStudentId: "aa",
                        joinActivityName:de,
                        "d": "d"
                    }, /*暂时没有session不知道该传什么数据*/
                    dataType: "json", /*数据类型是json*/
                    success: function (number) {    /*数据传递成功就调用success函数*/
                        alert("报名成功！");
                        JoinNumber[i].html=number;
                        return true;
                    },
                    error: function () {    /*数据传递不成功就调用error函数*/
                        alert("您未登陆，请登录后再报名！");
                        return false;
                    }
                })
            })
        }


    var curPage=0,totalPage=0;
    $.ajax({
        type:"POST",
        url:"/Start/MyServlet", /*url路径*/
        dataType:"json",
        success:function (data,curPage,totalPage) {
            // alert("已经发送给后台数据");
            addMes(data,curPage,totalPage);
        },
        error:function () {
            // alert("已经发送给后台数据失败");
            return false;
        }
    })
})

/*点击search框搜索的显示结果*/
function go()
{
    $.ajax({
        type:"POST",
        url:"/Start/MyServlet", /*url路径*/
        data:{
            formSearch:$("#word").val()
        },
        dataType:"json",
        success:function (data,curPage,totalPage) {
            alert("已经发送给后台数据");
            addMes(data,curPage,totalPage);
        },
        error:function () {
            alert("已经发送给后台数据失败");
            return false;
        }
    })
}

/*点击分页的效果代码*/
$(function () {
    $("#jumpPage").click(function () {  /*点击跳转按钮跳转*/
        var pages = $("#jumpWhere").val();
        $.ajax({
            /*发送ajax请求*/
            type: "POST",
            url: " ", /*路径*/
            data: {pages: pages}, //发送用户所填页数
            dataType: "json",
            success: function (data,curPage,totalPage) {
                alert("成功提交页数");
                addMes(data,curPage,totalPage);
                return true;
            },
            error: function () {
                alert("页数提交失败！");
                document.getElementById("jumpWhere").value = "";//清空框里的值
                return false;
            }
        })
    })

})

/*点击排序*/
$(function () {
    var choose=$(".choose div li");
    var change=$(".choose div #selector");
    function show(i,num) {
        choose.eq(i).click(function () {
            var str=$(this).html();
            alert(str);
            change[num].innerHTML=str;
            $.ajax({
                /*发送ajax请求*/
                type: "POST",
                url: " ", /*路径*/
                data: {pages: str}, //发送用户所填页数
                dataType: "json",
                success: function (data) {
                    alert("成功提交排序数字");
                    addMes(data);
                    return true;
                },
                error: function () {
                    alert("排序提交失败！");
                    return false;
                }
            })
        })
    }
    for(var i=0;i<=choose.length-1;i++){
        if(i<3){
            show(i,0);
        }
        else if(i<6){
            show(i,1);
        }
        else if(i<9){
            show(i,2)
        }
    }
})




