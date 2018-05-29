/*
返回顶部jq代码，当页面滚动到顶部下方300px一下后，会渐渐显示出一个放回顶部的图标（fadein，fadeout），
点击这个图标之后，页面会以每秒某一像素的滚动速度，逐渐滚动至顶部
 */
$(document).ready(function() {
    //首先将图标隐藏
    $("#back-to-top").hide();

    //当滚动条的位置处于距顶部300像素以下时，图标出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                $("#back_to_top").fadeIn(1000);
            }
            else {
                $("#back_to_top").fadeOut(300);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#back_to_top").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                1000);
            return false;
        });
    });
});