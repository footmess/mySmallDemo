window.onload=function () {
    left_scroll();


}
function left_scroll() {
    /*
    * 1.滑动  touch
    * 2.在一定的区间范围内  滑动  通过控制  滑动定位的区间的实现
    * 3.在一定的区间内 做定位     定位区间
    * 4.点击  滑动到顶部  改变当前的样式   当滑动到底部的时候不需要做定位  tap
    * */
    var parentBox=document.querySelector(".jd_list_left");
    var childBox=parentBox.querySelector('ul');
    var parentHeight=parentBox.offsetHeight;
    var childHeight=childBox.offsetHeight;
    // console.log(parentBox);
    // console.log(childBox);
    /*定位区间*/
    var maxPosition=0;
    var minPosition=parentHeight-childHeight;
    console.log(minPosition);
    /*缓冲的距离*/
    var distance=150;
    /*滑动区间*/
    var maxSwipe=maxPosition+distance;
    var minSwipe=minPosition-distance;
    
    var addTransition=function () {
        childBox.style.webkitTransition='all .3s';
        childBox.style.transition='all .3s';
    }
    var removeTransition=function () {
        childBox.style.webkitTransition='none';
        childBox.style.transition='none';
    }
    var setTranslateY=function (translateY) {
        childBox.style.webkitTransform='translateY('+translateY+'px)';
        // childBox.style.transform='translateY('+translateY+'px)';
        childBox.style.transform = "translateY("+translateY+"px)";
    }

    /*1.滑动  touch*/
    /*参数*/
    var startY=0;
    var moveY=0;
    var distanceY=0;
    
    var curY=0;
    childBox.addEventListener('touchstart',function (e) {
        startY=e.touches[0].clientY;
    });
    childBox.addEventListener('touchmove',function (e) {
        moveY=e.touches[0].clientY;
        distanceY=moveY-startY;

        /*2.在一定的区间范围内  滑动  通过控制  滑动定位的区间的实现*/
        if ((curY+distanceY)<maxSwipe&&(curY+distanceY)>minSwipe){
            removeTransition();
            setTranslateY(curY+distanceY);
        } 
    });
    window.addEventListener("touchend", function (e) {
        if((curY + distanceY) > maxPosition){
            curY = maxPosition;
            /*加过渡*/
            addTransition();
            /*设置位子*/
            setTranslateY(curY);
        }
        /*将要定位的位子 小于  最小定位的时候*/
        else  if ((curY + distanceY) < minPosition){
            curY = minPosition;
            /*加过渡*/
            addTransition();
            /*设置位子*/
            setTranslateY(curY);
        }
        /*正常*/
        else {
            /*设置当前的定位*/
            curY = curY + distanceY;
        }

        /*重置参数*/
        startY = 0;
        moveY = 0;
        distanceY = 0;
    });
    /*4.点击  滑动到顶部  改变当前的样式   当滑动到底部的时候不需要做定位  tap*/
    var liArr=childBox.querySelectorAll('li');
    var tap=function (dom,callback) {
        /*
       *tap:
        1.响应速度要比click快
        2.不能滑动过
       * */
        // if (dom&&typeof dom==='object'){
            var isMove=false;
            var startTime=0;
            dom.addEventListener('touchstart',function (event) {
                startTime=Date.now();
                isMove=false;
            });
            dom.addEventListener('touchmove',function (event) {
                isMove=true;
            });
            dom.addEventListener('touchend',function (event) {
                /*
                *tap:
                1.响应速度要比click快  click 300ms 响应时间  150ms
                2.不能滑动过
                * */
                if ((Date.now()-startTime)<150&&!isMove){
                    callback&&callback(event);
                    // console.log('调用了');
                }
                isMove=false;
                startTime=0;
            })
        // }
    };
    tap(childBox,function (event) {
        for (var i=0;i<liArr.length;i++){
            liArr[i].className='';
            liArr[i].index=i;
        }
        /*当前点击的li*//*触发源*/
        // console.log(event);
        var goal=event.target.parentNode;
        goal.className='now';
        /*需要知道当前你需要去定位的位子  计算出来*/
        var translateY=goal.index*50*(-1);
        /*当超过了最小定位区间  不能定位*/
        if (translateY>minPosition){
            curY=translateY;
            addTransition();
            setTranslateY(curY);
        }else {
            curY=minPosition;
            addTransition();
            setTranslateY(curY);
        }
    });
}
