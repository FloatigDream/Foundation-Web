<template>
  <nav>
    <main_nav></main_nav>
    <router-link to="/"></router-link>
    <!-- <commonweal></commonweal> -->
  </nav>
  <router-view/>

  <main_foot></main_foot>
</template>

<script>
  import main_nav from './views/main-nav.vue'
  import main_foot from './views/main-foot.vue'
  import commonweal from './views/commonweal/commonweal-nav.vue'
  export default{
    components:{
      main_nav,
      main_foot,
      commonweal
    }
  }
</script>

<style scoped>

</style>
