<template>
  <div class="home">
    <home-swiper :swipers="banners"/>
    <home-recommend :recommends="recommends"/>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
const HomeSwiper = () => import('./child-components/HomeSwiper')
const HomeRecommend = () => import('./child-components/HomeRecommend')

export default {
  components: {
    HomeSwiper,
    HomeRecommend
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