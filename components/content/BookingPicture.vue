<script setup lang="ts">
const { data } = await useAsyncData(() => queryContent("/").findOne());

const booking = data.value?.booking || {}

const light = booking.image
</script>

<template>
  <div class="relative flex justify-center my-10">
    <div class="absolute inset-0 bg-black opacity-50 w-[1200px] mx-auto"></div>

    <NuxtImg :src="light" class="max-w-screen-xl h-[600px] object-cover" />

    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-center text-white"
    >
      <h1 class="text-5xl font-semibold	bookingImgTitle"><slot name="title" /></h1>
      <p class="mt-2 text-lg"><slot name="description" /></p>
      <UButton
        size="xl"
        variant="outline"
        color="orange"
        class="rounded-xl mt-5"
      ><slot name="button" /></UButton>
    </div>
  </div>
</template>

<style scoped>
.bookingImgTitle{
  font-family: 'Open Sans', sans-serif;
}
</style>
