<template>
  <div>
    <div class="mx-3 sm:mx-auto mt-8 min-h-screen">
      <h1 class="home text-2xl"> Answer of cap 3 </h1>
      <!-- drag and drop -->
      <p>implementation drag and drop:</p>
      <div class="drop-zone">
        <div
          class="drag-el"
          v-for="item in listTwo"
          :key="item.title"
          draggable
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="drop-zone">
        <div
        class="drag-el"
        v-for="item in listTwo"
        :key="item.title"
        draggable
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
      </div>

      <!-- container 1-->
      <ul class="min-h-screen list-none relative mt-4 pl-4">
        <li v-for="(question, index) in data.questions" class="py-4 m-2 sm:mx-auto px-2">
          <h1 class="home text-2xl"> {{ index + 1 }} - {{ question.question }} </h1>
          <ul class="list-disc w-full pl-8">
            <li v-for="option in question.options"> {{ option }} </li>
          </ul>
          <p class="my-2 pl-1">
            Answer:
            <span class="font-bold text-lg sm:text-xl text-red-500">
              {{ question.answer }}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import data from "../../src/data/ITE/3.json"
export default {
  data() {
    return {
      data,
      items: [
        {
          id: 0,
          title: 'Item A',
          list: 1,
        },
        {
          id: 1,
          title: 'Item B',
          list: 1,
        },
        {
          id: 2,
          title: 'Item C',
          list: 2,
        },
      ],
    };
  },
  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },
}
</script>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>