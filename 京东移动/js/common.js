/*定义一个全局变量*/
window.fox={};
/*封装tap事件*/
fox.tap=function (dom,callback) {
    /*
   *tap:
    1.响应速度要比click快
    2.不能滑动过
   * */
    if (dom&&typeof dom==='object'){
        var isMove=false;
        var startTime=0;
        dom.addEventListener('touchstart',function (event) {
            startTime=Date.now();
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
            if ((Date.now()-startTime)<150&&isMove){
                callback&&callback(event);
            }
            isMove=false;
            startTime=0;
        })

    }
}