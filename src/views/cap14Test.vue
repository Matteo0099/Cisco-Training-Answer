<template>
  <div>
    <!-- template for all caps -->
    <form @submit.prevent="submitForm" class="flex flex-col gap-2 mt-10">
      <h1 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Test cap {{ numCap }} - complete </h1>
      <ul v-for="(question, index) in questions" :key="index" class="flex flex-col list-disc my-4">
        <h1 class="home text-xl sm:text-2xl mb-2"> {{ index + 1 }} - {{ question.question }} </h1>
        <template v-if="question.options.length > 2">
          <label v-for="(option, oIndex) in question.options" :key="oIndex" class="pl-4 text-base sm:text-lg">
            <input type="checkbox" :value="option" v-model="selectedAnswers[index]" /> {{ option }}
          </label>
        </template>
        <template v-else>
          <label v-for="(option, oIndex) in question.options" :key="oIndex" class="pl-4 text-lg sm:text-xl">
            <input type="radio" :name="`radio-${index}`" :value="option" v-model="selectedAnswers[index]" />
            {{ option }}
          </label>
        </template>
      </ul>
      <button type="submit" role="button" class="py-2 px-4 border rounded-lg mt-8 mb-4 w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto">Submit</button>
    </form>
    <p v-if="submitted" class="font-semibold text-xl sm:text-2xl mt-8 mb-12 mx-auto w-fit">
      You got {{ correctAnswers }} out of {{ totalQuestions }} correct !
    </p>
  </div>
</template> 

<script>
import data from "../../src/data/ITE/14.json";
export default {
  data() {
    data.questions.sort(() => Math.random() - 0.5)
    data.questions.forEach(question => question.options.sort(() => Math.random() - 0.5))
    return {
      questions: data.questions,
      selectedAnswers: [],
      submitted: false,
      correctAnswers: 0,
      totalQuestions: 0,
      numCap: data.examData.cap
    };
  },
  created() {
    this.selectedAnswers = this.questions.map(() => []);
    this.totalQuestions = this.questions.length;
  },
  methods: {
    submitForm() {
      this.submitted = true;
      this.checkAnswers();
    }, checkAnswers() {
      this.questions.forEach((question, index) => {
        const selected = this.selectedAnswers[index];
        const correctAnswer = question.answer;
        if (question.options.length > 2) {
          selected.forEach(answer => {
            if (correctAnswer.includes(answer)) {
              this.correctAnswers++;
            }
          });
        } else {
          if (selected === correctAnswer) {
            this.correctAnswers++;
          }
        }
      });
    }
  }
}; 
</script> 