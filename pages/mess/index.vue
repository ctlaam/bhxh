<template>
  <div class="messages-page">
    <!-- Header -->
    <div class="header">
      <h3 class="header-title">Tin nhắn</h3>
    </div>

    <!-- Search Bar -->
    <div class="search-container">
      <a-input v-model="searchText" placeholder="Tìm kiếm" class="search-input">
        <template #prefix>
          <a-icon type="search" style="color: #bfbfbf" />
        </template>
      </a-input>
    </div>

    <!-- Messages List -->
    <div class="messages-list">
      <!-- Single Message Item -->
      <div class="message-item" @click="openChat">
        <div class="d-flex align-items-center">
          <!-- Avatar -->
          <div class="avatar-container">
            <a-avatar :size="50" style="background-color: #1890ff">
              <span class="avatar-text">{{ getInitials('hê hê') }}</span>
            </a-avatar>
          </div>

          <!-- Message Content -->
          <div class="message-content flex-grow-1">
            <div class="d-flex justify-content-between align-items-start">
              <div class="message-info">
                <h6 class="sender-name mb-1">hê hê</h6>
                <p class="message-preview mb-0">1</p>
              </div>
              <div class="message-meta">
                <span class="message-time">11 phút trước đây</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add more message items as needed -->
      <!-- You can use v-for to render multiple messages -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagesPage',
  data() {
    return {
      searchText: '',
      messages: [
        {
          id: 1,
          sender: 'hê hê',
          lastMessage: '1',
          time: '11 phút trước đây',
          avatar: null,
          unread: false,
        },
        // Add more messages here
      ],
    }
  },
  methods: {
    getInitials(name) {
      return name
        .split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    },
    openChat() {
      // Navigate to chat detail
      this.$router.push('/chat/1')
    },
    navigateTo(route) {
      this.$router.push(route)
    },
  },
}
</script>

<style scoped>
.messages-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 80px; /* Space for footer */
}

/* Header */
.header {
  background: linear-gradient(135deg, #1890ff, #40a9ff);
  color: white;
  padding: 20px 0;
  text-align: center;
}

.header-title {
  margin: 0;
  font-weight: 500;
  font-size: 18px;
}

/* Search Container */
.search-container {
  padding: 15px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-input {
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  background: #f9f9f9;
}

.search-input .ant-input {
  background: transparent;
  border: none;
  box-shadow: none;
}

/* Messages List */
.messages-list {
  background: white;
  margin-top: 1px;
}

.message-item {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.message-item:hover {
  background-color: #fafafa;
}

.message-item:last-child {
  border-bottom: none;
}

.avatar-container {
  margin-right: 12px;
}

.avatar-text {
  font-size: 16px;
  font-weight: bold;
}

.message-content {
  min-height: 50px;
}

.sender-name {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.message-preview {
  color: #666;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px;
}

.message-time {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

/* Footer Navigation */
.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 1px solid #e8e8e8;
  padding: 10px 0;
  z-index: 1000;
}

.nav-item {
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 4px;
  transition: all 0.2s;
}

.gray-circle {
  background: #f0f0f0;
  color: #666;
}

.red-circle {
  background: #ff4444;
  color: white;
}

.red-main-circle {
  background: #ff4444;
  color: white;
  flex-direction: column;
  font-weight: bold;
  width: 50px;
  height: 50px;
}

.go-text {
  font-size: 12px;
  line-height: 1;
}

.vietnam-text {
  font-size: 8px;
  line-height: 1;
  margin-top: -2px;
}

.nav-text {
  font-size: 12px;
  color: #666;
  display: block;
}

.nav-item.active .nav-text {
  color: #ff4444;
  font-weight: 500;
}

.nav-item:hover .nav-icon {
  transform: scale(1.05);
}

.nav-item:hover .gray-circle {
  background: #e0e0e0;
}

/* Responsive */
@media (max-width: 576px) {
  .search-container {
    padding: 10px;
  }

  .message-item {
    padding: 12px;
  }

  .nav-icon {
    width: 35px;
    height: 35px;
  }

  .red-main-circle {
    width: 45px;
    height: 45px;
  }

  .nav-text {
    font-size: 11px;
  }
}

/* Additional styles for better UX */
.ant-input::placeholder {
  color: #bfbfbf;
}

.ant-input:focus {
  box-shadow: none;
  border-color: #40a9ff;
}

/* Scroll behavior */
.messages-list {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

/* Loading and empty states */
.empty-messages {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
</style>
