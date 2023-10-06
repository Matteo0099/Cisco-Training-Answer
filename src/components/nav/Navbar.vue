<script setup>
import backToHome from '../return.vue'
import navFoot from '../FooterNav.vue'
</script>

<template>
  <div class="w-full mt-[17.5%] 2xl:mt-[25%] h-fit">
    <!-- custom components -->
    <navFoot />
    <backToHome class="cursor-pointer"></backToHome>
    <!-- answers -->
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
      MODULES &#40; cooming soon &#41;</h1>
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
  import { useRouter } from 'vue-router'
  const $router = useRouter()
  export default {
    data() {
      return {
        selected: '',
        answers: [
          {text: '/Answers/ITE/1', number: 1}, {text: '/Answers/ITE/2', number: 2},
          {text: '/Answers/ITE/3', number: 3}, {text: '/Answers/ITE/4', number: 4},
          {text: '/Answers/ITE/5', number: 5}, {text: '/Answers/ITE/6', number: 6},
          {text: '/Answers/ITE/7', number: 7}, {text: '/Answers/ITE/8', number: 8},
          {text: '/Answers/ITE/9', number: 9}, {text: '/Answers/ITE/10', number: 11},
          {text: '/Answers/ITE/11', number: 11}, {text: '/Answers/ITE/12', number: 12},
          {text: '/Answers/ITE/13', number: 13}, {text: '/Answers/ITE/14', number: 14}, 
        ],
        ite: [
          {text: '/test/ITE/1', number: 1}, {text: '/test/ITE/2', number: 2},
          {text: '/test/ITE/3', number: 3}, {text: '/test/ITE/4', number: 4},
          {text: '/test/ITE/5', number: 5}, {text: '/test/ITE/6', number: 6},
          {text: '/test/ITE/7', number: 7}, {text: '/test/ITE/8', number: 8},
          {text: '/test/ITE/9', number: 9}, {text: '/test/ITE/10', number: 11},
          {text: '/test/ITE/11', number: 11}, {text: '/test/ITE/12', number: 12},
          {text: '/test/ITE/13', number: 13}, {text: '/test/ITE/14', number: 14}
        ],
        ccna: [
          {text: '/test/CCNA/1', number: 1}, {text: '/test/CCNA/2', number: 2},
          {text: '/test/CCNA/3', number: 3}, {text: '/test/CCNA/4', number: 4},
          {text: '/test/CCNA/5', number: 5}, {text: '/test/CCNA/6', number: 6},
          {text: '/test/CCNA/7', number: 7}
        ]
      }
    },
    methods: {
      // works well
      changeRoute(e) { this.$router.push("" + e.target.value); },
    }
  }
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