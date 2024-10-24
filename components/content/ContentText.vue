<template>
  <div class="bg-black">
    <div class="text-gray-400 max-w-screen-xl mx-auto py-5 space-y-5">
      <div class="text-2xl italic font-medium">
        <slot name="title" />
      </div>
      <div class="font-medium space-y-3">
        <slot name="content" />
      </div>
      <div class="flex justify-end text-2xl italic font-medium">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
