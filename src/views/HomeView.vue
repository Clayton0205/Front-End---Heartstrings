<template>
    <div id="page">
        <div class="container-fluid">
            <div class="row">
                <div class="col" id="nav">
                    <navleft />
                </div>
                <div class="col" id="header">
                    <img src="../assets/tumblr_mw1l2sYQs81svwlszo1_500.webp" id="img">
                    <h1 id="h1">Heartstrings</h1>
                </div>
                <!-- <div class="col" id="cred">GAyer</div> -->
            </div>

        </div>
    </div>
</template>

<script>
import navleft from "../components/navleft.vue"
export default {
    components: { navleft }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#page {
    background-color: #FFEBC1;
    width: 100%;
    height: 100vh;
}

#header {
    margin-top: 5%;
    margin-right: 10%;
    width: 1000px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-family: 'Raleway', sans-serif;
    background-color: #8E3200;
    border: none;
    border-radius: 5px;
}

h1 {
    color: #FFEBC1;
    font-size: 5vw;
}

#img {
    margin: auto;
    width: 500px;
    height: 500px;
}

/* #cred {
    margin-top: 5%;
    background-color: #8E3200;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
} */

#nav{
    width: 50px;
}
</style>
