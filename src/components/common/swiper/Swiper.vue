<template>
  <div class="swiper-container" :style="{height: height}">
    <div class="swiper" ref="swiper" :style="{width: swiperWidth}" @mouseenter="clearTimer" @mouseleave="setTimer">
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
      swiper: null,
      timer: null,
      moveTimer: null,
      currentIndex: 0,
      height: '',
      touchStartX: 0,
      touchEndX: 0
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
      console.log('清除定时器')
      clearTimeout(this.timer)
      clearTimeout(this.moveTimer)
    },
    getSwiperSize() {
      if (this.swiper) {
        this.swiper.children.forEach(item => {
          item.style.width = this.swiper.clientWidth + 'px'
        })

        // 监听图片的是否加载完成 并设置容器的高度
        const img = this.swiper.children[0].getElementsByTagName('img')[0]
        if (img) {
          img.onload = () => {
            this.height = this.swiper.clientHeight + 'px'
          }
        }
        
        return this.swiper.children.length * this.swiper.clientWidth + 'px'
      } else {
        return '100%'
      }
    }
  },
  mounted() {
    this.swiper = this.$refs.swiper
    this.setTimer()
  },
  computed: {
    swiperWidth() {
      if (this.swiper) {
        this.swiper.children.forEach(item => {
          item.style.width = this.swiper.clientWidth + 'px'
        })

        // 监听图片的是否加载完成 并设置容器的高度
        const img = this.swiper.children[0].getElementsByTagName('img')[0]
        if (img) {
          img.onload = () => {
            this.height = this.swiper.clientHeight + 'px'
          }
        }
        
        return this.swiper.children.length * this.swiper.clientWidth + 'px'
      } else {
        return '100%'
      }
    }
  }
}
</script>

<style>
.swiper-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.swiper {
  overflow: hidden;
  display: flex;
  position: absolute;
}
</style>