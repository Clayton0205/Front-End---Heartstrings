<template>
    <div id="footer">
        <router-link to="/admin">This link is for those who are logged in as Admins</router-link>
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

#footer {
    text-align: center;
    background-color: #A66CFF
}

a {
    text-decoration: underline;
    color: #B1E1FF;
    font-size: 2vw;
}
</style>