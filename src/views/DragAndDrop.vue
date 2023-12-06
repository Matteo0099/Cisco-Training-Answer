<script setup>
import turnTop from '../components/turnTop.vue';
</script>

<template>
  <div>
    <div class="mx-3 sm:mx-auto mt-8 min-h-screen">
      <h1 v-if="dataIsReady" class="home text-2xl"> Drag and drops of cap {{ numCap }} </h1>
      <ul class="min-h-screen list-none relative mt-4 mx-0">
        <li v-for="(question, index) in questions" :key="index" 
            class="py-4 mx-0 sm:mx-auto px-0">
          <h1 class="home text-2xl"> {{ index + 1 }} - Question {{ index + 1 }} </h1>
          <template v-if="question.question.options">
            <img v-if="question.question.question.photo" :src="question.question.question.photo" class="w-max" />
            <ul class="list-none relative mt-4 pl-4">
              <li v-for="(option, index) in question.question.options" :key="index" class="py-4 m-2 sm:mx-auto px-2">
                {{ option }}
              </li>
            </ul>
          </template>
          <template v-else>
            <img v-if="question.question.photo" :src="question.question.photo" class="w-max" />
          </template>
        </li>
      </ul>
      <turnTop />
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
  data() {
    return {
      photos: [],
      questions: [],  // changed from 'question' to 'questions'
      numCap: null,
      dataIsReady: false
    };
  },
  // dynamic imports from JSON files.
  async created() {
    const route = useRoute();
    const { number } = route.params;
    const data = await import(`../../src/data/CCNA-drag-drop/${number}.json`);
    this.questions = data.questions;  // changed from 'this.question' to 'this.questions'
    this.numCap = data.examData.cap;
    this.dataIsReady = true;
  },
};
</script>