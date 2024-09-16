<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Navbar -->
    <Navbar>
      <a href="#" class="hover:text-blue-400 transition duration-300">Home</a>
      <a href="#" class="hover:text-blue-400 transition duration-300"
        >Features</a
      >
      <a href="#" class="hover:text-blue-400 transition duration-300"
        >Components</a
      >
      <a href="#" class="hover:text-blue-400 transition duration-300"
        >Contact</a
      >
    </Navbar>

    <!-- Header Section -->
    <header
      class="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center py-16"
    >
      <h1 class="text-5xl font-extrabold">Welcome to DannUI</h1>
      <p class="mt-4 text-xl">Modern UI components for Vue.js and Nuxt.js</p>
      <Button
        color="primary"
        size="lg"
        @click="scrollToComponents"
        class="mt-8"
      >
        Explore Components
      </Button>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-16 flex-grow" id="components">
      <!-- Summary Section -->
      <section class="bg-white py-8 shadow-md mb-16">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold text-center mb-6">Summary</h2>
          <ul class="list-disc pl-6">
            <li>
              <a href="#card" class="text-blue-500 hover:underline"
                >Card Component</a
              >
            </li>
            <li>
              <a href="#button" class="text-blue-500 hover:underline"
                >Button Component</a
              >
            </li>
            <li>
              <a href="#alert" class="text-blue-500 hover:underline"
                >Alert Component</a
              >
            </li>
            <li>
              <a href="#dropdown" class="text-blue-500 hover:underline"
                >Dropdown Component</a
              >
            </li>
            <li>
              <a href="#modal" class="text-blue-500 hover:underline"
                >Modal Component</a
              >
            </li>
            <li>
              <a href="#tabs" class="text-blue-500 hover:underline"
                >Tabs Component</a
              >
            </li>
            <li>
              <a href="#accordion" class="text-blue-500 hover:underline"
                >Accordion Component</a
              >
            </li>
            <li>
              <a href="#pagination" class="text-blue-500 hover:underline"
                >Pagination Component</a
              >
            </li>
            <li>
              <a href="#tooltip" class="text-blue-500 hover:underline"
                >Tooltip Component</a
              >
            </li>
          </ul>
        </div>
      </section>

      <!-- Card Section -->
      <section class="mb-16" id="card">
        <h2 class="text-4xl font-bold text-center mb-12">Card Component</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <Card color="white">
            <template #header>
              <h3 class="text-2xl font-semibold">Card Title 1</h3>
            </template>
            <template #content>
              <p class="text-gray-600">
                This is a simple card with a white background.
              </p>
            </template>
            <template #footer>
              <Button color="primary">Learn More</Button>
            </template>
          </Card>
          <Card color="dark">
            <template #header>
              <h3 class="text-2xl font-semibold">Card Title 2</h3>
            </template>
            <template #content>
              <p class="text-gray-400">
                This is a dark-themed card with customized content.
              </p>
            </template>
            <template #footer>
              <Button color="secondary">Get Started</Button>
            </template>
          </Card>
        </div>
      </section>

      <!-- Button Section -->
      <section class="mb-16" id="button">
        <h2 class="text-4xl font-bold text-center mb-12">Button Component</h2>
        <div class="flex justify-center space-x-6">
          <Button color="primary" size="md">Primary</Button>
          <Button color="secondary" size="md">Secondary</Button>
          <Button color="danger" size="md">Danger</Button>
        </div>
      </section>

      <!-- Alert Section -->
      <section class="mb-16" id="alert">
        <h2 class="text-4xl font-bold text-center mb-12">Alert Component</h2>
        <div class="space-y-4">
          <Alert type="info" message="This is an info alert!" />
          <Alert type="success" message="This is a success alert!" />
          <Alert type="warning" message="This is a warning alert!" />
          <Alert type="danger" message="This is a danger alert!" />
        </div>
      </section>

      <!-- Dropdown Section -->
      <section class="mb-16" id="dropdown">
        <h2 class="text-4xl font-bold text-center mb-12">Dropdown Component</h2>
        <div class="flex justify-center">
          <Dropdown
            label="Select an option"
            :items="dropdownItems"
            @select="handleDropdownSelect"
          />
        </div>
        <p class="text-center mt-6 text-lg">Selected: {{ selectedDropdown }}</p>
      </section>

      <!-- Modal Section -->
      <section class="mb-16" id="modal">
        <h2 class="text-4xl font-bold text-center mb-12">Modal Component</h2>
        <div class="flex justify-center">
          <Button color="primary" @click="openModal">Open Modal</Button>
        </div>
        <Modal :isOpen="isModalOpen" @close="closeModal">
          <template #header>
            <h3 class="text-xl font-semibold">Modal Title</h3>
          </template>
          <p class="mt-4">
            This is a customizable modal where you can place any content.
          </p>
          <template #footer>
            <Button color="secondary" @click="closeModal">Close</Button>
          </template>
        </Modal>
      </section>

      <!-- Tabs Section -->
      <section class="mb-16" id="tabs">
        <h2 class="text-4xl font-bold text-center mb-12">Tabs Component</h2>
        <div class="flex justify-center space-x-6">
          <Tabs
            :tabs="[
              { label: 'Tab 1', name: 'tab1' },
              { label: 'Tab 2', name: 'tab2' },
            ]"
          >
            <template #tab1>
              <p>Tab Content 1</p>
            </template>
            <template #tab2>
              <p>Tab Content 2</p>
            </template>
          </Tabs>
        </div>
      </section>

      <!-- Accordion Section -->
      <section class="mb-16" id="accordion">
        <h2 class="text-4xl font-bold text-center mb-12">
          Accordion Component
        </h2>
        <Accordion title="Accordion 1">
          <p>Accordion Content 1</p>
        </Accordion>
        <Accordion title="Accordion 2">
          <p>Accordion Content 2</p>
        </Accordion>
      </section>

      <!-- Pagination Section -->
      <section class="mb-16" id="pagination">
        <h2 class="text-4xl font-bold text-center mb-12">
          Pagination Component
        </h2>
        <Pagination
          :totalPages="5"
          :currentPage="currentPage"
          @update:page="handlePageChange"
        />
      </section>

      <!-- Tooltip Section -->
      <section class="mb-16" id="tooltip">
        <h2 class="text-4xl font-bold text-center mb-12">Tooltip Component</h2>
        <div class="flex justify-center">
          <Tooltip text="Tooltip Example">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Hover me
            </button>
          </Tooltip>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 rounded-t-lg text-white text-center py-6">
      <p>
        Developed by
        <a
          href="https://github.com/DannielLima"
          class="underline hover:text-blue-400 transition"
          target="_blank"
          >Danniel Lima</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "~/components/Navbar.vue";
import Button from "~/components/Button.vue";
import Card from "~/components/Card.vue";
import Modal from "~/components/Modal.vue";
import Alert from "~/components/Alert.vue";
import Dropdown from "~/components/Dropdown.vue";
import Tabs from "~/components/Tabs.vue";
import Accordion from "~/components/Accordion.vue";
import Pagination from "~/components/Pagination.vue";
import Tooltip from "~/components/Tooltip.vue";

const isModalOpen = ref(false);
const openModal = () => (isModalOpen.value = true);
const closeModal = () => (isModalOpen.value = false);

const selectedDropdown = ref("");
const dropdownItems = ["Option 1", "Option 2", "Option 3"];
const handleDropdownSelect = (item) => {
  selectedDropdown.value = item;
};

const scrollToComponents = () => {
  const section = document.getElementById("components");
  section.scrollIntoView({ behavior: "smooth" });
};

const currentPage = ref(1);

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
};
</script>

<style scoped>
header {
  background-size: cover;
  background-position: center;
}

button {
  transition: transform 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

.card {
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
