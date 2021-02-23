<template>
  <div class="bs" ref="bs">
    <div ref="bsCon"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bs: null
    }
  },
  mounted() {
    this.bs = new BScroll(this.$refs.bs, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    this.init()
  },
  methods: {
    init() {
      this.scroll()
      this.pullUpLoadEvent()
    },
    scrollTo(x, y, time=500) {
      this.bs.scrollTo(x, y, time)
    },
    scroll() {
      if (this.probeType) {
        this.bs.on('scroll', position => {
          this.$emit('scroll', position)
        })
      }
    },
    pullUpLoadEvent() {
      if (this.pullUpLoad) {
        this.bs.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    },
    finishPullUp() {
      this.bs.finishPullUp()
    },
    refresh() {
      console.log('refresh')
      this.bs.refresh()
    }
  }
}
</script>
