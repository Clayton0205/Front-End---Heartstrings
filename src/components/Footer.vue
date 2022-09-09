<template>
    <div id="footer">
        <div class="container-fluid">
            <h1> Feel Free to Contact Us</h1>
            <form action="https://formspree.io/f/myyvkljl" method="Post">
                <div class="row">
                    <input type="text" placeholder="Fullname">
                </div>
                <div class="row">
                    <input type="text" placeholder="Email">
                </div>
                <div class="row">
                    <textarea name="message" id="message"></textarea>
                </div>
                <div class="row">
                    <button type="submit">Submit</button>
                </div>
            </form>
            <p>&copy; 2022 Clayton Adonis</p>
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

#footer {
    text-align: center;
    background-color: grey;
}

a {
    text-decoration: underline;
    color: white;
    font-size: 2vw;
}

input {
    margin: auto;
    width: 500px;
}

#message {
    margin: auto;
    width: 500px;
}

button {
    margin: auto;
    width: 500px;
}
</style>