<template>
  <div>
    <div class="flex flex-col">
      <button type="button" aria-label="Dark mode" class="switch-toggle active:scale-95 h-11 w-11 rounded-[50%]"
        :class="{ 'switch-toggle-checked': isDarkTheme }" id="button" title="Dark Mode" alt="button" role="button" @click="toggleTheme">
        <i class="bi bi-moon text-2xl sm:text3xl" role="banner"></i>
      </button> 
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() { return { userTheme: "light-theme", state: "off" } },
  computed: { isDarkTheme() { return this.userTheme === "dark-theme"; } },
  mounted() { this.initializeTheme(); },
  
  methods: {
    toggleTheme() {
      this.userTheme = this.isDarkTheme ? "light-theme" : "dark-theme";
      this.setTheme(this.userTheme);
      // update dark mode state for accessibilty
      if(this.userTheme === "light-theme") this.state = "off";
      else this.state = "on";
    },
    initializeTheme() {
      const storedTheme = this.getStoredTheme();
      const mediaPreference = this.getMediaPreference();
      this.userTheme = storedTheme || mediaPreference;
      this.setTheme(this.userTheme);
    },
    getStoredTheme() { return localStorage.getItem("user-theme"); },
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      document.documentElement.className = theme;
    },
    getMediaPreference() {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      return mediaQuery.matches ? "dark-theme" : "light-theme";
    }
  }
};
</script>