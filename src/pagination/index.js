import vueWheelsPagination from './components/vue-wheels-pagination'

const Pagination = {
  install (Vue, options) {
    Vue.component(vueWheelsPagination.name, vueWheelsPagination)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Pagination)
}

export default Pagination