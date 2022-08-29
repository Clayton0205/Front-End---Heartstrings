<template>
  <nav>
    <navbar />
  </nav>
  <router-view />
</template>

<script>
import navbar from "./components/nav.vue";
export default {
  components: { navbar }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>

<!-- #A66CFF
#9C9EFE
#AFB4FF
#B1E1FF -->
