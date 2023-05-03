<template>
  <div>
    <footer class="w-full min-h-[85px] border p-2 mt-10 rounded-lg flex flex-col justify-center items-center text-base">
      <div class="mx-auto min-h-full max-w-3xl text-center flex flex-col">
        <span>copyright Cisco Answer &copy; 2023</span>
        <span>by @noyaz86 @Matteo0099</span>
        <!-- info -->
        <button @click="openModal">more info</button>
        <dialog class="modal rounded-lg">
          <div class="max-w-xs w-full font-normal text-base">
            <div class="flex justify-between gap-2 p-2">
              <p>
                This is a full-documentation for cisco answer.
                You can training your skills with it!
                Is a project that was developed by two 4grade high school students.
              </p>
              <button @click="closeModal" class="border w-16 h-8 rounded-lg">X</button>
            </div>
          </div>
        </dialog>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Add data properties here if needed in the future
    }
  },
  methods: {
    openModal() {
      const dialog = document.querySelector(".modal")
      dialog.showModal() // Opens the modal dialog
      dialog.addEventListener("click", e => {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          dialog.close() // Closes the dialog if the click occurred outside of it
        }
      })
    },
    closeModal() {
      const dialog = document.querySelector(".modal")
      dialog.close() // Closes the modal dialog
    }
  },
}
</script>