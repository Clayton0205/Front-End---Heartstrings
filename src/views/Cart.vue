<template>
    <div id="page">
        <div v-if="user">
            <div class="container">
                <div class="row">
                    <p>{{ user.Fullname }}'s Cart</p>
                </div>
                <div class="row card" v-for="album in cart" :key="album" :album="album">
                    <h1>{{ album.album }}</h1>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="container-fluid">
                <div class="row heading">
                    <h1>Your Cart</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.state.user
        },
        cart() {
            return this.$store.state.cart
        }
    },
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

.heading{
    text-align: center;
    text-decoration: underline;
}
</style>