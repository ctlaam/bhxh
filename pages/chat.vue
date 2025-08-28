<template>
  <div class="chat-page">
    <!-- Header -->
    <div class="chat-header">
      <div class="header-left">
        <a-icon
          type="arrow-left"
          class="back-icon"
          @click="$router.push('/address')"
        />
        <div class="chat-info">
          <h3 class="chat-title">{{ currentChatName }}</h3>
          <span class="chat-type">{{ currentChatType }}</span>
        </div>
      </div>
      <div class="header-actions">
        <a-icon
          type="info-circle"
          class="action-icon"
          @click="showInfo = true"
        />
      </div>
    </div>

    <!-- Messages Container -->
    <div class="messages-container" ref="messageContainer">
      <div v-if="loading" class="loading-container">
        <a-spin size="large" />
      </div>

      <div v-else-if="messages.length === 0" class="empty-messages">
        <a-icon
          type="message"
          :style="{ fontSize: '48px', color: '#d9d9d9' }"
        />
        <p>Chưa có tin nhắn nào</p>
        <p class="sub-text">Hãy bắt đầu cuộc trò chuyện!</p>
      </div>

      <div v-else class="messages-list">
        <!-- Date separator -->
        <div
          v-for="(group, date) in groupedMessages"
          :key="date"
          class="message-group"
        >
          <div class="date-separator">
            <span>{{ formatDate(date) }}</span>
          </div>

          <!-- Messages -->
          <div
            v-for="(message, idx) in group"
            :key="message._id || message.timestamp || idx"
            class="message-wrapper"
            :class="{ 'own-message': isOwnMessage(message) }"
          >
            <!-- Avatar (other) -->
            <div
              v-if="!isOwnMessage(message)"
              class="message-avatar avatar-left"
            >
              <a-avatar
                :size="36"
                :src="getAvatarSrc(message)"
                :style="getAvatarStyle(message)"
              >
                {{ getAvatarFallbackChar(message) }}
              </a-avatar>
            </div>

            <div class="message-bubble">
              <div class="message-content">
                <template v-if="message.messageType === 'image'">
                  <img
                    :src="`${domain}${message.imageUrl}`"
                    class="chat-image"
                    @click="openImageModal(`${domain}${message.imageUrl}`)"
                    style="cursor: pointer"
                  />
                  <div v-if="message.text" class="caption">
                    {{ message.text }}
                  </div>
                </template>
                <template v-else>
                  {{ message.text }}
                </template>
              </div>
              <div class="message-meta">
                <span class="message-sender">{{
                  getMessageSender(message)
                }}</span>
                <span class="message-time">{{
                  formatTime(message.createdAt || message.ts)
                }}</span>
              </div>
            </div>

            <!-- Avatar (own) -->
            <div
              v-if="isOwnMessage(message)"
              class="message-avatar avatar-right"
            >
              <a-avatar
                :size="36"
                :src="getAvatarSrc(message)"
                :style="getAvatarStyle(message, true)"
              >
                {{ getAvatarFallbackChar(message, true) }}
              </a-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Input Container -->
    <div class="input-container">
      <div class="input-wrapper">
        <input
          v-model="messageText"
          type="text"
          placeholder="Nhập tin nhắn..."
          class="message-input"
          @keyup.enter="sendMessage"
          :disabled="!isConnected"
        />
        <input
          ref="imageInput"
          type="file"
          accept="image/*"
          style="display: none"
          @change="handleImageUpload"
        />
        <button
          class="send-button"
          @click="$refs.imageInput.click()"
          :disabled="!isConnected"
        >
          <a-icon type="picture" />
        </button>
        <button
          class="send-button"
          @click="sendMessage"
          :disabled="!messageText.trim() || !isConnected"
        >
          <!-- plane icon -->

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
        </button>
      </div>
    </div>

    <!-- Connection Status -->
    <div v-if="!isConnected" class="connection-status">
      <a-icon type="disconnect" />
      <span>Đang kết nối...</span>
    </div>

    <!-- Info Drawer -->
    <a-drawer
      title="Thông tin"
      placement="right"
      :visible="showInfo"
      @close="showInfo = false"
      :width="320"
    >
      <div class="info-content">
        <div class="info-avatar">
          <a-avatar :size="80" :style="{ backgroundColor: '#1890ff' }">
            {{ currentChatName ? currentChatName[0].toUpperCase() : '?' }}
          </a-avatar>
        </div>
        <h3 class="info-name">{{ currentChatName }}</h3>
        <p class="info-type">
          {{ currentChatType === 'dm' ? 'Tin nhắn riêng' : 'Nhóm chat' }}
        </p>

        <div v-if="currentChatType === 'group'" class="group-members">
          <h4>Thành viên nhóm</h4>
          <div v-for="member in groupMembers" :key="member" class="member-item">
            <a-avatar :size="32" :style="{ backgroundColor: '#52c41a' }">
              {{ member[0].toUpperCase() }}
            </a-avatar>
            <span>{{ member }}</span>
          </div>
        </div>

        <div class="info-actions">
          <a-button block @click="clearHistory">
            <a-icon type="delete" /> Xóa lịch sử chat
          </a-button>
          <a-button
            v-if="currentChatType === 'dm'"
            block
            danger
            @click="blockUser"
          >
            <a-icon type="stop" /> Chặn người dùng
          </a-button>
        </div>
      </div>
    </a-drawer>
    <a-modal
      v-model="showImageModal"
      :footer="null"
      centered
      width="80%"
      class="image-preview-modal"
    >
      <img :src="selectedImageUrl" class="modal-image" />
    </a-modal>
  </div>
