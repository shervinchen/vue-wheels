<template>
  <div id="app">
    <div class="main">
      <vue-wheels-pagination @pageChange="change" :pageOption="pageOption"></vue-wheels-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      pageOption: {
        curr: 1,
        count: 162,
        limit: 5,
        ellipsis: true,
        max: 2
      }
    }
  },
  methods: {
    change (pageNumber) {
      console.log(pageNumber)
    }
  },
  mounted () {
    // 显示省略号
    // new Pagination('#pagelist1', );
  }
}
</script>

<style lang="scss">
  @import '../../style/base.scss';
  
  .main {
    margin-top: 300px;
    text-align: center;
    .content {
      text-align: center;
    }
  }
</style>