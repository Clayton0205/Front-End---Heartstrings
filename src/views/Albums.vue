<template>
    <div id="page">
        <input type="text" v-model="search" placeholder="Search">
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
        <div v-else id="loader">
           <img src="https://i.postimg.cc/s2nCZZYc/image-search-1662645757790.gif">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        }
    },
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
    }
}
</script>

<style scoped>
#page {
    background-color: black;
    width: 100%;
    height: 250vh;
    font-family: Futara;
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
    background-color: white;
    
}

a {
    color: black;
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
    background-color: white;
    color: black;
    text-align: center;
    font-family: Futara;
    width: 1000px;
    height: 30px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px rgb(196, 196, 196);
}

::-webkit-input-placeholder {
    color: black;
}

#filter {
    margin-left: 40%;
    margin-bottom: 10px;
}

#loader {
    text-align: center;
}
</style>