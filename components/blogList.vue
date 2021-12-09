<template>
  <el-card class="box-card">
    <el-scrollbar height="600px">
      <el-row justify="space-around" align="middle" v-for="(item,index) in articles" :key="item.id"
              class="infinite-list-item">
        <div class="filed">{{ index + 1 }}</div>
        <div class="filed">
          <router-link :to="link(item.id)">{{ item.name }}</router-link>
        </div>
        <div class="filed">{{ item.author }}</div>
        <div class="filed">
          <span class="view">
              <i class="el-icon-star-on"></i>
             <span>{{ item.like }}</span>
          </span>
          |
          <span class="view">
             <i class="iconfont">&#xe633;</i>
             <span>{{ item.view ? item.view : 0 }}</span>
          </span>
        </div>
        <div class="filed">{{ formatDate(item.updated_at) }}</div>
      </el-row>
    </el-scrollbar>
  </el-card>
</template>


<script>

export default {
  name: "blogList",
  props: ["articles"],
  computed: {
    link() {
      return (id) => {
        return "/articleDetail/" + id
      }
    }
  },
  methods: {
    formatDate(inputTime) {
      var date = new Date(inputTime * 1000);  //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    }
  }
}
</script>

<style scoped>
.el-card {
  margin: 20px;
}

.infinite-list {
  padding: 0;
  list-style: none;
}

.infinite-list-item {
  display: block !important;
  align-items: center;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
}

.view {
  width: 26%;
  display: inline-block;
}

.child_view {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.el-col {
  overflow: hidden;
  text-overflow: ellipsis;
}

.el-card header {
  padding: 10px !important;
}

.filedItem {
  width: 100px;
}

.filed {
  width: 16%;
  overflow: hidden;
  text-overflow: ellipsis !important;
  text-align: center;
  display: inline-block;
  white-space: nowrap
}

.filed:nth-child(1) {
  width: 9%;
}

.filed:nth-child(2) {
  width: 32%;
}
</style>
