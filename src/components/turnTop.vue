<template>
  <div>
    <!-- torna su -->
    <a @click="toTop" href="#top" target="_self" class="w-full text-center">
      <button
        type="button"
        role="button"
        class="mx-auto mt-2 flex h-14 w-72 flex-row items-center justify-center rounded-lg border px-4 py-2 font-semibold hover:opacity-75 active:border-4 active:border-neutral-200"
      >
        turn top
        <i class="bi bi-arrow-up pl-1 text-lg"></i>
      </button>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return;
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
