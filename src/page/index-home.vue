<template>
    <index></index>
    <index_content></index_content>
    <index_news></index_news>
</template>

<script>
import index from '@/views/index-views/home-banner.vue'
import index_content from '@/views/index-views/home-content.vue'
import index_news from '@/views/index-views/index-news.vue'
    export default {
        components:{
            index,
            index_content,
            index_news,
        }
    }
</script>

<style scoped>

</style>