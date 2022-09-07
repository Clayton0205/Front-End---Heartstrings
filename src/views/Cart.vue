<template>
    <div id="page">
        <div v-if="user">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <h1>{{ user.Fullname }}'s Cart</h1>
                    </div>
                    <div class="col"><button type="button" @click="clear()">Delete All</button></div>
                </div>
                <div class="row" v-for="album in cart" :key="album" :album="album">
                    <div class="col">
                        <h1>{{ album.album }}</h1>
                    </div>
                    <div class="col"><button type="button" @click="deleteSingle(user.cart.id)">Delete Item</button></div>
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
    methods: {
        clear() {
            this.$store.dispatch('deleteCart')
            this.cart = null
        },
        deleteSingle(id) {
            this.$store.dispatch('deleteSingleCart', id)
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

.heading {
    text-align: center;
    text-decoration: underline;
}
</style>