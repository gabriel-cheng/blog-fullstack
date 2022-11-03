<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            this.getAllPosts();
        },
        methods: {
            async getAllPosts() {
                const response = await fetch('http://localhost:5000')
                .then(e => e.json())
                .catch(err => console.log({requestError: err}));

                for(let i of response) {
                    this.posts.push(i);
                    this.posts.reverse();
                }
            },
            editar(index) {
                const postIndex = this.posts.find(i => i._id == index)

            },
            async del(index) {
                const postIndex = this.posts.find(i => i._id == index)

                if(confirm('Deseja exluir a postagem?') == true) {
                    fetch(`http://localhost:5000/${postIndex._id}`, {
                    method: 'DELETE'
                    })
                    .then(() => {
                        alert('Postagem excluida com sucesso!')
                        location.reload();
                    })
                    .catch(err => console.log({deletePostError: err}));
                } else {
                    alert('A postagem não foi excluida.');
                }
            }
        }
    }
</script>

<template>
    <main id="admContainer">
        <div class="painel">
            <div class="post" v-for="(post, index) of this.posts" :key="index">
                <div class="titleContainer">
                    <h1 class="title">{{post.title}}</h1>
                    <h2 class="subtitle">{{post.subtitle}}</h2>
                </div>
                <div class="postContent">
                    <p class="message">{{post.message}}</p>
                </div>
                <div class="painelFuncoes">
                    <button @click="editar(post._id);" class="btnEditar">Editar</button>
                    <button @click="del(post._id);" class="btnDeletar">Deletar</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    #admContainer {
        padding: 110px 0 0 0;
        display: flex;
        justify-content: center;
    }
    .painel {
        background-color: grey;
        max-width: 1200px;
        width: 100%;
        height: 550px;
        overflow: auto;
        padding: 10px;
        border-radius: 10px;
    }
    .post {
        border: 1px solid black;
        padding: 10px;
        margin: 0 0 10px 0;
    }
    .title {
        font-size: 3.9rem;
    }
    .subtitle {
        font-size: 2.9rem;
    }
    .message {
        font-size: 1.6rem;
    }
    .painelFuncoes {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .btnEditar {
        margin: 0 10px 0 0;
    }
    .btnEditar,
    .btnDeletar {
        cursor: pointer;
        padding: 3px 15px;
        border-radius: 5px;
        border: none;
        margin: 0 10px 0 0;
        background-color: rgba(29, 25, 25, 0.13);
        border: 1px solid #fff;
    }
    .btnEditar:hover,
    .btnDeletar:hover {
        background-color: rgb(29, 25, 25);
        color: #fff;
    }
</style>
