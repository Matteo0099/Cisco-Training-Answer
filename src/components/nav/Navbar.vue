<script setup>
import backToHome from '../return.vue'
import navFoot from '../FooterNav.vue'
</script>

<template>
  <div class="w-full mt-[17.5%] 2xl:mt-[25%] h-fit">
    <!-- custom components -->
    <navFoot />
    <backToHome class="cursor-pointer"></backToHome>

    <!-- answers ITE -->
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto">
      Cisco <span class="m-0 p-0 underline">Answers</span> chapter 1-14
    </h1>
    <select v-model="selected" @change="changeRoute($event)" class="dropdown flex items-center justify-center cursor-pointer text-neutral-900 w-full mt-2 py-4 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select an option</option>
      <option 
        v-for="(list, number) in answers" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (answers) chapter of {{ number + 1 }} 
      </option>
    </select>

    <!-- answers CCNA -->
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto">
      Cisco <span class="m-0 p-0 underline">Answers</span> CCNA v.7.0
    </h1>
    <select v-model="selected" @change="changeRoute($event)" class="dropdown flex items-center justify-center cursor-pointer text-neutral-900 w-full mt-2 py-4 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select an option</option>
      <option 
        v-for="(list, number) in answersCCNA" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (answersCCNA) chapter of {{ number + 1 }} 
      </option>
    </select>
    
    <!-- test ITE -->
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto" id="top">Cisco <span class="m-0 p-0 underline">Test</span>
      chapter 1-14</h1>
    <select v-model="selected" v-on:change="changeRoute($event)" class="dropdown flex items-center justify-center cursor-pointer text-neutral-900 w-full mt-2 py-4 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0 disabled:bg-blue-gray-50">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select an option</option>
      <option 
        v-for="(list, number) in ite" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (ITE) chapter of {{ number + 1 }} 
      </option>
    </select>

    <!-- test CCNA -->
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto">Cisco <span class="m-0 p-0 underline">CCNA</span> 11
      MODULES <strong class="text-red-500 pl-1">&#40;!ACTIVE NOW!&#41;</strong></h1>
    <select v-model="selected" @change="changeRoute($event)" class="dropdown flex items-center justify-center cursor-pointer text-neutral-900 w-full mt-2 py-4 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select an option</option>
      <option 
        v-for="(list, number) in ccna" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (CCNA) chapter of {{ number + 1 }} 
      </option>
    </select>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      selected: '',
      answers: [],
      answersCCNA: [],
      ite: [],
      ccna: [],
    };
  },
  created() {
    this.initializeData();
  },
  methods: {
    initializeData() {
      this.answers = this.generateData('/Answers/ITE/', 14);
      this.answersCCNA = this.generateData('/Answers/CCNA/', 11);
      this.ite = this.generateData('/test/ITE/', 14);
      this.ccna = this.generateData('/test/CCNA/', 11);
    },
    generateData(basePath, count) {
      return Array.from({ length: count }, (_, i) => ({
        text: `${basePath}${i + 1}`,
        number: i + 1,
      }));
    },
    changeRoute(e) {
      this.$router.push('' + e.target.value);
    },
  },
};
</script>

<style scoped>
select, option, .dropdown {
  overflow-y: scroll !important;
  scroll-timeline-axis: vertical !important;
  overflow: scroll !important;
  scrollbar-width: thin !important;
}
option::first-letter { text-transform: uppercase !important }
</style>