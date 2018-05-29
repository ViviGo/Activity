/*
点击最上方导航条的登录与注册时所出现的界面，还有点击界面右上角可以退出界面的功能
 */
function addActivityMes(data) {
    var a=$(".bigPic .inside_right li a");
    a[0].innerHTML=data['activeName'];
    a[1].innerHTML=data['activeDepartment'];
    a[2].innerHTML=data['activeOrganize'];
    a[3].innerHTML=data['activeObject'];
    a[4].innerHTML=data['activeBeginDate'];
    a[5].innerHTML=data['activeEndDate'];
    a[6].innerHTML=data['personalImformation'];
    a[7].innerHTML=data['activeDownloadName'];      /*插入附件名字*/
    a[7].href(data['activeDownload']);              /*插入附件地址路径，方便下载*/
    $("#aiu").attr("src","../activeFile/"+data['activeImageUrl']);/*插入图片src*/
}
$(document).ready(function() {
    var activityMes=$('.ac_show li #picture');
    for(let index=0;index<=activityMes.length-1;index++){
            activityMes.eq(index).click(function() {
                alert(index);
                $('.form_mask').fadeIn(100);
                $('.bigPic').slideDown(200);
                $.ajax({
                    type:"GET",
                    url:"",     /*url接口*/
                    dataType:"json",
                    success:function (data) {
                        // alert("已经获取个人数据");
                        addActivityMes(data);
                    },
                    error:function (e) {
                        $("#activityImageUrl").attr("src","../img/roll/1.jpg");
                        return false;
                    }
                })
            })
            $('.pic_close').click(function() {
                $('.form_mask').fadeOut(100);
                $('.bigPic').slideUp(200);
            })
    }
})