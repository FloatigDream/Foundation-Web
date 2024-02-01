<template>
	<header class="navigation">
		<!-- <div class="header-top ">
		<div class="container">
			<div class="columns is-gapless is-justify-content-space-between is-align-items-center">
				<div class="column is-6-desktop is-4-tablet has-text-left-desktop has-text-centered-mobile">
					<div class="header-top-info">
						<a href="tel:+23-345-67890"><i class="icofont-phone mr-2"></i><span>+23-345-67890</span></a>
						<a href="mailto:support@gmail.com" ><i class="icofont-email mr-2"></i><span>hkjt@hkjt.cn</span></a>
					</div>
				</div>
				<div class="column is-6-desktop is-8-tablet">
					<div class="header-top-right has-text-right-tablet has-text-centered-mobile"> -->
		<!-- <a href="#" class="	--bs-primary"><i class="icofont-facebook"></i></a>
						<a href="#"><i class="icofont-twitter"></i></a>
						<a href="#"><i class="icofont-github"></i></a>
						<a href="#"><i class="icofont-pinterest"></i></a>
						<a href="#"><i class="icofont-linkedin"></i></a> -->
		<!-- <a href="donation.html" class="top-btn">加入我们</a>
					</div>
				</div>
			</div>
		</div>
	</div> -->
		<Transition enter-active-class="animate__animated animate__bounceInDown"
			leave-active-class="animate__animated animate__animated">
			<nav id="navbar" class="navbar main-nav is-fixed-top transition">
				<div class="container">
					<div class="navbar-brand">
						<a class="navbar-item">
							<img src="../images/logo.png" alt="logo" @click="goToPages('首页')">
							<!-- <h2>这是LOGO</h2> -->
						</a>
						<button role="button" class="navbar-burger burger" data-hidden="true" data-target="navigation"
							:class="{ 'is-active': isActive == true }" @click="buttonIsActive()">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</button>
					</div>

					<!-- :class="{ 'is-active': isActive == true }" -->
					<div class="navbar-menu mr-0" id="navigation" :class="{ 'is-active': isActive == true }">
						<ul class="navbar-end">
							<li class="navbar-item">
								<a class="navbar-link" @click="goToPages('首页')">首页</a>
							</li>

							<!-- <li class="navbar-item">
						<a class="navbar-link" href="about.html">About</a>
					</li> -->

							<li class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link" @click="goToPages('基金会介绍')">关于我们<span class="ml-1">+</span></a>
								<div class="navbar-dropdown">
									<a class="navbar-item" @click="goToPages('基金会介绍')">基金会介绍</a>
									<a class="navbar-item" @click="goToPages('年报审计')">年报审计</a>
									<a class="navbar-item" @click="goToPages('章程制度')">章程制度</a>
									<!-- <a class="navbar-item" @click="goToPages('评估报告')">评估报告</a> -->
									<a class="navbar-item" @click="goToPages('联系我们')">联系我们</a>
								</div>
							</li>

							<li class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link" @click="goToPages('公益项目')">公益项目<span class="ml-1">+</span></a>
								<div class="navbar-dropdown">
									<a class="navbar-item" v-for="item in projectNav" :key="item"
										@click="goToPages(item)">{{
											item }}</a>
								</div>
							</li>

							<li class="navbar-item has-dropdown is-hoverable">
								<a class="navbar-link" @click="goToPages('最新动态')">最新动态<span class="ml-1">+</span></a>
								<div class="navbar-dropdown">
									<a class="navbar-item" @click="goToPages('最新动态')">新闻动态</a>
									<a class="navbar-item" @click="goToPages('党建动态')">党建动态</a>
									<a class="navbar-item" @click="goToPages('清廉文化')">清廉文化</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</Transition>
	</header>

	<div class="weNav-box" :class="{ 'none': none == true }">
		<div class="weNav-box-bannerBox">

		</div>

		<nav class="weNav-box-Nav">
			<div class="weNav-box-Nav-box">
				<ul class="weNav-box-Nav-box-list">
					<li class="weNav-box-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 1 }">
						<span class="weNav-box-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 1 }"
							@click="changeColor('基金会介绍')">
							基金会介绍
						</span>
					</li>
					<li class="weNav-box-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 2 }">
						<span class="weNav-box-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 2 }"
							@click="changeColor('年报审计')">
							年报审计
						</span>
					</li>
					<li class="weNav-box-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 3 }">
						<span class="weNav-box-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 3 }"
							@click="changeColor('章程制度')">
							章程制度
						</span>

					</li>
					<!-- <li class="weNav-box-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 4 }">
						<span class="weNav-box-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 4 }"
							@click="changeColor('评估报告')">
							评估报告
						</span>

					</li> -->
					<li class="weNav-box-Nav-box-list-item" :class="{ 'is-Active-color': isActiveColor == 5 }">
						<span class="weNav-box-Nav-box-list-item-span" :class="{ 'is-Active-color2': isActiveColor == 5 }"
							@click="changeColor('联系我们')">
							联系我们
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
			isActiveColor: 0,
			projectNav: [],
			lastProjectNav: '',
		}
	},
	methods: {
		buttonIsActive() {
			if (window.innerWidth < 1024) {
				if (this.isActive == false) {
					this.isActive = true
				} else {
					this.isActive = false
				}
			}

		},
		goToPages(pageName) {
			// console.log(pageName)
			switch (pageName) {
				case "首页":
					this.$router.push({ name: "home" });
					break;
				case "基金会介绍":
					this.$router.push({ name: "overview" });
					this.isActiveColor = 1;
					break;
				case "年报审计":
					this.$router.push({ name: "publicReport" });
					this.isActiveColor = 2;
					break;
				case "章程制度":
					this.$router.push({ name: "hkSystem" });
					this.isActiveColor = 3;
					break;
				case "评估报告":
					this.$router.push({ name: "publicReport" });
					this.isActiveColor = 4;
					break;
				case "联系我们":
					this.$router.push({ name: "contactUs" });
					this.isActiveColor = 5;
					break;
				case "最新动态":
					this.$router.push({ name: "news", query: { navTitle: "新闻动态" } });
					break;
				case "党建动态":
					this.$router.push({ name: "construction", query: { navTitle: "党建动态" } });
					break;
				case "清廉文化":
					this.$router.push({ name: "construction", query: { navTitle: "清廉文化" } });
					break;
				case "公益项目":
					this.$router.push({ name: "project", query: { navTitle: this.lastProjectNav } });
					break;
				default:
					this.$router.push({ name: "news" });
					this.$router.push({ name: "project", query: { navTitle: pageName } });
					break;
			}

			setTimeout(() => {
				this.buttonIsActive();
			}, 500);
		},
		lodinPage() {
			let nav = ['文化教育', '紧急援助', '环境保护', '行业推动'];
			store.commit('setProjectNav', nav);
			// console.log(store.state.projectNav.length)
			this.projectNav = [];
			for (let item = 0; item < store.state.projectNav.length; item++) {
				// console.log(store.state.projectNav[item])
				this.projectNav.push(store.state.projectNav[item])
			}
			this.lastProjectNav = this.projectNav[0];



			if (this.$route.path == "/overview" || this.$route.path == "/publicReport" || this.$route.path == "/hkSystem" || this.$route.path == "/contactUs") {
				this.none = false
			} else {
				this.none = true
			}
			switch (this.$route.path) {
				case "/overview":
					this.isActiveColor = 1;
					this.none = false;
					break;
				case "/publicReport":
					// this.isActiveColor = 2;
					this.none = false;
					break;
				case "/hkSystem":
					this.isActiveColor = 3;
					this.none = false;
					break;
				case "评估报告":
					this.isActiveColor = 4;
					this.none = false;
					break;
				case "/contactUs":
					this.isActiveColor = 5;
					this.none = false;
					break;
			}


		},
		changeColor(name) {
			switch (name) {
				case "基金会介绍":
					this.goToPages('基金会介绍');
					this.isActiveColor = 1;
					break;
				case "年报审计":
					this.goToPages('年报审计');
					this.isActiveColor = 2;
					break;
				case "章程制度":
					this.goToPages('章程制度');
					this.isActiveColor = 3;
					break;
				case "评估报告":
					this.goToPages('评估报告');
					this.isActiveColor = 4;
					break;
				case "联系我们":
					this.goToPages('联系我们');
					this.isActiveColor = 5;
					break;
			}
		}
	},
	created() {
		this.lodinPage()
	},
	watch: {
		$route(to, from) {
			this.lodinPage()
		}
	},
}
</script>

