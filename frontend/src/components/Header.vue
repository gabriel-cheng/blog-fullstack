<script>
    
</script>

<template>
    <header id="headerContainer">
        <div class="subContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png?w=360" alt="imagem de jornal">
            <router-link to="/">Ver postagens</router-link>
        </div>
    </header>
</template>

<style scoped>
    #headerContainer {
        display: flex;
        background-color: #fff;
        position: fixed;
        width: 100%;
        top: 0;
    }
    .subContainer {
        max-width: 1800px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 30px;
    }
    #headerContainer img {
        width: 8%;
    }
    a {
        background-color: rgba(29, 25, 25, 0.13);
        color: #000;
        font-size: 2rem;
        padding: 30px;
    }
    a:hover {
        background-color: rgb(29, 25, 25);
        color: #fff;
    }
</style>
