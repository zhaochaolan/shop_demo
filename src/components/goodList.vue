<template>
    <van-grid :gutter="10" :border="false" :column-num="2">
            <van-grid-item @click="goodsDetail">
                <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
                <div class="goods-info">
                    <p class="goods-name">手机</p>
                    <div class="goods-detail">
                        <div>
                            <p class="goods-price">
                                <em>￥</em>1999<em>.00</em>
                            </p>
                            <p class="price-delete">
                                京东价￥2499.00
                            </p>
                        </div>
                        <van-button class="detail-button" size="small" round >详情</van-button>
                    </div>

                </div>
            </van-grid-item>
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
    </van-grid>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods:{
            goodsDetail() {
                this.$router.push({
                    path:'/goodDetail',
                    query:{

                    }
                })
            }
        }
    }
</script>
<style lang="less" scoped>

</style>