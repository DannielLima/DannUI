<template>
    <div class="p-8 space-y-4">
      <Button variant="primary" size="lg">Primary Button</Button>
      <Button variant="secondary" size="md" :isDisabled="true">Secondary Button (Disabled)</Button>
  
      <Card>
        <h2 class="text-xl font-bold">This is a Card Component</h2>
        <p>This card can be used to display content with some padding and shadow.</p>
      </Card>
    </div>
  </template>
  
  <script lang="ts">
  import Button from '@/components/Button.vue';
  import Card from '@/components/Card.vue';
  
  export default defineComponent({
    components: {
      Button,
      Card,
    },
  });
  </script>  