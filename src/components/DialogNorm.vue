<template>
  <div>
    <button @click="openModalOne" title="Info" alt="button" role="button" aria-label="DISCALIMER"
      class="py-3 px-6 relative border w-full text-red-400 font-bold my-2 mx-auto rounded-lg hover:opacity-75 active:border-2 border-neutral-300">
      Info
    </button>
    <dialog class="modalOne relative rounded-lg">
      <div class="max-w-xs w-full font-normal text-base">
        <div class="flex items-center min-h-[200px] min-w-[325px] justify-between gap-2 pt-2 pl-2 pr-2 pb-0">
          <p class="text-black text-left break-words py-4 px-1 font-bold text-lg sm:text-xl">
            Questa app è finalizzata all'allenamento mnemonico
            delle risposte del test. Le domande <strong>drag and drop</strong> 
            sono appena state implementate come immagini nella sezione "CCNA" di cisco. 
            all rights reserved <a href="https://www.cisco.com/" class="underline hover:no-underline text-blue-500" target="_blank">CISCO</a>
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
    openModalOne() {
      const dialog = document.querySelector(".modalOne")
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
      const dialog = document.querySelector(".modalOne")
      dialog.close() // Closes the modal dialog
    }
  },
}
</script>