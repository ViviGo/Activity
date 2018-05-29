
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
function addMes(data) {
    var js=eval(data);
    var showList=$(".ac_show ul li");
    for(var i=0;i<=showList.length-1;i++) {
        showList.eq(i).css("display","none");
        if(i>=0&&i<=js.length-1) {
            showList.eq(i).css("display","block");
        }
    }
    var a =document.getElementsByName("MesName");
    var b =document.getElementsByName("MesLeader");
    var c =document.getElementsByName("MesObject");
    var d =document.getElementsByName("MesInformation");
    for (var j=0;j<=js.length-1;j++){
        a[j].innerHTML=data[j].name;
        b[j].innerHTML=data[j].sponsor;
        c[j].innerHTML=data[j].intro;
        d[j].innerHTML=data[j].academy;
    }
}
