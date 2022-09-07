<template>
    <div id="page">
        <input type="text" v-model="search" placeholder="search">
        <div class="container-fluid" v-if="albums">
            <div v-for="album in albums" :key="album" id="box">
                <router-link :to="{ name: 'album', params: { id: album.id } }">
                    <div class="row card">
                        <h3 id="h">{{ album.album }}</h3>
                        <img :src="album.image" id="img">
                        <p>{{ album.artist }}</p>
                        <p>{{ album.year }}</p>
                        <p>R{{ album.price }}</p>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-else>
            Why are you not loading
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    data() {
        return {
            search: ""
        }
    },
    components: [Footer],
    mounted() {
        this.$store.dispatch("getAlbums");
    },
    computed: {
        albums() {
            return this.$store.state.albums?.filter(album => {
                let isMatch = true;
                if (!album.album.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false }
                return isMatch

            });
        }
    },
    components: { Footer }
}
</script>

<style scoped>
#page {
    background-color: #D7A86E;
    width: 100%;
    height: 235vh;
    font-family: Rockwell;
}

.container-fluid {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

#box {
    margin-bottom: 5vh;
    margin-left: 3vw;
}

.card {
    text-align: center;
    width: 25vw;
    height: 52vh;
    background-color: #8E3200;
}

a {
    color: #FFEBC1;
    text-decoration: none;
}

#img {
    width: 25vw;
    height: 30vh;
}

#h {
    height: 60px;
    text-decoration: underline;
}

input {
    margin-left: 20%;
    background-color: blue;
    color: lightblue;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 1000px;
    height: 20px;
}
</style>