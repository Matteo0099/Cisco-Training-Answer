<template>
  <div>
    <!-- <form @submit.prevent="submitForm" class="text-black">
      <div v-for="(question, index) in questions" :key="index">
        <p>{{ question.text }}</p>
        <template v-if="isArray(question.answers)">
          <label v-for="(answer, aIndex) in question.answers" :key="aIndex">
            <input type="checkbox" :value="answer" v-model="selectedAnswers[index]">
            {{ answer }}
          </label>
        </template>
        <template v-else>
          <label>
            <input type="radio" name="radio-{{ index }}" value="true" v-model="selectedAnswers[index]">
            True
          </label>
          <label>
            <input type="radio" name="radio-{{ index }}" value="false" v-model="selectedAnswers[index]">
            False
          </label>
        </template>
      </div>
      <button type="submit">Submit</button>
    </form> -->
  </div>
</template>


<!-- <script>
import data from "../../src/data/ITE/1.json"
export default {
  data() {
    return {
      questions: data.questions,
      selectedAnswers: [],
      submitted: false,
      submittedAnswers: ''
    }
  },
  methods: {
    submitForm() {
      this.submitted = true
      this.submittedAnswers = this.selectedAnswers.join(', ')
    },
    isArray(arr) {
      return Array.isArray(arr)
    }
  }
}
</script> -->


<!-- <template>
  <div>
    <div class="mx-3 sm:mx-auto mt-8 min-h-screen">
      <h1 class="home text-2xl"> Test of cap 1 </h1>
      <ul class="min-h-screen flex flex-col list-none relative mt-4 pl-4">
        <li v-for="(question, index) in data.questions" class="py-4 m-2 sm:mx-auto px-2">
          <h1 class="home text-2xl"> {{ index + 1 }} - {{ question.question }} </h1>
          <ul class="list-disc w-full pl-8">
            <li v-for="option in question.options">
              {{ option }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template> -->
<!-- 
<script>
import data from "../../src/data/ITE/1.json"
export default {
  data() {
    data.questions.sort(() => Math.random() - 0.5)
    data.questions.forEach(question => question.options.sort(() => Math.random() - 0.5))
    return {
      data
    }
  }
}
</script> -->
