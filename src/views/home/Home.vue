<template>
  <div class="home">
    <home-swiper :swipers="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-feature-view/>
    <tab-control class="home-tab-control" :titles="['流行', '新款', '精选']"/>
    <ul>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
      <li>dad</li>
    </ul>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'

const HomeSwiper = () => import('./child-components/HomeSwiper')
const HomeRecommend = () => import('./child-components/HomeRecommend')
const HomeFeatureView = () => import('./child-components/HomeFeatureView')

const TabControl = () => import('components/content/tab-control/TabControl')

export default {
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl
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

<style scoped>
.home-swiper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.home-tab-control {
  position: sticky;
  top: 40px;
  padding-bottom: 10px;
  background-color: #fff;
}
</style>