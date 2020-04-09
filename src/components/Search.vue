<template>
    <van-search
            v-model="value"
            shape="round"
            background="#a0030c"
            placeholder="请输入搜索关键词"
    />
</template>
<script>
    export default {
        name:'SearchBar',
        data() {
            return {
                value:''
            }
        }
    }
</script>
<style>

</style>