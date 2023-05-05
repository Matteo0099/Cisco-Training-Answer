<script setup>
/**routerlink */
import { RouterView } from 'vue-router';
import Navbar from './components/nav/Navbar.vue';
import Footer from './components/Footer.vue';
import btnDark from './components/btn-dark.vue';
</script>

<template>
  <div class="w-full max-w-full min-h-full top-0">
    <div class="btn-dark absolute right-4 top-2 md:top-8 md:right-16">
      <btnDark />
      <!-- google translate -->
      <translate />
    </div>
    <main class="container min-h-screen font-sans grid px-4 sm:p-0 sm:mx-auto max-w-2xl rounded-xl">
      <!-- <Navbar></Navbar> -->
      <Navbar></Navbar> <!-- pagine renderizzate ↓ -->
      <div class="pages container mx-auto max-w-3xl text-left min-h-fit">
        <!-- for content of the page -->
        <router-view v-slot="{ Component, route }">
          <div :key="route.name" class="container mx-auto max-w-full min-h-full overflow-x-hidden">
            <component :is="Component"></component>
          </div>
        </router-view>
      </div>
      <Footer class="relative h-fit"></Footer>
    </main>
  </div>
</template>

<style lang="css">
/* icons */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

.skiptranslate iframe {
  display: none !important;
}

.skiptranslate select {
  padding: .25rem .75rem !important;
  border-radius: 8px !important;
}

.light-theme,
.dark-theme,
html {
  transition: all 250ms ease !important
}

.light-theme,
.light-theme>* {
  background-color: #fefefe !important;
  color: #202020 !important;
}

.dark-theme,
.dark-theme>* {
  background-color: #202020 !important;
  color: #fefefe !important;
}
</style>