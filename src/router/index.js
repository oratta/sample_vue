import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Page from '../views/Page.vue'
import VuexSample from '../views/VuexSample.vue'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/article/:aid',
    name: 'article',
    component: Article,
    props: true,
    children: [
      {
        path: 'pages/:page_num',
        name: 'page',
        component: Page,
        props: true,
      }
    ]
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: VuexSample,
  },
  {
    path: '/book/:max_price',
    name: 'book',
    component: Book,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
