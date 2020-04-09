<template>
    <van-nav-bar title="京东渠道特惠平台"  left-arrow>
        <template #left>
            <van-icon name="qr" size="18" />
        </template>
    </van-nav-bar>
</template>
<script>
    export default {
        name:'NavBar',
        data() {
            return {

            }
        }
    }
</script>
<style>
.van-nav-bar{
    background-color:#a0030c!important;
    color: #fff !important;
}
.van-nav-bar .van-icon{
    color: #fff !important;
}
.van-nav-bar__title{
    color: #fff !important;
}
</style>