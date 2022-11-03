<script>
    export default {
        methods: {
            async sendPost(event) {
                const title = document.querySelector('#inputTitle').value;
                const subtitle = document.querySelector('#inputSubtitle').value;
                const message = document.querySelector('#informePostagem').value;

                fetch('http://localhost:5000', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        title: title,
                        subtitle: subtitle,
                        message: message
                    })
                })
                .then(alert('Sua postagem foi enviada!'))
                .catch(err => console.log({sendError: err}))
            }
        }
    }
</script>

<template>
    <main id="mainContainer">
        <div class="mainSubcontainer">
            <div class="titleContainer">
                <h1>Blog Super Maneiro</h1>
            </div>
            <form @submit="sendPost();" class="blogContent">
                <label for="inputTitle">Informe o título da postagem</label>
                <input type="text" name="inputTitle" id="inputTitle" placeholder="Infome o título da postagem">
                <label for="inputSubtitle">Informe o subtitulo</label>
                <input type="text" name="inputSubtitle" id="inputSubtitle" placeholder="Infome o subtitulo da postagem">

                <label for="informePostagem">Informe o conteúdo da postagem</label>
                <textarea name="informePostagem" id="informePostagem" placeholder="Informe o conteúdo da postagem"></textarea>

                <div class="submitContainer">
                    <input type="submit" value="Enviar postagem">
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
    #mainContainer {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 60px 0 0 0;
    }
    .mainSubcontainer {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
    }
    .titleContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 2rem;
        position: relative;
        margin: 0 0 20px 0;
    }
    .titleContainer::after {
        content: '';
        width: 100%;
        height: 1px;
        background-color: grey;
        position: absolute;
        bottom: -7px;
    }
    .blogContent {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    label {
        font-size: 1.6rem;
        margin: 10px 0 0 0;
    }
    label:nth-of-type(3) {
        margin: 20px 0 0 0;
    }
    input[type=text] {
        width: 100%;
        height: 30px;
        outline: none;
    }
    input[type=text]:nth-of-type(1) {
        font-weight: 900;
    }
    #informePostagem {
        width: 100%;
        height: 150px;
        outline: none;
    }
    .submitContainer {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    input[type=submit] {
        width: 50%;
        height: 30px;
        outline: none;
        cursor: pointer;
        margin: 20px 0 0 0;
        background-color: rgb(29, 25, 25);
        color: #fff;
        border: 0;
        border-radius: 3px;
    }
    input[type=submit]:hover {
        background-color: rgba(29, 25, 25, 0.466);
        color: #000;
    }
</style>
