<script setup>
/**routerlink */
import { RouterView } from 'vue-router';
import Navbar from './components/nav/Navbar.vue';
</script>

<template>
  <div class="w-full h-full">
    <main
      class="container h-screen min-h-[100dvh] font-sans flex flex-col justify-center items-center mx-auto max-w-2xl rounded-xl">
      <!-- <Navbar></Navbar> -->
      <Navbar></Navbar> <!-- pagine renderizzate ↓ -->
      <div class="pages container mx-auto mt-16 max-w-3xl flex flex-col 
        text-left justify-center items-center min-h-fit">
        <!-- for content of the page -->
        <router-view v-slot="{ Component, route }">
          <div :key="route.name" class="container mx-auto max-w-full overflow-x-hidden flex flex-col bg-white">
            <component :is="Component"></component>
          </div>
        </router-view>
      </div>
    </main>
  </div>
</template>

<style lang="css">
/* icons */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");

.fade-enter-active,
.fade-leave-active {
  transition: all 275ms ease;
  -webkit-transition: all 275ms ease;
  -moz-transition: all 275ms ease;
  -o-transition: all 275ms ease;
  -ms-transition: all 275ms ease;
  opacity: 1;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0
}
</style>