<template>
    <div id="page">
        <div v-if="album" class="container-fluid">
            <div class="row">
                <router-link to="/albums">
                    <button type="button">
                        Back
                    </button>
                </router-link>
            </div>
            <div class="row" id="header">
                <p>{{ album[0].album }}</p>
            </div>
            <div class="row">
                <div class="col">
                    <div class="container">
                        <div class="row">
                            <p class="side">Artist : <br> {{ album[0].artist }}</p>
                        </div>
                        <div class="row">
                            <p class="side">Type : <br> {{ album[0].musictype }}</p>
                        </div>
                        <div class="row">
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div class="col"><img :src="album[0].image" id="image"></div>
                <div class="col">
                    <div class="container">
                        <div class="row">
                            <p class="side">
                                Year : <br>
                                {{ album[0].year }}</p>
                        </div>
                        <div class="row">
                            <p class="side">
                                Price : <br>
                                R{{ album[0].price }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col button">
                    <button type="button"> <a href="#box">Description</a></button>
                    <button @click="addCart()" type="button">
                        + Add to Cart
                    </button>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div id="box">
                    <p>{{ album[0].description }}</p>
                </div>
            </div>
        </div>
        <div v-else id="loader">
           <img src="https://i.postimg.cc/s2nCZZYc/image-search-1662645757790.gif">
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    components: { Footer },
    computed: {
        album() {
            return this.$store.state.album;
        },
        user() {
            return this.$store.state.user
        }
    },
    mounted() {
        this.$store.dispatch("getAlbum", this.$route.params.id);
    },
    methods: {
        addCart() {
            let product = {
                musictype: this.album[0].musictype,
                album: this.album[0].album,
                image: this.album[0].image,
                description: this.album[0].description,
                artist: this.album[0].artist,
                year: this.album[0].year,
                price: this.album[0].price,
                creatorID: this.album[0].creatorID
            }
            this.$store.dispatch('addCart', product)
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
    background-color: #D7A86E;
    width: 100%;
    height: 115vh;
    font-family: Rockwell;
    color: #FFEBC1;
}

button {
    border: none;
    border-radius: 5px;
    background-color: #8E3200;
    color: #FFEBC1;
    width: 10vw;
    margin-top: 20px;
    margin-left: 4vw;
}

button:hover {
    background-color: #531d00;
}

button:focus {
    background-color: #531d00;
}

a {
    text-decoration: none;
    color: #FFEBC1;
}

#header {
    text-decoration: underline;
    text-align: center;
    font-size: 4vw;
}

.side {
    margin-top: 60px;
    text-align: center;
    font-size: 3vw;
}

#image {
    width: 35vw;
    height: 60vh;
}

.button {
    margin-bottom: 66px;
}

#box {
    /* margin-top: 20vh; */
    margin: auto;
    text-align: center;
    background-color: #8E3200;
    width: 95vw;
    height: 15vh;
}

#loader {
    text-align: center;
}
</style>