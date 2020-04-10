<template>
  <div class="home">
    <nav-bar></nav-bar>
    <search></search>
    <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
    >
    <van-row gutter="10">
      <van-col span="12" @click="goodsDetail">
        <div class="goods-content">
          <div class="goods-image">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg">
          </div>
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
        </div>
      </van-col>
      <van-col span="12">
        <div class="goods-content">
          <div class="goods-image">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg">
          </div>
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
        </div>
      </van-col>
    </van-row>
    </van-list>
<!--    <good-list></good-list>-->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue'
import Search from '@/components/Search.vue'
import NavBar from '@/components/NavBar.vue'
// import goodList from '@/components/goodList.vue'
export default {
  name: 'Home',
  data () {
    return {
      list: [],
      loading: false,
      finished: true
    }
  },
  components: {
      TabBar,Search,NavBar
  },
  methods:{
    goodsDetail() {
      this.$router.push({
        path:'/goodDetail',
        query:{

        }
      })
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.list.length + 1);
      //   }
      //
      //   // 加载状态结束
      //   this.loading = false;
      //
      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 1000);
    }
  }
}
</script>