</template>

<script>
import io from 'socket.io-client'
import * as chatApi from '@/api/chat'
import Cookies from 'js-cookie'

export default {
  name: 'ChatPage',
  data() {
    return {
      // Socket
      socket: null,
      isConnected: false,

      // Chat info
      currentChatType: null, // 'dm' or 'group'
      currentChatId: null,
      currentChatName: '',

      // Messages
      messages: [],
      messageText: '',
      loading: false,

      // UI
      showInfo: false,

      // User info
      myId: null,
      myName: null,

      // Group info
      groupMembers: [],

      // Query params
      queryUserName: null,
      queryGroupId: null,
      domain: process.env.BASE_URL_IMAGE,
      showImageModal: false,
      selectedImageUrl: '',
    }
  },

  computed: {
    groupedMessages() {
      const groups = {}
      this.messages.forEach((msg) => {
        const date = this.getMessageDate(msg.createdAt || msg.ts)
        if (!groups[date]) groups[date] = []
        groups[date].push(msg)
      })
      return groups
    },
  },

  async created() {
    this.queryUserName = this.$route.query.name || null
    this.queryGroupId = this.$route.query.groupId || null
    console.log('Query params:', {
      name: this.queryUserName,
      groupId: this.queryGroupId,
    })
  },

  async mounted() {
    await this.initializeChat()
  },

  beforeDestroy() {
    if (this.socket) this.socket.disconnect()
  },

  methods: {
    openImageModal(url) {
      this.selectedImageUrl = url
      this.showImageModal = true
    },
    async handleImageUpload(event) {
      const file = event.target.files[0]
      if (!file) return

      const formData = new FormData()
      formData.append('file', file)

      try {
        const response = await chatApi.uploadImage(formData)
        const imageUrl = response.data?.path || response.url
        if (!imageUrl) throw new Error('Không nhận được đường dẫn ảnh')

        // Gửi tin nhắn ảnh
        if (this.currentChatType === 'dm') {
          this.socket.emit(
            'dm:send',
            {
              toId: this.currentChatId,
              messageType: 'image',
              imageUrl,
              text: '', // caption nếu muốn
            },
            (res) => {
              if (!res?.ok) {
                this.$message.error(res?.error || 'Gửi ảnh thất bại')
              }
            }
          )
        } else if (this.currentChatType === 'group') {
          this.socket.emit(
            'group:send',
            {
              groupId: this.currentChatId,
              messageType: 'image',
              imageUrl,
              text: '', // caption nếu muốn
            },
            (res) => {
              if (!res?.ok) {
                this.$message.error(res?.error || 'Gửi ảnh thất bại')
              }
            }
          )
        }
      } catch (error) {
        console.error('Upload image error:', error)
        this.$message.error('Tải ảnh thất bại')
      } finally {
        // Reset input để có thể upload lại cùng ảnh sau nếu cần
        event.target.value = ''
      }
    },
    async initializeChat() {
      const token = Cookies.get('access_token')
      if (!token) {
        this.$message.warning('Vui lòng đăng nhập để sử dụng chat')
        this.$router.push('/login')
        return
      }

      try {
        const response = await chatApi.getProfile()
        this.myId = response.data.user._id
        this.myName = response.data.user.name
      } catch (error) {
        console.error('Auth error:', error)
        this.$message.error('Phiên đăng nhập hết hạn')
        this.$router.push('/login')
        return
      }

      if (this.queryUserName) {
        await this.loadUserFromQuery(this.queryUserName)
      } else if (this.queryGroupId) {
        await this.loadGroupFromQuery(this.queryGroupId)
      } else {
        const chatTarget = JSON.parse(
          localStorage.getItem('chatTarget') || 'null'
        )
        if (!chatTarget) {
          this.$message.warning('Vui lòng chọn người để chat')
          this.$router.push('/address')
          return
        }
        this.currentChatType = chatTarget.type
        this.currentChatId = chatTarget.id
        this.currentChatName = chatTarget.name || 'Unknown'
      }

      this.initSocket(token)
      await this.loadChatHistory()
      if (this.currentChatType === 'group') await this.loadGroupMembers()
    },

    async loadUserFromQuery(userName) {
      try {
        const userResponse = await chatApi.getUserByName(userName)
        if (!userResponse.data?.ok) {
          this.$message.error('Không tìm thấy người dùng: ' + userName)
          this.$router.push('/address')
          return
        }
        const user = userResponse.data.user
        this.currentChatType = 'dm'
        this.currentChatId = user._id
        this.currentChatName = user.name || userName
        localStorage.setItem(
          'chatTarget',
          JSON.stringify({
            type: 'dm',
            id: user._id,
            name: user.name || userName,
          })
        )
      } catch (error) {
        console.error('Error loading user from query:', error)
        this.$message.error('Không thể tải thông tin người dùng')
        this.$router.push('/address')
      }
    },

    async loadGroupFromQuery(groupId) {
      try {
        const groupsResponse = await chatApi.getGroups()
        const groups = groupsResponse.data || []
        const group = groups.find((g) => g.id === groupId)

        if (!group) {
          this.$message.error('Không tìm thấy nhóm: ' + groupId)
          this.$router.push('/address')
          return
        }
        if (!group.members || !group.members.includes(this.myName)) {
          this.$message.error('Bạn không phải là thành viên của nhóm này')
          this.$router.push('/address')
          return
        }

        this.currentChatType = 'group'
        this.currentChatId = groupId
        this.currentChatName = group.name || groupId
        localStorage.setItem(
          'chatTarget',
          JSON.stringify({
            type: 'group',
            id: groupId,
            name: group.name || groupId,
          })
        )
      } catch (error) {
        console.error('Không thể tải thông tin nhóm', error)
        this.$message.error('Không thể tải thông tin nhóm')
        this.$router.push('/address')
      }
    },

    initSocket(token) {
      const baseURL =
        process.env.BASE_URL || 'https://api.soatdonctv.online/api'
      const socketUrl = baseURL.replace('/api', '')

      this.socket = io(socketUrl, {
        auth: { token },
        transports: ['websocket', 'polling'],
      })

      this.socket.on('connect', () => {
        this.isConnected = true
        this.$message.success('Đã kết nối')
      })
      this.socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error)
        this.isConnected = false
        this.$message.error('Lỗi kết nối: ' + error.message)
      })
      this.socket.on('disconnect', () => {
        this.isConnected = false
      })

      // Message events (đã có senderAvatar từ server)
      this.socket.on('dm:new', (message) => {
        if (this.currentChatType === 'dm') {
          if (
            (message.fromId === this.myId &&
              message.toId === this.currentChatId) ||
            (message.toId === this.myId &&
              message.fromId === this.currentChatId)
          ) {
            this.messages.push(message)
            this.$nextTick(() => this.scrollToBottom())
          }
        }
      })

      this.socket.on('group:new', (message) => {
        if (
          this.currentChatType === 'group' &&
          message.groupId === this.currentChatId
        ) {
          this.messages.push(message)
          this.$nextTick(() => this.scrollToBottom())
        }
      })
    },

    async loadChatHistory() {
      if (!this.currentChatId || !this.currentChatType) return
      this.loading = true
      try {
        if (this.currentChatType === 'dm') {
          this.socket.emit(
            'dm:history',
            { withUserId: this.currentChatId, limit: 100 },
            (messages) => {
              this.messages = messages || []
              this.$nextTick(() => this.scrollToBottom())
            }
          )
        } else if (this.currentChatType === 'group') {
          this.socket.emit(
            'group:history',
            { groupId: this.currentChatId, limit: 100 },
            (messages) => {
              this.messages = messages || []
              this.$nextTick(() => this.scrollToBottom())
            }
          )
        }
      } catch (error) {
        console.error('Load history error:', error)
        this.$message.error('Không thể tải lịch sử chat')
      } finally {
        this.loading = false
      }
    },

    async loadGroupMembers() {
      try {
        const response = await chatApi.getGroups()
        const group = response.data.find((g) => g.id === this.currentChatId)
        if (group) this.groupMembers = group.members || []
      } catch (error) {
        console.error('Load group members error:', error)
      }
    },

    sendMessage() {
      const text = this.messageText.trim()
      if (!text || !this.isConnected) return

      if (this.currentChatType === 'dm') {
        this.socket.emit(
          'dm:send',
          { toId: this.currentChatId, text },
          (response) => {
            if (!response?.ok)
              this.$message.error(response?.error || 'Không thể gửi tin nhắn')
          }
        )
      } else if (this.currentChatType === 'group') {
        this.socket.emit(
          'group:send',
          { groupId: this.currentChatId, text },
          (response) => {
            if (!response?.ok)
              this.$message.error(response?.error || 'Không thể gửi tin nhắn')
          }
        )
      }
      this.messageText = ''
    },

    // === Avatar helpers ===
    getAvatarSrc(message) {
      // ưu tiên senderAvatar từ server; fallback 'avatar' nếu backend từng trả tên khác
      return message.senderAvatar || message.avatar || ''
    },
    getAvatarFallbackChar(message, isOwn = false) {
      const name = isOwn ? this.myName || '' : message.from || ''
      return name && name[0] ? name[0].toUpperCase() : '?'
    },
    getAvatarStyle(message, isOwn = false) {
      // Nếu có ảnh thì không cần nền; nếu không có ảnh thì đặt màu nền khác nhau
      if (this.getAvatarSrc(message)) return {}
      return { backgroundColor: isOwn ? '#1890ff' : '#52c41a', color: '#fff' }
    },

    isOwnMessage(message) {
      return message.fromId === this.myId || message.from === this.myName
    },
    getMessageSender(message) {
      if (this.isOwnMessage(message)) return 'Bạn'
      return message.from || 'Unknown'
    },

    getMessageDate(timestamp) {
      const date = new Date(timestamp)
      return date.toDateString()
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      const today = new Date()
      if (date.toDateString() === today.toDateString()) return 'Hôm nay'
      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      if (date.toDateString() === yesterday.toDateString()) return 'Hôm qua'
      return date.toLocaleDateString('vi-VN')
    },
    formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
      })
    },
    scrollToBottom() {
      const container = this.$refs.messageContainer
      if (container) container.scrollTop = container.scrollHeight
    },
    clearHistory() {
      this.$confirm({
        title: 'Xác nhận xóa',
        content: 'Bạn có chắc chắn muốn xóa toàn bộ lịch sử chat?',
        okText: 'Xóa',
        cancelText: 'Hủy',
        onOk: () => {
          this.messages = []
          this.$message.success('Đã xóa lịch sử chat')
        },
      })
    },
    async blockUser() {
      if (this.currentChatType !== 'dm') return
      try {
        await chatApi.addBlock(this.currentChatId)
        this.$message.success('Đã chặn người dùng')
        this.$router.push('/address')
      } catch (error) {
        console.error('Block user error:', error)
        this.$message.error('Không thể chặn người dùng')
      }
    },
  },

  watch: {
    '$route.query': {
      handler(newQuery) {
        if (newQuery.name && newQuery.name !== this.queryUserName) {
          this.queryUserName = newQuery.name
          this.queryGroupId = null
          this.initializeChat()
        } else if (newQuery.groupId && newQuery.groupId !== this.queryGroupId) {
          this.queryGroupId = newQuery.groupId
          this.queryUserName = null
          this.initializeChat()
        }
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.chat-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f0f2f5;
}

/* Header */
.chat-header {
  background: white;
  padding: 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}
.back-icon {
  font-size: 20px;
  cursor: pointer;
  color: #595959;
  transition: color 0.2s;
}
.back-icon:hover {
  color: #1890ff;
}
.chat-info {
  display: flex;
  flex-direction: column;
}
.chat-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
}
.chat-type {
  font-size: 12px;
  color: #8c8c8c;
  text-transform: uppercase;
}
.header-actions {
  display: flex;
  gap: 20px;
}
.action-icon {
  font-size: 20px;
  cursor: pointer;
  color: #595959;
  transition: color 0.2s;
}
.action-icon:hover {
  color: #1890ff;
}

/* Messages Container */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background: linear-gradient(180deg, #e6f7ff 0%, #f0f2f5 100%);
}
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.empty-messages {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #8c8c8c;
}
.empty-messages p {
  margin: 8px 0;
}
.sub-text {
  font-size: 12px;
  color: #bfbfbf;
}

/* Messages */
.messages-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.message-group {
  margin-bottom: 20px;
}

.date-separator {
  text-align: center;
  margin: 20px 0;
  position: relative;
}
.date-separator span {
  background: #f0f2f5;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #8c8c8c;
  position: relative;
  z-index: 1;
}
.date-separator::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #d9d9d9;
}

