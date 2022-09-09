<template>
  <nav>
    <navbar />
  </nav>
        <router-view />
        <Footer/>
</template>

<script>
import navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
export default {
    components: { navbar, Footer }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

nav {
  height: 35px;
  background-color: black;
}
</style>
