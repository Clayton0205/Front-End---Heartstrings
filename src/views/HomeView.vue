<template>
    <div id="page">
        <div class="container-fluid">
            <div class="row">
                <div id="header">
                    <img src="../assets/tumblr_mw1l2sYQs81svwlszo1_500.webp" id="img">
                    <h1 id="h1">Heartstrings</h1>
                    <h3>We advise that you login first</h3>
                    <router-link to="/login"><button type="button">Login</button></router-link>
                    <h3>and if you don't have one then you can register here</h3>
                    <router-link to="/register"><button type="button">Register</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
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
    height: 100vh;
    color: #FFEBC1;
}

#header {
    margin-left: 35%;
    margin-top: 9px;
    width: 500px;
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

button {
    border: none;
    border-radius: 5px;
    width: 100px;
    font-family: Rockwell;
    background-color: #FFEBC1;
    color: #8E3200;
}

button:hover {
  color: #FFEBC1;
  background-color: #8E3200;
}

</style>
