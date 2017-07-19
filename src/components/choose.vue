<template>
    <div>
            <div id="div1">
                <button type="button" class='active'>A</button>
                <button type="button">B</button>
                <button type="button">C</button>
                <button type="button">D</button>
                
                <div class="div2" style="display:block;background:green">11</div>
                <div style="background:red" class="div2">22</div>
                <div style="background:pink" class="div2">33</div>
                <div style="background:yellow" class="div2">44</div>
            </div>
    </div>
</template>
<script>

window.onload=function(){
   var odiv=document.getElementById('div1');
   var btn=odiv.getElementsByTagName('button');
   var div2=odiv.getElementsByTagName('div');
   for(i=0;i<btn.length;i++)
   { 
     btn[i].index=i 
                    //btn[i]是指定button的第i个按钮;为该按钮添加一个index属性，并将index的值设置为i
     btn[i].onmouseover=function()//按钮的第i个点击事件
    {
    for(i=0;i<btn.length;i++)//循环去掉button的样式，把div隐藏
     { 
       btn[i].className='' //清空按钮的样式
       div2[i].style.display='none'//隐藏div
      }
        this.className='active'//自身添加active
        div2[this.index].style.display='block'//this.index是当前div 
    }
   }
}





</script>

<style>
    button{
        padding:5px 10px;
        border-radius:5px;
        outline:none;
    }
    .active{
        background:#9CC;
    }
    .div2{
        width:300px;
        height:200px; 
        border:1px #666666 solid;
        display:none;
    }
</style>