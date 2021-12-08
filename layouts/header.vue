<template>
  <el-header>
    <el-menu
      class="el-menu"
      mode="horizontal"
      :default-active="activeIndex.toString()"
      :router=true
    >
      <el-menu-item index="0" route="/">Aron技术博客</el-menu-item>
      <template v-if="category.length">
        <el-menu-item  v-for="item in category" :key="item.id" :index="item.id.toString()" :route="articleUrl(item)">
          {{ item.name }}
        </el-menu-item>
      </template>
      <el-menu-item index="999" route="/support">support</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>

<script>

export default {
  name: "defaultHeader",
  data() {
    return {
      activeIndex: 0,
      categoryList: []
    }
  },
  computed: {
    articleUrl() {
      return (item) => {
        return "/articles/" + item.id
      }
    },
    category() {
      return this.$store.state.category.category
    }
  }
}
</script>

<style scoped>
.el-header {
  padding: 0
}
</style>
