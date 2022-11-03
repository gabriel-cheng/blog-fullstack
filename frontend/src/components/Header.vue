<script>

</script>

<template>
    <header id="headerContainer">
        <div class="subContainer">
            <img src="https://cdn-icons-png.flaticon.com/512/21/21601.png?w=360" alt="imagem de jornal">
            <nav class="navContainer">
                <router-link to="/postar">Criar postagem</router-link>
                <router-link to="/">Ver postagens</router-link>
            </nav>
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
    #headerContainer img {
        width: 50px;
    }
    .subContainer {
        max-width: 1800px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 30px;
    }
    .navContainer {
        max-width: 300px;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    a {
        background-color: rgba(29, 25, 25, 0.13);
        color: #000;
        font-size: 2rem;
        padding: 10px;
    }
    a:hover {
        background-color: rgb(29, 25, 25);
        color: #fff;
    }
</style>
