<template>
    <div :style="win" ref="ss">
        <div :style="winAlert">
            <div style="background:#4f66b3;line-height:40px">
                <span style="display:inline-block;line-height:40px;margin-left:16px;float:left;color:#fff;font-size:18px;font-family:'Segoe Script'">修改密码</span>
                <span style="float:right;display:inline-block;margin-right:16px;font-size:20px;color:#fff;" @click="hide">X</span>
                <br style="clear:both" />
            </div>
            <div class="content_alert">
                <ul>
                    <li>
                        <span>*</span>
                        <span>用户名:</span>
                        <input type="text" ref="username">
                    </li>
                    <li>
                        <span>*</span>
                        <span>姓名:</span>
                        <input type="text" ref="name">
                    </li>
                    <li>
                        <span>*</span>
                        <span>手机号:</span>
                        <input type="text" ref="phone">
                    </li>
                    <li>
                        <span></span>
                        <span>权限选择:</span>
                        <select style="width:305px;height:30px;" ref="power">
                            <option>系统管理员</option>
                            <option>课程管理员</option>
                        </select>
                    </li>
                </ul>
                <div class="btn">
                    <button @click="addUser()">确定</button>
                    <button @click="hide">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import Crypto from "crypto"
import store from "../vuex/store"
import adminStore from '../vuex/adminListStore.js';
Vue.use(Crypto)
export default {
    name: "restpwd",
    data() {
        return {
            win: {
                "width": window.innerWidth + "px",
                "height": window.innerHeight + "px",
                "background": "rgba(255,255,255,0.8)",
                "position": "absolute",
                "top": 0,
                "left": 0,
                "z-index": 1500,
                //  "display":"none"
            },
            winAlert: {}

        }
    },
    methods: {
        hide() {
//      	alert(1)
            adminStore.commit('setAddBtnFlag','none');
            console.log(store.state.updateElement.alertShow)
            document.body.setAttribute("style", "background:#fff !important;overflow:");
        },
        addUser(row) {
            var that = this;
            if (typeof row == 'object') {



                // 作业
                // that.$reqs({
                //     url: store.state.url.BASEURL + store.state.url.UPDATAADMINSTOR,
                //     method: "post",
                //     data: {
                //         userName: that.$refs.username.value,
                //         turename: that.$refs.name.value,
                //         power: that.$refs.power.value,
                //         phone: that.$refs.phone.value,
                //         tokenId: row.tokenId,

                //     }
                // }).then(function (result) {
                //     alert(result.data.success)
                // })
            }
            that.$reqs({
                url: that.$store.state.url.BASEURL + that.$store.state.url.ADDADMINSTOR,
                method: "post",
                data: {
                    userName: that.$refs.username.value,
                    turename: that.$refs.name.value,
                    password: "123456",
                    power: that.$refs.power.value,
                    phone: that.$refs.phone.value
                }
            }).then(function (result) {
                alert(result.data.success)
                window.location.href="/admin";
            })


        },
        //把所有模板加载完成后，挂载后

    },
    mounted() {


        this.winAlert = {
            "width": 500 + "px",
            "height": 340 + "px",
            "background": "#ddd",
            "position": "relative",
            "left": '50%',
            "border": "5px solid #4f66b3",
            "background": "rgb(255,255,255)",
            "margin-left": -250 + "px",
            "top": '50%',
            "margin-top": -170 + "px"
        }

    }
}
</script>

<style>
.content_alert {
    width: 100%;
    background: #fff;
    background: rgba(255, 255, 255, 1)
}

.content_alert ul {
    width: 390px;
    margin: 0 auto;
    overflow: hidden
}

.content_alert ul li span:nth-of-type(1) {
    color: #f00;
}

.content_alert ul li {
    float: right;
    margin-top: 25px;
}

.content_alert ul li input {
    width: 300px;
    height: 26px;
}

.btn {
    width: 250px;
    margin: 0 auto;
}

.btn button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 3px;
    outline: none;
    margin: 10px;
}
</style>
