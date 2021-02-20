<template>
  <div class="tab-bar-item" :class="[activeClass]">
    <div><slot name="tab-bar-icon"></slot></div>
    <div><slot name="tab-bar-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    activeClass() {
      if (this.path && this.path === this.$route.path) {
        return 'text-primary'
      } else {
        return 'text-secondary'
      }
    }
  }
}
</script>

<style>

</style>