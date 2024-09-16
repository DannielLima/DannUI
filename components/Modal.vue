<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-700"
      >
        X
      </button>
      <slot name="header"></slot>
      <div class="mt-4">
        <slot></slot>
      </div>
      <div class="mt-4">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
