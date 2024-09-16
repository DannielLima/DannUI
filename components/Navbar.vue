<template>
  <nav class="bg-white shadow-lg py-4">
    <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <a href="/" class="text-2xl font-bold text-gray-900">DannUI</a>
      <div class="hidden md:flex space-x-6">
        <a href="#" class="text-gray-800 hover:text-gray-500">Home</a>
        <a href="#" class="text-gray-800 hover:text-gray-500">About</a>
        <a href="#" class="text-gray-800 hover:text-gray-500">Contact</a>
      </div>
      <button class="block md:hidden text-gray-800" @click="toggleMenu">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
    <div v-if="isMenuOpen" class="md:hidden bg-gray-100 p-4 space-y-2">
      <a href="#" class="block text-gray-800">Home</a>
      <a href="#" class="block text-gray-800">About</a>
      <a href="#" class="block text-gray-800">Contact</a>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>