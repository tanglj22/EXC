requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

// main���ļ�����backtop.js, backtop.js����scrollto.js

requirejs(['jquery','backtop'],function($,backtop){ // д��ģ��
    // Ϊ����ҳ�����һ������
    var bg = document.createElement("img");
    $(bg).attr('src','../image/xx.JPG');
    $('body').append(bg); // ׷����Ԫ��

    // ʵ����һ��backtop����
    new backtop.BackTop($('#backTop'),{
        //mode:'move',  // ѡ��ģʽ'move'��'go'
        //limit: 100,
        //speed: 2000
    });

    //// ʵ����һ��scroll����
    //var scroll = new scrollto.ScrollTo({
    //    //����ɴ������
    //    //dest: 200,
    //    //speed: 2000
    //});
    //// ����
    //$('#backTop').on('click', $.proxy(scroll.moveTo,scroll)); // $.proxy(���з���,�÷���ָ��Ķ���)
    //$(window).on('scroll', function () {
    //    checkPosition($(window).height());
    //});
    //checkPosition($(window).height()); // ����ʱҲִ���жϺ���
    //function checkPosition(limit){
    //    if($(window).scrollTop() > limit){
    //        $('#backTop').fadeIn();
    //    }else{
    //        $('#backTop').fadeOut();
    //    }
    //}
});
