<template>
    <div id="page">
        <div class="container">
            <div class="row">
                <p>{{ user.Fullname }}'s Cart</p>
            </div>
            <div class="row card" v-for="album in cart" :key="album">
               <h1>{{album.album}}</h1>
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
    height: 115vh;
    font-family: Rockwell;
    color: #B1E1FF;
}
</style>