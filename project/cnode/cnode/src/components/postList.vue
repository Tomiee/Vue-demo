<template>
  <div class="PostList posts">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="">
    </div>

    <div v-else >
      <ul class="">
        <li class="toobar">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
        </li>
        <li v-for=" item in items" :key="item.id">

          <!-- 头像 -->
          <img :src="item.author.avatar_url" alt="">

          <!-- 浏览量/回复量 -->
          <span  class="allcount">
            <span class="reply_count">{{item.reply_count}}</span>/<span>{{item.visit_count}}</span>
          </span>

          <!-- 标签 -->
          <span :class='[{put_good:(item.good==true),put_top:(item.top==true),
          "topiclist-tab":(item.good  != true && item.top  != true)}]'>
            <span>{{item | tabFormatter}}</span>
          </span>

          <!-- 主题 -->
          <router-link :to="{
            name:'article_content',
            params:{
              id:item.id,
              name:item.author.loginname
            }
          }"><span> {{item.title}} </span></router-link>

          <!-- 最后回复时间 -->
          <span class="last_reply"> {{item.last_reply_at  | formatDate}} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "postList",
  components: {},
  data() {
    return {
      isLoading:false,
      items: [],
      pages: 1
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 15
        })
        .then(result => {
          this.isLoading = false;
          this.items = result.data.data;
          console.log(this.items);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true
    this.getData();
  }
};
</script>

<style scoped>
.PostList {
  background-color: #e1e1e1;
}
.posts {
  padding-top: 10px;
}

.PostList img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}


ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
}

.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  padding-top: 300px;
}
</style>
