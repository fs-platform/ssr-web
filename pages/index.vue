<template>
  <div>
    <blog-list :articles="articles"/>
  </div>
</template>

<script>
import blogList from "../components/blogList";

export default {
  data() {
    return {
      articles: []
    }
  },
  layout(context) {
    return "default"
  },
  async asyncData(ctx) {
    let articles = await ctx.app.$axios.$get("/article/1")
    return {articles:articles.ArticleList}
  },
  components: {
    blogList
  }
}
</script>
