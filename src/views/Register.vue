<template>
    <div id="page">
        <div class="container">
            <div class="row">
                <h1 id="heading">Don't have an Account!? Please Register here!!</h1>
            </div>
            <br>
            <div class="row card">
                <label for="Fullname" class="textincard">Fullname</label>
                <input type="text" class="textincard">
            </div>
            <div class="row card">
                <label for="Email" class="textincard">Email</label>
                <input type="text" class="textincard">
            </div>
            <div class="row card">
                <label for="Password" class="textincard">Password</label>
                <input type="text" class="textincard">
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
    background-color: #9C9EFE;
    color: #B1E1FF;
    width: 100%;
    height: 93vh;
    font-family: Rockwell;
    text-align: center;
    display: flex;
    justify-content: center;
}

#heading {
    text-decoration: underline;
}

.row {
    margin: auto;
}

.card {
    width: 50vw;
}

.textincard {
    font-size: 2vw;
    margin: auto;
}
</style>