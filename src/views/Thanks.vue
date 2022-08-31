<template>
    <div id="page">
        <div class="container-fluid">
            <div class="row"><h1>Item has been added to Your Cart</h1></div>
            <div class="row">
                <div class="col"><router-link to="/albums"><button type="button">Back to Albums</button></router-link></div>
                <div class="col"><router-link to="/cart"><button type="button">Go to your Cart</button></router-link></div>
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
    width: 100%;
    height: 115vh;
    font-family: Rockwell;
    color: #B1E1FF;
}

.container-fluid{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>