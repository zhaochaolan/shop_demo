<template>
    <div>
        <van-nav-bar title="收藏夹" @click-left="onClickLeft" left-arrow></van-nav-bar>
        <van-card
                num="2"
                price="2.00"
                desc="健康活水内胆清洁"
                title="美的 60升电热水器"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods:{
        onClickLeft() {
            this.$router.go(-1)
        }
    }
}
</script>
<style>

</style>