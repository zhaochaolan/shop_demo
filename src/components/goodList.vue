<template>
    <van-grid :gutter="10" :border="false" :column-num="2">
        <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            <p class="good-name">手机</p>
            <p class="good-price">
                <em>￥</em>1999<em>.00</em>
            </p>
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
        }
    }
</script>
<style>
    .goods-name {
        font-size: 14px;
        color: #333;
        line-height: 19px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 38px;
    }
        .goods-price {
            color: #f42424;
            font-size: 18px;
            font-weight: 400;
            margin-top: 13px;
            em {
                font-size: 12px;
        }
    }
</style>