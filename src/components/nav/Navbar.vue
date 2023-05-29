<template>
  <div class="w-full mt-[17.5%] 2xl:mt-[25%] h-fit">
    <navFoot></navFoot>
    <backToHome class="cursor-pointer"></backToHome>
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto">
      Cisco <span class="m-0 p-0 underline">Answers</span> chapter 1-14
    </h1>
    <select v-model="selectedOption" @change="navigate" class="dropdown flex items-center justify-center cursor-pointer text-neutral-900 w-full mt-2 py-4 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select an option</option>
      <option value="/cap1" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 1</option>
      <option value="/cap2" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 2</option>
      <option value="/cap3" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 3</option>
      <option value="/cap4" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 4</option>
      <option value="/cap5" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 5</option>
      <option value="/cap6" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 6</option>
      <option value="/cap7" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 7</option>
      <option value="/cap8" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 8</option>
      <option value="/cap9" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 9</option>
      <option value="/cap10" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 10</option>
      <option value="/cap11" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 11</option>
      <option value="/cap12" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 12</option>
      <option value="/cap13" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 13</option>
      <option value="/cap14" class="bg-neutral-100 mr-auto font-sans text-lg">chapter 14</option>
    </select>
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto" id="top">Cisco <span class="m-0 p-0 underline">Test</span>
      chapter 1-14</h1>
    <select v-model="selectedOption" @change="navigate" class="dropdown flex items-center justify-center cursor-pointer text-neutral-900 w-full mt-2 py-4 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0 disabled:bg-blue-gray-50">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select an option</option>
      <option value="/cap1Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 1</option>
      <option value="/cap2Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 2</option>
      <option value="/cap3Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 3</option>
      <option value="/cap4Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 4</option>
      <option value="/cap5Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 5</option>
      <option value="/cap6Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 6</option>
      <option value="/cap7Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 7</option>
      <option value="/cap8Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 8</option>
      <option value="/cap9Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 9</option>
      <option value="/cap10Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 10</option>
      <option value="/cap11Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 11</option>
      <option value="/cap12Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 12</option>
      <option value="/cap13Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 13</option>
      <option value="/cap14Test" class="bg-neutral-100 mr-auto font-sans text-lg">Test chapter 14</option>
    </select>
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto">Cisco <span class="m-0 p-0 underline">CCNA</span> 11
      MODULES &#40; cooming soon &#41;</h1>
    <select v-model="selectedOption" @change="navigate" class="dropdown flex items-center justify-center cursor-pointer text-neutral-900 w-full mt-2 py-4 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0">
      <option disabled value="" class="bg-neutral-50 mr-auto font-sans text-lg">Select an option</option>
      <option value="/module1-3" class="bg-neutral-100 mr-auto font-sans text-lg">module 1-3</option>
      <option value="/module4-7" class="bg-neutral-100 mr-auto font-sans text-lg">module 4-7</option>
      <option value="/module8-10" class="bg-neutral-100 mr-auto font-sans text-lg">module 8-10</option>
      <option value="/module11-13" class="bg-neutral-100 mr-auto font-sans text-lg">module 11-13</option>
      <option value="/module14-15" class="bg-neutral-100 mr-auto font-sans text-lg">module 14-15</option>
      <option value="/module16-17" class="bg-neutral-100 mr-auto font-sans text-lg">module 16-17</option>
      <option value="/module-FinalExam" class="bg-neutral-100 mr-auto font-sans text-lg">Final exam Answers</option>
    </select>
  </div>
</template>

<script setup>
import backToHome from '../return.vue'
import navFoot from '../FooterNav.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const $router = useRouter()

const selectedOption = ref('')

const navigate = () => {
  if (selectedOption.value !== '') {
    $router.push(selectedOption.value)
  }
}
</script>

<style scoped>
select,
option,
.dropdown {
  overflow-y: scroll !important;
  scroll-timeline-axis: vertical !important;
  overflow: scroll !important;
  scrollbar-width: thin !important;
}

option::first-letter {
  text-transform: uppercase !important;
}
</style>