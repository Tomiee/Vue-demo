<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2> <router-link :to="{name:'HelloA',params:{msg:'我是list传到helloA过来的'}}">helloA</router-link> </h2>
    <h2> <router-link :to="{name:'HelloB',params:{msg:'我是list传到helloB过来的'}}">helloB</router-link> </h2>
    <button @click='getData'>发get请求</button>
    <ul>
      <li v-for="item in items" v-bind:key='item.id'> {{item.title}} </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios;

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to list',
      items:[]
    }
  },
  methods:{
    getData:function(){
      let self = this
      this.$http.get('https://cnodejs.org/api/v1/topics',{params:{
        page:1,
        limit:15
      }}).then(function(res){
        self.items = res.data.data
        console.log(self.items)
      }).catch(function(err){
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
