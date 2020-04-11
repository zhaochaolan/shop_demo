<template>
    <div>
        <van-nav-bar title="京东渠道特惠平台"  left-arrow>
            <template #left>
                <van-icon name="qr" @click="popupClick" size="18" />
            </template>
        </van-nav-bar>
        <popup :formObj="formObj"></popup>
    </div>

</template>
<script>
    import popup from "./popup";
    export default {
        name:'NavBar',
        data() {
            return {
                formObj:{
                    show:false
                }
            }
        },
        components:{
            popup
        },
        methods:{
            popupClick() {
                this.formObj.show = true
            }
        }
    }
</script>
<style lang="less" scoped>
.van-nav-bar{
    background-color:#a0030c;
    color: #fff;
}
.van-nav-bar .van-icon{
    color: #fff;
}
.van-nav-bar__title{
    color: #fff;
}
</style>