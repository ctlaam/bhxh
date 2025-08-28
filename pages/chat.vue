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
        <a-icon type="info-circle" class="action-icon" @click="showInfo = true" />
      </div>
    </div>

    <!-- Messages Container -->
    <div class="messages-container" ref="messageContainer">
      <div v-if="loading" class="loading-container">
        <a-spin size="large" />
      </div>

      <div v-else-if="messages.length === 0" class="empty-messages">
        <a-icon type="message" :style="{ fontSize: '48px', color: '#d9d9d9' }" />
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
            v-for="message in group"
            :key="message._id || message.timestamp"
            class="message-wrapper"
            :class="{ 'own-message': isOwnMessage(message) }"
          >
            <div class="message-bubble">
              <div class="message-content">
                {{ message.text }}
              </div>
              <div class="message-meta">
                <span class="message-sender">{{ getMessageSender(message) }}</span>
                <span class="message-time">{{ formatTime(message.createdAt || message.ts) }}</span>
              </div>
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
        <button
          class="send-button"
          @click="sendMessage"
          :disabled="!messageText.trim() || !isConnected"
        >
          <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#EB86BF;" d="M512,256.006C512,397.402,397.394,512.004,256.004,512C114.606,512.004,0,397.402,0,256.006 C-0.007,114.61,114.606,0,256.004,0C397.394,0,512,114.614,512,256.006z"></path> <path style="fill:#D670AD;" d="M512,256.005c0-25.326-3.734-49.769-10.583-72.871c-0.214-0.239-84.493-84.561-84.845-84.865 c-0.27-0.234-0.53-0.455-0.829-0.644c-0.131-0.083-0.225-0.206-0.363-0.282c-0.241-0.132-0.507-0.164-0.757-0.266 c-0.345-0.141-0.676-0.279-1.039-0.364c-0.416-0.097-0.827-0.123-1.249-0.143c-0.353-0.019-0.695-0.052-1.052-0.016 c-0.485,0.049-0.942,0.191-1.407,0.337c-0.231,0.074-0.473,0.068-0.7,0.167L97.285,231.742c-2.558,1.107-4.234,3.606-4.278,6.396 c-0.036,2.254,1.036,4.317,2.772,5.668c0.338,0.419,117.515,117.633,117.732,117.84v46.726c0,2.113,0.993,4,2.521,5.316 c0.318,0.434,91.723,91.78,92.133,92.133c0.193,0.263,0.45,0.47,0.691,0.691C424.88,482.159,512,379.278,512,256.005z"></path> <path style="fill:#F4F6F9;" d="M418.993,103.565c0-0.439-0.018-0.863-0.098-1.289c-0.061-0.326-0.157-0.634-0.265-0.951 c-0.15-0.445-0.334-0.861-0.569-1.267c-0.087-0.151-0.111-0.324-0.211-0.47c-0.091-0.133-0.229-0.211-0.327-0.337 c-0.282-0.362-0.601-0.676-0.953-0.981c-0.27-0.234-0.531-0.455-0.829-0.644c-0.131-0.083-0.225-0.206-0.363-0.282 c-0.241-0.132-0.507-0.164-0.757-0.266c-0.345-0.141-0.676-0.279-1.038-0.364c-0.416-0.097-0.828-0.124-1.249-0.144 c-0.354-0.018-0.695-0.051-1.052-0.016c-0.484,0.049-0.942,0.191-1.407,0.337c-0.231,0.074-0.473,0.068-0.699,0.167L97.285,231.742 c-2.558,1.107-4.233,3.606-4.278,6.396c-0.045,2.783,1.547,5.338,4.07,6.528l116.433,54.793v108.914c0,3.17,2.108,5.961,5.157,6.818 c0.64,0.18,1.291,0.27,1.932,0.27c2.416,0,4.724-1.239,6.036-3.371l49.247-80.027l76.095,40.05c1.031,0.547,2.166,0.817,3.302,0.817 c1.024,0,2.046-0.222,2.997-0.665c2.007-0.934,3.461-2.762,3.932-4.929l56.707-262.273c0.032-0.147,0-0.292,0.022-0.441 C418.994,104.269,418.993,103.923,418.993,103.565z M380.755,124.778L219.111,286.421l-101.779-47.895L380.755,124.778z M227.689,383.327v-76.63l35.62,18.748L227.689,383.327z M350.324,355.222l-66.994-35.261l0.014-0.022l-12.073-7.435l-0.515,0.838 l-38.339-20.179l167.555-167.555L350.324,355.222z"></path> </g></svg>
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
        <p class="info-type">{{ currentChatType === 'dm' ? 'Tin nhắn riêng' : 'Nhóm chat' }}</p>

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
          <a-button v-if="currentChatType === 'dm'" block danger @click="blockUser">
            <a-icon type="stop" /> Chặn người dùng
          </a-button>
        </div>
      </div>
    </a-drawer>
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
    }
  },

  computed: {
    groupedMessages() {
      const groups = {}
      this.messages.forEach(msg => {
        const date = this.getMessageDate(msg.createdAt || msg.ts)
        if (!groups[date]) {
          groups[date] = []
        }
        groups[date].push(msg)
      })
      return groups
    },
  },

  async created() {
    // Lấy query parameters
    this.queryUserName = this.$route.query.name || null
    this.queryGroupId = this.$route.query.groupId || null

    // Log để debug
    console.log('Query params:', {
      name: this.queryUserName,
      groupId: this.queryGroupId
    })
  },

  async mounted() {
    await this.initializeChat()
  },

  beforeDestroy() {
    if (this.socket) {
      this.socket.disconnect()
    }
  },

  methods: {
    async initializeChat() {
      // Check authentication
      const token = Cookies.get('access_token')
      if (!token) {
        this.$message.warning('Vui lòng đăng nhập để sử dụng chat')
        this.$router.push('/login')
        return
      }

      // Get user profile
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

      // Kiểm tra xem có query parameter không
      if (this.queryUserName) {
        // Nếu có query name, load thông tin user để chat
        await this.loadUserFromQuery(this.queryUserName)
      } else if (this.queryGroupId) {
        // Nếu có query groupId, load thông tin group
        await this.loadGroupFromQuery(this.queryGroupId)
      } else {
        // Nếu không có query, kiểm tra localStorage
        const chatTarget = JSON.parse(localStorage.getItem('chatTarget') || 'null')
        if (!chatTarget) {
          this.$message.warning('Vui lòng chọn người để chat')
          this.$router.push('/address')
          return
        }

        this.currentChatType = chatTarget.type
        this.currentChatId = chatTarget.id
        this.currentChatName = chatTarget.name || 'Unknown'
      }

      // Initialize socket connection
      this.initSocket(token)

      // Load chat history
      await this.loadChatHistory()

      // Load group members if it's a group chat
      if (this.currentChatType === 'group') {
        await this.loadGroupMembers()
      }
    },

    async loadUserFromQuery(userName) {
      try {
        console.log('Loading user from query:', userName)

        // Gọi API để lấy thông tin user
        const userResponse = await chatApi.getUserByName(userName)

        if (!userResponse.data?.ok) {
          this.$message.error('Không tìm thấy người dùng: ' + userName)
          this.$router.push('/address')
          return
        }

        const user = userResponse.data.user

        // Set chat info
        this.currentChatType = 'dm'
        this.currentChatId = user._id
        this.currentChatName = user.name || userName

        // Lưu vào localStorage để sử dụng sau
        localStorage.setItem('chatTarget', JSON.stringify({
          type: 'dm',
          id: user._id,
          name: user.name || userName
        }))

        console.log('User loaded:', {
          id: this.currentChatId,
          name: this.currentChatName
        })

      } catch (error) {
        console.error('Error loading user from query:', error)
        this.$message.error('Không thể tải thông tin người dùng')
        this.$router.push('/address')
      }
    },

    async loadGroupFromQuery(groupId) {
      try {
        console.log('Loading group from query:', groupId)

        // Gọi API để lấy danh sách groups
        const groupsResponse = await chatApi.getGroups()
        const groups = groupsResponse.data || []

        // Tìm group theo ID
        const group = groups.find(g => g.id === groupId)

        if (!group) {
          this.$message.error('Không tìm thấy nhóm: ' + groupId)
          this.$router.push('/address')
          return
        }

        // Kiểm tra xem user có phải là thành viên không
        if (!group.members || !group.members.includes(this.myName)) {
          this.$message.error('Bạn không phải là thành viên của nhóm này')
          this.$router.push('/address')
          return
        }

        // Set chat info
        this.currentChatType = 'group'
        this.currentChatId = groupId
        this.currentChatName = group.name || groupId

        // Lưu vào localStorage
        localStorage.setItem('chatTarget', JSON.stringify({
          type: 'group',
          id: groupId,
          name: group.name || groupId
        }))

        console.log('Group loaded:', {
          id: this.currentChatId,
          name: this.currentChatName
        })

      } catch (error) {
        console.error('Error loading group from query:', error)
        this.$message.error('Không thể tải thông tin nhóm')
        this.$router.push('/address')
      }
    },

    initSocket(token) {
      const baseURL = process.env.BASE_URL || 'https://api.soatdonctv.online/api'
      const socketUrl = baseURL.replace('/api', '') // Remove /api for socket connection

      this.socket = io(socketUrl, {
        auth: {
          token: token
        },
        transports: ['websocket', 'polling'],
      })

      // Connection events
      this.socket.on('connect', () => {
        console.log('Socket connected')
        this.isConnected = true
        this.$message.success('Đã kết nối')
      })

      this.socket.on('connect_error', (error) => {
        console.error('Socket connection error:', error)
        this.isConnected = false
        this.$message.error('Lỗi kết nối: ' + error.message)
      })

      this.socket.on('disconnect', () => {
        console.log('Socket disconnected')
        this.isConnected = false
      })

      // Message events
      this.socket.on('dm:new', (message) => {
        console.log('New DM:', message)
        if (this.currentChatType === 'dm') {
          // Check if message is for current chat
          if ((message.fromId === this.myId && message.toId === this.currentChatId) ||
            (message.toId === this.myId && message.fromId === this.currentChatId)) {
            this.messages.push(message)
            this.$nextTick(() => this.scrollToBottom())
          }
        }
      })

      this.socket.on('group:new', (message) => {
        console.log('New group message:', message)
        if (this.currentChatType === 'group' && message.groupId === this.currentChatId) {
          this.messages.push(message)
          this.$nextTick(() => this.scrollToBottom())
        }
      })
    },

    async loadChatHistory() {
      if (!this.currentChatId || !this.currentChatType) {
        console.warn('No chat target set')
        return
      }

      this.loading = true

      try {
        if (this.currentChatType === 'dm') {
          // Load DM history
          this.socket.emit('dm:history', {
            withUserId: this.currentChatId,
            limit: 100
          }, (messages) => {
            console.log('DM history:', messages)
            this.messages = messages || []
            this.$nextTick(() => this.scrollToBottom())
          })
        } else if (this.currentChatType === 'group') {
          // Load group history
          this.socket.emit('group:history', {
            groupId: this.currentChatId,
            limit: 100
          }, (messages) => {
            console.log('Group history:', messages)
            this.messages = messages || []
            this.$nextTick(() => this.scrollToBottom())
          })
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
        const group = response.data.find(g => g.id === this.currentChatId)
        if (group) {
          this.groupMembers = group.members || []
        }
      } catch (error) {
        console.error('Load group members error:', error)
      }
    },

    sendMessage() {
      const text = this.messageText.trim()
      if (!text || !this.isConnected) return

      if (this.currentChatType === 'dm') {
        // Send DM
        this.socket.emit('dm:send', {
          toId: this.currentChatId,
          text: text
        }, (response) => {
          if (!response?.ok) {
            this.$message.error(response?.error || 'Không thể gửi tin nhắn')
          }
        })
      } else if (this.currentChatType === 'group') {
        // Send group message
        this.socket.emit('group:send', {
          groupId: this.currentChatId,
          text: text
        }, (response) => {
          if (!response?.ok) {
            this.$message.error(response?.error || 'Không thể gửi tin nhắn')
          }
        })
      }

      // Clear input
      this.messageText = ''
    },

    isOwnMessage(message) {
      return message.fromId === this.myId || message.from === this.myName
    },

    getMessageSender(message) {
      if (this.isOwnMessage(message)) {
        return 'Bạn'
      }
      return message.from || 'Unknown'
    },

    getMessageDate(timestamp) {
      const date = new Date(timestamp)
      return date.toDateString()
    },

    formatDate(dateString) {
      const date = new Date(dateString)
      const today = new Date()

      if (date.toDateString() === today.toDateString()) {
        return 'Hôm nay'
      }

      const yesterday = new Date(today)
      yesterday.setDate(yesterday.getDate() - 1)
      if (date.toDateString() === yesterday.toDateString()) {
        return 'Hôm qua'
      }

      return date.toLocaleDateString('vi-VN')
    },

    formatTime(timestamp) {
      return new Date(timestamp).toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
      })
    },

    scrollToBottom() {
      const container = this.$refs.messageContainer
      if (container) {
        container.scrollTop = container.scrollHeight
      }
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
        }
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
    // Watch for route changes
    '$route.query': {
      handler(newQuery) {
        // Nếu query thay đổi, reload lại chat
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
      deep: true
    }
  }
}
</script>

<style scoped>
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

.message-wrapper {
  display: flex;
  margin-bottom: 8px;
}

.message-wrapper.own-message {
  justify-content: flex-end;
}

.message-bubble {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
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

.attachment-icon,
.emoji-icon {
  font-size: 20px;
  color: #8c8c8c;
  cursor: pointer;
  transition: color 0.2s;
}

.attachment-icon:hover,
.emoji-icon:hover {
  color: #1890ff;
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
}

.send-button svg {
  width: 20px;
  height: 20px;
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
</style>
