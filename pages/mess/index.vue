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

    <!-- Loading State -->
    <div v-if="loading" class="loading-container">
      <a-spin size="large" />
    </div>

    <!-- Empty State -->
    <div v-else-if="filteredConversations.length === 0" class="empty-messages">
      <a-icon type="message" :style="{ fontSize: '48px', color: '#d9d9d9' }" />
      <p>{{ searchText ? 'Không tìm thấy cuộc trò chuyện nào' : 'Chưa có tin nhắn nào' }}</p>
      <p class="sub-text">{{ searchText ? 'Thử tìm kiếm với từ khóa khác' : 'Bắt đầu trò chuyện mới từ danh bạ' }}</p>
    </div>

    <!-- Messages List -->
    <div v-else class="messages-list">
      <!-- Single Message Item -->
      <div
        v-for="conversation in filteredConversations"
        :key="conversation.id"
        class="message-item"
        :class="{ 'unread': conversation.unreadCount > 0 }"
        @click="openChat(conversation)"
      >
        <div class="d-flex align-items-center">
          <!-- Avatar -->
          <div class="avatar-container">
            <a-badge :count="conversation.unreadCount" :offset="[-5, 5]">
              <a-avatar
                :size="50"
                :style="{
                  backgroundColor: conversation.type === 'dm' ? '#1890ff' : '#722ed1'
                }"
              >
                <a-icon v-if="conversation.type === 'group'" type="team" />
                <span v-else class="avatar-text">{{ getInitials(conversation.name) }}</span>
              </a-avatar>
            </a-badge>
          </div>

          <!-- Message Content -->
          <div class="message-content flex-grow-1">
            <div class="d-flex justify-content-between align-items-start">
              <div class="message-info">
                <h6 class="sender-name mb-1">
                  {{ conversation.name }}
                  <span v-if="conversation.type === 'group'" class="group-badge">Nhóm</span>
                </h6>
                <p class="message-preview mb-0">
                  <span v-if="conversation.lastMessage">
                    <strong v-if="conversation.lastMessage.from">{{ conversation.lastMessage.from }}:</strong>
                    {{ conversation.lastMessage.text }}
                  </span>
                  <span v-else class="no-message">Chưa có tin nhắn</span>
                </p>
              </div>
              <div class="message-meta">
                <span class="message-time">{{ formatTime(conversation.updatedAt || conversation.lastMessage?.ts) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Refresh Button -->
    <a-button
      type="primary"
      shape="circle"
      size="large"
      class="refresh-button"
      @click="loadConversations"
      :loading="loading"
    >
      <a-icon type="reload" />
    </a-button>
  </div>
</template>

<script>
import * as chatApi from '@/api/chat'
import Cookies from 'js-cookie'

export default {
  name: 'MessagesPage',
  data() {
    return {
      searchText: '',
      conversations: [],
      loading: false,
      refreshInterval: null,
    }
  },

  computed: {
    filteredConversations() {
      if (!this.searchText) {
        return this.conversations
      }

      const searchLower = this.searchText.toLowerCase()
      return this.conversations.filter(conv => {
        // Tìm theo tên
        if (conv.name && conv.name.toLowerCase().includes(searchLower)) {
          return true
        }
        // Tìm theo nội dung tin nhắn cuối
        if (conv.lastMessage?.text && conv.lastMessage.text.toLowerCase().includes(searchLower)) {
          return true
        }
        // Tìm theo người gửi tin nhắn cuối
        if (conv.lastMessage?.from && conv.lastMessage.from.toLowerCase().includes(searchLower)) {
          return true
        }
        return false
      })
    }
  },

  async mounted() {
    await this.checkAuth()
    await this.loadConversations()

    // Auto refresh mỗi 10 giây
    this.refreshInterval = setInterval(() => {
      this.loadConversations(true) // silent refresh
    }, 10000)
  },

  beforeDestroy() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval)
    }
  },

  methods: {
    async checkAuth() {
      const token = Cookies.get('access_token')
      if (!token) {
        this.$message.warning('Vui lòng đăng nhập để xem tin nhắn')
        this.$router.push('/login')
        return false
      }
      return true
    },

    async loadConversations(silent = false) {
      if (!silent) {
        this.loading = true
      }

      try {
        const response = await chatApi.getConversations()

        if (response.data?.ok) {
          this.conversations = response.data.conversations || []

          // Sắp xếp theo thời gian mới nhất
          this.conversations.sort((a, b) => {
            const timeA = new Date(a.updatedAt || a.lastMessage?.ts || 0).getTime()
            const timeB = new Date(b.updatedAt || b.lastMessage?.ts || 0).getTime()
            return timeB - timeA
          })

          // Tính tổng số tin nhắn chưa đọc
          const totalUnread = this.conversations.reduce((sum, conv) => sum + (conv.unreadCount || 0), 0)
          if (totalUnread > 0) {
            document.title = `(${totalUnread}) Tin nhắn - GoVietNam`
          } else {
            document.title = 'Tin nhắn - GoVietNam'
          }
        } else {
          throw new Error('Invalid response')
        }
      } catch (error) {
        console.error('Load conversations error:', error)
        if (!silent) {
          this.$message.error('Không thể tải danh sách tin nhắn')
        }

        // Nếu lỗi 401, redirect về login
        if (error.response?.status === 401) {
          this.$router.push('/login')
        }
      } finally {
        this.loading = false
      }
    },

    getInitials(name) {
      if (!name) return '?'
      return name
        .split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    },

    formatTime(timestamp) {
      if (!timestamp) return ''

      const date = new Date(timestamp)
      const now = new Date()
      const diff = now - date

      // Dưới 1 phút
      if (diff < 60000) {
        return 'Vừa xong'
      }

      // Dưới 1 giờ
      if (diff < 3600000) {
        const minutes = Math.floor(diff / 60000)
        return `${minutes} phút trước`
      }

      // Dưới 24 giờ
      if (diff < 86400000) {
        const hours = Math.floor(diff / 3600000)
        return `${hours} giờ trước`
      }

      // Dưới 7 ngày
      if (diff < 604800000) {
        const days = Math.floor(diff / 86400000)
        return `${days} ngày trước`
      }

      // Format ngày tháng
      return date.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      })
    },

    openChat(conversation) {
      if (conversation.type === 'dm') {
        // Mở chat DM với user
        this.$router.push(`/chat?name=${encodeURIComponent(conversation.name)}`)
      } else if (conversation.type === 'group') {
        // Mở chat group
        const groupId = conversation.id.replace('group_', '') // Loại bỏ prefix nếu có
        this.$router.push(`/chat?groupId=${encodeURIComponent(groupId)}`)
      }
    },
  },

  watch: {
    // Khi quay lại trang, reload conversations
    '$route'(to) {
      if (to.path === '/messages') {
        this.loadConversations(true)
      }
    }
  }
}
</script>

