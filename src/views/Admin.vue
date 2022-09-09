<template>
    <div id="page">
        <h1 class="title">All Items</h1>
        <div v-for="album in albums" :key="album" class="container-fluid">
            <div class="row content">
                <div class="col">
                    <h2>{{ album.album }}</h2>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        :data-bs-target="'#update'+album.id">
                        Edit
                    </button>

                    <button type="button" @click="'delete', (album.id)">delete</button>
                </div>
            </div>
        </div>
        <div class="container-fluid add card">
            <div class="row title">
                <h1>Add Album</h1>
            </div>
            <div class="row">
                <div class="col item">
                    <label for="Music Type">Music Type</label>
                    <input type="text" v-model="musictype">
                </div>
                <div class="col item">
                    <label for="Album">Album</label>
                    <input type="text" v-model="album">
                </div>
            </div>
            <div class="row">
                <div class="col item">
                    <label for="Image">Image</label>
                    <input type="text" v-model="image">
                </div>
                <div class="col item">
                    <label for="Description">Description</label>
                    <input type="text" v-model="description">
                </div>
            </div>
            <div class="row">
                <div class="col item">
                    <label for="Artist">Artist</label>
                    <input type="text" v-model="artist">
                </div>
                <div class="col item">
                    <label for="Year">Year</label>
                    <input type="text" v-model="year">
                </div>
            </div>
            <div class="row">
                <div class="col item">
                    <label for="Price">Price</label>
                    <input type="text" v-model="price">
                </div>
                <div class="col item">
                    <label for="creatorID">creatorID</label>
                    <input type="text" v-model="creatorID">
                </div>
            </div>
            <div class="row button">
                <button type="button" id="button" @click="addAlbum()">Add</button>
            </div>
        </div>
    </div>

    <!-- MODAL STUFF -->


    <!-- Modal -->
    <div v-for="album in albums" :key="album">
        <div class="modal fade" :id="'update'+album.id" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ album.album }}</h5>
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
                        <button type="button" class="btn btn-primary"
                            @click="this.$store.dispatch('updateAlbum', album)" data-bs-dismiss="modal">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            musictype: '',
            album: '',
            image: '',
            description: '',
            artist: '',
            year: '',
            price: '',
            creatorID: ''
        }
    },
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
        },
        addAlbum() {
            const album = {
                musictype: this.musictype,
                album: this.album,
                image: this.image,
                description: this.description,
                artist: this.artist,
                year: this.year,
                price: this.price,
                creatorID: this.creatorID
            }
            this.$store.dispatch('addAlbum', album)
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
    background-color: #D7A86E;
    width: 100%;
    height: 93vh;
    font-family: Rockwell;
    color: #B1E1FF;
    text-align: center;
}

.content {
    margin-left: 20px;
    color: #FFEBC1;
}

.title {
    color: #FFEBC1;
    text-decoration: underline;
}

#loader {
    text-align: center;
}

.button {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

#button {
    background-color: #FFEBC1;
    color: #8E3200;
}

button {
    border: none;
    border-radius: 5px;
    background-color: #8E3200;
    color: #FFEBC1;
    width: 10vw;
    margin-left: 10px;
}

.modal {
    margin-top: 10%;
    margin-left: 35%;
}

.modal-content {
    text-align: center;
}

.add {
    margin: auto;
    margin-top: 20px;
    background-color: #8E3200;
    color: #FFEBC1;
    width: 500px;
}

.item {
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
    flex-direction: column;
}
</style>