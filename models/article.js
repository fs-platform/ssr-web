import http from "../plugins/axios"

export function article(id) {
  return http.get("article/" + id)
}

function articleDetail(id) {
  return http.get("articleDetail/" + id)
}

export default {article, articleDetail};
