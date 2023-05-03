<template>
  <div>
    <button class="switch-toggle active:scale-95 h-11 w-11 rounded-[50%]" :class="{ 'switch-toggle-checked': isDarkTheme }" @click="toggleTheme">
      <i class="bi bi-moon text-2xl sm:text3xl"></i>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      userTheme: "light-theme",
    };
  },
  computed: {
    isDarkTheme() {
      return this.userTheme === "dark-theme";
    },
  },
  mounted() {
    this.initializeTheme();
  },
  methods: {
    toggleTheme() {
      this.userTheme = this.isDarkTheme ? "light-theme" : "dark-theme";
      this.setTheme(this.userTheme);
    },
    initializeTheme() {
      const storedTheme = this.getStoredTheme();
      const mediaPreference = this.getMediaPreference();
      this.userTheme = storedTheme || mediaPreference;
      this.setTheme(this.userTheme);
    },
    getStoredTheme() {
      return localStorage.getItem("user-theme");
    },
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      document.documentElement.className = theme;
    },
    getMediaPreference() {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      return mediaQuery.matches ? "dark-theme" : "light-theme";
    },
  },
};
</script>