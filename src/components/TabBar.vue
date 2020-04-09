<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="qr">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o">会员</van-tabbar-item>
        <van-tabbar-item icon="star-o">收藏夹</van-tabbar-item>
        <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
</template>
<script>
    export default {
        data() {
            return {
                active: 0
            }
        }
    }
</script>
<style lang="sass" scoped>

</style>