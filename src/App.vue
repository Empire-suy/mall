<template>
  <div id="app">
    <MainNavBar/>
    <div class="view"><router-view/></div>
    <MainTabBar/>
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

  .view { flex: 1; }
</style>
