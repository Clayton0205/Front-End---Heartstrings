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
                        <div class="item" id="item">
                            <h1>{{ album.album }}</h1>
                        </div>
                    </div>
                    <!-- <div class="col"><button type="button" @click="deleteSingle(user.cart.id)">Delete Item</button></div> -->
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
        }
        // deleteSingle(id) {
        //     this.$store.dispatch('deleteSingleCart', id)
        // }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#page {
    background-color: #D7A86E;
    width: 100%;
    height: 93vh;
    font-family: Rockwell;
    color: #FFEBC1;
    text-align: center;
}

.heading {
    text-align: center;
    text-decoration: underline;
}

#item {
    margin-left: 190px;
    background-color: #8E3200;
    text-align: start;
    width: 1000px;
    border: 1px solid black;
}
</style>