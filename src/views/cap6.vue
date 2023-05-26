<template>
  <div>
    <div class="mx-auto md:mx-3 sm:mx-auto mt-8 min-h-screen">
      <h1 class="home text-2xl">
        Answer of cap 6
      </h1>
      <!-- container 1-->
      <ul class="min-h-screen list-none text-xs md:text-lg break-words relative mt-4 md:pl-4">
        <li v-for="(question, index) in data.questions" class="py-4 md:m-2 text-xs md:text-lg break-words sm:mx-auto md:px-2">
          <h1 class="home text-xs sm:text-base md:text-xl"> {{ index + 1 }} - {{ question.question }} </h1>
          <img v-if="question.photo" :src="question.photo" class="w-max" />
          <ul class="list-disc w-full pl-2 md:pl-8 text-[10px] sm:text-sm md:text-lg break-words">
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

<script>
import data from "../../src/data/ITE/6.json"
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