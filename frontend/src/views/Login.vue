<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <SignIn v-if="isSignIn" @update:isSignIn="isSignIn = $event"/>
      <SignUp v-else @update:isSignIn="isSignIn = $event"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SignIn  from '../components/sign-in.vue';
  import SignUp  from '../components/sign-up.vue';

  export default defineComponent({
    name: 'Login',
    data() {
      return{
        isSignIn: true,
      }
    },
    components: {
      SignIn,
      SignUp
    },
  });
</script>

<style scoped>
  @import "../assets/css/login_form.css";
</style>
