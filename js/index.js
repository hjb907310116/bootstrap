/**
 * Created by HJB on 2020/6/10.
 */
$(function () {
    $(window).on("resize",function () {
        //1.1 获取窗口的宽度
        let clientW=$(window).width();
        console.log(clientW);
        //1.2 设置临界值
        let isShowBigIamge=clientW>=800;

        //1.3获取所有的item
        let $allItems=$("#lk_carousel .item");
        console.log($allItems);

        //1.4遍历
        $allItems.each(function (index,item) {
            //1.4.1 取出图片路径
            let src=isShowBigIamge ? $(item).data("lg-img"):$(item).data("lg-img");
            let imgUrl='url("' + src+ '")';
            //1.4.2 设置背景
            $(item).css({
                backgroundImage:imgUrl
            });
            //1.4.3设置img标签
            if(!isShowBigIamge){
                let $img="<img src='"+src+"'>";
                //empty()被选元素移除所有内容，包括所有文本和子节点
                //在每个 p 元素结尾插入内容
                $(item).empty().append($img);
            }else{
                $(item).empty();
            }
        });
    });


    //2.工具提示
    $('[data-toggle="tooltip"]').tooltip();

    //3.动态处理宽度
    $(window).on("resize",function () {
        let $ul=$("#lk_product .nav");
        let $allList=$("[role='presentation']",$ul);
        // console.log($allList);

        //3.1   遍历
        let totalW=0;
        $allList.each(function (index,item) {
            totalW+=$(item).width();
        });
        // console.log(totalW);

        let parentW=$ul.parent().width();
        //3.2 设置宽度
        if(totalW>parentW) {
            $ul.css({
                width: totalW + "px"
            })
        }else{
            // $ul.removeAttribute("style");
        }

    });
    //4.导航处理
    let allList=$("#lk_nav li");

    $(allList[2]).on("click",function () {
        $("html,body").animate({scrollTop:$("#lk_hot").offset().top()},1000);
    })
    $(window).trigger("resize");

});