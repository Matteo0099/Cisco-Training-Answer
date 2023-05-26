<template>
  <div>
    <!-- template for all caps -->
    <form ref="examForm" @submit.prevent="submitForm" class="flex flex-col gap-2 mt-10">
      <h1 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Test cap {{ numCap }} - complete </h1>
      <ul v-for="(question, index) in questions" :key="index" class="flex flex-col list-disc my-4">
        <h1 class="home text-xl sm:text-2xl mb-2"> {{ index + 1 }} - {{ question.question }} </h1>
        <img v-if="question.photo" :src="question.photo" class="w-max" />
        <template v-if="Array.isArray(question.answer)">
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
    <p v-if="submitted" class="font-semibold text-xl sm:text-2xl mt-8 mb-12 mx-auto w-fit">
      You got {{ correctAnswers }} out of {{ totalQuestions }} correct!
    </p>
  </div>
</template>

<script>
import data from "../../src/data/ITE/14.json";
export default {
  data() {
    data.questions.sort(() => Math.random() - 0.5);
    data.questions.forEach((question) => question.options.sort(() => Math.random() - 0.5));
    return {
      questions: data.questions,
      selectedAnswers: [],
      submitted: false,
      correctAnswers: 0,
      totalQuestions: 0,
      numCap: data.examData.cap,
      formSubmitted: false,
    };
  },
  created() {
    this.selectedAnswers = this.questions.map(() => []);
    this.totalQuestions = this.questions.length;
  },
  methods: {
    async submitForm() {
      this.formSubmitted = true;
      await this.checkAnswers();
      this.submitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
      }, 2000);
    },
    checkAnswers() {
      this.correctAnswers = 0;
      this.questions.forEach((question, index) => {
        const selected = this.selectedAnswers[index];
        const correctAnswer = question.answer;
        if (Array.isArray(correctAnswer)) {
          if (correctAnswer.every(answer => selected.includes(answer)) && correctAnswer.length === selected.length)
            this.correctAnswers++;
        } else {
          if (selected === correctAnswer)
            this.correctAnswers++;
        }
      });
    },
    refreshForm() {
      this.formSubmitted = false;
      this.submitted = false;
      this.selectedAnswers = this.questions.map(() => []);
      this.correctAnswers = 0;
    },
  },
};
</script>

<style scoped>
.Wrong::first-letter {
  text-transform: uppercase !important;
}
</style>  