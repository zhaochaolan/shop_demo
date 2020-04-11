<template>
    <div>
        <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight" title="商品详情" :class="{'IsActive':active}" :fixed="true" left-arrow>
            <template #left>
                <van-icon  name="arrow-left" size="18" />
            </template>
            <template #right>
                <van-icon name="share" size="18" />
            </template>
        </van-nav-bar>
        <div class="content">
            <van-swipe :autoplay="3000" :height="300">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
            <div class="good-detail">
                <div class="goods-detail">
                    <p class="goods-price"><span>¥</span>3599<span>.00</span>
                        <span class="price-delete" style="margin-left: 10px">京东价格¥5530</span>
                    </p>
                    <van-button  size="small" color="#a0030c" @click="skipApp" round>跳转京东查看</van-button>
                </div>
                <h4>美的 60升电热水器 健康活水内胆清洁 晨与哦我的坚强的去面对</h4>
                <p>
                    【钜惠价 3599！限时抢购 】健康活水 自主排污
                </p>
            </div>
            <div class="goods-img-list">
                <img v-for="(image, index) in images" v-lazy="image" :key="index"/>
            </div>
        </div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
            <van-goods-action-icon icon="cart-o" to="favorites" text="收藏夹" />
<!--            <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />-->
            <van-goods-action-button type="warning" text="加入收藏夹" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';

    Vue.use(Lazyload);

    export default {
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                active:false
            }
        },
        mounted() {
            window.addEventListener('scroll',this.scrollClick)
        },
        methods:{
            scrollClick() {
                let  scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if(scrollTop) {
                    this.active = true
                }else {
                    this.active = false
                }
            },
            onClickLeft() {
                this.$router.push({
                    path:'/',
                    query:{

                    }
                })
            },
            onClickRight () {

            },
            skipApp () {
                window.location.href = ''
                window.setTimeout(function(){
                    window.location.href = "";
                    /***下载app的地址***/
                },2000)
            }
        }
    }
</script>
<style lang="less" scoped>
img{
    width: 100%;
    height: 100%;
}
.van-nav-bar{
    background-color: transparent;
}
.IsActive{
    background-color:#fff;
}
</style>