<template>
  <div>
    <swiper>
      <swiper-item v-for="item in swipers" :key="item.link">
        <a :href="item.link"><img :src="item.image" :alt="item.title"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  props: {
    swipers: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style>
img {
  width: 100%;
}
</style>