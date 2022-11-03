<script>
  import { RouterLink, RouterView } from 'vue-router';
  import Header from './components/Header.vue';
  import { defineComponent } from "vue";

  export default defineComponent({
    components: {
      Header
    },
  })

</script>

<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>

</style>
