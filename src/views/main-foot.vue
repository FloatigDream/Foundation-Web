<template>
    <div class="main-foot-box">
        <div class="main-foot-box-top">
            <!--左盒子 Logo and 导航链接-->
            <div class="main-foot-box-leftBox">
                <ul class="main-foot-box-leftBox-list transition">
                    <li class="main-foot-box-leftBox-list-logoItem transition">
                        <img src="@/images/logo.png" class="main-foot-box-leftBox-list-logoItem-img transition" @click="goToPages('首页')">
                    </li>
                    <li class="main-foot-box-leftBox-list-linkItem transition">
                        <ul class="main-foot-box-leftBox-list-linkItem-navlist transition">
                            <li class="main-foot-box-leftBox-list-linkItem-navlist-navItem transition">
                                <a @click="goToPages('关于我们')">关于我们</a>
                            </li>
                            <li class="main-foot-box-leftBox-list-linkItem-navlist-navItem transition">
                                <a @click="goToPages('联系我们')">联系我们</a>
                            </li>
                            <li class="main-foot-box-leftBox-list-linkItem-navlist-navItem transition">
                                <a @click="goToPages('项目介绍')">项目介绍</a>
                            </li>
                            <li class="main-foot-box-leftBox-list-linkItem-navlist-navItem transition">
                                <a @click="goToPages('最新动态')">最新动态</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!--右盒子 联系人信息-->
            <div class="main-foot-box-rightBox">
                <h2 class="main-foot-box-rightBox-title transition">
                    联系我们
                </h2>

                <ul class="main-foot-box-rightBox-contentList transition">
                    <li class="main-foot-box-rightBox-contentItem transition">
                        <span class="main-foot-box-rightBox-contentItem-title">
                            地址：
                        </span>
                        <span class="main-foot-box-rightBox-contentItem-span">
                            杭州市拱墅区康景路18号
                        </span>
                    </li>
                    <li class="main-foot-box-rightBox-contentItem transition">
                        <span class="main-foot-box-rightBox-contentItem-title">
                            电话：
                        </span>
                        <span class="main-foot-box-rightBox-contentItem-span">
                            0571-28060336
                        </span>
                    </li>
                    <li class="main-foot-box-rightBox-contentItem transition">
                        <span class="main-foot-box-rightBox-contentItem-title">
                            邮箱：
                        </span>
                        <span class="main-foot-box-rightBox-contentItem-span">
                            hkjt@hkjt.cn
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <!--底部盒子 版权 and 备案信息-->
        <div class="main-foot-box-bottomBox transition">

            <ul class="main-foot-box-bottomBox-contentList transition">
                <li class="main-foot-box-bottomBox-contentItem transition">
                    杭开控股集团有限公司
                </li>
                <li class="main-foot-box-bottomBox-contentItem transition">
                    CopyRight©HaiKaiGroup 1958-2021
                </li>
                <li class="main-foot-box-bottomBox-contentItem transition">
                    ICP备案号：浙ICP备20014162号-1
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    methods: {
        goToPages(pageName) {
            // console.log(pageName)
            switch (pageName) {
                case "首页":
                    this.$router.push({ name: "home" });
                    break;
                case "关于我们":
                    this.$router.push({ name: "overview" });
                    break;
                case "联系我们":
                    this.$router.push({ name: "contactUs" });
                    break;
                case "最新动态":
                    this.$router.push({ name: "news", query: { navTitle: "新闻动态" } });
                    break;
                case "项目介绍":
                    this.$router.push({ name: "project", query: { navTitle: '文化教育' } });
                    break;
            }
        },
    }
}
</script>

<style scoped>
.main-foot-box {
    width: 100%;
    height: 330px;
    background-color: #ebebeb;
    /* padding: 3rem 0; */
}

.main-foot-box-top {
    display: flex;
    flex-direction: row;
    height: 90%;
}

.main-foot-box-leftBox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-foot-box-leftBox,
.main-foot-box-rightBox {
    width: 50%;
    height: 100%;
    /* border: black 1px solid; */
}

.main-foot-box-leftBox-list-logoItem {
    padding: 0;
    width: 100%;
}

.main-foot-box-leftBox-list-logoItem-img {
    max-width: 500px;
    /* min-width: 230px; */
}

.main-foot-box-leftBox-list-linkItem {
    display: flex;
    justify-content: center;
}

.main-foot-box-leftBox-list-linkItem-navlist-navItem {
    float: left;
    padding: 1.5rem 0.6rem 0 0.6rem;
}

.main-foot-box-leftBox-list-linkItem-navlist-navItem>a {
    display: block;
    width: 66px;
    text-align: justify;
    text-align-last: justify;
}

.main-foot-box-leftBox-list-linkItem-navlist {
    margin-left: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-foot-box-rightBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main-foot-box-rightBox-title {
    letter-spacing: 5px;
    margin-bottom: 1rem;
}

.main-foot-box-rightBox-contentList {
    /* font-size: 18px; */
    letter-spacing: 3px;
}

.main-foot-box-bottomBox {
    /* border: black 1px solid; */
    width: 100%;
    height: 10%;
}

.main-foot-box-bottomBox-contentList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.main-foot-box-bottomBox-contentItem {
    font-size: 12px;
    padding: 0 2rem;
    float: left;
}

@media (max-width:1023px) {
    .main-foot-box-leftBox-list-logoItem-img {
        max-width: 400px;
    }
}

@media (max-width:790px) {
    .main-foot-box-leftBox-list-linkItem {
        display: none;
    }

    .main-foot-box-leftBox,
    .main-foot-box-rightBox {
        width: 100%;
        height: auto;
    }

    .main-foot-box-top {
        flex-direction: column-reverse;
    }

    .main-foot-box-leftBox-list-logoItem {
        padding: 1rem 0;

    }

    .main-foot-box-leftBox-list-logoItem-img {
        max-width: 300px;
    }
}

@media (max-width:730px) {
    .main-foot-box-bottomBox {
        height: 20%;
    }

    .main-foot-box-top {
        height: 80%;
    }
}
</style>