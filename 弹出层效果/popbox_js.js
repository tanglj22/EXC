window.onload = function(){
    var eventUtil = {
        // ��Ӿ��
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

        // ɾ�����
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


    // ��ȡҳ���ȣ��߶�
    var sWidth = document.documentElement.scrollWidth;
    var sHeight = document.documentElement.scrollHeight;
    // ��ȡ��������ȣ��߶�
    var vWidth = document.documentElement.clientWidth;
    var vHeight = document.documentElement.clientHeight;


    function popOut(){
        // �������ֲ㣨�����������½����ֲ�ķ�ʽ��
        var mask = document.createElement('div');
        mask.id = 'mask';
        mask.style.width = sWidth +'px';
        mask.style.height = sHeight +'px';
        document.body.appendChild(mask);

        // ���õ�¼��
        var loginBox = document.getElementById('loginBox');
        var lWidth = loginBox.offsetWidth;
        var lHeight = loginBox.offsetHeight;
        loginBox.style.left = (vWidth-lWidth)/2 +'px';
        loginBox.style.top = (vHeight-lHeight)/2 +'px';
        loginBox.style.visibility = 'visible';

        function closeBox(mask){
            // �Ƴ����ֲ�
            var mask = document.getElementById('mask');
            document.body.removeChild(mask);
            // �Ƴ���¼��
            var loginBox = document.getElementById('loginBox');
            loginBox.style.visibility = 'hidden';
        }

        // ��ȡclose��ť
        var closeBtn = document.getElementById('close');
        // ��ȡmask
        var mask = document.getElementById('mask');
        // ���ùر��¼�
        eventUtil.addHandler(closeBtn,'click',closeBox);
        // ���ùر��¼�
        eventUtil.addHandler(mask,'click',closeBox);
    }
    // ��ȡ�����¼��ť
    var loginBtn = document.getElementById('loginBtn');
    // ���õ���¼�
    eventUtil.addHandler(loginBtn,'click',popOut);



};
