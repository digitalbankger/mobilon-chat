<template>
    <div class="chat-box border p-4 rounded-xl">
      <div class="messages h-64 overflow-y-scroll mb-4 rounded-xl">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="{'message-sender-1': message.sender === 'Пользователь 1', 'message-sender-2': message.sender === 'Пользователь 2'}"
          class="message max-w-[50%] p-2 mb-2 rounded-xl"
        >
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
      
      <div class="flex flex-row items-center justify-between gap-4">
          <input
            v-model="newMessage"
            class="border p-2 w-2/3 rounded-xl"
            type="text"
            placeholder="Введите сообщение"
            @keyup.enter="sendMessage"
          />
          <button @click="sendMessage" class="bg-blue-500 text-white p-2 w-1/3 rounded-xl">Отправить</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  import MessageService from '../services/MessageService';
  
  export default {
    props: ['user'],
    setup(props) {
      const newMessage = ref('');
      const messages = ref([]);
  
      const loadMessages = () => {
        messages.value = MessageService.loadMessages();
      };
  
      const sendMessage = () => {
        if (newMessage.value.trim() === '') return;
  
        const message = {
          sender: props.user,
          text: newMessage.value
        };
  
        MessageService.addMessage(message);
        newMessage.value = '';
        loadMessages();
      };
  
      let messageInterval;
  
      onMounted(() => {
        loadMessages();
        messageInterval = setInterval(loadMessages, 500);
      });
  
      onUnmounted(() => {
        clearInterval(messageInterval);
      });
  
      return {
        newMessage,
        messages,
        sendMessage
      };
    }
  };
  </script>
  
  <style scoped>
  .chat-box {
    height: 300px;
  }
  
  .messages {
    height: 240px;
  }
  
  .message-sender-1 {
    background-color: #e0f7fa;
    text-align: left;
    margin-right: auto;
  }
  
  .message-sender-2 {
    background-color: #fce4ec;
    text-align: right;
    margin-left: auto;
  }
  
  .message {
    border-radius: 10px;
    padding: 8px;
    margin-bottom: 10px;
  }
  </style>  