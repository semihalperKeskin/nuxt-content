<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-3 gap-4">
      <!-- Birinci Kart -->
      <div v-for="(item, index) in dormList" :key="index" class="rounded">
        <NuxtImg
          class="w-[380px] h-[380px]"
          src="https://picsum.photos/1920/1080?random=1"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 flex flex-col justify-center items-center">
            <UButton variant="outline" class="w-full h-16 justify-center"
              ><slot name="buttonOne" />{{ item.name }}</UButton
            >
            <UButton variant="outline" class="w-full h-16 justify-center my-3"
              ><slot name="buttonTwo" />Yurt görüntüsü</UButton
            >
            <div class="w-20 h-20 flex items-center justify-center rounded-full">
              <UButton
                icon="i-mdi-phone"
                class="w-full h-full rounded-full justify-center"
                size="xl"
                :to="item.link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const { data } = await useAsyncData(() => queryContent("/").findOne())

const dormList = data.value?.dormList || {}
</script>
