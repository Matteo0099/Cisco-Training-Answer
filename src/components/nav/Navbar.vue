<template>
  <div class="w-full mt-[33%] h-fit">
    <h1 class="font-bold text-xl sm:text-2xl my-4 mx-auto">
      Cisco Answers cap1-10
    </h1>
    <backToHome></backToHome>
    <select v-model="selectedOption" @change="navigate" class="navbar rounded-xl flex flex-col w-full min-h-8 p-4 bg-gray-200  
    text-black justify-center items-center gap-2">
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