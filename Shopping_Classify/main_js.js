window.onload = function(){
    function $id(id){
        return (typeof id == "string")?document.getElementById(id):id;
    }
    function $class(cla){
        return (typeof cla == "string")?document.getElementsByClassName(cla):cla;
    }

    var jsonData = {
        data1:{
            dianshi:['合资品牌','国产品牌','互联网品牌'],
            kongtiao:['壁挂式空调','柜式空调','空调配件'],
            xiyiji:['滚筒洗衣机','洗烘一体机','波轮洗衣机','迷你洗衣机','洗衣机配件'],
            bingxiang:['多门','对开门','三门','双门','冷柜/冰吧','酒柜','冰箱配件'],
            chuweidadian:['油烟机','燃气灶','烟灶套装','消毒柜','洗碗机','电热水器','燃气热水器','嵌入式厨电'],
            chufangxiaodian:['电饭煲','微波炉','电烤箱','电磁炉','电压力锅','豆浆机','咖啡机','面包机','榨汁机','料理机','电饼铛',
                '养生壶/煎药壶','酸奶机','煮蛋器','电水壶/热水瓶','电炖锅','多用途锅','电烧烤炉','电热饭盒','其他厨房电器']
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
