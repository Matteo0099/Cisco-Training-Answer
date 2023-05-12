<template>
  <div>
    <form @submit.prevent="submitForm" class="text-black">
      <div v-for="(question, index) in questions" :key="index">
        <p>{{ question.question }}</p>
        <template v-if="question.options.length > 2">
          <label v-for="(option, oIndex) in question.options" :key="oIndex">
            <input type="checkbox" :value="option" v-model="selectedAnswers[index]" />
            {{ option }}
          </label>
        </template>
        <template v-else>
          <label v-for="(option, oIndex) in question.options" :key="oIndex">
            <input type="radio" :name="`radio-${index}`" :value="option" v-model="selectedAnswers[index]" />
            {{ option }}
          </label>
        </template>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import data from "../../src/data/ITE/1.json";

export default {
  data() {
    return {
      questions: data.questions,
      selectedAnswers: [],
      submitted: false,
      submittedAnswers: "",
    };
  },
  created() {
    this.selectedAnswers = this.questions.map(() => []);
  },
  methods: {
    submitForm() {
      this.submitted = true;
      this.submittedAnswers = this.selectedAnswers.join(", ");
      this.checkAnswers();
    },
    checkAnswers() {
      let correct = 0;
      let total = this.questions.length;

      this.questions.forEach((question, index) => {
        const selected = this.selectedAnswers[index];
        const correctAnswer = question.answer;

        if (question.options.length > 2) {
          if (
            selected.length === correctAnswer.length &&
            selected.every((answer) => correctAnswer.includes(answer))
          ) {
            correct++;
          }
        } else {
          if (selected === correctAnswer) {
            correct++;
          }
        }
      });

      console.log(`Correct answers: ${correct} / ${total}`);
    },
  },
};
</script>