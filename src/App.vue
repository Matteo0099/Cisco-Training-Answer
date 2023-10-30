<script setup>
/**routerlink */
import { RouterView } from 'vue-router';
import Navbar from './components/nav/Navbar.vue';
import Footer from './components/Footer.vue';
import btnDark from './components/btn-dark.vue';
import DialogFixed from './components/DialogFixed.vue';
</script>

<template>
  <!-- 2 FIXED ELEMENTS -->
  <div class="btn-dark w-fit mt-4 z-[9999] ml-auto lg:mt-0 lg:top-[90px] lg:fixed lg:right-2 xl:right-5">
    <btnDark data-aos="zoom-in" data-aos-duration="375" data-aos-delay="125" type="button" role="button" />
    <!-- google translate (to implement => api google.translate.it)-->
    <div id="google_translate_element" class="w-max" role="link" aria-label="google_translate_element"></div>
  </div>
  <DialogFixed class="hidden lg:block z-[9999] lg:fixed lg:top-[280px] lg:right-2 xl:right-5" />
  <!-- ALL THE CONTENT -->
  <div class="w-full relative top-0" data-aos="fade-down"
    data-aos-anchor-placement="bottom" data-aos-duration="375" data-aos-dealy="0">
      <main class="container relative min-h-screen font-primary grid px-4 sm:p-0 sm:mx-auto max-w-2xl rounded-xl">
        <!-- Main navigation -->
        <Navbar data-aos="zoom-out" data-aos-duration="400" data-aos-delay="150"></Navbar> <!-- pagine renderizzate ↓ -->
        <!-- main content -->
        <div class="pages container mx-auto max-w-3xl text-left min-h-fit">
          <!-- for content of the page -->
          <router-view :key="$route.fullPath" v-slot="{ Component, route }">
            <div :key="route.name" data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease" data-aos-dealy="100"
              class="container mx-auto max-w-full min-h-full overflow-x-hidden">
              <keep-alive>
                <component :is="Component"></component>
              </keep-alive>
            </div>
          </router-view>
        </div>
        <Footer class="relative h-fit" />
      </main>
  </div>
</template>

<script>
export default {
  methods: {
    googleTranslateElementInit() {
      window.google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element");
    },
  },
  mounted() {
    let siteTitle = '';
    window.addEventListener('blur', () => { siteTitle = document.title; document.title = 'Come back! :c'; });
    window.addEventListener('focus', () => { document.title = siteTitle; });
  }
}
</script>

<style lang="css">@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css);@media screen and (max-width:1200px){.goog-te-gadget span,.goog-te-gadget span a{display:none!important;opacity:0;visibility:hidden}}#google_translate_element{left:.75rem;margin-top:1.6rem;min-width:140px}.goog-te-gadget{font-size:4px!important}.goog-te-gadget .goog-te-combo{margin:0!important;padding:2px!important}.skiptranslate iframe{display:none!important}.skiptranslate select{padding:.25rem .75rem!important;border-radius:8px!important}.dark-theme,.light-theme,html{transition:250ms!important}.light-theme,.light-theme>*{background-color:#fefefe!important;color:#202020!important}.dark-theme,.dark-theme>*{background-color:#202020!important;color:#fefefe!important}</style>