<template>
    <div class='containner'>
        <bgcanvas></bgcanvas>
        <div class="login">
            <img class='logo' src="../../static/static/assets/back_logo.png" alt="">
            <form>
                <div class='one'>
                    <span class='icon'><i class='icon-user'></i></span>
                    <input ref='loginId_inp' type="text" placeholder='用户名'>
                </div>
                <div class='one'>
                    <span class='icon'><i class='icon-lock'></i></span>
                    <input ref='userPwd_pwd' type="password" placeholder='密码'>
                </div>
                <div class='one'>
                    <span class='icon'><i class='icon-lock'></i></span>
                    <input ref='validCode_vali' type="text" style='width:300px;' placeholder='请输入验证码'>
                    <vercavas ref='veriCodeId'></vercavas>
                </div>
            </form>
            <button @click='findPwd' class='btn btn-info' type="button">忘记密码</button>
            <button @click='login()' class='btn btn-success' type="button">登录</button>
        </div>
    </div>
</template>

<script>
    import bgcanvas from './bgCanvas.vue';
    import vercavas from './verification.vue';      //验证码
    export default{
        data(){
            return{
                
            }
        },
        mounted:function(){     //页面加载就会执行的函数
            // $refs 获得指定标签 标签属性ref
            this.$refs.loginId_inp.focus();
            var _this = this;
            document.onkeypress = function(e){
                if(e.keyCode==13){
                    _this.login()
                }
            };
            // setAttribute设置属性
            // document.body.setAttribute('style','background:red')
        },
        destroyed:function(){   //销毁
            document.body.setAttribute('style','background:;')
        },
        methods:{
            findPwd(){
                alert('不准忘！')
            },
            login(){
                // alert('登不动！')
                var _this = this;
                this.$reqs({
                    // 检验验证码
                    method:"get",
                    url:this.$store.state.url.BASEURL+this.$store.state.url.CHECKVERICODE+'&veri='+this.$refs.validCode_vali.value
                }).then(function(response){
                    if(eval('('+response.data+')').success){
                        var loginId = _this.$refs.loginId_inp.value.trim(),  //trim()去除空白
                            userPwd = _this.$refs.userPwd_pwd.value.trim(),
                            validCode =  _this.$refs.validCode_vali.value.trim()
                            
                            if( loginId && userPwd && validCode ){
                                _this.$reqs({
                                    method:'POST',
                                    url:_this.$store.state.url.BASEURL+_this.$store.state.url.ADMINLOGIN,
                                    data:{
                                        userName:loginId,
                                        password:userPwd
                                    }
                                }).then(function(response){
                                    console.log( response )
                                    if( eval('('+response.data+')').success ){
                                        wind.location.href='/home'
                                    }else{
                                        alert('账号，密码不对...')
                                    }
                                })
                            }else{
                                alert('写完没得')
                            }
                    }else{
                        // 重新获取验证码
                        // console.log( _this.$refs.veriCodeId )
                        _this.$refs.veriCodeId.changVer();
                    }
                })
            }
        },
        components:{bgcanvas,vercavas} 
    }
</script>

<style scoped>
    *{
        margin:0;
        padding:0
    }
    .containner{
        width:100%;
        height:100%;
        overflow:hidden;
        background:black;
    }
    .containner bgcanvas{
        position:absolute;
        top:0;
        left:0;
        z-index:2;
    }
    .login{
        width:560px;
        height:320px;
        position:absolute;
        left:50%;
        top:50%;
        margin-top:-180px;
        margin-left:-280px;
        z-index:3;
        color:black;
    }
    .login .logo{
        margin-left:140px;
        margin-bottom:28px;
    }
    form input{
        width:413px;
        height:34px;
        line-height:34px;
        border:1px solid #3c498a;
        background:black;
        padding-left:4px;
        color:white;
    }
    input:focus{
        outline:none;
    }
    .one{
        position:relative;
        margin-bottom:25px;
        overflow:hidden;
        width:457px;
        padding-left:10px;
    }
    .one span{
        border:1px solid #3c498a;
        padding:8px 10px;
        padding-left:10px;
        overflow:hidden;
    }
    .one .icon{
        top:0;
        left:10px;
        font-size:10px;
        width:10px;
        height:12px;
        color:white;
    }
    .login .btn{
        width: 113px;
        height: 34px;
        line-height: 34px;
        border: none;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
    .btn-info {
      background: #3cadcf;
      float: left;
      margin-left:10px;
    }
    .btn-info:hover {
      background: #1f8fb0;
    }
    .btn-success {
      background: #5cb85c;
      float: right;
      margin-right:100px;
    }
    .btn-success:hover {
      background: #449d44;
    }
    .erwei_code {
      width: 80px;
      height: 34px;
      float: right;
      cursor: pointer;
    }
</style>

