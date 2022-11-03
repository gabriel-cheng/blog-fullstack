<script>
    export default {
        data() {
            return {
                postagens: []
            }
        },
        mounted() {
            this.getAllPosts();
        },
        methods: {
            async getAllPosts() {
                const response = await fetch('http://localhost:5000')
                .then(e => e.json());

                for(let i of response) {
                    this.postagens.push(i);
                    this.postagens.reverse();
                }
            }
        }
    }
</script>

<template>
    <main id="postsContainer">
        <div class="postagensContent">
            <div class="content" v-for="post of this.postagens" :key="post.id">
                <div class="titlesContainer">
                    <h1 class="title">{{post.title}}</h1>
                    <h2 class="subtitle">{{post.subtitle}}</h2>
                </div>
                <div class="messageContainer">
                    <p class="message">{{post.message}}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    #postsContainer {
        width: 100%;
        height: 100vh;
        padding: 90px 0 0 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .title {
        font-size: 3.6rem;
        margin: 20px 0 0 0;
    }
    .subtitle {
        font-size: 2rem;
    }
    .message {
        font-size: 1.6rem;
        text-indent: 5ch;
    }
</style>
