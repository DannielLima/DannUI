<template>
    <div>
      <div class="flex border-b">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="selectTab(index)"
          :class="['px-4 py-2', index === selectedIndex ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600']"
        >
          {{ tab.label }}
        </button>
      </div>
      <div class="mt-4">
        <slot :name="tabs[selectedIndex].name"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    tabs: Array
  });
  
  const selectedIndex = ref(0);
  
  const selectTab = (index) => {
    selectedIndex.value = index;
  };
  </script>  