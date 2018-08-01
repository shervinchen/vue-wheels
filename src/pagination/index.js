import Pagination from './components/vue-wheels-pagination'

const VueWheelsPagination = {
  install (Vue, options) {
    Vue.component(Pagination.name, Pagination)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWheelsPagination)
}

export { VueWheelsPagination }