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
            },
            toggleModal() {
                const modal = document.querySelector('#modal');
                const fade = document.querySelector('#fadeBackground');

                [modal, fade].forEach((element) => {
                        element.classList.toggle('hide');
                });

            },
            getDataById(index) {
                const modalInputTitle = document.querySelector('#modalInputTitle');
                const modalInputSubtitle = document.querySelector('#modalInputSubtitle');
                const modalMessageTextarea = document.querySelector('#modalMessageTextarea');

                const postIndex = this.posts.find(i => i._id == index)

                modalInputTitle.value = postIndex.title;
                modalInputSubtitle.value = postIndex.subtitle;
                modalMessageTextarea.value = postIndex.message;
            },
            async salvarEdit(index) {
                const modalInputTitle = document.querySelector('#modalInputTitle').value;
                const modalInputSubtitle = document.querySelector('#modalInputSubtitle').value;
                const modalMessageTextarea = document.querySelector('#modalMessageTextarea').value;

                const body = {
                    "title": modalInputTitle,
                    "subtitle": modalInputSubtitle,
                    "message": modalMessageTextarea
                }

                try {
                    fetch(`http://localhost:5000/${index}`, {
                        method: 'PATCH',
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(body)
                    })
                    .then(e => console.log(e))

                    alert('A postagem foi editada com sucesso!');
                } catch(err) {
                    console.log({editItemErr: err});
                }
            },
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
                    <button id="btnAbrirModal" @click="toggleModal(); getDataById(post._id)" class="btnEditar">Editar</button>
                    <div id="fadeBackground" @click="toggleModal()" class="hide"></div>
                    <div id="modal" class="hide" v-for="(post, index) of this.posts" :key="index">
                        <div class="modalHeaderContainer">
                            <h1>{{post.title}}</h1>
                            <button id="btnFecharModal" @click="toggleModal()">X</button>
                        </div>
                        <form id="corpoModal" @submit="salvarEdit(post._id);">
                            <label for="modalInputTitle">Editar título</label>
                            <input type="text" name="modalInputTitle" id="modalInputTitle">
                            <label for="modalInputSubtitle">Editar subtitulo</label>
                            <input type="text" name="modalInputSubtitle" id="modalInputSubtitle">
                            <label for="modalMessageTextarea">Editar conteúdo da postagem</label>
                            <textarea id="modalMessageTextarea" name="modalMessageTextarea" cols="30" rows="10"></textarea>
                            <div class="btnSubmitContainer">
                                <button class="btnEditar">Salvar edições</button>
                            </div>
                        </form>
                    </div>
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
    #fadeBackground {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 5;
    }
    #modal {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        max-width: 90%;
        background-color: #fff;
        padding: 1.2rem;
        border-radius: 0.5rem;
        z-index: 10;
    }
    #fadeBackground,
    #modal {
        transition: 0.5s;
        opacity: 1;
        pointer-events: all;
    }
    .modalHeaderContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
    }
    #btnFecharModal {
        background-color: rgba(0, 0, 0, 0.351);
        padding: 8px 12px;
        border-radius: 50%;
        border: 0;
        cursor: pointer;
        font-weight: 600;
        position: absolute;
        right: -20px;
        top: -20px;
        color: #fff;
    }
    #btnFecharModal:hover {
        background-color: #fff;
        color: #000;
    }
    #modal.hide,
    #fadeBackground.hide {
        opacity: 0;
        pointer-events: none;
    }
    #modal.hide {
        top: 0;
    }
    #corpoModal input[type=text], textarea {
        width: 100%;
        max-width: 602px;
        outline: none;
    }
    #corpoModal textarea {
        overflow: auto;
        max-height: 263px;
    }
    #corpoModal label:nth-of-type(3) {
        margin: 30px 0 0 0;
    }
    #corpoModal label {
        font-size: 2rem;
        display: block;
    }
    #corpoModal .btnSubmitContainer {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    #corpoModal .btnSubmitContainer button {
        width: 40%;
        height: 40px;
        margin: 20px 0 0 0;
        cursor: pointer;
        background-color: rgba(29, 25, 25, 0.13);
        border: 0;
    }
    #corpoModal .btnSubmitContainer button:hover {
        background-color: rgb(29, 25, 25);
        color: #fff;
    }
</style>
