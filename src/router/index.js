import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/home'
// import Hello from '@/components/Hello'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'
// import TimeEntries from '@/components/LogTime'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '#',
      name: 'Home',
      component: Home
    },
    {
      path: '/time-entries',
      name: 'TimeEntries',
      component: TimeEntries,
      children: [{
        path: 'log-time', // 这里前面不要/
        component: LogTime
      }]
    }
  ]
})
