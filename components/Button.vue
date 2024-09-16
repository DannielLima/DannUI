<template>
    <button
      :class="[
        'px-4 py-2 rounded transition',
        variantClass,
        sizeClass,
        { 'opacity-50 cursor-not-allowed': isDisabled }
      ]"
      :disabled="isDisabled"
    >
      <slot />
    </button>
  </template>
  
  <script lang="ts">
  export default defineComponent({
    props: {
      variant: {
        type: String as () => 'primary' | 'secondary',
        default: 'primary',
      },
      size: {
        type: String as () => 'sm' | 'md' | 'lg',
        default: 'md',
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      variantClass(): string {
        return this.variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-500 text-black';
      },
      sizeClass(): string {
        switch (this.size) {
          case 'sm':
            return 'text-sm';
          case 'lg':
            return 'text-lg';
          default:
            return 'text-md';
        }
      },
    },
  });
  </script>  