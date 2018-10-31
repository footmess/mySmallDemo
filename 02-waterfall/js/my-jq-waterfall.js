$.fn.extend({
    waterfall:function () {
        var totalWidth=this.width();
        var itemWidth=this.children('.item').width();
        var colNum=Math.floor(totalWidth/itemWidth);
        var margin=Math.floor((totalWidth-itemWidth*colNum)/(colNum-1));
        var heightArr=[];
        for (var i=0;i<colNum;i++){
            heightArr.push(margin);
        }
        this.children('.item').each(function (index,ele) {
            var minHeight=Math.min.apply(Math,heightArr);
            var minIndex=heightArr.indexOf(minHeight);
            console.log(minHeight);
            console.log(minIndex);
            $(ele).css({
                top:minHeight,
                left:(margin+itemWidth)*minIndex
            })
            heightArr[minIndex]+=$(ele).height();
            heightArr[minIndex]+=margin
        })
        var maxHeight=Math.max.apply(Math,heightArr);
        this.height(maxHeight);
    }
})