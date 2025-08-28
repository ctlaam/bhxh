<template>
  <div class="chat-page">
    <!-- Header -->
    <div class="chat-header">
      <div class="header-content">
        <div class="back-button" @click="goBack">
          <a-icon type="left" />
        </div>
        <div class="user-info">
          <a-avatar :size="40" style="background-color: #1890ff">
            <a-icon type="user" />
          </a-avatar>
          <div class="user-details">
            <div class="user-name">testtest</div>
            <div class="user-status">Ngoại tuyến</div>
          </div>
        </div>
        <div class="header-actions">
          <div class="action-button">
            <a-badge :count="1" :offset="[4, 0]">
              <a-icon
                type="exclamation-circle"
                style="color: #ff4d4f; font-size: 20px"
              />
            </a-badge>
          </div>
        </div>
      </div>
    </div>

    <!-- Messages Container -->
    <div class="messages-container" ref="messagesContainer">
      <div class="messages-list">
        <!-- Date Separator -->
        <div class="date-separator">
          <span class="date-text">Thứ Ba, 30:49</span>
        </div>

        <!-- Message from contact -->
        <div class="message-item received">
          <div class="message-content">
            <div class="message-bubble">
              <span class="message-text">abc</span>
            </div>
            <div class="message-status">Đọc</div>
          </div>
          <a-avatar
            :size="30"
            style="background-color: #1890ff; margin-left: 8px"
          >
            <a-icon type="user" />
          </a-avatar>
        </div>

        <!-- Message sent by me -->
        <div class="message-item sent">
          <a-avatar
            :size="30"
            style="background-color: #1890ff; margin-right: 8px"
          >
            <a-icon type="user" />
          </a-avatar>
          <div class="message-content">
            <div class="message-bubble sent-bubble">
              <span class="message-text">ttt</span>
            </div>
            <div class="message-status">Chưa đọc</div>
          </div>
        </div>

        <!-- Another sent message -->
        <div class="message-item sent">
          <a-avatar
            :size="30"
            style="background-color: #1890ff; margin-right: 8px"
          >
            <a-icon type="user" />
          </a-avatar>
          <div class="message-content">
            <div class="message-bubble sent-bubble">
              <span class="message-text">tttt</span>
            </div>
            <div class="message-status">Chưa đọc</div>
          </div>
        </div>

        <!-- Image Message -->
        <div class="message-item sent">
          <a-avatar
            :size="30"
            style="background-color: #1890ff; margin-right: 8px"
          >
            <a-icon type="user" />
          </a-avatar>
          <div class="message-content">
            <div class="image-message">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
                alt="Handbag"
                class="message-image"
                @click="previewImage"
              />
            </div>
            <div class="message-status">Chưa đọc</div>
          </div>
        </div>

        <!-- Another Image Message -->
        <div class="message-item sent">
          <a-avatar
            :size="30"
            style="background-color: #1890ff; margin-right: 8px"
          >
            <a-icon type="user" />
          </a-avatar>
          <div class="message-content">
            <div class="image-message">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
                alt="Handbag"
                class="message-image"
                @click="previewImage"
              />
            </div>
            <div class="message-status">Chưa đọc</div>
          </div>
        </div>

        <!-- Time Separator -->
        <div class="date-separator">
          <span class="date-text">Hôm qua 22:56</span>
        </div>

        <!-- More messages -->
        <div class="message-item sent">
          <a-avatar
            :size="30"
            style="background-color: #1890ff; margin-right: 8px"
          >
            <a-icon type="user" />
          </a-avatar>
          <div class="message-content">
            <div class="message-bubble sent-bubble">
              <span class="message-text">!</span>
            </div>
            <div class="message-status">Chưa đọc</div>
          </div>
        </div>

        <div class="message-item sent">
          <a-avatar
            :size="30"
            style="background-color: #1890ff; margin-right: 8px"
          >
            <a-icon type="user" />
          </a-avatar>
          <div class="message-content">
            <div class="message-bubble sent-bubble">
              <span class="message-text">!</span>
            </div>
            <div class="message-status">Chưa đọc</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="input-area">
      <div class="input-container">
        <div class="input-actions">
          <a-button type="link" class="action-btn" @click="showAttachments">
            <a-icon type="plus" />
          </a-button>
          <a-button type="link" class="action-btn" @click="openCamera">
            <a-icon type="camera" />
          </a-button>
          <a-button type="link" class="action-btn" @click="selectImage">
            <a-icon type="picture" />
          </a-button>
        </div>

        <div class="message-input-wrapper">
          <a-input
            v-model="messageText"
            placeholder="Nhập tin nhắn"
            class="message-input"
            @pressEnter="sendMessage"
          />
        </div>

        <div class="send-actions">
          <a-button type="link" class="action-btn emoji-btn">
            <a-icon type="smile" />
          </a-button>
          <a-button
            type="primary"
            class="send-button"
            @click="sendMessage"
            :disabled="!messageText.trim()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5985E1"
            >
              <path
                d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"
              />
            </svg>
          </a-button>
        </div>
      </div>
    </div>

    <!-- Image Preview Modal -->
    <a-modal
      v-model="imagePreviewVisible"
      :footer="null"
      :centered="true"
      :width="300"
    >
      <img
        :src="previewImageSrc"
        alt="Preview"
        style="width: 100%; height: auto"
      />
    </a-modal>

    <!-- File input (hidden) -->
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      style="display: none"
      @change="handleFileSelect"
    />
  </div>
