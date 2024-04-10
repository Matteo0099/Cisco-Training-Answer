<script setup>
  import turnTop from '../components/turnTop.vue';
</script>

<template>
  <div>
    <!-- template for all caps -->
    <form ref="examForm" @submit.prevent="submitForm" class="flex flex-col gap-2 mt-10">
      <h1 v-if="dataIsReady" class="text-xl sm:text-2xl font-bold mt-8 mb-4">Test cap {{ numCap }} - complete</h1>
      <!-- remember -->
      <div class="mb-5 border rounded-lg p-4">
        <!-- remember where are the drag and drop question -->
        <h1 v-if="dataIsReady" class="text-xl sm:text-2xl font-bold mt-8 mb-4">
          All questions:
        </h1>
        <p class="font-thin">complete link: </p>
        <a :href=link target="_blank" :target="_blank" 
          class="text-blue-600 hover:underline hover:underline-offset-2"> {{ link }}</a>
      </div>

      <div class="mt-8 mb-3">
        <h1 class="p-1 font-thin text-xl md:text-2xl">
          !After multiple test, click this to prevent browser fault! <br>
          <strong class="text-red-600 font-bold">
            <i class="bi bi-arrow-down pl-2"></i>
            REFRESH BUTTON
            <i class="bi bi-arrow-down pl-2"></i>
          </strong> 
        </h1>
      </div>
      <!-- clean browser data -->
      <div class="container mt-1 pb-8 mb-2">
        <button type="button" role="button"
              class="py-3 px-4 border rounded-lg border-neutral-400 w-full mt-2 active:border-4 font-semibold active:border-neutral-300 hover:opacity-75 h-14 mx-auto"
              @click="refreshForm">
          <span>
            clean browser cache
            <i class="bi bi-arrow-clockwise pl-2"></i></span>
        </button>
      </div>
      
      <!-- ************* -->
      <!-- ALL QUESTIONS -->
      <!-- ************* -->
      <ul v-for="(question, index) in questions" :key="index" class="flex flex-col list-disc my-4">
        <h1 class="home text-xl sm:text-2xl mb-2">
        <span>{{ index + 1 }}</span> - {{ question.question }}</h1> <!--v-if="type != 'CCNA'"-->
        <!-- Display the image if it exists -->
        <img 
          v-if="question.photo || question.img" 
          :src="getImageUrl(question)"
          class="w-max image-q"
          ref="questionImage" 
        />
        <!-- questions -->
        <template v-if="question.options && question.answers">  <!--both control-->
          <template v-if="question.answers.length > 1">  <!--in cap 6 was variable "answer", didn't working XD-->
            <label v-for="(option, oIndex) in question.options" :key="oIndex" class="flex justify-start my-1 items-center pl-4 text-base sm:text-lg">
              <input type="checkbox" :value="option" @input="saveToLocalStorage(index)" v-model="selectedAnswers[index]"  />
              {{ option }}
            </label>
          </template>
          <template v-else-if="question.answers.length == undefined || question.answers.length == null || question.answers.length == 0">  <!--in cap 6 not working-->
            <p>null question</p>
          </template>
          <template v-else>
            <label v-for="(option, oIndex) in question.options" :key="oIndex" class="flex justify-start my-1 items-center pl-4 text-lg sm:text-xl">
              <input type="radio" :name="`radio-${index}`" :value="option" @input="saveToLocalStorage(index)" v-model="selectedAnswers[index]" />
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
      <button type="submit" @click="submitForm" role="button" 
              class="mt-6 py-3 px-4 border rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto">
        <span class="normal-submit">Submit</span>
      </button>
      <!-- randomize answers -->
      <a @click="randomize" role="button"
          class="py-3 px-4 border flex justify-center items-center rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto">
        randomize answers
      </a>
      <!-- <button @click="stop">Stop</button> without click, after 3sec stop it --><!-- refresh -->
      <button type="button" role="button"
            class="py-3 px-4 border rounded-lg w-72 active:border-4 font-semibold active:border-neutral-200 hover:opacity-75 h-14 mx-auto"
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
      dataIsReady: false,
      link: null,
      // publicUrl: 'https://raw.githubusercontent.com/Matteo0099/Cisco-Training-Answer/main/public/screenshot'
    };
  },
  async created() {
    const route = useRoute();
    const { type, number } = route.params;
    const data = await import(`../../src/data/${type}/${number}.json`);
    this.questions = data.questions;
    this.selectedAnswers = this.questions.map(() => []);
    this.totalQuestions = this.questions.length;
    this.numCap = data.examData.cap;
    this.link = data.examData.abbreviation === "ITN" ? `https://itexamanswers.net/ccna-1-v5-1-v6-0-chapter-${data.examData.cap}-exam-answers-100-full.html` : `https://infraexam.com/it-essentials-7/it-essentials-7-0-chapter-${data.examData.cap}-exam-answers-ite-7-0-ite-7-02/`;
    this.dataIsReady = true;
    this.loadFromLocalStorage(); 
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  watch: { // localStorage saving data
    selectedAnswers: {
      deep: true,
      handler(newAnswers) {
        this.saveToLocalStorage(newAnswers); // save selectedAnswers to localStorage if it changes
      },
    },
  },
  methods: {  
    saveToLocalStorage(selectedAnswers) { // Save selectedAnswers to localStorage
      localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
    },
    loadFromLocalStorage() {
      const storedData = localStorage.getItem('selectedAnswers'); // Load selectedAnswers from localStorage
      if (storedData) {
        this.selectedAnswers = JSON.parse(storedData);
      }
    },
    getImageUrl(question) {
      const imageUrl = question.photo || question.img;
      // if (imageUrl && !imageUrl.includes("https://")) return this.publicUrl + imageUrl;
      return imageUrl;
    },
    randomize() {
      this.questions.sort(() => Math.random() - 0.5);
      this.questions.forEach((question) => question.options.sort(() => Math.random() - 0.5));
      // Reset the submitted and formSubmitted flags
      this.submitted = false;
      this.formSubmitted = false;
      this.refreshForm();
    },
    async submitForm() {
      await this.checkAnswers();

      // check answers to test
      document.querySelector('.normal-submit').innerHTML = '...Correction...';
      setTimeout(() => {
        this.formSubmitted = true;
        this.submitted = true;
        document.querySelector('.normal-submit').innerHTML = 'Submit';
      }, 1000)

      // calcolo 60% delle risposte (dinamico)
      let count = 0; 
      let percentageCorrected = 0;
      for(count in this.questions) count++;
      percentageCorrected = (count * 60) / 100;
      
      // confetti animation
      const canvas = document.getElementById('confetti-canvas');
      if(this.correctAnswers >= percentageCorrected) { // almeno 60% delle risposte totali
        this.start();
        setTimeout(() => {
          this.formSubmitted = false;
          this.hideCanvas();
          this.stop();
        }, 2500);
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
      if (canvas) canvas.style.opacity = '0.5';
      setTimeout(() => {
        if (canvas) {
          canvas.style.display = 'none';
          canvas.style.opacity = '0';
        }
      }, 1000);
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
          } else this.rightAnswers.push(false);
        } else {
          if (selected === correctAnswer[0]) {
            this.correctAnswers++;
            this.rightAnswers.push(true);
          } else this.rightAnswers.push(false);
        }
      });
    },
    start() { this.$confetti.start(); },
    stop() { this.$confetti.stop(); },
    love() {
      this.$confetti.update({
        particles: [{type: 'heart'},{type: 'circle'},],
        defaultColors: ['red','pink','#ba0000'],
      });
    },
    // clean form and browser cache
    refreshForm() {
      this.formSubmitted = false;
      this.submitted = false;
      this.selectedAnswers = this.questions.map(() => []);
      this.correctAnswers = 0;
      this.rightAnswers = [];
      localStorage.removeItem('selectedAnswers');
      localStorage.clear();
      window.localStorage.clear();
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