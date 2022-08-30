<template>
    <div id="page">
        <router-link to="/album">
            <div class="container-fluid" v-if="albums">
                <div v-for="album in albums" :key="album" id="box">
                    <div class="row card">
                        <p>{{  album.album  }}</p>
                        <img :src="album.image" id="img">
                        <p>{{ album.artist }}</p>
                        <p>{{ album.year }}</p>
                        <p>R{{ album.price }}</p>
                    </div>
                </div>
            </div>
            <div v-else>
                Why are you not loading
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('getAlbums')
    },
    computed: {
        albums() {
            return this.$store.state.albums
        }
    }
}
</script>

<style scoped>
#page {
    background-color: #9C9EFE;
    width: 100%;
    height: 230vh;
    font-family: Rockwell;
}

.container-fluid {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

#box {
    margin-top: 5vh;
    margin-left: 3vw;
}

.card {
    text-align: center;
    width: 25vw;
    height: 52vh;
    background-color: #A66CFF;
}

a{
    color: #B1E1FF;
    text-decoration: none;
}

#img {
    width: 25vw;
    height: 30vh;
}
</style>

<!-- #A66CFF
#9C9EFE
#AFB4FF
#B1E1FF -->