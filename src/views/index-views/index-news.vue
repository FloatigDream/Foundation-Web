<template>
    <section class="section index-news-box">

        <img src="@/images/news/newsBgLogo.png" class="index-news-box-bgImg">

        <div class="container index-new-topBox">
            <div class="index-new-topBox-leftTiele">
                <h2 class="mt-2 content-title index-news-topBox-title">公益资讯</h2>
            </div>

            <div class="index-news-topBox-rightBox" @click="goToPage('了解详情')">
                <span class="index-news-topBox-rightBox-leftspan">了解详情</span>

                <span class="index-news-topBox-rightBox-rightspan">></span>
            </div>
        </div>

        <div class="container index-news-contentBox">
            <ul class="index-news-contentBox-list">
                <li class="index-news-contentBox-list-item" v-for="item in newsList" :key="item"
                    @click="goToPage('让爱尽其所能 | “光暖万家”公益活动在渝启动')">
                    <ul class="index-news-contentBox-list-item-contentList">
                        <li class="index-news-contentBox-list-item-contentList-dayItem">
                            <h2 class="index-news-contentBox-list-item-contentList-dayItem-year">
                                2023
                            </h2>

                            <h3 class="index-news-contentBox-list-item-contentList-dayItem-day">
                                11.13
                            </h3>
                        </li>
                        <li class="index-news-contentBox-list-item-contentList-contentItem">
                            <h3 class="index-news-contentBox-list-item-contentList-content-newsTitle">
                                让爱尽其所能 | “光暖万家”公益活动在渝启动
                            </h3>

                            <span class="index-news-contentBox-list-item-contentList-content-newsSpan">
                                6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户
                                安装施工、安全用电咨询、用电设施更新等服务。
                                据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市
                                委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践
                                工作。
                            </span>
                        </li>
                        <li class="index-news-contentBox-list-item-contentList-imgItem">
                            <div class="index-news-contentBox-list-item-contentList-imgItem-image">

                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </section>
</template>
  
<script>
export default {
    data() {
        return {
            newsList: 3,
        }
    },
    components: {

    },
    methods:{
        goToPage(newsTitle){
            if(newsTitle=='了解详情') {
                this.$router.push({ name: "news" });
            }else{
                this.$router.push({ name: "newsContentBox", query: { newsTitle: newsTitle } });
            }
        }
    }
}
</script>
  
<style scoped>
.index-news-box {
    /* height: 300px; */
    margin: 3rem 0;
    /* background: url('@/images/news/newsBgLogo.png') no-repeat linear-gradient(#72aaff, #72aaff); */
    background: linear-gradient(to bottom right, #72aaff38, #1758b923);
    overflow: hidden;
    position: relative;
}

.index-new-topBox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
}

.index-news-box-bgImg {
    display: inline-block;
    position: absolute;
    z-index: -1;
    width: 65%;
    filter: grayscale(100%) sepia(100%) hue-rotate(195deg) saturate(200%) brightness(100%) contrast(100%);
    -webkit-filter: grayscale(100%) sepia(100%) hue-rotate(195deg) saturate(200%) brightness(100%) contrast(100%);
    -moz-filter: grayscale(100%) sepia(100%) hue-rotate(195deg) saturate(200%) brightness(100%) contrast(100%);
    -ms-filter: grayscale(100%) sepia(100%) hue-rotate(195deg) saturate(200%) brightness(100%) contrast(100%);
    opacity: 0.1;
    mix-blend-mode: multiply;
}

.index-news-topBox-title {
    display: flex;

}

.index-new-topBox-leftTiele {
    /* border: black 1px solid; */
}

.index-news-topBox-rightBox {
    /* border: black 1px solid; */
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #1758b9;
    border-bottom: #1758b9 3px solid;
    width: 100px;
}

.index-news-topBox-rightBox:hover {
    cursor: pointer;
}

.index-news-contentBox {
    /* border: black 1px solid; */
    width: 100%;
    /* height: 100px; */
}

.index-news-contentBox-list-item:hover{
    cursor: pointer;
    color: #1758b9;
    transition: 0.1s;
}

.index-news-contentBox-list-item-contentList:hover{
    transition: 0.4s;
    transform: scale(1.03);
}

.index-news-contentBox-list-item-contentList{
    transition: 0.4s;
}

.index-news-contentBox-list-item {
    border-top: #114eaa 1px solid;
    border-bottom: #114eaa 1px solid;
    margin: -1px 0 -1px 0;
    padding: 2rem;
    transition: 0.1s;
}

.index-news-contentBox-list-item-contentList {
    display: flex;
    align-items: center;
}

.index-news-contentBox-list-item-contentList-dayItem {
    padding: 0 2rem 0 1rem;
    height: 100%;
    display: block;
}

.index-news-contentBox-list-item-contentList-dayItem-year,
.index-news-contentBox-list-item-contentList-dayItem-day {
    color: #2b2e31;
}

.index-news-contentBox-list-item-contentList-dayItem-day {
    letter-spacing: 4px;
}

.index-news-contentBox-list-item-contentList-contentItem {
    padding: 0 2rem 0 2rem;
    letter-spacing: 1px;
    border-left: #6C757D solid 1px;

}

.index-news-contentBox-list-item-contentList-content-newsTitle {
    /* color: #232323; */
    margin-bottom: 0.5rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.index-news-contentBox-list-item-contentList-content-newsSpan {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.index-news-contentBox-list-item-contentList-imgItem {
    display: block;
}

.index-news-contentBox-list-item-contentList-imgItem-image {
    background: url('@/images/news/indexTest.png') no-repeat;
    background-size: contain;
    width: 250px;
    height: 120px;
}

@media (max-width:1023px) {
    .index-news-contentBox-list-item-contentList-dayItem {
        display: none;
    }

    .index-news-contentBox-list-item-contentList-contentItem {
        border-left: 0px;
    }
    
    .index-news-box-bgImg{
        display: none;
    }
}

@media (max-width:769px) {
    .index-news-contentBox-list-item-contentList-imgItem {
        display: none;
    }

    .index-news-contentBox-list-item{
        padding: 2rem 0 2rem 0;
    }

    .index-news-contentBox-list-item-contentList-contentItem{
        padding: 0 1rem 0 1rem;
    }
    
}
</style>
  