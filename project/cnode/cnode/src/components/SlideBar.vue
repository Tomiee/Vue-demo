<template>
  <div class="authorinfo">
    <div class="authorsummay">
      <div class="topbar">作者</div>
      <div>
        <router-link :to="{name:'user_info',params:{
          name:userinfo.loginname
        }}">
          <img :src="userInfo.avatar_url" alt="">
          {{userInfo.loginname}}
        </router-link>
      </div>
      <p>积分: {{userInfo.score}} </p>
    </div>
    <div></div>
    <div></div>
  </div>
</template>


<script>
export default {
  name:'SlideBar',
  data() {
    return {
      userInfo:{}
    }
  },
};
</script>

<style scoped>
.authorsummay,
.recent_replies,
.recent_topics {
  background-color: #fff;
}
.authorinfo {
  width: 328px;
  float: right;
  margin-top: 0;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0px;
}
</style>
