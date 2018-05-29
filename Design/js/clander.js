$(function () {
    //===================get ele===============================
    var omonth1=document.getElementById("month1");
    var oyear1=document.getElementById("year1");
    var con1=document.getElementById("con1");
    var prevmonth1=document.getElementById("prevmonth1");
    var nextmonth1=document.getElementById("nextmonth1");
    var prevyear1=document.getElementById("prevyear1");
    var nextyear1=document.getElementById("nextyear1");
    var nowtime1=document.getElementById("nowtime1");
    var omonth2=document.getElementById("month2");
    var oyear2=document.getElementById("year2");
    var con2=document.getElementById("con2");
    var prevmonth2=document.getElementById("prevmonth2");
    var nextmonth2=document.getElementById("nextmonth2");
    var prevyear2=document.getElementById("prevyear2");
    var nextyear2=document.getElementById("nextyear2");
    var nowtime2=document.getElementById("nowtime2");
    var date1=document.getElementById("showDay1");
    var date2=document.getElementById("showDay2");
    var showDate1=document.getElementById("activityBeginDate");
    var showDate2=document.getElementById("activityEndDate");
    var box1=document.getElementById("box1");
    var box2=document.getElementById("box2");
    //===================function===============================
    //有无指定类名的判断
    function hasclass(str,cla){
        var i=str.search(cla);
        if(i==-1){
            return false;
        }else{
            return true;
        };
    };
    //初始化日期显示方法
    function remove(){
        con1.innerHTML="";
    };
    function init1(oneweek,alld,nowd){
        for(var i=1;i<=oneweek;i++){//留空
            var eday=document.createElement("div");
            eday.innerHTML="";
            con1.appendChild(eday);
        };
        for(var i=1;i<=alld;i++){//正常区域
            var eday=document.createElement("div");
            if(i==nowd){
                eday.innerHTML=i;
                eday.className="now edate";
                con1.appendChild(eday);
            }else{
                eday.innerHTML=i;
                eday.className="edate";
                con1.appendChild(eday);
            };
        };
    };
    function init2(oneweek,alld,nowd){
        for(var i=1;i<=oneweek;i++){//留空
            var eday=document.createElement("div");
            eday.innerHTML="";
            con2.appendChild(eday);
        };
        for(var i=1;i<=alld;i++){//正常区域
            var eday=document.createElement("div");
            if(i==nowd){
                eday.innerHTML=i;
                eday.className="now edate";
                con2.appendChild(eday);
            }else{
                eday.innerHTML=i;
                eday.className="edate";
                con2.appendChild(eday);
            };
        };
    };
    //获取本月1号的周值
    function oneyearoneday(dateObj){
        var oneyear = new Date();
        var year=dateObj.getFullYear();
        var month=dateObj.getMonth();//0是12月
        oneyear.setFullYear(year);
        oneyear.setMonth(month);//0是12月
        oneyear.setDate(1);
        return oneyear.getDay();
    };
    //当前是几
    function nowday(dateObj){
        return dateObj.getDate();
    };
    //获取本月总日数方法
    function alldays(dateObj){
        var year=dateObj.getFullYear();
        var month=dateObj.getMonth();
        if(isLeapYear(year)){//闰年
            switch(month) {
                case 0: return "31"; break;
                case 1: return "29"; break; //2月
                case 2: return "31"; break;
                case 3: return "30"; break;
                case 4: return "31"; break;
                case 5: return "30"; break;
                case 6: return "31"; break;
                case 7: return "31"; break;
                case 8: return "30"; break;
                case 9: return "31"; break;
                case 10: return "30"; break;
                case 11: return "31"; break;
                default:
            };
        }else{//平年
            switch(month) {
                case 0: return "31"; break;
                case 1: return "28"; break; //2月
                case 2: return "31"; break;
                case 3: return "30"; break;
                case 4: return "31"; break;
                case 5: return "30"; break;
                case 6: return "31"; break;
                case 7: return "31"; break;
                case 8: return "30"; break;
                case 9: return "31"; break;
                case 10: return "30"; break;
                case 11: return "31"; break;
                default:
            };
        };
    };
    //闰年判断函数
    function isLeapYear(year){
        if( (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
            return true;
        }else{
            return false;
        };
    };
    //月份转化方法
    function toyear(dateObj){
        var month=dateObj.getMonth()
        switch(month) {
            case 0: return "1"; break;
            case 1: return "2"; break;
            case 2: return "3"; break;
            case 3: return "4"; break;
            case 4: return "5"; break;
            case 5: return "6"; break;
            case 6: return "7"; break;
            case 7: return "8"; break;
            case 8: return "9"; break;
            case 9: return "10"; break;
            case 10: return "11"; break;
            case 11: return "12"; break;
            default:
        };
    }
    //===================set year month===============================
    //默认时间对象
    var dateObj1 = new Date();
    //获取本月1号的周值
    var oneweek1=oneyearoneday(dateObj1);
    //本月总日数
    var alld1=alldays(dateObj1);
    //当前是几
    var nowd1=nowday(dateObj1);
    //初始化显示本月信息
    init1(oneweek1,alld1,nowd1);
    //===================set day===============================
    //默认时间对象
    var dateObj2 = new Date();
    //获取本月1号的周值
    var oneweek2=oneyearoneday(dateObj2);
    //本月总日数
    var alld2=alldays(dateObj2);
    //当前是几
    var nowd2=nowday(dateObj2);
    init2(oneweek2,alld2,nowd2);
    //===================show date===============================
    date1.onclick=function(){//显示控件
        box1.style.display="block";
        con1.onclick=function(event){
            if(event.target.tagName=="DIV" && event.target.nodeType=="1" && hasclass(event.target.className,"edate")){
                showDate1.value="";
                showDate1.value=dateObj1.getFullYear()+"-"+toyear(dateObj1)+"-"+event.target.innerHTML;
                box1.style.display="none";
            };
        };

        //动态控制
        prevmonth1.onclick=function(){//上一月
            var ddm=null;
            var ddy=null;
            if((dateObj1.getMonth()-1)==-1){
                ddm=11;
                ddy=dateObj1.getFullYear()-1;
            }else{
                ddm=dateObj1.getMonth()-1;
                ddy=dateObj1.getFullYear();
            };
            dateObj1.setFullYear(ddy);
            dateObj1.setMonth(ddm);
            omonth1.innerHTML=toyear(dateObj1)+"月";
            oyear1.innerHTML=dateObj1.getFullYear()+"年";
            remove();
            oneweek1=oneyearoneday(dateObj1);
            alld1=alldays(dateObj1);
            nowd1=nowday(dateObj1);
            init1(oneweek1,alld1,nowd1);
        };
        nextmonth1.onclick=function(){//下一月
            var ddm=null;
            var ddy=null;
            if((dateObj1.getMonth()+1)==12){
                ddm=0;
                ddy=dateObj1.getFullYear()+1;
            }else{
                ddm=dateObj1.getMonth()+1;
                ddy=dateObj1.getFullYear();
            };
            dateObj1.setFullYear(ddy);
            dateObj1.setMonth(ddm);
            omonth1.innerHTML=toyear(dateObj1)+"月";
            oyear1.innerHTML=dateObj1.getFullYear()+"年";
            remove();
            oneweek1=oneyearoneday(dateObj1);
            alld1=alldays(dateObj1);
            nowd1=nowday(dateObj1);
            init1(oneweek1,alld1,nowd1);
        };
        prevyear1.onclick=function(){//上一年
            var ddy=dateObj1.getFullYear()-1;
            dateObj1.setFullYear(ddy);
            oyear1.innerHTML=dateObj1.getFullYear()+"年";
            remove();
            oneweek1=oneyearoneday(dateObj1);
            alld1=alldays(dateObj1);
            nowd1=nowday(dateObj1);
            init1(oneweek1,alld1,nowd1);
        };
        nextyear1.onclick=function(){//下一年
            var ddy=dateObj1.getFullYear()+1;
            dateObj1.setFullYear(ddy);
            oyear1.innerHTML=dateObj1.getFullYear()+"年";
            remove();
            oneweek1=oneyearoneday(dateObj1);
            alld1=alldays(dateObj1);
            nowd1=nowday(dateObj1);
            init1(oneweek1,alld1,nowd1);
        };
        //返回到今时今日
        nowtime1.onclick=function(){
            var dddate=new Date();
            var ddm=dddate.getMonth();
            var ddy=dddate.getFullYear();
            dateObj1.setFullYear(ddy);
            dateObj1.setMonth(ddm);
            omonth1.innerHTML=toyear(dateObj1)+"月";
            oyear1.innerHTML=dateObj1.getFullYear()+"年";
            remove();
            oneweek1=oneyearoneday(dateObj1);
            alld1=alldays(dateObj1);
            nowd1=nowday(dateObj1);
            init1(oneweek1,alld1,nowd1);
        };
        //年月获取
        var year=dateObj1.getFullYear();
        var month=toyear(dateObj1);//0是12月
        //月年的显示
        omonth1.innerHTML=month+"月";
        oyear1.innerHTML=year+"年";
    };
    date2.onclick=function(){//显示控件
        box2.style.display="block";
        con2.onclick=function(event){
            if(event.target.tagName=="DIV" && event.target.nodeType=="1" && hasclass(event.target.className,"edate")){
                showDate2.value="";
                showDate2.value=dateObj2.getFullYear()+"-"+toyear(dateObj2)+"-"+event.target.innerHTML;
                box2.style.display="none";
            };
        };
        //===================set year month===============================
        //动态控制
        prevmonth2.onclick=function(){//上一月
            var ddm=null;
            var ddy=null;
            if((dateObj2.getMonth()-1)==-1){
                ddm=11;
                ddy=dateObj2.getFullYear()-1;
            }else{
                ddm=dateObj2.getMonth()-1;
                ddy=dateObj2.getFullYear();
            };
            dateObj2.setFullYear(ddy);
            dateObj2.setMonth(ddm);
            omonth2.innerHTML=toyear(dateObj2)+"月";
            oyear2.innerHTML=dateObj2.getFullYear()+"年";
            remove();
            oneweek2=oneyearoneday(dateObj2);
            alld2=alldays(dateObj2);
            nowd2=nowday(dateObj2);
            init2(oneweek2,alld2,nowd2);
        };
        nextmonth2.onclick=function(){//下一月
            var ddm=null;
            var ddy=null;
            if((dateObj2.getMonth()+1)==12){
                ddm=0;
                ddy=dateObj2.getFullYear()+1;
            }else{
                ddm=dateObj2.getMonth()+1;
                ddy=dateObj2.getFullYear();
            };
            dateObj2.setFullYear(ddy);
            dateObj2.setMonth(ddm);
            omonth2.innerHTML=toyear(dateObj2)+"月";
            oyear2.innerHTML=dateObj2.getFullYear()+"年";
            remove();
            oneweek2=oneyearoneday(dateObj2);
            alld2=alldays(dateObj2);
            nowd2=nowday(dateObj2);
            init2(oneweek2,alld2,nowd2);
        };
        prevyear2.onclick=function(){//上一年
            var ddy=dateObj2.getFullYear()-1;
            dateObj2.setFullYear(ddy);
            oyear2.innerHTML=dateObj2.getFullYear()+"年";
            remove();
            oneweek2=oneyearoneday(dateObj2);
            alld2=alldays(dateObj2);
            nowd2=nowday(dateObj2);
            init2(oneweek2,alld2,nowd2);
        };
        nextyear2.onclick=function(){//下一年
            var ddy=dateObj2.getFullYear()+1;
            dateObj2.setFullYear(ddy);
            oyear2.innerHTML=dateObj2.getFullYear()+"年";
            remove();
            oneweek2=oneyearoneday(dateObj2);
            alld2=alldays(dateObj2);
            nowd2=nowday(dateObj2);
            init2(oneweek2,alld2,nowd2);
        };
        //返回到今时今日
        nowtime2.onclick=function(){
            var dddate=new Date();
            var ddm=dddate.getMonth();
            var ddy=dddate.getFullYear();
            dateObj2.setFullYear(ddy);
            dateObj2.setMonth(ddm);
            omonth2.innerHTML=toyear(dateObj2)+"月";
            oyear2.innerHTML=dateObj2.getFullYear()+"年";
            remove();
            oneweek2=oneyearoneday(dateObj2);
            alld2=alldays(dateObj2);
            nowd2=nowday(dateObj2);
            init2(oneweek2,alld2,nowd2);
        };
        //年月获取
        var year=dateObj2.getFullYear();
        var month=toyear(dateObj2);//0是12月
        //月年的显示
        omonth2.innerHTML=month+"月";
        oyear2.innerHTML=year+"年";
    };
})