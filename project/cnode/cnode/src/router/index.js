import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import postList from '../components/postList.vue'
import Article from '../components/Article.vue'
import UserInfo  from '../components/UserInfo.vue'
import SlideBar from '../components/SlideBar.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:postList,
      }
    },

    {
      name:'article_content',
      path:'/topic/:id&author=:name',
      components:{
        main:Article,
        slideBar:SlideBar
      }
    },
    {
      name:'user_info',
      path:'/user/:name',
      components:{
        main:UserInfo
      }
    }
  ]
})

