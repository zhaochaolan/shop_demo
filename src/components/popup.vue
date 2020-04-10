<template>
    <van-popup
            v-model="formObj.show"
            close-icon="close"
            closeable
            position="left"
            :style="{ height: '100%' ,width:'30%'}">
        <div>
            <van-button size="small" class="button-content" color="#a0030c" >电视机</van-button>
            <van-button size="small" class="button-content" color="#a0030c">冰箱</van-button>
        </div>
    </van-popup>
</template>
<script>
    export default {
        data () {
            return {
            }
        },
        props:['formObj']
    }
</script>
<style lang="scss" scoped>

</style>