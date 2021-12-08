export const state = () => ({
  category: [],
});

export const mutations = {
  setCategoryData(state, a) {
    state.category = a;
  },
};

export const actions = {
  async getCategory({state, commit}) {  //获取头部数据
    try {
      let {data} = await this.$axios.get("/category")
      commit("setCategoryData", data.CategoryList)
    } catch (e) {
    }
  }
};
