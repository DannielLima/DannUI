<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
});

const buttonClasses = computed(() => {
  const base = "px-4 py-2 rounded-lg font-semibold focus:outline-none";
  const colorClass = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizeClass = {
    md: "text-base",
    lg: "text-lg px-6 py-3",
  };

  return `${base} ${colorClass[props.color]} ${sizeClass[props.size]}`;
});
</script>
