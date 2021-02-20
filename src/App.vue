<template>
  <div id="app">
    <MainNavBar class="app-nav-bar"/>
    <div class="view"><router-view/></div>
    <MainTabBar class="app-tab-bar"/>
  </div>
</template>

<script>
const MainNavBar = () => import('components/content/MainNavBar')
const MainTabBar = () => import('components/content/MainTabBar')

export default {
  name: 'App',
  components: {
    MainTabBar,
    MainNavBar
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

  .app-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    background-color: #fff;
  }

  .view {
    flex: 1;
    padding-top: 40px;
    padding-bottom: 60px;
  }

  .app-tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    background-color: #fff;
  }
</style>
