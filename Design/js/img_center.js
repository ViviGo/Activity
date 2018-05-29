function as(width,height) {
    var classElements=$("#list img");
    for(var i=0;i<classElements.length;i++) {
        alert("43");
        if (classElements[i].width > width) {
            classElements[i].style.marginLeft = -(classElements[i].width - width) / 2 + 'px';
        }
        else if(classElements[i].width < width){
            classElements[i].style.marginTop = (width - classElements[i].width) / 2 + 'px';
        }
        else if(classElements[i].height > height){
            classElements[i].style.marginTop = -(classElements[i].height - height) / 2 + 'px';
        }
        else if(classElements[i].height < height){
            classElements[i].style.marginTop = (height-classElements[i].height) / 2 + 'px';
        }
        else {
            classElements[i].width = width;
            classElements[i].height=height;
        }
    }
}
$(function () {
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    // var winHeight;
    var winWidth;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        // winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    var banner_width=winWidth*0.8;
    // var banner_height=winHeight*0.2;
    as(banner_width,400);
})
