$(function () {
    var tab=$('.user_left ul>li');
    var con=$('.user_right>div');
    var index1=0;
    tab.click(function(){
        index1=tab.index(this);
        $(this).addClass('current_tab').siblings().removeClass('current_tab');
        con.filter(':visible').stop(true,true).fadeOut(200,function(){
            con.eq(index1).fadeIn(200);
        })
    });
})

$(function () {
    var tab=$('.manage_left ul>li');
    var con=$('.manage_right>div');
    var index1=0;
    tab.click(function(){
        index1=tab.index(this);
        $(this).addClass('current_tab').siblings().removeClass('current_tab');
        con.filter(':visible').stop(true,true).fadeOut(200,function(){
            con.eq(index1).fadeIn(200);
        })
    });
})