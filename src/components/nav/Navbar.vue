<script setup>
import backToHome from '../return.vue';
import DialogNormale from '../DialogNorm.vue';
</script>

<template>
  <div class="w-full mt-[12.5%] h-fit" id="top">
    <h1 class="font-bold text-xl sm:text-2xl lg:text-3xl mt-8 mb-4 mx-auto text-center">
      CISCO ANSWERS
    </h1>
    <!-- 1 first disclaimer < 1024px -->
    <div class="block lg:hidden">
      <DialogNormale />
    </div>
    <!-- custom components -->
    <backToHome class="cursor-pointer"></backToHome>

    <!-- answers ITE -->
    <h1 class="mt-16 pb-2 text-lg sm:text-xl lg:text-2xl">
      <span class="text-red-500 font-bold">ITE</span>
      Chapter 1-14 
      <span class="m-0 p-0 underline">Answers</span> 
    </h1>
    <select aria-label="select" :aria-label="select" v-model="selected" @change="changeRoute($event)" name="ITE14answ"
      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select a chapter</option>
      <option 
        v-for="(list, number) in answers" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (ITE answers) chapter of {{ number + 1 }} 
      </option>
    </select>
    <!-- test ITE -->
    <h1 class="mt-10 pb-2 text-lg sm:text-xl lg:text-2xl">
      <span class="text-red-500 font-bold">ITE </span>
      chapter 1-14 
      <span class="m-0 p-0 underline">Test</span>
    </h1>
    <select aria-label="select" :aria-label="select" v-model="selected" v-on:change="changeRoute($event)" name="ITE14test"
      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:bg-blue-gray-50">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select a chapter</option>
      <option 
        v-for="(list, number) in ite" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (ITE test) chapter of {{ number + 1 }} 
      </option>
    </select>

    <!-- answers CCNA -->
    <h1 class="mt-10 pb-2 text-lg sm:text-xl lg:text-2xl">
      <span class="text-red-500 font-bold">CCNA </span>
      chapter 1-11 
      <span class="m-0 p-0 underline">Answers</span> 
    </h1>
    <select aria-label="select" :aria-label="select" v-model="selected" @change="changeRoute($event)" name="CCNA5answ"
      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select a chapter</option>
      <option 
        v-for="(list, number) in answersCCNA" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (answer CCNA) chapter of {{ number + 1 }} 
      </option>
    </select>
    <!-- test CCNA -->
    <h1 class="mt-10 pb-2 text-lg sm:text-xl lg:text-2xl">
      <span class="text-red-500 font-bold">CCNA </span>
      chapter 1-11 
      <span class="m-0 p-0 underline">Test</span> 
    </h1>
    <select aria-label="select" :aria-label="select" v-model="selected" @change="changeRoute($event)" name="CCNA5test"
      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select a chapter</option>
      <option 
        v-for="(list, number) in ccna" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (CCNA test) chapter of {{ number + 1 }} 
      </option>
    </select>

    <!-- drag and drop CCNA -->
    <h1 class="mt-10 pb-2 text-lg sm:text-xl lg:text-2xl">
      <span class="text-red-500 font-bold">CCNA </span>
      chapter 1-11 
      <span class="m-0 p-0 underline">Drag and Drop </span> 
      <span class="font-thin text-md">&ensp;<sup>**</sup>NEW<sup>**</sup></span>
    </h1>
    <select aria-label="select" :aria-label="select" v-model="selected" @change="changeRoute($event)" name="CCNA5dragdrop"
      class="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select a chapter</option>
      <option 
        v-for="(list, number) in ccnaDrag" 
        :value="list.text"
        v-bind:value="list.text"
        class="bg-neutral-100 mr-auto font-sans text-lg">
        (CCNA dragAndDrop) of chapter: {{ number + 1 }} 
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
      ccnaDrag: [],
    };
  },
  created() {
    this.initializeData();
  },
  methods: {
    initializeData() {
      this.answers = this.generateData('/Answers/ITE/', 14);
      this.ite = this.generateData('/test/ITE/', 14);
      this.answersCCNA = this.generateData('/Answers/CCNA/', 12);
      this.ccna = this.generateData('/test/CCNA/', 12);
      this.ccnaDrag = this.generateData('/DragAndDrop/CCNA-drag-drop/', 11);
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
option,select{overflow-y:scroll !important;scroll-timeline-axis:vertical !important;overflow:scroll !important;scrollbar-width:thin !important}option::first-letter{text-transform:uppercase !important}
</style>