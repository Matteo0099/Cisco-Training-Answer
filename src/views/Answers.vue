<template>
  <div>
    <div class="mx-3 sm:mx-auto mt-8 min-h-screen">
      <h1 v-if="dataIsReady" class="home text-2xl">
        Answer of cap {{ numCap }}
      </h1>
      <!-- container 1-->
      <ul class="min-h-screen list-none relative mt-4 pl-4">
        <li v-for="(question, index) in questions" class="py-4 m-2 sm:mx-auto px-2">
          <h1 class="home text-2xl"> {{ index + 1 }} - {{ question.question }} </h1>
          <img v-if="question.photo" :src="question.photo" class="w-max" />
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

<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      questions: [],
      numCap: null,
      dataIsReady: false
    };
  },
  async created() {
    const route = useRoute();
    const { type, number } = route.params
    const data = await import(`../../src/data/${type}/${number}.json`);
    data.questions.sort(() => Math.random() - 0.5);
    data.questions.forEach((question) => question.options.sort(() => Math.random() - 0.5));
    this.questions = data.questions;
    this.numCap = data.examData.cap;
    this.dataIsReady = true
  },
};
</script>