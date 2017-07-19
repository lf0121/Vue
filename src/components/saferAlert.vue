<template>
    <div :style='alertClass'>
            <div :style='alertHol'>
                <div style='height:30px;background:blue;margin-bottom:10px;width:100%;'>
                    <span style='color:white;fontWeight:bold;line-height:30px;font-size:20px;display:inline-block;float:left;'>修改密码</span>
                    <img @click='AlertInputArr.btn[1].btn_click' src="../../static/static/assets/images/x.png" alt="" style='display:inline-block;float:right;margin-top:5px;margin-right:0px;'>
                </div>
                <ul>
                    <li v-for='item in AlertInputArr.list' style='display:block;margin-top:10px;'>
                        <span style='width:80px;text-align:right;display:inline-block;'>{{ item.rowName }}</span>
                        <input type="text" width='item.width' @blur='item.defaultObj.bl'>
                    </li>
                </ul>
                <div style='text-align:center'>
                    <button @click='AlertInputArr.btn[0].btn_click'>确定</button>
                    <button @click='AlertInputArr.btn[1].btn_click'>取消</button>
                </div>
            </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                alertClass:{
                    'width':window.innerWidth+'px',
                    'height':window.innerHeight+'px',
                    'background':'pink',
                    'z-index':1,
                    'position':'absolute',
                    'top':0,
                    'left':0,
                    'opacity':0.9
                },
                //初始化一个空样式，在钩子函数里面写具体的
                alertHol:{},
                AlertInputArr:this.$saferAlert.state.AlertInputArr,
                alertHolTop:{},
            }
        },
        mounted:function(){
            var width = (function(arr){
                for(var i=1;i<arr.length;i++){
                    if( arr[i-1].width > arr[i].width ){
                        var temp = arr[i-1].width;
                        arr[i-1].width = arr[i].width;
                        arr[i].width = temp;
                    }
                };
                return arr[arr.length-1].width
            })(this.AlertInputArr.list)+110;
            var height = this.AlertInputArr.list.length*30+60+30;

            this.alertHol = {
                'padding-top':0,
                'position':'relative',
                'border':'8px solid blue',
                'border-top':'none',
                'width':width+'px',
                'height':height+'px',
                'top':window.innerHeight/2-height/2+'px',
                'left':window.innerWidth/2-width/2+'px'
            }
        }
    }
</script>
    
<style>

</style>