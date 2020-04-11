<template>
    <div>
        <van-tabbar v-model="active" @change="OnChange">
            <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="qr">分类</van-tabbar-item>
            <van-tabbar-item icon="friends-o">会员</van-tabbar-item>
            <van-tabbar-item to="favorites" icon="star-o">收藏夹</van-tabbar-item>
            <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
        </van-tabbar>
        <van-dialog v-model="codeShow" title="提示">
            <div class="prompt-info">
                <p>非常遗憾，您还没有订单信息，请联系特惠小掌柜下单购买心仪的商品吧，下单前请先确认当前最新价格，谢谢</p>
                <img src="https://img.yzcdn.cn/vant/apple-3.jpg">
            </div>
        </van-dialog>
        <popup :formObj="formObj"></popup>
<!--        <van-popup-->
<!--                v-model="show"-->
<!--                close-icon="close"-->
<!--                closeable-->
<!--                position="left"-->
<!--                :style="{ height: '100%' ,width:'30%'}">-->
<!--            <div>-->
<!--                <van-button size="small" class="button-content" color="#a0030c" >电视机</van-button>-->
<!--                <van-button size="small" class="button-content" color="#a0030c">冰箱</van-button>-->
<!--            </div>-->
<!--        </van-popup>-->

    </div>
</template>
<script>
    import popup from "./popup";
    export default {
        data() {
            return {
                active: 0,
                codeShow:false,
                formObj:{
                    show:false
                }
            }
        },
        components:{
            popup
        },
        computed:{

        },
        methods:{
            OnChange (val) {
                if(val == 2 || val == 4) {
                    this.codeShow = true
                    this.formObj.show = false

                }else if(val == 1) {
                    this.formObj.show = true

                }else {
                    this.formObj.show = false

                }
            }
        }
    }
</script>
<style lang="less" scoped>
.prompt-info{
    padding: 20px;
    p{
        text-align: left;
        margin-bottom: 10px;
    }
    img {
        width: 100%;
        height: 100%;
    }
}

</style>