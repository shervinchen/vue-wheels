import Vue from 'vue'
import App from './App.vue'
import { VueWheelsPagination } from './index.js' //使用本地的
// import { VueWheelsPagination } from 'vue-wheels' //插件的方式引入

Vue.use(VueWheelsPagination)

new Vue({
  el: '#app',
  render: h => h(App)
})