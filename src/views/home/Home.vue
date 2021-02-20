<template>
  <div class="home">
    <home-swiper :swipers="banners"/>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
const HomeSwiper = () => import('./child-components/HomeSwiper')

export default {
  components: {
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style>

</style>