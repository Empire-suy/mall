<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         :key="item"
         class="tab-control-item text-secondary"
         @click="itemClick(index)">
      <span :class="{'active': index === currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.active {
  padding: 6px;
  border-bottom: 2px solid var(--text-pink);
  color: var(--text-pink);
}
</style>