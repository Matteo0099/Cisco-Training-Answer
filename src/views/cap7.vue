<template>
  <div>
    <div class="mx-3 sm:mx-auto mt-8 min-h-screen">
      <h1 class="home text-2xl">
        Answer of cap 7
      </h1>
      <!-- container 1-->
      <ul class="min-h-screen list-none relative mt-4 pl-4">
        <li v-for="(question, index) in data.questions" class="py-4 m-2 sm:mx-auto px-2">
          <h1 class="home text-2xl"> {{ index + 1 }} - {{ question.question }} </h1>
          <ul class="list-disc w-full pl-8">
            <li v-for="option in question.options">
              {{ option }}
            </li>
          </ul>
          <p class="my-2 pl-1">
            Answer: <span class="font-bold text-lg sm:text-xl text-red-500">{{ question.answer }}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import data from "../../src/data/ITE/7.json"
export default {
  data() {
    data.questions.sort(() => Math.random() - 0.5)
    data.questions.forEach(question => question.options.sort(() => Math.random() - 0.5))
    return {
      data
    }
  }
}
</script>