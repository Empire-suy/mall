<template>
  <div id="app">
    <div class="view">
      <router-view/>
    </div>
    <MainTabBar class="app-tab-bar"/>
  </div>
</template>

<script>
const MainTabBar = () => import('components/content/MainTabBar')

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style lang="css" src="bootstrap/dist/css/bootstrap.css"></style>
<style lang="css" src="./assets/css/base.css"></style>
<style lang="css">
  #app {
    display: flex;
    flex-direction: column;
  }
  .view {flex: 1;}
  .app-tab-bar {
    z-index: 10;
    height: 54px;
    background-color: #fff;
  }
</style>
