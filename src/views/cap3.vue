<template>
  <div>
    <div class="mx-3 sm:mx-auto mt-8 min-h-screen">
      <h1 class="home text-2xl"> Answer of cap 3 </h1>
      <p>implementation drag and drop:</p>
      <div class="container">
        <p class="draggable" draggable="true">1</p>
        <p class="draggable" draggable="true">2</p>
      </div>
      <div class="container">
        <p class="draggable" draggable="true">3</p>
        <p class="draggable" draggable="true">4</p>
      </div> <!-- container 1-->
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
      data
    };
  },
  mounted() {
    const draggables = document.querySelectorAll('.draggable')

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
      })
      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
      })
    })

    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return {
            offset: offset,
            element: child
          };
        } else {
          return closest;
        }
      },
        {
          offset: Number.NEGATIVE_INFINITY,
          element: null
        }).element;
    }

    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      container.addEventListener('dragover', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(container, e.clientY);
        if (afterElement && container.contains(afterElement)) {
          container.insertBefore(draggable, afterElement);
        } else {
          container.appendChild(draggable);
        }
      });
    });
  }
}
</script>

<style>
.draggable {
  padding: 1rem;
  background-color: white;
  border: 1px solid black;
  cursor: grab;
}

.draggable.dragging {
  opacity: .5;
  cursor: grabbing;
}
</style>