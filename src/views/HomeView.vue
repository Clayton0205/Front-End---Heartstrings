<template>
    <div id="page">
        <div id="header">
            <h1 id="h1">Heartstrings</h1>
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    components: { Footer }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

html,
body {
    background-color: #9C9EFE;
}

#page {
    background-color: #9C9EFE;
    width: 100%;
    height: 93vh;
    font-family: Rockwell;
}

#header {
    padding-top: 30vh;
    display: flex;
    justify-content: center;
}

#placeholder {
    background-color: #AFB4FF;
    width: 100vh;
}

h1 {
    color: #B1E1FF;
    font-size: 5vw;
}
</style>

<!-- #A66CFF
#9C9EFE
#AFB4FF
#B1E1FF -->