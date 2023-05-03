<script setup>
/**routerlink */
import { RouterView } from 'vue-router';
import Navbar from './components/nav/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="w-full min-h-full">
    <div class="btn-dark absolute right-6 top-6 md:right-8">
      <button><i class="bi bi-moon text-2xl sm:text3xl"></i></button>
    </div>
    <main class="container min-h-screen font-sans grid mx-auto max-w-2xl rounded-xl">
      <!-- <Navbar></Navbar> -->
      <Navbar></Navbar> <!-- pagine renderizzate ↓ -->
      <div class="pages container mx-auto max-w-3xl text-left min-h-fit">
        <!-- for content of the page -->
        <router-view v-slot="{ Component, route }">
          <div :key="route.name" class="container mx-auto max-w-full min-h-full overflow-x-hidden bg-white">
            <component :is="Component"></component>
          </div>
        </router-view>
      </div>
      <Footer class="relative"></Footer>
    </main>
  </div>
</template>

<style lang="css">
/* icons */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");
</style>