<template>
    <div>
        <van-search
                @focus="onSearch"
                v-model="value"
                shape="round"
                background="#a0030c"
                placeholder="请输入搜索关键词"
        />
        <search-bar :show="showSearch" @close="showSearch = false"></search-bar>
    </div>

</template>
<script>
    import searchBar from '@/components/searchBar.vue'
    export default {
        name:'Search',
        data() {
            return {
                value:'',
                showSearch: false
            }
        },
        components:{
            searchBar
        },
        methods:{
            onSearch () {
                this.showSearch = true
            }
        }
    }
</script>
<style>

</style>