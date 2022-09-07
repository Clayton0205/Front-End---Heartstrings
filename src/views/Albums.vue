<template>
    <div id="page">
        <input type="text" v-model="search" placeholder="Search">
        <div id="filter">
            <select>
                <option value="none">None</option>
                <option value="saab">Billie Eilish</option>
                <option value="opel">Rustage</option>
                <option value="audi">Shwabadi</option>
            </select>
            <select>
                <option value="volvo">None</option>
                <option value="saab">Single</option>
                <option value="opel">EP</option>
                <option value="audi">Album</option>
            </select>
            <select>
                <option value="volvo">None</option>
                <option value="saab">2000-2010</option>
                <option value="opel">2011-2020</option>
                <option value="audi">2021-</option>
            </select>
            <select>
                <option value="volvo">None</option>
                <option value="saab">0-100</option>
                <option value="opel">101-200</option>
                <option value="audi">201-300</option>
            </select>
        </div>
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
    height: 55vh;
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
    margin-top: 20px;
    margin-left: 20%;
    margin-bottom: 20px;
    background-color: #8E3200;
    color: #FFEBC1;
    text-align: center;
    font-family: Rockwell;
    width: 1000px;
    height: 30px;
    border: none;
    border-radius: 5px;
}

::-webkit-input-placeholder {
    color: #FFEBC1;
}

#filter {
    margin-left: 40%;
    margin-bottom: 10px;
}
</style>