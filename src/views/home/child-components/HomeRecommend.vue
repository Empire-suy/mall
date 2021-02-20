<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link" class="text-secondary">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  border-bottom: 8px solid #eee;
  text-align: center;
  font-size: 16px;
}

.recommend-item {
  flex: 1;
  padding: 10px;
}

.recommend-item img {margin-bottom: 8px;}
</style>