<template>
  <div>
    <div class="mx-3 sm:mx-auto">
      <h1 class="home text-2xl">
        Content of cap 1
      </h1>
      <ul class="list-decimal pl-6 mx-3 sm:mx-auto">
        <!-- domanda 1 -->
        <li>
          {{ data.chapters[0].questions[0].question }}
        </li>
        <ul class=" list-disc pl-6">
          <li>{{ data.chapters[0].questions[0].options[0]}}</li>
          <li>{{ data.chapters[0].questions[0].options[1]}}</li>
          <li>{{ data.chapters[0].questions[0].options[2]}}</li>
          <li>{{ data.chapters[0].questions[0].options[3]}}</li>
        </ul>
        <!-- domanda 2 -->
        <!-- [...] -->
      </ul>
    </div>
    <!-- cap2 -->
  </div>
</template>

<script>
import data from "../../src/data/ITE_datas_1"
export default {
  data() {
    return {
      data
    } 
  }
}
</script>
