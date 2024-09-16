<template>
  <div class="relative" ref="dropdown">
    <button @click="toggleDropdown" class="px-4 py-2 bg-gray-300 rounded-lg">
      {{ label }}
    </button>
    <div v-if="isOpen" class="absolute bg-white shadow-lg mt-2 w-full">
      <ul>
        <li
          v-for="item in items"
          :key="item"
          class="p-2 hover:bg-gray-100"
          @click="handleItemClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  label: String,
  items: Array,
});

const emit = defineEmits(["select"]);

const isOpen = ref(false);
const dropdown = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item) => {
  isOpen.value = false;
  emit("select", item);
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