/* Row + avatar + bubble */
.message-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 8px;
}
.message-wrapper.own-message {
  justify-content: flex-end;
}
.message-avatar {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.avatar-left {
  order: 0;
}
.avatar-right {
  order: 2;
}
.message-bubble {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  order: 1;
}
.own-message .message-bubble {
  background: #1890ff;
  color: white;
}

.message-content {
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.5;
}
.message-meta {
  display: flex;
  gap: 8px;
  margin-top: 4px;
  font-size: 11px;
  opacity: 0.7;
}
.own-message .message-meta {
  color: white;
  opacity: 0.9;
}

/* Input Container */
.input-container {
  background: white;
  padding: 12px 20px;
  border-top: 1px solid #e8e8e8;
  padding-bottom: 120px;
}
.input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f5f5f5;
  border-radius: 24px;
  padding: 8px 16px;
}
.message-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 14px;
  padding: 4px 0;
}
.message-input::placeholder {
  color: #bfbfbf;
}
.send-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1890ff;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.send-button:hover:not(:disabled) {
  background: #40a9ff;
  transform: scale(1.05);
}
.send-button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
  svg {
  }
}
.send-button svg {
  width: 20px;
  height: 20px;
  color: #fff;
  fill: #fff;
}

/* Connection Status */
.connection-status {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff3cd;
  color: #856404;
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Info Drawer */
.info-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
.info-avatar {
  margin-bottom: 16px;
}
.info-name {
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
}
.info-type {
  color: #8c8c8c;
  font-size: 14px;
  margin-bottom: 24px;
}
.group-members {
  width: 100%;
  margin-bottom: 24px;
}
.group-members h4 {
  margin-bottom: 12px;
  color: #595959;
}
.member-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
}
.info-actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Responsive */
@media (max-width: 768px) {
  .message-bubble {
    max-width: 85%;
  }
  .chat-title {
    font-size: 14px;
  }
  .header-actions {
    gap: 16px;
  }
  .action-icon {
    font-size: 18px;
  }
}

/* Scrollbar styling */
.messages-container::-webkit-scrollbar {
  width: 6px;
}
.messages-container::-webkit-scrollbar-track {
  background: transparent;
}
.messages-container::-webkit-scrollbar-thumb {
  background: #d9d9d9;
  border-radius: 3px;
}
.messages-container::-webkit-scrollbar-thumb:hover {
  background: #bfbfbf;
}
.chat-image {
  max-width: 300px;
  width: 50vw;
  border-radius: 12px;
  object-fit: contain;
}
.image-preview-modal .modal-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}
</style>
