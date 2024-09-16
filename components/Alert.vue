<template>
  <div :class="alertClasses">
    {{ message }}
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "info",
  },
  message: {
    type: String,
    required: true,
  },
});

const alertClasses = computed(() => {
  const base = "p-4 rounded-lg font-medium";
  const typeClass = {
    info: "bg-blue-100 text-blue-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return `${base} ${typeClass[props.type]}`;
});
</script>
