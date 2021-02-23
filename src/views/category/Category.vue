<template>
  <div class="category" ref="wrapper">
    <b-scroll>
    </b-scroll>
  </div>
</template>

<script>
const BScroll = () => import('components/common/bscroll/BScroll')

export default {
  components: {
    BScroll
  },
  data() {
    return {
      scroll: null
    }
  }
}
</script>

<style>
.category {
  height: 300px;
  overflow-y: scroll;
  background-color: pink;
  color: rgb(119, 101, 101);
}
</style>