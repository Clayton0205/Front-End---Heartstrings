<template>
    <div id="page">
        <div v-if="user" class="account">
            <h1>{{ user.Fullname }}</h1>
            <h1>{{ user.Email }}</h1>
        </div>
        <div v-else id="loader">
            <h1>You are not Loged in</h1>
            <img src="https://i.postimg.cc/s2nCZZYc/image-search-1662645757790.gif">
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
    background-color: black;
    width: 100%;
    height: 93vh;
    font-family: Futara;
    color: white;
}

.account {
    text-align: center;
}

#loader {
    text-align: center;
}
</style>