</template>

<script>
export default {
  layout: 'account',
  name: 'ChatPage',
  data() {
    return {
      messageText: '',
      messages: [],
      imagePreviewVisible: false,
      previewImageSrc: '',
      isTyping: false,
    }
  },
  mounted() {
    this.scrollToBottom()
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },

    sendMessage() {
      if (!this.messageText.trim()) return

      // Add message to list
      const newMessage = {
        id: Date.now(),
        text: this.messageText,
        type: 'sent',
        timestamp: new Date(),
        status: 'sending',
      }

      this.messages.push(newMessage)
      this.messageText = ''

      // Simulate sending
      setTimeout(() => {
        newMessage.status = 'sent'
      }, 1000)

      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },

    selectImage() {
      this.$refs.fileInput.click()
    },

    handleFileSelect(event) {
      const file = event.target.files[0]
      if (file) {
        // Handle image upload
        console.log('Selected file:', file)
        // You would typically upload the file here
      }
    },

    openCamera() {
      // Open camera functionality
      console.log('Open camera')
    },

    showAttachments() {
      // Show attachment options
      console.log('Show attachments')
    },

    previewImage() {
      this.previewImageSrc =
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
      this.imagePreviewVisible = true
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        if (container) {
          container.scrollTop = container.scrollHeight
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f2f5;
}

/* Header */
.chat-header {
  background: white;
  border-bottom: 1px solid #e8e8e8;
  padding: 8px 16px;
}

.header-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.back-button {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;
  color: #666;
}

.back-button:hover {
  background-color: #f0f0f0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.user-status {
  font-size: 12px;
  color: #999;
}

.header-actions {
  display: flex;
  align-items: center;
}

.action-button {
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.action-button:hover {
  background-color: #f0f0f0;
}

/* Messages Container */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background: #f0f2f5;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Date Separator */
.date-separator {
  display: flex;
  justify-content: center;
  margin: 16px 0;
}

.date-text {
  background: rgba(0, 0, 0, 0.05);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
}

/* Message Items */
.message-item {
  display: flex;
  margin-bottom: 8px;
}

.message-item.sent {
  justify-content: flex-end;
}

.message-item.received {
  justify-content: flex-start;
}

.message-content {
  display: flex;
  flex-direction: column;
  max-width: 70%;
}

.message-bubble {
  background: #1890ff;
  color: white;
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 14px;
  word-wrap: break-word;
}

.message-bubble.sent-bubble {
  background: #1890ff;
}

.message-item.received .message-bubble {
  background: white;
  color: #333;
}

.message-status {
  font-size: 11px;
  color: #999;
  margin-top: 4px;
  text-align: right;
}

.message-item.received .message-status {
  text-align: left;
}

/* Image Messages */
.image-message {
  border-radius: 12px;
  overflow: hidden;
  max-width: 200px;
}

.message-image {
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s;
}

.message-image:hover {
  transform: scale(1.02);
}

/* Input Area */
.input-area {
  background: white;
  border-top: 1px solid #e8e8e8;
  padding: 12px 16px;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.input-actions {
  display: flex;
  align-items: center;
}

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.action-btn:hover {
  background-color: #f0f0f0;
}

.message-input-wrapper {
  flex: 1;
  margin: 0 8px;
}

.message-input {
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
}

.message-input .ant-input {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 8px 16px;
}

.send-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.emoji-btn {
  color: #faad14;
}

.send-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: auto;
}

.send-button:disabled {
  opacity: 0.5;
  svg {
  }
}
.send-button svg {
  width: 20px;
  height: 20px;
  color: #fff;
  fill: #fff;
}
/* Responsive */
@media (max-width: 576px) {
  .chat-header {
    padding: 8px 12px;
  }

  .messages-container {
    padding: 12px;
  }

  .input-area {
    padding: 8px 12px;
  }

  .message-content {
    max-width: 85%;
  }

  .image-message {
    max-width: 150px;
  }
}

/* Animations */
.message-item {
  animation: messageSlideIn 0.3s ease-out;
}

@keyframes messageSlideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scrollbar */
.messages-container::-webkit-scrollbar {
  width: 4px;
}

.messages-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.messages-container::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.messages-container::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
