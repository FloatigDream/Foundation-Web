<template>
    <div class="construction">
        <newsNav></newsNav>
        <ul class="construction-contentList container">
            <li class="construction-contentList-item " v-for="item in isActiveProjectContent" :key="item"
                @click="goToPage(item.title)">
                <div class="construction-contentList-item-imgBox">
                    <img :src="item.imgUrl" class="construction-contentList-item-imgBox-img">
                </div>
                <div class="construction-contentList-item-contentBox">
                    <h2>{{ item.title }}</h2>
                    <p class="construction-contentList-item-contentBox-p">
                        {{ item.contentText }}
                    </p>
                </div>

                <div class="construction-contentList-item-bottomBox">
                    <div class="construction-contentList-item-bottonBox">
                        <h3>{{ item.year }}</h3>
                        <h5>{{ item.day }}</h5>
                    </div>
                    <div class="construction-contentList-item-goToPageBox">
                        <span class="construction-contentList-item-goToPageBox-leftspan">了解详情</span>

                        <span class="construction-contentList-item-goToPageBox-rightspan">></span>
                    </div>
                </div>

            </li>
        </ul>

        <div class="pagination">
            <span :class="{ disabled: currentPage === 1 }" @click="changePage(currentPage - 1)">
                上一页
            </span>
            <div class="page-numbers">
                <span v-for="pageNumber in displayedPages" :key="pageNumber" @click="changePage(pageNumber)"
                    :class="{ active: pageNumber === currentPage }" @mouseover="highlightPageNumber(pageNumber)"
                    @mouseleave="resetPageNumberStyle(pageNumber)" class="pagination-span">
                    {{ pageNumber }}
                </span>
            </div>
            <span :class="{ disabled: currentPage === totalPages }" @click="changePage(currentPage + 1)">
                下一页
            </span>
        </div>
    </div>
</template>

<script>
import newsNav from '../views/news/news-nav'
export default {
    mounted() {
        this.navTitle = this.$route.query.navTitle
        // console.log(this.navTitle)
    },
    data() {
        return {
            navTitle: '',
            num: 11,
            currentPage: 1,
            pageSize: 10, // 每页显示的数据条数
            totalItems: 100, // 总数据条数
            displayedPages: [], // 当前显示的页码
            highlightedPage: null, // 当前鼠标移入的页码
            isActiveProjectContent: [],
            projectContent: [
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
                {
                    title: "乡村教师计划",
                    contentText: " 激励有情怀有智慧的乡村教师",
                    imgUrl: require('@/images/projet/test.jpg'),
                    year: "2023年",
                    day: "12月4日",
                },
            ]
        }
    },
    methods: {
        changeProjectContent() {
            this.isActiveProjectContent = []
            for (let item = this.pageSize * (this.currentPage - 1); item < this.pageSize * this.currentPage; item++) {
                // console.log(item)
                if (item < this.projectContent.length) {
                    this.isActiveProjectContent.push(this.projectContent[item]);
                }
            }
        },
        lodingPage() {
            // console.log(this.currentPage)
            this.changeProjectContent();
            this.totalItems = this.projectContent.length
        },
        changePage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
                this.updateDisplayedPages();
                // 在这里可以根据当前页码获取对应的数据
                // this.fetchData();
                this.changeProjectContent();
            }
        },
        updateDisplayedPages() {
            const maxDisplayedPages = 5; // 最多显示的页码数
            const halfDisplayedPages = Math.floor(maxDisplayedPages / 2);
            let startPage = Math.max(1, this.currentPage - halfDisplayedPages);
            let endPage = Math.min(this.totalPages, this.currentPage + halfDisplayedPages);

            if (endPage - startPage + 1 < maxDisplayedPages) {
                if (this.currentPage - startPage < halfDisplayedPages) {
                    endPage = Math.min(this.totalPages, endPage + (maxDisplayedPages - (endPage - startPage + 1)));
                } else {
                    startPage = Math.max(1, startPage - (maxDisplayedPages - (endPage - startPage + 1)));
                }
            }

            this.displayedPages = [];
            for (let i = startPage; i <= endPage; i++) {
                this.displayedPages.push(i);
            }
        },
        highlightPageNumber(pageNumber) {
            this.highlightedPage = pageNumber;
        },
        resetPageNumberStyle(pageNumber) {
            this.highlightedPage = null;
        },
        goToPage(pageName) {
            this.$router.push({ name: "newsContentBox", query: { newsTitle: pageName } });
        }
    },
    watch: {
        $route(to, from) {
            this.lodingPage()
        }
    },
    components: {
        newsNav
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalItems / this.pageSize);
        },
    },
    created() {
        this.lodingPage();
        this.updateDisplayedPages();
    },
}
</script>

<style scoped>
.construction {
    width: 100%;
    margin: 83px 0 3rem 0;
}

.construction-contentList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    transition: 0.3s;
    /* padding: 0 4rem; */
}

.construction-contentList-item {
    /* border: black 1px solid; */
    width: 48%;
    max-width: 550px;
    /* padding: 2rem 0rem; */
    margin: 2rem 0;
    box-shadow: 0 0.4375rem 1.875rem rgba(52, 47, 62, .3);
    border-radius: 5px;
    overflow: hidden;
    transition: 0.3s;
    user-select: none;
}

.construction-contentList-item-imgBox {
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    border-radius: 5;
    margin-bottom: 1rem;
}

.construction-contentList-item-goToPageBox {
    /* border: black 1px solid; */
    display: flex;
    /* align-items: flex-end; */
    justify-content: space-between;
    color: #1758b9;
    border-bottom: #1758b9 3px solid;
    width: 100px;
    float: right;
    margin-bottom: 1rem;
    margin-right: 1rem;
    
}

.construction-contentList-item-goToPageBox:hover {
    cursor: pointer;
}

.construction-contentList-item-bottomBox{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
}

.construction-contentList-item-contentBox {
    padding: 0 2rem 1rem 2rem;
}

.construction-contentList-item-imgBox-img {
    transition: 0.2s;
}

.construction-contentList-item-imgBox-img:hover {
    transform: scale(1.1);
    transition: 0.2s;
}

.construction-contentList-item-contentBox-p {
    display: -webkit-box;
    margin: 0.5rem 0;
    height: 85px;
    padding: 0 0.5rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    text-overflow: ellipsis;
}

.pagination>* {
    transition: 0.3s;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.pagination span {
    margin: 0 5px;
    cursor: pointer;
}

.pagination span.disabled {
    color: gray;
    cursor: not-allowed;
}

.pagination span.active {
    font-weight: bold;
    color: #1758b9;
}

.page-numbers {
    display: flex;
    justify-content: center;
    align-items: center;
}

.page-numbers span {
    margin: 0 10px;
}

.pagination-span {
    transition: 0.3s;
}

.pagination-span:hover {
    transition: 0.3s;
    transform: scale(1.3);
}

.construction-contentList-item-bottonBox {
    width: 120px;
    height: 100px;
    background: linear-gradient(to bottom right, #72aaff38, #1758b923);
    position: relative;
    bottom: 0px;
    left: 35px;
    /* right: ; */
    text-align: center;
    padding-top: 1rem;
}

@media (max-width:770px) {
    .construction-contentList {
        flex-direction: column;
    }

    .construction-contentList-item {
        width: 100%;
        transition: 0.3s;
    }
}
</style>