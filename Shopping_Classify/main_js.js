window.onload = function(){
    function $id(id){
        return (typeof id == "string")?document.getElementById(id):id;
    }
    function $class(cla){
        return (typeof cla == "string")?document.getElementsByClassName(cla):cla;
    }

    var jsonData = {
        data1:{
            dianshi:['����Ʒ��','����Ʒ��','������Ʒ��'],
            kongtiao:['�ڹ�ʽ�յ�','��ʽ�յ�','�յ����'],
            xiyiji:['��Ͳϴ�»�','ϴ��һ���','����ϴ�»�','����ϴ�»�','ϴ�»����'],
            bingxiang:['����','�Կ���','����','˫��','���/����','�ƹ�','�������'],
            chuweidadian:['���̻�','ȼ����','������װ','������','ϴ���','����ˮ��','ȼ����ˮ��','Ƕ��ʽ����'],
            chufangxiaodian:['�緹��','΢��¯','�翾��','���¯','��ѹ����','������','���Ȼ�','�����','ե֭��','�����','�����',
                '������/��ҩ��','���̻�','����','��ˮ��/��ˮƿ','������','����;��','���տ�¯','���ȷ���','������������']
        }

    }




    var levOne = $class('lev_one');
    var subLevel = $class('sub-level');
    var subLeft =  $class('sub-left');
    //lev_one[0].onmouseover = function(){
    //    var div = document.createElement("div");
    //    div.id = 'subLeft';
    //    div.className = 'sub-left';
    //    var ul = document.createElement("ul");
    //    for(var i=0;i<6;i++){
    //        var li = document.createElement("li");
    //        var a = document.createElement("a");
    //        var span = document.createElement("span");
    //        span.innerHTML = ">";
    //        a.appendChild(span);
    //        li.appendChild(a);
    //        ul.appendChild(li);
    //    }
    //    console.log(div)
    //    div.appendChild(ul);
    //
    //}

    levOne[0].onmouseover = function(){
        //subLevel[0].style.display = 'block';
    }

}
