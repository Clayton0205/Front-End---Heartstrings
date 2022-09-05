<template>
    <div id="page">
        <div v-if="user">
            <h1>{{ user.Fullname }}</h1>
            <h1>{{ user.Email }}</h1>
        </div>
        <div v-else>
            <h1>You are not loged in</h1>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        }
    }
    }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#page {
    background-color: #9C9EFE;
    width: 100%;
    height: 93vh;
    font-family: Rockwell;
    color: #B1E1FF;
}
</style>