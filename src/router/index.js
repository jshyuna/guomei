import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "../components/Home.vue"
import Chart from "../components/Chart.vue"
import Mall from "../components/Mall.vue"
import My from "../components/My.vue"
import Message from "../components/Message.vue"

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/chart',
    component:Chart
  },
  {
    path:'/mall',
    component:Mall
  },
  {
    path:'/my',
    component:My
  },
  {
    path:'message',
    component:Message
  }
]

const router = new VueRouter({
  routes
})

export default router
