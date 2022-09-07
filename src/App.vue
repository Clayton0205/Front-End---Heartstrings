<template>
  <nav>
    <navleft/>
  </nav>
    <router-view />
</template>

<script>
import navleft from "./components/navleft.vue"
export default {
  components: { navleft }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}


nav {
  height: 35px;
  background-color: #8E3200;
}
</style>
