export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('category/getCategory')
  }
};
