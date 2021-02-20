<template>
  <div class="main-tab-bar text-center">
    <tab-bar class="tab-bar">
      <tab-bar-item class="tab-bar-item" @click.native="$router.push('/')">
        <i slot="tab-bar-icon" class="tab-bar__icon bi bi-house-fill"></i>
        <div class="tab-bar__text" slot="tab-bar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/category" @click.native="$router.push('/category')">
        <i slot="tab-bar-icon" class="tab-bar__icon bi bi-grid-fill"></i>
        <div class="tab-bar__text" slot="tab-bar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/cart" @click.native="$router.push('/cart')">
        <i slot="tab-bar-icon" class="tab-bar__icon bi bi-cart-dash-fill"></i>
        <div class="tab-bar__text" slot="tab-bar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/profile"  @click.native="$router.push('/profile')">
        <i slot="tab-bar-icon" class="tab-bar__icon bi bi-person-fill"></i>
        <div class="tab-bar__text" slot="tab-bar-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
const TabBar = () => import('components/common/tabbar/TabBar')
const TabBarItem = () => import('components/common/tabbar/TabBarItem')

export default {
  components: {
    TabBar,
    TabBarItem
  },
  methods: {
  }
}
</script>

<style>
.main-tab-bar {
  box-shadow: 0 5px 6px 2px #9c9999;
}
.tab-bar { display: flex; }

.tab-bar-item { flex: 1; }

.tab-bar__icon { font-size: 24px; }

.tab-bar__text { font-size: 12px; }
</style>