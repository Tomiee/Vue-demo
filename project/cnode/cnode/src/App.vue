<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <Header></Header>
    <div class="main">
     <router-view name="SlideBar"></router-view>
     <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import postList from './components/postList'

export default {
  name: 'App',
  components:{
    Header,postList
  }
}
</script>

<style>
 * {
   margin: 0;
   padding: 0;
 }

 .main {
    width: 80%;
    margin:0 auto;
 }
</style>
