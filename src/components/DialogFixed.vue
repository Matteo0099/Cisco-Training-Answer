<template>
  <div>
    <button @click="openModal" title="Info" alt="button" role="button" aria-label="DISCALIMER"
      class="px-2 min-h-[55px] min-w-[130px] text-base xl:text-lg max-w-[180px] xl:max-w-[180px] h-full max-h-[90px] relative 
            border text-red-400 font-bold my-2 mx-auto rounded-lg hover:opacity-75 active:border-2 border-neutral-300">
      Info
    </button> 
    <dialog class="modal relative rounded-lg">
      <div class="max-w-xs w-full font-normal text-base">
        <div class="flex items-center min-h-[200px] min-w-[325px] justify-between gap-2 pt-2 pl-2 pr-2 pb-0">
          <p class="text-black text-left break-words py-4 px-1 font-bold text-lg sm:text-xl">
            Questo servizio è finalizzato solo ed esclusivamente all'allenamento mnemonico
            delle risposte del test. Le domande <strong>drag and drop</strong> sono appena state implementate come immagini
            nella sezione "CCNA" di cisco. 
          </p>
          <button title="X" alt="button" role="button" aria-label="X" @click="closeModal" class="border w-20 h-8 mx-0 px-2 mb-auto bg-red-400 text-neutral-50 
            hover:opacity-90 active:border active:border-red-500 text-lg sm:text-xl rounded-lg">
            X
          </button>
        </div>
        <div class="container flex justify-between pt-0 pb-2 pl-2 pr-2">
          <p class="font-mono font-bold">
            <span class="m-0 p-0 font-light">By:</span>
            @noyaz / @Matteo0099
          </p>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      const dialog = document.querySelector(".modal")
      dialog.showModal() //Opens the modal 
      dialog.addEventListener("click", e => {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) dialog.close() /*(click outside)*/
      })
    },
    closeModal() {
      const dialog = document.querySelector(".modal")
      dialog.close() // Closes the modal dialog
    }
  },
}
</script>