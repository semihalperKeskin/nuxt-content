<template>
  <div class="cardDiv max-w-sm mx-auto rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="randomSrc" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2"><slot name="title" /></div>
      <p class="text-gray-700 text-base">
        <slot name="content" />
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        <slot name="footer" />
      </span>
    </div>
    <div class="mt-4 mx-auto">
      <button
        class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        @click="changeBgColor()"
      >
        Change BG Color
      </button>
      <button
        class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        @click="changeTextColor()"
      >
        Change Text Color
      </button>
    </div>
  </div>
</template>

<style>
.cardDiv {
  @apply bg-red-500 text-white p-4 border-2 border-black rounded-md cursor-pointer;
}
</style>

<script setup>
const changeBgColor = () => {
  const color = document.querySelector(".cardDiv");

  color.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
};
const changeTextColor = () => {
  const color = document.querySelector(".cardDiv");

  color.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
};

let random = Math.floor(Math.random() * 999);

const randomSrc = `https://picsum.photos/id/${random}/200/100`;
</script>
