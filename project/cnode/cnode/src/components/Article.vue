<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt>
    </div>

    <div v-else>
      <!-- 话题正文 -->
      <div class="topic_header">
        <div class="topic_title">{{article.title}}</div>
        <ul>
          <li>•发布于 {{article.create_at | formatDate}}</li>
          <li>•作者 {{article.author.loginname}}</li>
          <li>•{{article.visit_count}}次浏览</li>
          <li>•来自 {{article | tabFormat }}</li>
        </ul>
        <div v-html="article.content" class="topic_content"></div>
      </div>

      <!-- 回复 -->
      <div class="reply">
        <div class="topbar">回复</div>
        <ul>
          <li v-for="(reply,index) in article.replies" :key="reply.id">
            <img :src="reply.author.avatar_url" alt>
            <div>
              <!-- 回复头部 -->
              <div>
                <span>{{reply.author.loginname}}</span>
                <span>{{index+1}}楼</span>
                <span>{{reply.create_at | formatDate }}</span>
                <span>
                  <span ></span>
                </span>
              </div>
              <!-- 回复内容 -->
              <p v-html='reply.content'></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  components: {},
  data() {
    return {
      isLoading: false,
      article: {}
    };
  },
  methods: {
    getAtricle() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(result => {
          this.isLoading = false;
          if (result.data.success == true) {
            this.article = result.data.data;
            console.log(this.article);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getAtricle();
  }
};
</script>

<style scoped>
.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

@import url("../assets/markdown-github.css");
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 0 10px;
}

.markdown-text img {
  width: 92% !important;
}
</style>
