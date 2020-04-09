<template>
  <div class="home">
    <nav-bar></nav-bar>
    <search></search>
    <good-list></good-list>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue'
import Search from '@/components/Search.vue'
import NavBar from '@/components/NavBar.vue'
import goodList from '@/components/goodList.vue'
export default {
  name: 'Home',
  components: {
      TabBar,Search,NavBar,goodList
  }
}
</script>
