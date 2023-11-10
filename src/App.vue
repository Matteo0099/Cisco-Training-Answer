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
  <div class="btn-dark w-fit my-0 mr-3 mt-3 z-[9999] ml-auto lg:mt-4 lg:min-w-[116px] lg:top-[90px] lg:fixed lg:right-3 xl:right-5">
    <btnDark data-aos="zoom-in" data-aos-duration="375" data-aos-delay="125" type="button" role="button" />
  </div>
  <!-- MINI DISCLAIMER -->
  <DialogFixed class="hidden lg:block z-[9999] lg:fixed lg:top-[184px] lg:right-3 xl:right-5" />
  <!-- POP UP WITH TRANSLATE CHOICE -->
  <div v-if="showPopup" ref="popUp"
    class="pop-up font-sans w-full max-w-[135px] xl:max-w-[145px] btn-dark absolute top-2 left-4 mr-auto lg:mr-0 lg:mt-0 z-[9999]
          lg:top-[265px] lg:fixed lg:right-3 lg:left-auto xl:right-5 flex flex-col justify-center items-center">
    <span class="font-bold text-base">Google translate?</span>
    <div class="flex justify-center popUpbtn items-center mt-2 gap-3 w-full max-w-[125px] text-base">
      <button @click="closePopup()"
        class="rounded-md border border-gray-200 bg-neutral-50 hover:bg-neutral-200 transition-all px-3 py-2 w-full text-neutral-900">
        NO
      </button>
      <button ref="yesbtn"
        class="rounded-md border border-gray-200 bg-neutral-50 hover:bg-neutral-200 transition-all px-3 py-2 w-full text-neutral-900">
        SI/YES
      </button>
    </div>
  </div>

  <!-- ALL THE CONTENT -->
  <div class="w-full relative top-0 mt-4" data-aos="fade-down" data-aos-anchor-placement="bottom" data-aos-duration="375"
    data-aos-dealy="0">
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
  data() {
    return {
      showPopup: true
    };
  },
  methods: {
    googleTranslateElementInit() { window.google.translate.TranslateElement({ pageLanguage: "en" }, "google_translate_element"); },
    closePopup() { this.showPopup = false; }
  },
  mounted() {
    let siteTitle = '';
    window.addEventListener('blur', () => { siteTitle = document.title; document.title = 'Come back! :c'; });
    window.addEventListener('focus', () => { document.title = siteTitle; });
    // handle click pop up, "yes" (for user, translation or not)
    const elements = document.querySelectorAll('#google_translate_element');
    this.$refs.yesbtn.addEventListener('click', () => {
      elements.forEach((element) => {
        element.style.display = 'block'
      })
      this.$refs.popUp.style.display = 'none';
    })
  }
}
</script>

<style lang="css">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css");
@media screen and (max-width:1200px){.goog-te-gadget span,.goog-te-gadget span a{display:none!important;opacity:0;visibility:hidden}}@media screen and (max-width:1023px){#google_translate_element{display:none;position:absolute!important;top:55px!important;right:2px!important;margin-top:1.6rem;min-width:90px!important;max-width:130px!important;width:100%!important;height:40px;z-index:9999}}#google_translate_element{display:none;position:fixed;top:240px;right:5px;margin-top:1.6rem;min-width:140px;width:150px;height:40px;z-index:9999}.goog-te-gadget{font-size:4px!important}.goog-te-gadget .goog-te-combo{margin:0!important;padding:2px!important}.skiptranslate iframe{display:none!important}.skiptranslate select{padding:.25rem .75rem!important;border-radius:8px!important}.dark-theme,.light-theme,html{transition:250ms!important}.light-theme,.light-theme>*{background-color:#fefefe!important;color:#202020!important}.dark-theme,.dark-theme>*{background-color:#202020!important;color:#fefefe!important}.popUpbtn button:nth-child(2){animation:1.5s cubic-bezier(.2,.6,.5,.1) infinite pulse;animation-play-state:running}.popUpbtn button:nth-child(2):hover{animation:none}@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(204,169,44,0)}100%{-webkit-box-shadow:0 0 0 0 rgba(204,169,44,0)}}@keyframes pulse{0%{-moz-box-shadow:0 0 0 0 rgba(204,169,44,.4);box-shadow:0 0 0 0 rgba(204,169,44,.4)}70%{-moz-box-shadow:0 0 0 10px rgba(204,169,44,0);box-shadow:0 0 0 10px rgba(204,169,44,0)} 100%{-moz-box-shadow:0 0 0 0 rgba(204,169,44,0);box-shadow:0 0 0 0 rgba(204,169,44,0)}}
</style>