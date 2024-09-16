<template>
    <nav class="flex justify-center space-x-2">
      <button
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
        class="px-4 py-2 bg-gray-300 rounded-lg"
      >
        Anterior
      </button>
      <span>{{ currentPage }} de {{ totalPages }}</span>
      <button
        :disabled="currentPage === totalPages"
        @click="changePage(currentPage + 1)"
        class="px-4 py-2 bg-gray-300 rounded-lg"
      >
        Próxima
      </button>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    totalPages: Number,
    currentPage: Number
  });
  
  const emit = defineEmits(['update:page']);
  
  const changePage = (page) => {
    if (page >= 1 && page <= props.totalPages) {
      emit('update:page', page);
    }
  };
  </script>
  