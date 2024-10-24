<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="flex justify-center my-5 text-2xl text-gray-600">
      <slot name="dorm-name" />
    </div>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(item, index) in dorms" :key="index">
          <NuxtImg
            class="w-[380px] h-[380px] mx-auto"
            :src="item.image"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div
              class="text-xl mb-2 flex flex-col justify-center items-center space-y-5"
            >
              <UButton variant="outline" class="w-full h-16 justify-center"
                ><slot name="buttonOne" />{{ item.title }}</UButton
              >
              <UButton variant="outline" class="w-full h-16 justify-center my-3"
                ><slot name="buttonTwo" />Yurt görüntüsü</UButton
              >
              <div
                class="w-20 h-20 bg-black flex items-center justify-center rounded-full"
              >
                <UIcon
                  name="i-mdi-phone"
                  class="w-8 h-8 rounded-full justify-center text-white"
                />
              </div>
              <div class="text-center space-y-3">
                <p>{{ item.phone }}</p>
                <p>{{ item.localPhone }}</p>
                <p>{{ item.address }}</p>
                <p class="flex justify-center">
                  <NuxtImg format="avif,webp" :src="item.logo" sizes="10vw" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: data} = await useAsyncData(() => queryContent('dorm').find())
const dorms = data.value || {}

</script>
