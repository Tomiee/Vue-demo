<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt>
    </div>
    <div class="userInfomation" v-else>
      <!-- 用户信息 -->
      <section>
        <router-link :to="{name:'root'}">
          <div>主页/</div>
          <ul>
            <li>
              <img :src="userInfo.avatar_url" alt>
              <span>{{userInfo.loginname}}</span>
            </li>
            <li>{{userInfo.score}} 积分</li>
            <li>githubUsername:{{userInfo.githubUsername}}</li>
            <li>注册时间: {{userInfo.create_at | formatDate}}</li>
          </ul>
        </router-link>
      </section>

      <!-- 创建的话题 -->
      <div>
        <p>最近创建的话题</p>
        <ul class="topics">

          <li v-for="topic in userInfo.recent_topics" :key="topic.id">
            <span>
              <img :src="topic.author.avatar_url" alt>
            </span>
            <span>
              <!-- 回复量/浏览量 -->
            </span>
            <span>{{topic.title}}</span>
            <span>
              <!--最后回复的作者图像 -->
            </span>
            <span>{{topic.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>

      <!-- 最近参与的话题 -->
      <div class="replies">
          <p>最近参与的话题</p>
        <ul>
          <li v-for="reply in userInfo.recent_replies" :key="reply.id">
            <span>
              <img :src="reply.author.avatar_url" alt>
            </span>
            <span>
              <!-- 回复量/浏览量 -->
            </span>
            <span>{{reply.title}}</span>
            <span>
              <!--最后回复的作者图像 -->
            </span>
            <span>{{reply.last_reply_at | formatDate}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: false,
      userInfo: {}
    };
  },
  methods: {
    getUserinfo() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(result => {
          if (result.data.success == true) {
            this.isLoading = false; //加载成功，去除动画
            this.userInfo = result.data.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getUserinfo();
  }
};
</script>

<style scoped>
.userInfomation {
  background: white;
  width: 75%;
  margin: 10px auto;
}
.userInfomation section {
  padding: 12px;
}
.userInfomation img {
  width: 30px;
}
.userInfomation li {
  list-style: none;
}
.userInfomation .replies,
.userInfomation .topics {
  font-size: 0.72rem;
  border-top: 10px #dddddd solid;
}
.userInfomation > div > p {
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 0.75rem;
  margin: 0;
}
.userInfomation > div > ul > li {
  padding: 4px 0 4px 12px;
  white-space: nowrap;
  font-size: 0.72rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
}
.userInfomation > div > ul > li > a {
  color: #094e99;
  text-decoration: none;
}
</style>
