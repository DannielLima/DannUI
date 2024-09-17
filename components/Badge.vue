<template>
    <span
      :class="`px-2 py-1 text-xs font-semibold rounded-full ${badgeColor}`"
      v-if="visible"
    >
      {{ label }}
    </span>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "info", // 'info', 'success', 'warning', 'danger'
    },
    visible: {
      type: Boolean,
      default: true,
    },
  });
  
  const badgeColor = computed(() => {
    switch (props.type) {
      case "success":
        return "bg-green-500 text-white";
      case "warning":
        return "bg-yellow-500 text-white";
      case "danger":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  });
  </script>
  
  <style scoped>
  span {
    display: inline-block;
    text-align: center;
  }
  </style>  