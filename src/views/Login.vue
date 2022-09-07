<template>
    <div id="page">
        <div class="container">
            <div class="row">
                <h1 id="heading">Already have an Account!? Please Login here!!</h1>
            </div>
            <br>
            <div class="row card">
                <label for="Email" class="textincard">Email</label>
                <input type="text" v-model="email" class="textincard">
            </div>
            <div class="row card">
                <label for="Password" class="textincard">Password</label>
                <input type="password" v-model="password" class="textincard">
            </div>
            <div class="row">
                <button type="button" @click="login()" class="textincard">Login</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        email: '',
        password: ''
    }
},
methods:{
    login(){
        const user = {
            email: this.email,
            password: this.password
        }
        this.$store.dispatch('login',user)
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

button {
    width: 50vw;
}
</style>