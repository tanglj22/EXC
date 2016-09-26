window.onload = function(){
    var eventUtil = {
        // 添加句柄
        addHandler: function(element,type,handler){
            // DOM2
            if(element.addEventListener){
                element.addEventListener(type,handler,false);
            }
            // DOM0
            else if(element.attachEvent){
                element.attachEvent('on'+type,handler);
            }
            // HTML
            else{
                element['on'+type]=handler;
            }
        },

        // 删除句柄
        removeHandler: function(element,type,handler){
            // DOM2
            if(element.removeEventListener){
                element.removeEventListener(type,handler,false);
            }
            // DOM0
            else if(element.detachEvent){
                element.detachEvent('on'+type,handler);
            }
            // HTML
            else{
                element['on'+type] = null;
            }
        }
    };


    // 获取页面宽度，高度
    var sWidth = document.documentElement.scrollWidth;
    var sHeight = document.documentElement.scrollHeight;
    // 获取可视区宽度，高度
    var vWidth = document.documentElement.clientWidth;
    var vHeight = document.documentElement.clientHeight;


    function popOut(){
        // 设置遮罩层（这里我们用新建遮罩层的方式）
        var mask = document.createElement('div');
        mask.id = 'mask';
        mask.style.width = sWidth +'px';
        mask.style.height = sHeight +'px';
        document.body.appendChild(mask);

        // 设置登录框
        var loginBox = document.getElementById('loginBox');
        var lWidth = loginBox.offsetWidth;
        var lHeight = loginBox.offsetHeight;
        loginBox.style.left = (vWidth-lWidth)/2 +'px';
        loginBox.style.top = (vHeight-lHeight)/2 +'px';
        loginBox.style.visibility = 'visible';

        function closeBox(mask){
            // 移除遮罩层
            var mask = document.getElementById('mask');
            document.body.removeChild(mask);
            // 移除登录框
            var loginBox = document.getElementById('loginBox');
            loginBox.style.visibility = 'hidden';
        }

        // 获取close按钮
        var closeBtn = document.getElementById('close');
        // 获取mask
        var mask = document.getElementById('mask');
        // 设置关闭事件
        eventUtil.addHandler(closeBtn,'click',closeBox);
        // 设置关闭事件
        eventUtil.addHandler(mask,'click',closeBox);
    }
    // 获取点击登录按钮
    var loginBtn = document.getElementById('loginBtn');
    // 设置点击事件
    eventUtil.addHandler(loginBtn,'click',popOut);



};
