<template>
    <div class="relative inline-block" @mouseenter="show" @mouseleave="hide">
      <slot></slot>
      <div v-if="isVisible" class="absolute bg-black text-white text-sm rounded-lg px-2 py-1" :style="tooltipStyle">
        {{ text }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    text: String,
    position: { type: String, default: 'top' }
  });
  
  const isVisible = ref(false);
  
  const show = () => {
    isVisible.value = true;
  };
  
  const hide = () => {
    isVisible.value = false;
  };
  
  const tooltipStyle = ref({
    top: '-100%', left: '50%', transform: 'translateX(-50%)',
  });
  </script>
  