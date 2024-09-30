<template>
  <div class="container mx-auto p-4">
    <div class="flex gap-10">
      <div class="w-1/2">
        <h2 class="text-xl font-bold mb-4">Пользователь 1</h2>
        <ChatComponent user="Пользователь 1" />
      </div>
      <div class="w-1/2">
        <h2 class="text-xl font-bold mb-4">Пользователь 2</h2>
        <ChatComponent user="Пользователь 2" />
      </div>
    </div>
  </div>
</template>

<script>
import ChatComponent from './components/ChatComponent.vue';

export default {
  components: {
    ChatComponent
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>  