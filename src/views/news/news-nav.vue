<template>
    <div class="newsNavBox">
        <div class="newsNavBox-banner">
        </div>

        <nav class="newsNavBox-Nav">
            <div class="newsNavBox-Nav-box">
                <ul class="newsNavBox-Nav-box-list">
                    <li class="newsNavBox-Nav-box-list-item" v-for="item in projectNav" :key="item"
                        :class="{ 'is-Active-color': isActiveColor == item }">
                        <span class="newsNavBox-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == item }"
                            @click="changeColor(item)">
                            {{ item }}
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
            none: true,
            isActiveColor: '',
            projectNav: [],
            projectNavNum: 0
        }
    },
    methods: {
        changeColor(name) {
            // console.log(name)
            this.isActiveColor=name
            this.goToPages(name)
        },
        goToPages(pageName) {
            switch (pageName) {
				case "新闻动态":
					this.$router.push({ name: "news" ,query:{navTitle:"新闻动态"}});
					break;
				case "党建动态":
					this.$router.push({ name: "construction", query: { navTitle: "党建动态" } });
					break;
				case "清廉文化":
					this.$router.push({ name: "construction", query: { navTitle: "清廉文化" } });
					break;
			}
        },
        lodinPage(){
            this.projectNav=["新闻动态","党建动态","清廉文化"]
            this.projectNavNum=this.projectNav.length
            this.isActiveColor=this.$route.query.navTitle
        }
    },
    created(){
        this.lodinPage();
    },
    watch :{
        $route(to, from) {
			this.lodinPage()
		}
    }
}
</script>

<style scoped>
.newsNavBox {
    margin-top: 80px;
}

.navbar-burger,
.navbar-menu {
    transition: 0.5s;
}

.newsNavBox {
    display: block;
}

.newsNavBox-banner {
    width: 100%;
    height: 576.75px;
    /* border: black 1px solid; */
    margin-top: 80px;
    background: url('@/images/bg/field-rice-1538200.jpg') no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 80%;
}

.none {
    display: none;
}

.newsNavBox-Nav-box {
    width: 100%;
    display: grid;
    overflow: auto;
    /* justify-content: center;
	align-items: center; */
}

.newsNavBox-Nav-box-list {
    /* width: 80%; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0 auto;
    padding-bottom: 10px;
}

.newsNavBox-Nav-box-list-item {
    float: left;
    display: block;
    padding-bottom: 1rem;
    border-bottom: #23232321 3px solid;
    transition: 0.2s;
    /* border-bottom: #232323 2px solid; */
}

.newsNavBox-Nav-box-list-item:hover {
    transition: 0.2s;
}

.is-Active-color {
    border-bottom: #0D6EFD 3px solid;
}

.is-Active-color2 {
    background-color: #0D6EFD !important;
    color: white !important;
}

.newsNavBox-Nav-box-list-item-span {
    cursor: pointer;
    display: block;
    font-size: 18px;
    color: #232323;
    width: 176px;
    text-align: center;
    background-color: #23232321;
    padding: 1rem 0;
    border-radius: 5px;
    margin: 0 1rem;
    transition: 0.2s;
}

.newsNavBox-Nav-box-list-item-span:hover {
    transition: 0.2s;
}

@media (max-width:1075px) {
    .newsNavBox-Nav-box-list-item-span {
        width: 120px;
        font-size: 16px;
        padding: 0.7rem 0;
    }
}

@media (max-width:750px) {
    .newsNavBox-Nav-box-list-item-span {
        width: 100px;
        font-size: 16px;
        padding: 0.5rem 0;
        margin: 0 0.5rem;
    }
}

@media (max-width:592px) {
    .newsNavBox-Nav-box-list-item-span {
        width: 90px;
        font-size: 12px;
        padding: 0.2rem 0;
        margin: 0 0.5rem;
    }
}
</style>