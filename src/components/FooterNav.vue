<template>
  <div>
    <button @click="openModal"
      class="py-3 px-6 border w-full text-red-400 font-bold my-2 mx-auto rounded-lg hover:opacity-75 active:border-2 border-neutral-300">
      !DISCLAIMER!
    </button>
    <dialog class="modal rounded-lg">
      <div class="max-w-xs w-full font-normal text-base">
        <div class="flex items-center min-h-[200px] min-w-[325px] justify-between gap-2 pt-2 pl-2 pr-2 pb-0">
          <p class="text-black text-left break-words py-4 px-1 font-bold text-lg sm:text-xl">
            Questo servizio è finalizzato solo ed esclusivamente all'allenamento mnemonico 
            delle risposte del test. Lo studio di quest'ultime va fatto nelle dispense online
            e nei moduli di cisco, perché sono presenti anche le domande <i class="italic underline">Drag and drop</i>
            che non sono state ancora implementate. 
          </p>
          <button @click="closeModal" class="border w-20 h-8 mx-0 px-2 mb-auto bg-red-400 text-neutral-50 hover:opacity-90 
            active:border active:border-red-500 text-lg sm:text-xl rounded-lg">
            X
          </button>
        </div>
        <div class="container flex justify-between pt-0 pb-2 pl-2 pr-2">
          <p class="font-mono font-bold">
            <span class="m-0 p-0 font-light">By:</span> @noyaz / @Matteo0099
          </p>
        </div>
      </div>
    </dialog>
  </div>
</template>


<script>
export default {
  data() {
    return
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
        ) { dialog.close() } /*Closes the dialog (click outside)*/
      })
    },
    closeModal() {
      const dialog = document.querySelector(".modal")
      dialog.close() // Closes the modal dialog
    }
  },
}
</script>