<style scoped>
.messages-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 80px;
  position: relative;
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
  position: sticky;
  top: 0;
  z-index: 100;
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
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.message-item {
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.message-item:hover {
  background-color: #fafafa;
}

.message-item.unread {
  background-color: #e6f7ff;
}

.message-item.unread:hover {
  background-color: #d6efff;
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
  flex: 1;
  overflow: hidden;
}

.sender-name {
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.group-badge {
  display: inline-block;
  padding: 2px 6px;
  background: #722ed1;
  color: white;
  font-size: 10px;
  border-radius: 4px;
  font-weight: normal;
}

.message-preview {
  color: #666;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: calc(100vw - 150px);
}

.message-preview strong {
  color: #999;
  font-weight: normal;
  margin-right: 4px;
}

.no-message {
  color: #bfbfbf;
  font-style: italic;
}

.message-time {
  font-size: 12px;
  color: #999;
  white-space: nowrap;
}

.message-item.unread .message-time {
  color: #1890ff;
  font-weight: 500;
}

/* Loading and Empty states */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
  background: white;
  margin-top: 1px;
}

.empty-messages {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  background: white;
  margin-top: 1px;
}

.empty-messages p {
  margin: 8px 0;
}

.sub-text {
  font-size: 12px;
  color: #bfbfbf;
}

/* Refresh Button */
.refresh-button {
  position: fixed;
  bottom: 100px;
  right: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;
}

/* Badge customization */
.ant-badge-count {
  background-color: #ff4d4f;
  box-shadow: 0 0 0 2px #fff;
}

/* Responsive */
@media (max-width: 576px) {
  .search-container {
    padding: 10px;
  }

  .message-item {
    padding: 12px;
  }

  .message-preview {
    max-width: calc(100vw - 120px);
  }

  .refresh-button {
    bottom: 90px;
    right: 15px;
  }
}

/* Scrollbar styling */
.messages-list::-webkit-scrollbar {
  width: 6px;
}

.messages-list::-webkit-scrollbar-track {
  background: transparent;
}

.messages-list::-webkit-scrollbar-thumb {
  background: #d9d9d9;
  border-radius: 3px;
}

.messages-list::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf;
}

/* Animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-item {
  animation: slideIn 0.3s ease;
}
</style>
