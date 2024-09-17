<template>
    <div class="spinner" :style="spinnerStyle"></div>
  </template>
  
  <script setup>
  const props = defineProps({
    size: {
      type: String,
      default: "medium", // small, medium, large
    },
    color: {
      type: String,
      default: "blue-500", // TailwindCSS colors
    },
  });
  
  const spinnerStyle = computed(() => {
    let sizeClass;
    switch (props.size) {
      case "small":
        sizeClass = "w-6 h-6";
        break;
      case "large":
        sizeClass = "w-16 h-16";
        break;
      default:
        sizeClass = "w-10 h-10";
    }
  
    return `${sizeClass} border-${props.color}`;
  });
  </script>
  
  <style scoped>
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid currentColor;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  