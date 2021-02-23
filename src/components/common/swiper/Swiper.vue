<template>
  <div class="swiper-container" ref="container" :style="{height: height}">
    <div class="swiper clearfix" ref="swiper" :style="{width: swiperWidth}" @mouseenter="clearTimer" @mouseleave="setTimer">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratioTime: {
      type: Number,
      default: 860
    }
  },
  data() {
    return {
      container: null,
      swiper: null,
      timer: null,
      moveTimer: null,
      currentIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
      height: '',
      swiperWidth: ''
    }
  },
  methods: {
    move() {
      const left = this.swiper.style.left ? this.swiper.style.left.split('px')[0] * 1 : 0
      const width = this.currentIndex ? this.swiper.clientWidth / this.swiper.children.length : this.swiper.clientWidth
      const step = width / this.ratioTime * 16.667 // 60帧 每次运动的距离
      this.moveTimer = setTimeout(() => {
        if (!this.currentIndex && left < 0 || left > width * this.currentIndex * -1) {
          if (this.currentIndex) {
            this.swiper.style.left = (left + step * -1) <= (width * this.currentIndex * -1) ? width * this.currentIndex * -1 + 'px' : (left + step * -1) + 'px'
          } else {
            // 回到原点
            this.swiper.style.left = (left + step) >= 0 ? '0px' : left + step + 'px'
          }
          
          this.move()
        } else {
          if (this.currentIndex === this.swiper.children.length - 1) {
            this.currentIndex = 0
          } else {
            this.currentIndex++
          }
          this.setTimer()
        }
      }, 16.667)
    },
    setTimer() {
      // 先移动一次再设置定时器
      this.timer = setTimeout(() => {
        this.move()
      }, 3000)
    },
    clearTimer() {
      clearTimeout(this.timer)
      clearTimeout(this.moveTimer)
    },
    getSwiperSize() {
      if (this.swiper) {
        this.swiper.children.forEach(item => {
          item.style.width = this.container.clientWidth + 'px'

          let img = item.getElementsByTagName('img')[0]
        })
        
        this.swiperWidth = this.swiper.children.length * this.swiper.clientWidth + 'px'
      } else {
        this.swiperWidth = '100%'
      }
    },
    getChild() {
      setTimeout(() => {
        if (this.swiper.children.length) {
          this.setSize()
        } else {
          this.getChild()
        }
      }, 30)
    },
    setSize() {
      this.swiper.children.forEach(item => {
        item.style.width = this.container.clientWidth + 'px'
      })

      this.swiperWidth = this.container.offsetWidth * this.swiper.children.length + 'px'

      this.setTimer()
    }
  },
  created() {
    this.getChild()
  },
  mounted() {
    this.container = this.$refs.container
    this.swiper = this.$refs.swiper
  }
}
</script>

<style scoped>
.swiper-container {
  overflow: hidden;
}

.swiper {
  overflow: hidden;
  position: relative;
  display: flex;
}

.swiper > * {
  float: left;
}
</style>