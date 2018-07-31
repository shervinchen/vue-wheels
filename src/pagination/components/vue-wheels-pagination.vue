<template lang="html">
  <nav class="pagination">
    <li class="pagination-item" @click="goFirst()" v-if="pageNumber > 1">
      <a href="javascript:;" class="pagination-link">首页</a>
    </li>
    <li class="pagination-item" @click="goPrev()" v-if="pageNumber > 1">
      <a href="javascript:;" class="pagination-link">前一页</a>
    </li>
    <li class="pagination-item" @click="goFirst()" v-if="pageNumber > 1">
      <a href="javascript:;" class="pagination-link">1</a>
    </li>
    <li class="pagination-item" v-if="pageNumber - (pageOption.max + 1) > 1">
      <a href="javascript:;" class="pagination-link">...</a>
    </li>
    <li class="pagination-item" @click="goPage(pageNumber - pageIndex)" v-if="pageNumber - pageIndex > 1" v-for="pageIndex in rPageData" :key="pageNumber - pageIndex">
      <a href="javascript:;" class="pagination-link">{{pageNumber - pageIndex}}</a>
    </li>
    <li class="pagination-item" @click="goPage(pageNumber)">
      <a href="javascript:;" class="pagination-link current">{{pageNumber}}</a>
    </li>
    <li class="pagination-item" @click="goPage(pageNumber + pageIndex)" v-if="pageNumber + pageIndex < pageCount" v-for="pageIndex in pageData" :key="pageNumber + pageIndex">
      <a href="javascript:;" class="pagination-link">{{pageNumber + pageIndex}}</a>
    </li>
    <li class="pagination-item" v-if="pageNumber + pageOption.max + 1 < pageCount">
      <a href="javascript:;" class="pagination-link">...</a>
    </li>
    <li class="pagination-item" @click="goLast()" v-if="pageNumber < pageCount">
      <a href="javascript:;" class="pagination-link">{{pageCount}}</a>
    </li>
    <li class="pagination-item" @click="goNext()" v-if="pageNumber < pageCount">
      <a href="javascript:;" class="pagination-link">后一页</a>
    </li>
    <li class="pagination-item" @click="goLast()" v-if="pageNumber < pageCount">
      <a href="javascript:;" class="pagination-link">尾页</a>
    </li>
  </nav>
</template>

<script>
export default {
  name: 'vue-wheels-pagination',
  props: {
    pageOption: {
      type: Object,
      required: true,
      default: {
        curr: 1,
        count: 0,
        limit: 5,
        ellipsis: true,
        max: 2
      }
    }
  },
  data () {
    return {
      pageNumber: this.pageOption.curr
    }
  },
  computed: {
    pageData () {
      let pageData = []
      for (let index = 1; index <= this.pageOption.max; index++) {
        pageData.push(index)
      }
      return pageData
    },
    rPageData () {
      return this.pageData.slice(0).reverse()
    },
    pageCount () {
      return Math.ceil(this.pageOption.count / this.pageOption.limit)
    }
  },
  methods: {
    goFirst () {
      this.pageNumber = 1
      this.$emit('pageChange', 1)
    },
    goPrev () {
      this.pageNumber--
      this.$emit('pageChange', this.pageNumber)
    },
    goPage (pageNumber) {
      this.pageNumber = pageNumber
      this.$emit('pageChange', pageNumber)
    },
    goNext () {
      this.pageNumber = this.pageNumber + 1
      this.$emit('pageChange', this.pageNumber)
    },
    goLast () {
      this.pageNumber = this.pageCount
      this.$emit('pageChange', this.pageCount)
    }
  }
}
</script>

<style lang="scss">
.pagination {
  margin: 24px 0;
  text-align: center;
  font-size: 0;
  .pagination-item {
    display: inline-block;
    vertical-align: middle;
    margin: 0 4px;
    .pagination-link {
      box-sizing: content-box;
      display: inline-block;
      padding: 0 8px;
      min-width: 20px;
      height: 32px;
      line-height: 32px;
      border-radius: 16px;
      font-size: 16px;
      cursor: pointer;
      &:link {
        color: #555;
      }
      &:hover {
        background-color: #eee;
        color: #42b983;
      }
      &.current {
        color: #42b983;
        background-color: #eee;
      }
    }
  }
}
</style>