<template>
    <div class="newsBox">
        <newsNav></newsNav>
        <ul class="newsBox-contentList">
            <li class="newsBox-contentList-item container" v-for="item in isActiveNewsContent" :key="item"
                @click="goToPage(item.title)">
                <div class="newsBox-contentList-item-imgBox">

                </div>
                <div class="newsBox-contentList-item-contentBox ">
                    <div class="newsBox-contentList-item-contentBox-rightBox">
                        <h2 class="newsBox-contentList-item-contentBox-rightBox-title" @click="goToPage(item.title)">
                            {{ item.title }}
                        </h2>

                        <span class="newsBox-contentList-item-contentBox-rightBox-newsSpan">
                            {{ item.content }}
                        </span>

                        <div class="newsBox-contentList-item-contentBox-rightBox-dayBox">
                            <h3>{{ item.year }}</h3>
                            <h5>{{ item.date }}</h5>
                        </div>

                        <div class="newsBox-contentList-item-contentBox-rightBox-linkBox">
                            <span class="newsBox-contentList-item-contentBox-rightBox-linkBox-leftspan"
                                @click="goToPage(item.title)">了解详情</span>

                            <span class="newsBox-contentList-item-contentBox-rightBox-linkBox-rightspan">></span>
                        </div>

                    </div>
                </div>
            </li>
            <li class="newsBox-contentList-item-pageNum container">
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
            </li>
        </ul>


    </div>
</template>

<script>
import newsNav from '../views/news/news-nav'
export default {
    data() {
        return {
            currentPage: 1,
            pageSize: 10, // 每页显示的数据条数
            totalItems: 100, // 总数据条数
            displayedPages: [], // 当前显示的页码
            highlightedPage: null, // 当前鼠标移入的页码
            isActiveNewsContent: [],
            newsContent: [
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },
                {
                    title: "让爱尽其所能 | “光暖万家”公益活动在渝启动",
                    content: '6月28日上午，“光暖万家”公益活动在重庆市梁平区和林镇正式启动。标志着重庆市18个乡村振兴示范点的2000户困境家庭将享受到入户安装施工、安全用电咨询、用电设施更新等服务。据悉，“光暖万家”公益活动充分发挥“政府+央企+民企+社会组织”四方协同作用，是扎实推进的惠民暖心优服行动。活动由共青团重庆市委提出倡议，正泰公益基金会提供“光暖礼包”，国网重庆市电力公司团委、国家电投集团重庆电力有限公司团委组织青年志愿者开展实践工作。',
                    year: "2023年",
                    date: "11月21日"
                },

            ]
        };
    },
    components:{
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
    methods: {
        changeNewsContent() {
            this.isActiveNewsContent = []
            for (let item = this.pageSize * (this.currentPage - 1); item < this.pageSize * this.currentPage; item++) {
                // console.log(item)
                if (item < this.newsContent.length) {
                    this.isActiveNewsContent.push(this.newsContent[item]);
                }
            }
        },
        lodingPage() {
            this.totalItems = this.newsContent.length;
            this.changeNewsContent();
            // console.log(this.totalItems)
        },
        changePage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= this.totalPages) {
                this.currentPage = pageNumber;
                this.updateDisplayedPages();
                this.changeNewsContent();
                // 在这里可以根据当前页码获取对应的数据
                // this.fetchData();
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
        goToPage(newsTitle) {
            this.$router.push({ name: "newsContentBox", query: { newsTitle: newsTitle } });
        }
    },
};
</script>

<style scoped>
.newsBox-contentList {
    width: 100%;
    margin: 3rem 0;
    padding: 0 5rem;
}

.newsBox-contentList-item {
    height: 500px;
    /* margin: 3rem 0; */
    margin-top: 5rem;
    margin-bottom: 3rem;
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
    transition: 0.3s;
    user-select: none;
    /* border: black 1px solid; */
}

.newsBox-contentList-item-imgBox {
    height: 100%;
    width: 30%;
    position: absolute;
    left: 3rem;
    bottom: 2rem;
    background: url('@/images/news/indexTest.png') no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    border-radius: 2px;
    /* border: darkblue 1px solid; */
}

.newsBox-contentList-item-contentBox {
    width: 100%;
    height: 85%;
    border-radius: 15px;
    box-shadow: 0 0.4375rem 1.875rem rgba(52, 47, 62, .1);
    /* border: red 1px solid; */
}

.newsBox-contentList-item-contentBox-rightBox {
    width: 65%;
    height: 100%;
    /* border: black 1px solid; */
    padding: 3rem 2rem;
    float: right;
}

.newsBox-contentList-item-contentBox-rightBox-dayBox {
    width: 120px;
    height: 100px;
    background: linear-gradient(to bottom right, #72aaff38, #1758b923);
    position: absolute;
    bottom: 0;
    text-align: center;
    padding-top: 1rem;
}

.newsBox-contentList-item-contentBox-rightBox-newsSpan {
    margin-top: 1rem;
    /* font-size: 16px; */
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    text-indent: 2em;
}

.newsBox-contentList-item-contentBox-rightBox-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}

.newsBox-contentList-item-contentBox-rightBox-linkBox {
    /* border: black 1px solid; */
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: #1758b9;
    border-bottom: #1758b9 3px solid;
    width: 100px;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
}

.newsBox-contentList-item-contentBox-rightBox-linkBox:hover {
    cursor: pointer;
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

.fade-enter-active,
.fade-leave-active {
    transition: transform 0.3s;
}

.fade-enter,
.fade-leave-to {
    transform: scale(0.9);
}

.newsBox-contentList-item-contentBox-rightBox-title,
.newsBox-contentList-item-contentBox-rightBox-linkBox {
    transition: 0.3s;
}

.newsBox-contentList-item-contentBox-rightBox-title:hover,
.newsBox-contentList-item-contentBox-rightBox-linkBox:hover {
    transform: scale(1.02);
    transition: 0.3s;
    color: #1758b9;
    cursor: pointer;
}

@media (max-width:1220px) {
    .newsBox-contentList-item-contentBox-rightBox-newsSpan {
        -webkit-line-clamp: 4;
        /* padding-top: 0.5rem; */
    }

    .newsBox-contentList-item {
        height: 350px;
        transition: 0.3s;
    }

    .newsBox-contentList-item-contentBox {
        height: 90%;
    }
}

@media (max-width:900px) {
    .newsBox-contentList-item {
        flex-direction: column;
    }

    .newsBox-contentList-item-imgBox {
        width: 100%;
        height: 60%;
        position: static;
    }

    .newsBox-contentList-item-contentBox {
        height: 80%;
    }

    .newsBox-contentList-item-contentBox-rightBox {
        width: 100%;
        padding: 0 2rem;
    }

    .newsBox-contentList-item-contentBox-rightBox-newsSpan {
        -webkit-line-clamp: 3;
        /* padding-top: 0.5rem; */
    }

    .newsBox-contentList-item-contentBox-rightBox-newsSpan {
        margin-top: 0;
    }

    .newsBox-contentList-item-contentBox-rightBox-dayBox {
        height: 70px;
        padding-top: 0rem;
    }

    .newsBox-contentList {
        padding: 0 1rem;
    }
}
</style>