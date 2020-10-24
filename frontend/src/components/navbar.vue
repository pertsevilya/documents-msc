<template>
  <nav class="navbar navbar-dark navbar-expand-md main-nav">
    <div class="container-fluid">
        <router-link class="navbar-brand logo" to="/main/statistic">
          <i class="fas fa-landmark mr-3"></i>
          <strong>Docs </strong>Cloud
        </router-link>
        <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
        <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div
            class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav ml-auto links">
                <li class="nav-item" role="presentation">
                  <router-link class="nav-link nav-text ml-2 mr-2" to="/main/statistic">
                    <i class="far fa-chart-bar"></i>
                    Статистика
                  </router-link>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link class="nav-link nav-text ml-2 mr-2" to="/main/teach">
                    <i class="fas fa-brain"></i>
                    Обучение
                  </router-link>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link class="nav-link nav-text ml-2 mr-2" to="/main/docs">
                    <i class="fas fa-file-upload"></i>
                    Проверить документы
                  </router-link>
                </li>
                <li class="nav-item" role="presentation">
                  <router-link class="nav-link nav-text ml-2 mr-2" to="/main/history">
                    <i class="fas fa-history"></i>
                    История
                  </router-link>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Navbar'
  });
</script>

<style scoped>
  @import "../assets/css/navbar.css";
</style>
