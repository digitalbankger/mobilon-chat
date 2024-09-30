const MESSAGE_KEY = 'chat_messages';

const loadMessages = () => {
  const savedMessages = localStorage.getItem(MESSAGE_KEY);
  return savedMessages ? JSON.parse(savedMessages) : [];
};

const saveMessages = (messages) => {
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(messages));
};

const addMessage = (message) => {
  const messages = loadMessages();
  messages.push(message);
  saveMessages(messages);
};

export default {
  loadMessages,
  saveMessages,
  addMessage
};
