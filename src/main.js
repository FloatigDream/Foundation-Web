import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import createStore  from 'vuex'
import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

//bootstrap.min css
import './old-res/plugins/bulma/bulma.min.css'
//Icon Font Css
import  './old-res/plugins/magnific-popup/dist/magnific-popup.css'
import './old-res/plugins/icofont/icofont.css'
import './old-res/plugins/themify/css/themify-icons.css'
//Owl Carousel CSS
import './old-res/plugins/modal-video/modal-video.min.css'
import './old-res/plugins/slick-carousel/slick/slick.css'
import './old-res/plugins/slick-carousel/slick/slick-theme.css'
//主样式
import './old-res/css/style.css'
//animate.css
import 'animate'

import $ from 'jquery'


createApp(App).use(store).use(createStore).use(router).use($).mount('#app')
