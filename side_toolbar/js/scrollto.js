requirejs.config({
    paths:{
        jquery:'jquery.min'
    }
});

define(['jquery'],function($){
    function ScrollTo(opts){  // 以对象形式传递参数
        this.opts = $.extend({},ScrollTo.DEFAULTS,opts); //创建一个新对象｛｝，有用户传递参数opts时，便覆盖ScrollTo.DEFAULTS默认值；若无则使用默认值
        this.$el = $('html,body');
    }
    // 添加方法
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
    ScrollTo.DEFAULTS = {  // 指定默认属性
        dest: 0,
        speed: 800
    };
    return {
        ScrollTo: ScrollTo
    }

});
