<template>
  <div class="bg-[#F0F0F0] py-8">
    <div class="max-w-screen-xl mx-auto grid grid-cols-3 gap-4">
      <div v-for="(item, propertyIndex) in property" :key="propertyIndex" class="space-y-5 mt-10">
        <div class="flex text-center space-x-5">
          <Icon :name="item.icon" class="text-5xl" />
          <div class="text-2xl flex items-center">
            {{ item.title }}
          </div>
        </div>
        <div>
          <p v-for="(desc, descriptionIndex) in item.description" :key="descriptionIndex">
          {{ desc }}
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: data } = await useAsyncData(() => queryContent('properties').sort({ title: 1 }).find())

const property = data.value || {}
</script>