<template>
    <div id="page">
        <h1>All Items</h1>
        <!-- <router-link> -->
        <div v-for="album in albums" :key="album" class="container">
            <div class="row">
                <div class="col">
                    <h2>{{ album.album }}</h2>
                </div>
                <div class="col">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#update'+album.id">
                        Launch demo modal
                    </button>

                    <button type="button" @click="'delete', (album.id)">delete</button>
                </div>
            </div>
        </div>
        <!-- </router-link> -->
    </div>

    <!-- MODAL STUFF -->


    <!-- Modal -->
    <div v-for="album in albums" :key="album">
        <div class="modal fade" :id="'update'+album.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ album.album }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" v-model="album.musictype">
                        <input type="text" v-model="album.album">
                        <input type="text" v-model="album.image">
                        <input type="text" v-model="album.description">
                        <input type="text" v-model="album.artist">
                        <input type="text" v-model="album.year">
                        <input type="text" v-model="album.price">
                        <input type="text" v-model="album.creatorID">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="this.$store.dispatch('updateAlbum', album)">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    mounted() {
        this.$store.dispatch("getAlbums")
    },
    computed: {
        albums() {
            return this.$store.state.albums;
        }
    },
    methods: {
        delete(id) {
            this.$store.dispatch('deleteAlbum', id)
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
</style>