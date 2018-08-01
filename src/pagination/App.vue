<template>
  <div id="app">
    <div class="main">
      <vue-wheels-pagination @pageChange="change" :count="count" :limit="limit" :info="info"></vue-wheels-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      count: 162,
      limit: 5,
      info: {
        firstInfo: '<<',
        prevInfo: '<',
        nextInfo: '>',
        lastInfo: '>>'
      }
    }
  },
  methods: {
    change (pageNumber) {
      console.log(pageNumber)
    }
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