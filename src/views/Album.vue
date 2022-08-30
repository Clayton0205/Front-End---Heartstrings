<template>
    <div>
        <div v-if="album">
            <p>{{ product[0].album }}</p>
        </div>
        <div v-else>
            no Load
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    mounted() {
        this.$store.dispatch("getAlbum", this.id);
    },
    computed: {
        album() {
            return this.$store.state.album;
        }
    }
}
</script>

<style scoped>
</style>