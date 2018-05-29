$(function () {
    // var page=$("#page li a");
    // for(var i=0;i<page.length-1;i++){
    //     page.eq(i).attr("href","hhhhhhhhhh");/*空里面填href值*/
    // }
    /*跳转部分*/
    $("#jumpPage").click(function () {
        var pages = $("#jumpWhere");
        $.ajax({
                /*发送ajax请求*/
                type: "POST",
                url: " ", /*路径*/
                data: {pages:pages.val()}, //发送用户所填页数
                dataType: "json",
                success: function (data) {
                    alert("成功提交页数");
                    addMes(data);
                    return true;
                },
                error:function () {
                    alert("页数提交失败！");
                    $("#jumpWhere").value="";//清空框里的值
                    return false;
                }
        })
        function getPages(data) {

            // $.ajax({
            //     type:"GET",
            //     url:"",/*路径*/
            //     dataType:"json",
            //     success:function () {
            //         alert("已经获取用户所需页数");
            //         pageNumber:
            //         return true;
            //     },
            //     error:function (e) {
            //         alert("出现错误");
            //         return false;
            //     }
            // })
        }
    })

})
var count=1;
function addPage() {
    var newPage=document.getElementById("newPage");
    var nextPage=document.getElementById("nextPage");
    var pageNum=document.createElement("li");
    pageNum.innerHTML="<a>"+count+++"</a>";
    newPage.insertBefore(pageNum,nextPage);
}
