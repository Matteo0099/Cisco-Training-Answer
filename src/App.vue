<script setup>
/**routerlink */
import { RouterView } from 'vue-router';
import Navbar from './components/nav/Navbar.vue';
import Footer from './components/Footer.vue';
import btnDark from './components/btn-dark.vue';
</script>

<template>
  <div class="w-full max-w-full h-[100vh] font-sans min-h-full relative top-0" data-aos="fade-down"
    data-aos-anchor-placement="bottom" data-aos-duration="375" data-aos-dealy="0">
    <div class="btn-dark fixed right-4 top-2 md:top-8 md:right-16">
      <btnDark data-aos="zoom-in" data-aos-duration="375" data-aos-delay="125" type="button" role="button" />
      <!-- <translate /> --><!-- google translate (to implement => api google.translate.it)-->
      <div id="google_translate_element"></div>
    </div>
    <main class="container relative min-h-screen font-sans grid px-4 sm:p-0 sm:mx-auto max-w-2xl rounded-xl">
      <!-- <Navbar></Navbar> -->
      <Navbar data-aos="zoom-out" data-aos-duration="400" data-aos-delay="150"></Navbar> <!-- pagine renderizzate ↓ -->
      <div class="pages container mx-auto max-w-3xl text-left min-h-fit">
        <!-- for content of the page -->
        <router-view v-slot="{ Component, route }">
          <div :key="route.name" data-aos="fade-in" data-aos-duration="600" data-aos-easing="ease" data-aos-dealy="100"
            class="container mx-auto max-w-full min-h-full overflow-x-hidden">
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
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

#google_translate_element {
  position: absolute !important;
}

@media screen and (max-width: 999px) {

  .goog-te-gadget span,
  .goog-te-gadget span a {
    display: none !important;
  }
}

@media screen and (min-width: 999px) {
  #google_translate_element {
    top: 4.5rem !important;
    right: 0.75rem !important;
    margin-top: 1rem !important;
    left: auto !important;
  }
}

#google_translate_element {
  left: 0.75rem;
  top: 1.25rem;
}

.goog-te-gadget {
  font-size: 4px !important;
}

.goog-te-gadget .goog-te-combo {
  margin: 0 !important;
  padding: 2px !important;
}

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


<script>
export default {
  data() {
    return
  },
  methods: {
    googleTranslateElementInit() {
      window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    },
  },
  mounted() {
    let siteTitle = '';
    window.addEventListener('blur', () => {
      siteTitle = document.title;
      document.title = 'Come back! :c';
    });
    window.addEventListener('focus', () => {
      document.title = siteTitle;
    });
  },
}
</script>