<template>
    <div class="w-full bg-gray-300 rounded-full">
      <div
        :style="{ width: progress + '%' }"
        class="bg-blue-500 text-xs font-semibold text-white text-center p-0.5 leading-none rounded-full"
      >
        {{ progress }}%
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    progress: {
      type: Number,
      required: true,
      default: 0,
    },
  });
  </script>
  
  <style scoped>
  div {
    height: 20px;
  }
  </style>
  