<template>
  <div class="w-full mt-[17.5%] 2xl:mt-[25%] h-fit">
    <backToHome class="cursor-pointer"></backToHome>
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto">
      Cisco <span class="m-0 p-0 underline">Answers</span> cap 1-14
    </h1>
    <select v-model="selectedOption" @change="navigate" class="block cursor-pointer text-neutral-900 w-full mt-2 py-2 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0">
      <option disabled value="">Select an option</option>
      <option value="/cap1">cap1</option>
      <option value="/cap2">cap2</option>
      <option value="/cap3">cap3</option>
      <option value="/cap4">cap4</option>
      <option value="/cap5">cap5</option>
      <option value="/cap6">cap6</option>
      <option value="/cap7">cap7</option>
      <option value="/cap8">cap8</option>
      <option value="/cap9">cap9</option>
      <option value="/cap10">cap10</option>
      <option value="/cap11">cap11</option>
      <option value="/cap12">cap12</option>
      <option value="/cap13">cap13</option>
      <option value="/cap14">cap14</option>
    </select>
    <h1 class="font-bold text-xl sm:text-2xl mt-8 mb-4 mx-auto">Cisco <span class="m-0 p-0 underline">Test</span> cap 1-14</h1>
    <select v-model="selectedOption" @change="navigate" class="block text-neutral-900 cursor-pointer w-full mt-2 py-2 mx-auto rounded-md shadow-sm bg-gray-100 
          border-transparent focus:border-gray-400 focus:bg-white focus:ring-0">
      <option disabled value="">Select an option</option>
      <option value="/cap1Test">Test cap1</option>
      <option value="/cap2Test">Test cap2</option>
      <option value="/cap3Test">Test cap3</option>
      <option value="/cap4Test">Test cap4</option>
      <option value="/cap5Test">Test cap5</option>
      <option value="/cap6Test">Test cap6</option>
      <option value="/cap7Test">Test cap7</option>
      <option value="/cap8Test">Test cap8</option>
      <option value="/cap9Test">Test cap9</option>
      <option value="/cap10Test">Test cap10</option>
      <option value="/cap11Test">Test cap11</option>
      <option value="/cap12Test">Test cap12</option>
      <option value="/cap13Test">Test cap13</option>
      <option value="/cap14Test">Test cap14</option>
    </select>
  </div>
</template>

<script setup>
import backToHome from '../return.vue'
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