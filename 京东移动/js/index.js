window.onload = function () {
    //搜索框透明度
    search();
    //轮播图播放
    banner();
    //倒计时
    cutTime();
}
function search() {
    /*
   * 1.颜色随着 页面的滚动  逐渐加深
   * 2.当我们超过  轮播图的  时候  颜色保持不变
   * */
    var searchBox=document.querySelector(".jd_header");
    var bannerBox=document.querySelector(".jd_banner");
    var h = bannerBox.offsetHeight;
    window.onscroll=function () {
        var distance=window.document.documentElement.scrollTop;
        var opacity=0;
        if (distance<h){
            opacity=(distance/h)*.85;
        } else {
            opacity=.85;
        }
        /*把透明度设置上去*/
        searchBox.style.backgroundColor='rgba(201,21,35,'+opacity+')';
    }
}
function cutTime() {
    var time=5*60*60;
    var timer=null;
    var cont_top=document.querySelector(".jd_main>.main_content>.content_top");
    var liArr=cont_top.querySelectorAll("li");
    timer=setInterval(function () {
        if (time<=0){
            clearInterval(timer);
            return false;
        }
        time -- ;
        /*格式化*/
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=time%60;
        // console.log(h);
        // console.log(m);
        // console.log(s);
        liArr[0].innerHTML=Math.floor(h/10);
        liArr[1].innerHTML=h%10;
        liArr[3].innerHTML=Math.floor(m/10);
        liArr[4].innerHTML=m%10;
        liArr[6].innerHTML=Math.floor(s/10);
        liArr[7].innerHTML=s%10;
    },1000)
}
function banner() {
    /*
    * 1.自动的滚动起来    （定时器，过渡）
    * 2.点随之滚动起来     （改变当前点元素的样式）
    * 3.图片滑动           （touch事件）
    * 4.当不超过一定的滑动距离的时候  吸附回去  定位回去     （一定的距离  1/3  屏幕宽度  过渡）
    * 5.当超过了一定的距离的时候    滚动  到上一张 或 下一张  （一定的距离  1/3  屏幕宽度  过渡）
    * */
    var banner=document.querySelector(".jd_banner");
    var width=banner.offsetWidth;
    var imageBox=banner.querySelector("ul:first-child");
    var indexBox=banner.querySelector("ul:last-child");
    var indexArr=indexBox.querySelectorAll("li");

    // 通过函数封装方法
    /*添加过渡*/
    var addTransition=function () {
        imageBox.style.webkitTransition="all .2s";
        imageBox.style.transition="all .2s";
    };
    /*删除过渡*/
    var removeTransition=function () {
        imageBox.style.webkitTransition="none";
        imageBox.style.transition="none";
    };
    /*改变位置*/
    var setTranslateX=function (translateX) {
        imageBox.style.webkitTransform="translateX("+translateX+"px)";
        imageBox.style.transform="translateX("+translateX+"px)";
    };

    // 1.自动的滚动起来    （定时器，过渡）
    var index=1;
    var timer=setInterval(function () {
        index++;
        addTransition();
        setTranslateX(-index*width);
    },1000);
    imageBox.addEventListener("webkitTransitionEnd",function () {
        if (index>=9){
            index=1;
            removeTransition();
            setTranslateX(-index*width);
        } else if (index<=0){
            index=8;
            removeTransition();
            setTranslateX(-index*width);
        }
        setPoint();
    });
    /*2.点随之滚动起来     （改变当前点元素的样式）*/
    var setPoint=function () {
        for (var i=0;i<indexArr.length;i++){
            indexArr[i].className="";
        }
        indexArr[index-1].className='current';
    }
    /*3.图片滑动 touch事件）*/
    var startX=0;
    var moveX=0;
    var distanceX=0;
    var isMove=false;
    imageBox.addEventListener('touchstart',function (event) {
        clearInterval(timer);
        startX=event.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove',function (event) {
        isMove=true;
        moveX=event.touches[0].clientX;
        distanceX=moveX-startX;
        var currentX=-index*width+distanceX;
        removeTransition();
        setTranslateX(currentX);
    });
    imageBox.addEventListener('touchend',function () {
        if (isMove&&(Math.abs(distanceX)>width/3)){
            /*5.当超过了一定的距离的时候    滚动  到上一张 或 下一张  （一定的距离  1/3  屏幕宽度  过渡）*/
            if (distanceX>0){
                index--;/*向右滑  上一张*/
            } else {
                index++;/*向左滑 下一张*/
            }
            addTransition();
            setTranslateX(-index*width);
        } else {
            /*4.当不超过一定的滑动距离的时候  吸附回去  定位回去     （一定的距离  1/3  屏幕宽度  过渡）*/
            addTransition();
            setTranslateX(-index*width);
        }
        startX=0;
        moveX=0;
        distanceX=0;
        isMove=false;
        clearInterval(timer);
        timer=setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-index*width);
        },1000);
    });
}
