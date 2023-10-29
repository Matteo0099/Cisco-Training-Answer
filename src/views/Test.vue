<script setup>
  import turnTop from '../components/turnTop.vue';
</script>

<template>
  <div>
    <!-- template for all caps -->
    <form ref="examForm" @submit.prevent="submitForm" class="flex flex-col gap-2 mt-10">
      <h1 v-if="dataIsReady" class="text-xl sm:text-2xl font-bold mt-8 mb-4">Test cap {{ numCap }} - complete</h1>
      <ul v-for="(question, index) in questions" :key="index" class="flex flex-col list-disc my-4">
        <h1 class="home text-xl sm:text-2xl mb-2">
          <span v-if="type != 'CCNA'">{{ index + 1 }}</span> - {{ question.question }}</h1>

        <!-- Display the image if it exists -->
        <img 
          v-if="question.photo || question.img" 
          :src="question.photo || question.img" 
          class="w-max image-q"
          ref="questionImage" 
        />

        <template v-if="question.options || question.answers">
          <template v-if="question.answers.length > 1">
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
          <p v-if="submitted && !rightAnswers[index]"
            class="Wrong list-disc text-xl md:text-2xl text-red-500 font-semibold pl-3 pt-1.5">
            {{ question.answers }}
          </p>
        </template>
      </ul>

      <!-- on submit -->
      <button type="submit" @click="start" role="button" :disabled="formSubmitted"
              class="py-2 px-4 border rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto">
        <span v-if="!formSubmitted">Submit</span>
        <span v-else>Submitting...</span>
      </button>
      <!-- <button @click="stop">Stop</button> without click, after 3sec stop it -->
      <!-- refresh -->
      <button type="button" role="button"
              class="py-2 px-4 border rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto"
              @click="refreshForm">
        <span><i class="bi bi-arrow-clockwise"></i></span>
      </button>
    </form>
    <turnTop />
    <!-- risultato -->
    <p v-if="submitted" class="font-semibold text-xl sm:text-2xl mt-8 mb-12 mx-auto w-fit">
      You got {{ correctAnswers }} out of {{ questions.length }} correct ({{ percentageCorrect }}%)!
    </p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      questions: [],
      selectedAnswers: [],
      submitted: false,
      correctAnswers: 0,
      numCap: null,
      formSubmitted: false,
      rightAnswers: [],
      dataIsReady: false
    };
  },
  async created() {
    const route = useRoute();
    const { type, number } = route.params;
    const data = await import(`../../src/data/${type}/${number}.json`);

    data.questions.sort(() => Math.random() - 0.5);
    data.questions.forEach((question) => question.options.sort(() => Math.random() - 0.5));
    this.questions = data.questions;
    this.selectedAnswers = this.questions.map(() => []);
    this.totalQuestions = this.questions.length;
    this.numCap = data.examData.cap;
    this.dataIsReady = true;
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    async submitForm() {
      const canvas = document.getElementById('confetti-canvas');
      this.formSubmitted = true;
      await this.checkAnswers();
      this.submitted = true;
      setTimeout(() => {
        this.formSubmitted = false;
        this.hideCanvas();
      }, 2250);
      if(this.submitted) {
        if(canvas) {
          canvas.style.display = 'block';
          canvas.style.opacity = '1';
        }
      }
    },
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
  
    hideCanvas() {
      // Hide the canvas element by setting display to 'none' and visibility to 'hidden'
      const canvas = document.getElementById('confetti-canvas');
      if (canvas) {
        canvas.style.opacity = '0.5';
      }
      setTimeout(() => {
        if (canvas) {
          canvas.style.display = 'none';
          canvas.style.opacity = '0';
        }
      }, 500);
    },
    checkAnswers() {
      this.correctAnswers = 0;
      this.questions.forEach((question, index) => {
        const selected = this.selectedAnswers[index] 
        const correctAnswer = question.answers;
        
        if (question.answers.length > 1) {
          if (
            correctAnswer.every((answer) => selected.includes(answer)) &&
            correctAnswer.length === selected.length
          ) {
            this.correctAnswers++;
            this.rightAnswers.push(true);
          } else {
            this.rightAnswers.push(false);
          }
        } else {
          if (selected === correctAnswer[0]) {
            this.correctAnswers++;
            this.rightAnswers.push(true);
          } else {
            this.rightAnswers.push(false);
          }
        }
      });
    },
    start() {
      this.$confetti.start();
    },
    stop() {
      this.$confetti.stop();
    },
    love() {
      this.$confetti.update({
        particles: [
          {
            type: 'heart',
          },
          {
            type: 'circle',
          },
        ],
        defaultColors: [
          'red',
          'pink',
          '#ba0000'
        ],
      });
    },
    refreshForm() {
      this.formSubmitted = false;
      this.submitted = false;
      this.selectedAnswers = this.questions.map(() => []);
      this.correctAnswers = 0;
      this.rightAnswers = [];
    },
  },
  computed: {
    percentageCorrect() {
      return this.correctAnswers ? Math.round((this.correctAnswers / this.questions.length) * 100) : 0;
    },
  },
};
</script>

<style scoped>.Wrong::first-letter { text-transform: uppercase !important }</style>