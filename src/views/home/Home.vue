<template>
  <div class="home">
    <main-nav-bar class="nav-bar"/>
    <b-scroll class="hbs" ref="bScroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore">
      <home-swiper :swipers="banners"/>
      <home-recommend :recommends="recommends"/>
      <home-feature-view/>
      <tab-control
        class="home-tab-control"
        :titles="['流行', '新款', '精选']"
        @itemClick="changeGoods"
      />
      <ul>
        <li v-for="item in num" :key="item">第{{currentIndex}}模块；第{{item}}个</li>
      </ul>
    </b-scroll>
    <scroll-top @click.native="scrollTop" v-show="isShowScrollTop"/>
  </div>
</template>

<script>
import {
  getHomeMultidata,
  getHomeGoods
} from 'network/home'

const MainNavBar = () => import('components/content/MainNavBar')
const HomeSwiper = () => import('./child-components/HomeSwiper')
const HomeRecommend = () => import('./child-components/HomeRecommend')
const HomeFeatureView = () => import('./child-components/HomeFeatureView')
const TabControl = () => import('components/content/tab-control/TabControl')
const BScroll = () => import('components/common/bscroll/BScroll')
const ScrollTop = () => import('components/content/scroll-top/ScrollTop')

export default {
  components: {
    MainNavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    BScroll,
    ScrollTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        news: {
          page: 0,
          list: []
        },
        cell: {
          page: 0,
          list: []
        }
      },
      isShowScrollTop: false,
      num: 30,
      currentIndex: 0
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })

    getHomeGoods('pop', 1).then(res => {
    })
  },
  methods: {
    changeGoods(index) {
      this.currentIndex = index
    },
    scrollTop() {
      this.$refs.bScroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowScrollTop = position.y < -200
    },
    loadMore() {
      if (this.num < 100) {
        this.num += 30
        this.$refs.bScroll.finishPullUp()
        setTimeout(() => {
          this.$refs.bScroll.refresh()
        }, 50)
      }
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.nav-bar {
  z-index: 10;
  background-color: #fff;
}

.home-tab-control {
  position: sticky;
  top: 40px;
  z-index: 10;
  padding-bottom: 10px;
  background-color: #fff;
}

.hbs {
  position: fixed;
  top: 40px;
  bottom: 54px;
  left: 0;
  right: 0;
}
</style>
