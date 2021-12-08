export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '技术blog · php go linux mysql · 相关文档',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Aron技术blog 是一个 php,nginx,go,mysql,linux 在线学习平台,在线文档托管平台'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'keywords', content: 'php,nginx,go,mysql,linux,在线学习,在线阅读,在线创作,知识付费,文档编辑'},
      {name: 'baidu-site-verification', content: 'code-TdJzBDTR4n'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios',
    '@/plugins/md',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
