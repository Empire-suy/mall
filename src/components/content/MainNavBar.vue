<template>
  <div>
    <nav-bar class="main-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
const NavBar = () => import('components/common/navbar/NavBar')

export default {
  components: {
    NavBar
  }
}
</script>

<style>
.main-nav-bar {
  box-shadow: 0 -5px 6px 2px #9c9999;
}
</style>