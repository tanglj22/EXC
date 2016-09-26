requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

// main主文件引入backtop.js, backtop.js引入scrollto.js

requirejs(['jquery','backtop'],function($,backtop){ // 写入模块
    // 为测试页面添加一个背景
    var bg = document.createElement("img");
    $(bg).attr('src','../image/xx.JPG');
    $('body').append(bg); // 追加新元素

    // 实例化一个backtop对象
    new backtop.BackTop($('#backTop'),{
        //mode:'move',  // 选择模式'move'或'go'
        //limit: 100,
        //speed: 2000
    });

    //// 实例化一个scroll对象
    //var scroll = new scrollto.ScrollTo({
    //    //这里可传入参数
    //    //dest: 200,
    //    //speed: 2000
    //});
    //// 调用
    //$('#backTop').on('click', $.proxy(scroll.moveTo,scroll)); // $.proxy(已有方法,该方法指向的对象)
    //$(window).on('scroll', function () {
    //    checkPosition($(window).height());
    //});
    //checkPosition($(window).height()); // 加载时也执行判断函数
    //function checkPosition(limit){
    //    if($(window).scrollTop() > limit){
    //        $('#backTop').fadeIn();
    //    }else{
    //        $('#backTop').fadeOut();
    //    }
    //}
});