<style scoped>
.navbar-burger,
.navbar-menu {
	transition: 0.5s;
}

.weNav-box {
	display: block;
}

.weNav-box-bannerBox {
	width: 100%;
	height: 576.75px;
	/* border: black 1px solid; */
	margin-top: 80px;
	background: url('@/images/bg/banner2.jpg') no-repeat;
	background-size: cover;
	background-position-x: center;
	background-position-y: 35%;
}

.none {
	display: none;
}

.weNav-box-Nav-box {
	width: 100%;
	display: grid;
	overflow: auto;
	/* justify-content: center;
	align-items: center; */
}

.weNav-box-Nav-box-list {
	/* width: 80%; */
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem auto 0 auto;
	padding-bottom: 10px;
}

.weNav-box-Nav-box-list-item {
	float: left;
	display: block;
	padding-bottom: 1rem;
	border-bottom: #23232321 3px solid;
	transition: 0.2s;
	/* border-bottom: #232323 2px solid; */
}

.weNav-box-Nav-box-list-item:hover {
	transition: 0.2s;
}

.is-Active-color {
	border-bottom: #0D6EFD 3px solid;
}

.is-Active-color2 {
	background-color: #0D6EFD !important;
	color: white !important;
}

.weNav-box-Nav-box-list-item-span {
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

.weNav-box-Nav-box-list-item-span:hover {
	transition: 0.2s;
}

@media (max-width:1075px) {
	.weNav-box-Nav-box-list-item-span {
		width: 120px;
		font-size: 16px;
		padding: 0.7rem 0;
	}
}

@media (max-width:750px) {
	.weNav-box-Nav-box-list-item-span {
		width: 100px;
		font-size: 16px;
		padding: 0.5rem 0;
		margin: 0 0.5rem;
	}
}

@media (max-width:592px) {
	.weNav-box-Nav-box-list-item-span {
		width: 90px;
		font-size: 12px;
		padding: 0.2rem 0;
		margin: 0 0.5rem;
	}
}
</style>
  