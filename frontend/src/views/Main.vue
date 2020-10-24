<template>
  <div>
      <Navbar/>
      <router-view/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from '../components/navbar.vue';

  export default defineComponent({
    name: 'Main',

    components: {
        Navbar
    }
  });
</script>

<style scoped>
  @import "../assets/css/main.css";
</style>