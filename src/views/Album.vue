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
                <p>{{  album[0].album  }}</p>
            </div>
            <div class="row">
                <div class="col">
                    <div class="container">
                        <div class="row">
                            <p class="side">Artist : <br> {{  album[0].artist  }}</p>
                        </div>
                        <div class="row">
                            <p class="side">Type : <br> {{  album[0].musictype  }}</p>
                        </div>
                    </div>
                </div>
                <div class="col"><img :src="album[0].image" id="image"></div>
                <div class="col">
                    <div class="container">
                        <div class="row">
                            <p class="side">
                                Year : <br>
                                {{  album[0].year  }}</p>
                        </div>
                        <div class="row">
                            <p class="side">
                                Price : <br>
                                R{{  album[0].price  }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col"></div>
                <div class="col button">
                    <button type="button"> <a href="#box">Description</a></button>
                    <button type="button">
                        <router-link to="/thank">
                            + Add to Cart
                        </router-link>
                    </button>
                </div>
                <div class="col"></div>
            </div>
            <div class="row">
                <div id="box">
                    <p>{{  album[0].description  }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            no Load
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    components: [Footer],
    computed: {
        album() {
            return this.$store.state.album;
        }
    },
    mounted() {
        this.$store.dispatch("getAlbum", this.$route.params.id);
    },
    components: { Footer }
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

button {
    background-color: #A66CFF;
    color: #B1E1FF;
    width: 10vw;
    margin-top: 20px;
    margin-left: 4vw;
}

a {
    text-decoration: none;
    color: #B1E1FF;
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
    background-color: #A66CFF;
    width: 95vw;
    height: 15vh;
}
</style>