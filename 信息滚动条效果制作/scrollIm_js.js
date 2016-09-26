window.onload = function(){
    var area = document.getElementsByClassName('Box')[0];
    var header = document.getElementsByClassName('header')[0];
    var li = document.getElementsByTagName('li')[0];
    var con = document.getElementById('con');
    var con1 = document.getElementById('con1');
    var con2 = document.getElementById('con2');
    var speed = 50;
    var timer;
    var timer2;
    con2.innerHTML = con1.innerHTML;
    con.scrollTop = 0;

    //timer = setInterval(scrollUp,50);
    function startMove(){
        con.scrollTop++;
        timer = setInterval(scrollUp,50);
    }
    function scrollUp(){
        if(con.scrollTop % li.offsetHeight==0){
            clearInterval(timer);
            timer2 = setTimeout(startMove,2000)
        }else{
            con.scrollTop++;
            if(con.scrollTop>=con1.offsetHeight){
                con.scrollTop=0;
            }
        }
    }
    setTimeout(scrollUp,2000);
    con.onmouseover = function(){
        clearInterval(timer);
        clearTimeout(timer2);
    };
    con.onmouseout = function(){
        timer = setInterval(scrollUp,50);
    }
};
