<template>
  <nav class="bg-black w-screen">
    <div class="max-w-screen-xl mx-auto grid grid-cols-12 gap-4 py-[15px] h-[100px]">
      <div class="col-span-3">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.residorm.com/wp-content/uploads/2024/06/residorm_logo1.png"
            height="73"
            width="200"
            alt="Flowbite Logo"
          />
        </a>
      </div>
      <div class="text-gray-400 text-xs col-span-7 flex">
        <ul class="font-medium flex items-center space-x-7">
          <li class="flex items-center gap-2">
            <a href="#" class="hover:border-b-2" aria-current="page">
              <slot name="middleSection1" />
            </a>
          </li>
          <li class="flex items-center gap-1">
            <a href="#" class="hover:border-b-2" aria-current="page"
              ><slot name="middleSection2"
            /></a>
            <Icon name="i-mdi-menu-down" class="text-xl" />
          </li>
          <li class="flex items-center gap-1">
            <a href="#" class="hover:border-b-2"
              ><slot name="middleSection3"
            /></a>
            <Icon name="i-mdi-menu-down" class="text-xl" />
          </li>
          <li class="flex items-center gap-1">
            <a href="#" class="hover:border-b-2"
              ><slot name="middleSection4"
            /></a>
            <Icon name="i-mdi-menu-down" class="text-xl"  />
          </li>
          <li>
            <a href="#" class="hover:border-b-2"
              ><slot name="middleSection5"
            /></a>
          </li>
          <li>
            <a href="#" class="hover:border-b-2"
              ><slot name="middleSection6"
            /></a>
          </li>
          <li>
            <a href="#" class="hover:border-b-2"
              ><slot name="middleSection7"
            /></a>
          </li>
          <li class="flex items-center gap-1">
            <Icon name="i-flag-tr-4x3" />
            <a href="#" class="hover:border-b-2"
              ><slot name="middleSection8" />
            </a>
            <Icon name="i-mdi-menu-down" class="text-xl" />
          </li>
        </ul>
      </div>
      <div class="flex items-center space-x-4 text-gray-400 text-xl col-span-2">
        <a
          v-if="socials.facebook"
          :href="socials.facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="i-mdi-facebook" />
        </a>
        <a
          v-if="socials.twitter"
          :href="socials.twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="i-mdi-twitter" />
        </a>
        <a
          v-if="socials.instagram"
          :href="socials.instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="i-mdi-instagram" />
        </a>
        <a
          v-if="socials.linkedin"
          :href="socials.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="i-mdi-linkedin" />
        </a>
        <a
          v-if="socials.github"
          :href="socials.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="i-mdi-github" />
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
ul li {
  font-family: "Open Sans", sans-serif;
  display: flex;
}
</style>

<script setup>
const { data } = await useAsyncData(() => queryContent("/").findOne());

const socials = data.value.socials || {};
</script>
