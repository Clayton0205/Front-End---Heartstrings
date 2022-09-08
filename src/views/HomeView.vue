<template>
    <div id="page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-4 login">
                    <h1>We advise that you login first</h1>
                    <router-link to="/login">Login</router-link>
                </div>
                <div class="col-4" id="header">
                    <img src="../assets/tumblr_mw1l2sYQs81svwlszo1_500.webp" id="img">
                    <h1 id="h1">Heartstrings</h1>
                </div>
                <div class="col-4 register">
                    <h1>Don't have an Account? Register here</h1>
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
    height: 95vh;
    color: #FFEBC1;
}

#header {
    margin-top: 5%;
    margin-right: 20px;
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

.login {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 5%;
    text-align: center;
    background-color: #8E3200;
    width: 450px;
}

.register {
    margin-top: 5%;
    text-align: center;
    background-color: #8E3200;
}
</style>
