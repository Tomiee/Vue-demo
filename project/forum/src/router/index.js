import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import helloA from '@/components/HelloA'
import helloB from '@/components/HelloB'
import list from '@/components/list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/helloA:/msg',
      name: 'HelloA',
      component: helloA
    },{
      path: '/helloB:/msg',
      name: 'HelloB',
      component: helloB
    },{
      path: '/list',
      name: 'list',
      component: list
    }
  ]
})
