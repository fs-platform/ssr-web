<template>
  <div class="markBody">
    <v-md-preview :text="value"></v-md-preview>
  </div>
</template>

<script>

export default {
  name: "blogDetail",
  data() {
    return {
      title: "",
      description: "",
      value: ""// value的值是要解析的markdown数据
    }
  },
  async asyncData(ctx) {
    let articles = await ctx.app.$axios.$get("/articleDetail/" + ctx.params.id)
    let reg = new RegExp(/(^#.*\n)/i)
    let title = reg.exec(articles.content) ? reg.exec(articles.content)[0] : "";
    let description= articles.content.substring(0,100);
    return {value: articles.content, title, description}
  },
  head() {
    return {
      title: this.title.replace("#",""),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    }
  }
}
</script>

<style scoped>
.markBody {
  background: #fff;
  margin: 20px;
  overflow: scroll;
  height: 700px
}
</style>
