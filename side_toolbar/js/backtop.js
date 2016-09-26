define(['jquery','scrollto'],function($,scrollto){
    function BackTop(el,opts){
        this.opts = $.extend({},BackTop.DEFAULTS,opts);
        this.$el = $(el);
        this.scroll = new scrollto.ScrollTo({
            dest: 0,
            speed:this.opts.speed
        });
        this._checkPosition();
        if(this.opts.mode == 'move'){
            this.$el.on('click',$.proxy(this._moveTo,this)); // 添加下划线仅供内部使用
        }else{
            this.$el.on('click',$.proxy(this._goTo,this)); // 添加下划线仅供内部使用
        }

        $(window).on('scroll', $.proxy(this._checkPosition,this))
    }
    BackTop.DEFAULTS = {
        mode:'move',
        limit:$(window).height(),
        speed:500
    };
    BackTop.prototype._moveTo = function(){
        this.scroll.moveTo();
    };
    BackTop.prototype._goTo = function(){
        this.scroll.goTo();
    };
    BackTop.prototype._checkPosition = function(){
        if($(window).scrollTop() > this.opts.limit){
            this.$el.fadeIn();
        }else{
            this.$el.fadeOut();
        }
    };
    return {
        BackTop:BackTop
    }
});