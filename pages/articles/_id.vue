<template>
<div>
  <blog-list :articles="articles"/>
</div>
</template>

<script>
import blogList from "../../components/blogList";
export default {
  name: "articles",
  components: {blogList},
  data() {
    return {
      articles: []
    }
  },
  async asyncData(ctx) {
    let articles = await ctx.app.$axios.$get("/article/"+ctx.params.id)
    return {articles:articles.ArticleList}
  },
}
</script>

<style scoped>

</style>
