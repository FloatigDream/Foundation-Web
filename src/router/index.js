import { createRouter, createWebHistory } from 'vue-router'//createWebHashHistory
const home= () => import('@/page/index-home.vue')
const overview = () => import( '@/page/hk-overview.vue')
const publicReport = () => import( '@/page/hk-publicReport.vue')
const hkSystem = () => import( '@/page/hk-system.vue')
const contactUs = () => import( '@/page/hk-contactUs.vue')
const news = () => import( '@/page/hk-news.vue')
const newsContentBox = () => import( '@/page/hk-newsContent.vue')
const project = () => import( '@/page/hk-project.vue')
const projetContent = () => import( '@/page/projet-content.vue')
const construction = () => import( '@/page/hk-construction.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/overview',
    name: 'overview',
    component: overview
  }, {
    path: '/publicReport',
    name: 'publicReport',
    component: publicReport
  }, {
    path: '/hkSystem',
    name: 'hkSystem',
    component: hkSystem
  }, {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs
  }, {
    path: '/news',
    name: 'news',
    component: news
  }, {
    path: '/newsContentBox',
    name: 'newsContentBox',
    component: newsContentBox
  }, {
    path: '/project',
    name: 'project',
    component: project
  }, {
    path: '/projetContent',
    name: 'projetContent',
    component: projetContent
  }, {
    path: '/construction',
    name: 'construction',
    component: construction
  },
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
