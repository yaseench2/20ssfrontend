<script>
export default {
    name:'WhatsappChat',
  data() {
    return {
      isChatOpen: false,
      message: ''
    };
  },
 
};
</script>

<template>
    <div class="floating-chat">
      <a href="https://wa.me/message/YBNVGLOCOPMYF1"><button class="chat-icon fa fa-whatsapp" @click="toggleChat">
      </button></a>
    </div>
  </template>
  

<style scoped>
.floating-chat {
  position: fixed;
  z-index: 4;
  bottom: 20px;
  right: 20px;
}

.chat-icon {
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.chat-window {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  position: absolute;
  bottom: 80px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
}
</style>