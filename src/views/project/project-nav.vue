<template>
    <div class="proiectNav">
        <div class="proiectNav-bannerBox">

        </div>

        <nav class="proiectNav-Nav">
            <div class="proiectNav-Nav-box">
                <ul class="proiectNav-Nav-box-list">
                    <li class="proiectNav-Nav-box-list-item" v-for="item in projectNav" :key="item"
                        :class="{ 'is-Active-color': isActiveColor == item }">
                        <span class="proiectNav-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == item }"
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
import store from '@/store';
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
            
        },
        goToPages(pageName) {

        },
        lodinPage(){
            let navTitle=this.$route.query.navTitle;
			// console.log(store.state.projectNav.length)
            this.projectNav=[]
			for (let item = 0; item < store.state.projectNav.length; item++) {
				// console.log(store.state.projectNav[item])
				this.projectNav.push(store.state.projectNav[item]);

                if(navTitle==store.state.projectNav[item]){
                    this.isActiveColor=store.state.projectNav[item]
                }
			}
            this.projectNavNum=store.state.projectNav.length
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
.proiectNav {
    margin-top: 80px;
}

.navbar-burger,
.navbar-menu {
    transition: 0.5s;
}

.proiectNav {
    display: block;
}

.proiectNav-bannerBox {
    width: 100%;
    height: 576.75px;
    /* border: black 1px solid; */
    margin-top: 80px;
    background: url('@/images/bg/hand-4661763_processed.jpg') no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 35%;
}

.none {
    display: none;
}

.proiectNav-Nav-box {
    width: 100%;
    display: grid;
    overflow: auto;
    /* justify-content: center;
	align-items: center; */
}

.proiectNav-Nav-box-list {
    /* width: 80%; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0 auto;
    padding-bottom: 10px;
}

.proiectNav-Nav-box-list-item {
    float: left;
    display: block;
    padding-bottom: 1rem;
    border-bottom: #23232321 3px solid;
    transition: 0.2s;
    /* border-bottom: #232323 2px solid; */
}

.proiectNav-Nav-box-list-item:hover {
    transition: 0.2s;
}

.is-Active-color {
    border-bottom: #0D6EFD 3px solid;
}

.is-Active-color2 {
    background-color: #0D6EFD !important;
    color: white !important;
}

.proiectNav-Nav-box-list-item-span {
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

.proiectNav-Nav-box-list-item-span:hover {
    transition: 0.2s;
}

@media (max-width:1075px) {
    .proiectNav-Nav-box-list-item-span {
        width: 120px;
        font-size: 16px;
        padding: 0.7rem 0;
    }
}

@media (max-width:750px) {
    .proiectNav-Nav-box-list-item-span {
        width: 100px;
        font-size: 16px;
        padding: 0.5rem 0;
        margin: 0 0.5rem;
    }
}

@media (max-width:592px) {
    .proiectNav-Nav-box-list-item-span {
        width: 90px;
        font-size: 12px;
        padding: 0.2rem 0;
        margin: 0 0.5rem;
    }
}
</style>