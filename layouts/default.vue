<template>
  <div class="common-layout">
    <el-container class="content">
      <default-header></default-header>
      <el-row class="main_body" :gutter="10" justify="space-around">
        <el-col :xs="24" :lg="16" :sm="24" :md="24" :xl="15">
          <div class="leftContent">
            <nuxt/>
          </div>
        </el-col>
        <el-col :span="5" class="hidden-sm-and-down">
          <div class="sidebar">
            <sidebar/>
          </div>
        </el-col>
      </el-row>
      <default-footer/>
    </el-container>
  </div>
</template>

<script>
import defaultHeader from './header'
import defaultFooter from "./footer"
import sidebar from "./siderbar";
import 'element-ui/lib/theme-chalk/display.css';

export default {
  name: "commonLayout",
  components: {
    defaultHeader,
    defaultFooter,
    sidebar,
  },
  computed: {
    isShowList() {
      return this.$route.name === 'home';
    }
  }
}
</script>

<style scoped>
.common-layout, .content {
  flex-direction: column;
  justify-content: space-between;
  font-size: 13px;
  min-height: 100%
}

.main_body {
  overflow: hidden;
}

.sidebar {
  background: #fff;
  padding: 20px;
  margin: 20px;
}

</style>
