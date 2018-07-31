import Vue from 'vue'
import App from './App.vue'
import Pagination from './index.js' //使用本地的
// import Pagination from 'vue-wheels' //插件的方式引入

Vue.use(Pagination)

new Vue({
  el: '#app',
  render: h => h(App)
})