<template>
  <div :class="['rounded-lg shadow-lg p-6', cardClasses]">
    <div v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="my-4">
      <slot name="content"></slot>
    </div>
    <div v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "white",
  },
});

const cardClasses = computed(() => {
  return props.color === "dark"
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-900";
});
</script>
