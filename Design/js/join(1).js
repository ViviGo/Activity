
function transmit(num) {
    $.ajax({
        /*发送ajax请求*/
        type: "POST",
        url: "/Start/MyServlet", /*路径*/
        data: {page: num}, //发送用户所填页数
        dataType: "json",
        success: function (data) {
            alert("成功");
            addMes(data);
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
function addMes(data) {
    var js=eval(data);
     curPage=data[js.length-1].curPage;
     totalPage=data[js.length-1].totalPage;
    checkPages(curPage,totalPage);
    var showList=$(".ac_show .showList");
    var a =document.getElementsByName("MesName");
    var b =document.getElementsByName("MesLeader");
    var c =document.getElementsByName("MesObject");
    var d =document.getElementsByName("MesInformation");
    var e =document.getElementsByName("MesJoinNumber"); /*参加人数*/
    var f =document.getElementsByName("MesRemainDays");/*剩余天数*/
    var g =document.getElementsByName("MesPictures");/*活动图片*/
   showList.css("display","none");/*首先把所有活动框隐藏*/
    document.getElementById("showPage").innerHTML="第"+curPage+"页（共"+totalPage+"页）";
    for (var j=0;j<=js.length-2;j++){
        a[j].innerHTML=data[j].name;
        b[j].innerHTML=data[j].sponsor;
        c[j].innerHTML=data[j].intro;
        d[j].innerHTML=data[j].academy;
        e[j].innerHTML=data[j].num;/*要改参数名*/
        f[j].innerHTML=data[j].date ;/*要改参数名*/
        // g[j].attr("src",data[j].cc);/*要改参数名*/
 
        showList.eq(j).css("display","block"); 
  
        /*再把活动框一个个赋值显示出来*/
    }

}

/*这里页面一开始加载和点击报名时传输的代码*/
$(function () {
    var signUpBtn=$("#listClass .SignUp");
    var a=$("li[name='MesName']");
    var de;
    for(var i=0;i<8;i++) {
        de=a[i].innerText;
        signUpBtn.eq(i).click(function () {   
        	/*点击马上报名按钮*/
        	alert(de);
            $.ajax({
                /*非原生ajax，使用了jq库封装好的ajax方法*/
                type: "POST",
                url: "/Start/MyServlet", /*后端接口url*/
                data: {
                    "joinActivityName":de,
                	"joinStudentId": "aa",
                    "abc":"ccc"
                }, /*暂时没有session不知道该传什么数据*/
                dataType: "json", /*数据类型是json*/
               
                success: function () {    /*数据传递成功就调用success函数*/
                    alert("报名成功！");
                    return true;
                },
                error: function () {    /*数据传递不成功就调用error函数*/
                    alert("您未登陆，请登录后再报名！");
                    return false;
                }
            })
            alert("报名！");
        })
    }

    var curPage=0,totalPage=0;
    $.ajax({
        type:"POST",
        url:"/Start/MyServlet", /*url路径*/
        data: {
            "d": "d"
        }, 
        dataType:"json",
        success:function (data) {
            alert("已经发送给后台数据");
            addMes(data);
        },
        error:function () {
            alert("已经发送给后台数据失败");
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
        success:function (data) {
            alert("已经发送给后台数据");
            addMes(data);
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
            url: "/Start/MyServlet", /*路径*/
            data: {pages: pages}, //发送用户所填页数
            dataType: "json",
            success: function (data) {
                alert("成功提交页数");
                addMes(data);
                document.getElementById("jumpWhere").value = "";//清空框里的值
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
                url: "/Start/MyServlet", /*路径*/
                data: {paixu: str}, //发送用户所填页数
                dataType: "json",
                success: function (data) {
                    alert("成功排序");
                    addMes(data);
                    return true;
                },
                error: function () {
                    alert("排序失败！");
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




