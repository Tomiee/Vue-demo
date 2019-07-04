<template>
  <div class="header clearfix">
    <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
    <input type="text">
    <ul>
      <li> <a href="">首页</a></li>
      <li> <a href="">新手入门</a></li>
      <li> <a href="">API</a></li>
      <li> <a href="">关于</a></li>
      <li> <a href="">注册</a></li>
      <li> <a href="">登录</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  .header {
    background-color: #444444;
    color:#c3cccc;
    border: 1px solid #444;
  }

  .clearfix::after {
    content:'';
    display: block;
    clear:both;
  }

  img {
    width: 120px;
    margin-left: 50px;
    margin-top: 10px
  }

  input {
    margin-bottom: 0px;
    vertical-align:top;
    margin-top: 15px;
    margin-left: 100px;
    font-size: 14px;
    height: 22px;
    border: 1px solid gray;
    border-radius: 10px;
    padding-left: 5px;
    outline: none;
  }

  a {
    text-decoration: none;
    color:#c3cccc;
    font-size: 14px;
    text-shadow: #cccccc;
  }

  a:hover{
    color: azure;
  }

  ul {
    list-style: none;
    float: right;
    margin-top: 15px;
    margin-right: 100px;
  }

  li {
    display: inline-block;
    padding-left: 20px;
  }

</style>
