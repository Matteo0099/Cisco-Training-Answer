<template>
  <div>
    <footer class="w-full min-h-[75px] border p-2 mt-28 mb-6 rounded-lg flex flex-col justify-center items-center text-base">
      <div class="mx-auto min-h-full leading-loose max-w-3xl py-4 px-0 text-center flex flex-col">
        <span>copyright Cisco Answer &copy; 2023</span>
        <span>by @noyazz @Matteo0099</span>
        <!-- info -->
        <button @click="openModal2" title="More info" alt="button" role="button" aria-label="More info"
          class="py-3 px-6 border my-2 mx-auto rounded-lg hover:opacity-75 active:border-2 border-neutral-300">
          More info
        </button>
        <dialog class="modal2 rounded-lg">
          <div class="max-w-xs w-full font-normal text-base">
            <div class="flex items-center min-h-[175px] justify-between gap-2 pt-2 pl-2 pr-2 pb-0">
              <p class="text-black text-left break-words">
                This is a full-documentation for cisco answer.
                You can <i class="m-0 p-0 font-bold">Training</i> your skills with it!
                Is a project that was developed by <i class="text-gray-300 hover:rotate-180">unknown people</i> in high school
                students.
              </p>
              <button @click="closeModal2" class="border w-20 h-8 mx-0 px-2 mb-auto bg-red-400 text-neutral-50 hover:opacity-90 
                active:border active:border-red-400 rounded-lg"> X
              </button>
            </div>
            <div class="container flex justify-between pt-0 pb-2 pl-2 pr-2">
              <a href="https://github.com/Matteo0099/Cisco-Training-Answer" target="_blank" class="flex flex-col items-center">
                <button class="flex flex-col items-center border rounded-lg py-1 px-2 sm:py-2 sm:px-4">
                  <i class="bi bi-github text-2xl"></i>
                  <span class="font-normal text-base">Github</span>
                </button>
              </a>
              <p class="font-mono font-bold">
                <span class="m-0 p-0 font-light">By:</span> @noyaz / @Matteo0099
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    openModal2() {
      const dialog = document.querySelector(".modal2")
      dialog.showModal() // Opens the modal 
      dialog.addEventListener("click", e => {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) dialog.close()  /*(click outside)*/
      })
    },
    closeModal2() {
      const dialog = document.querySelector(".modal2")
      dialog.close() // Closes the modal 
    }
  },
}
</script>