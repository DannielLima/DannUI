<template>
    <div>
      <div @click="toggle" class="cursor-pointer border-b py-2">
        <h3 class="font-semibold">{{ title }}</h3>
      </div>
      <div v-if="isOpen" class="mt-2">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    title: String
  });
  
  const isOpen = ref(false);
  
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  </script>
  