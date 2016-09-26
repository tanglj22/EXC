requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

define(['jquery'],function($){
    function ScrollTo(opts){  // �Զ�����ʽ���ݲ���
        this.opts = $.extend({},ScrollTo.DEFAULTS,opts); //����һ���¶�����������û����ݲ���optsʱ���㸲��ScrollTo.DEFAULTSĬ��ֵ��������ʹ��Ĭ��ֵ
        this.$el = $('html,body');
    }
    // ��ӷ���
    ScrollTo.prototype.moveTo = function(){
        var opts = this.opts;
        if($(window).scrollTop()!=opts.dest){
            if(!this.$el.is(':animated')){
                this.$el.animate({
                    scrollTop: opts.dest
                },opts.speed)
            }
        }
    };
    ScrollTo.prototype.goTo = function(){
        var dest = this.opts.dest;
        if($(window).scrollTop()!= dest){
            this.$el.scrollTop( dest);
        }
    };
    ScrollTo.DEFAULTS = {  // ָ��Ĭ������
        dest: 0,
        speed: 800
    };
    return {
        ScrollTo: ScrollTo
    }

});
