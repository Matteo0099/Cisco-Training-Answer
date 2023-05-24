<template>
  <div>
    <!-- template for all caps -->
    <form ref="examForm" @submit.prevent="submitForm" class="flex flex-col gap-2 mt-10">
      <h1 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Test (CCNA) module 1-3 </h1>
      <ul v-for="(question, index) in questions" :key="index" class="flex flex-col list-disc my-4">
        <h1 class="home text-xl sm:text-2xl mb-2"> {{ index + 1 }} - {{ question.question }} </h1>
        <template v-if="typeof question.answer === 'object'">
          <label v-for="(option, oIndex) in question.options" :key="oIndex" class="pl-4 text-base sm:text-lg">
            <input type="checkbox" :value="option" v-model="selectedAnswers[index]" :disabled="formSubmitted" />
            {{ option }}
          </label>
        </template>
        <template v-else>
          <label v-for="(option, oIndex) in question.options" :key="oIndex" class="pl-4 text-lg sm:text-xl">
            <input type="radio" :name="`radio-${index}`" :value="option" v-model="selectedAnswers[index]"
              :disabled="formSubmitted" />
            {{ option }}
          </label>
        </template>
        <p v-if="submitted" class="Wrong list-disc text-xl sm:text-2xl text-red-500 font-semibold pl-4 pt-2">
          {{ question.answer }}
        </p>
      </ul>
      <button type="submit" role="button" :disabled="formSubmitted"
        class="py-2 px-4 border rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto">
        <span v-if="!formSubmitted">Submit</span>
        <span v-else>Submitting...</span>
      </button>
      <button type="button" role="button"
        class="py-2 px-4 border rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto"
        @click="refreshForm">
        <span><i class="bi bi-arrow-clockwise"></i></span>
      </button>
      <a href="#top" class="w-full text-center">
        <button type="button" role="button"
          class="flex flex-row items-center justify-center py-2 px-4 border rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto">
          turn top
          <i class="bi bi-arrow-up text-lg pl-1"></i>
        </button>
      </a>
    </form>
  </div>
</template>

<script>
import data from "../../src/data/CCNA/module1-3.json";
export default {
  data() {
    // data.questions.sort(() => Math.random() - 0.5);
    // data.questions.forEach((question) => question.options.sort(() => Math.random() - 0.5));
    return data
  }
};
</script>