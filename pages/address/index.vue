<template>
  <div class="address-book-page">
    <!-- Header -->
    <div class="header">
      <h3 class="header-title">Sổ địa chỉ</h3>
      <div class="add-button" @click="showAddFriendModal = true">
        <a-icon type="plus" />
      </div>
    </div>

    <!-- Search Bar -->
    <div class="search-container">
      <a-input v-model="searchText" placeholder="Tìm kiếm" class="search-input">
        <template #prefix>
          <a-icon type="search" style="color: #bfbfbf" />
        </template>
      </a-input>
    </div>

    <!-- Contact Categories -->
    <div class="contact-categories">
      <!-- Tất cả người dùng -->
      <div class="category-item" @click="toggleCategory('users')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.users ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Tất cả người dùng ({{ allUsers.length }})</span>
        </div>
      </div>

      <!-- Users List -->
      <div v-if="expandedCategories.users" class="friends-list">
        <div
          class="friend-item"
          v-for="user in filteredUsers"
          :key="user"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="friend-avatar">
                <a-avatar :size="40" style="background-color: #1890ff">
                  <span class="avatar-text">{{ getInitials(user) }}</span>
                </a-avatar>
              </div>
              <div class="friend-info">
                <span class="friend-name">{{ user }}</span>
              </div>
            </div>
            <div class="action-buttons">
              <a-button
                v-if="!isFriend(user) && user !== myName"
                size="small"
                type="primary"
                @click="handleAddFriend(user)"
                :loading="loadingActions[`add-${user}`]"
              >
                Kết bạn
              </a-button>
              <a-button
                v-if="!isBlocked(user) && user !== myName"
                size="small"
                danger
                @click="handleBlockUser(user)"
                :loading="loadingActions[`block-${user}`]"
              >
                Chặn
              </a-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Lời mời kết bạn -->
      <div class="category-item" @click="toggleCategory('requests')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.requests ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">
            Lời mời kết bạn
            <a-badge v-if="totalRequests > 0" :count="totalRequests" />
          </span>
        </div>
      </div>

      <!-- Friend Requests List -->
      <div v-if="expandedCategories.requests" class="friends-list">
        <!-- Incoming requests -->
        <div v-for="req in friendRequests.incoming" :key="`in-${req.from}`" class="friend-item">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="friend-avatar">
                <a-avatar :size="40" style="background-color: #52c41a">
                  <span class="avatar-text">{{ getInitials(req.from) }}</span>
                </a-avatar>
              </div>
              <div class="friend-info">
                <span class="friend-name">{{ req.from }}</span>
                <span class="request-type">Đã gửi lời mời cho bạn</span>
              </div>
            </div>
            <div class="action-buttons">
              <a-button
                size="small"
                type="primary"
                @click="handleAcceptRequest(req.from)"
                :loading="loadingActions[`accept-${req.from}`]"
              >
                Chấp nhận
              </a-button>
              <a-button
                size="small"
                @click="handleDeclineRequest(req.from)"
                :loading="loadingActions[`decline-${req.from}`]"
              >
                Từ chối
              </a-button>
            </div>
          </div>
        </div>

        <!-- Outgoing requests -->
        <div v-for="req in friendRequests.outgoing" :key="`out-${req.to}`" class="friend-item">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="friend-avatar">
                <a-avatar :size="40" style="background-color: #faad14">
                  <span class="avatar-text">{{ getInitials(req.to) }}</span>
                </a-avatar>
              </div>
              <div class="friend-info">
                <span class="friend-name">{{ req.to }}</span>
                <span class="request-type">Đang chờ phản hồi</span>
              </div>
            </div>
            <div class="action-buttons">
              <a-button
                size="small"
                @click="handleCancelRequest(req.to)"
                :loading="loadingActions[`cancel-${req.to}`]"
              >
                Hủy
              </a-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Danh sách bị chặn -->
      <div class="category-item" @click="toggleCategory('blocked')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.blocked ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Danh sách bị chặn ({{ blockedUsers.length }})</span>
        </div>
      </div>

      <!-- Blocked List -->
      <div v-if="expandedCategories.blocked" class="friends-list">
        <div
          class="friend-item"
          v-for="user in blockedUsers"
          :key="user"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="friend-avatar">
                <a-avatar :size="40" style="background-color: #ff4d4f">
                  <span class="avatar-text">{{ getInitials(user) }}</span>
                </a-avatar>
              </div>
              <div class="friend-info">
                <span class="friend-name">{{ user }}</span>
              </div>
            </div>
            <a-button
              size="small"
              @click="handleUnblockUser(user)"
              :loading="loadingActions[`unblock-${user}`]"
            >
              Bỏ chặn
            </a-button>
          </div>
        </div>
      </div>

      <!-- Trò chuyện nhóm của tôi -->
      <div class="category-item" @click="toggleCategory('groups')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.groups ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Trò chuyện nhóm của tôi ({{ myGroups.length }})</span>
        </div>
      </div>

      <!-- Groups List -->
      <div v-if="expandedCategories.groups" class="friends-list">
        <div
          class="friend-item"
          v-for="group in myGroups"
          :key="group.id"
          @click="openGroupChat(group)"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="friend-avatar">
                <a-avatar :size="40" style="background-color: #722ed1">
                  <a-icon type="team" />
                </a-avatar>
              </div>
              <div class="friend-info">
                <span class="friend-name">{{ group.name }}</span>
                <span class="group-id">ID: {{ group.id }}</span>
              </div>
            </div>
            <a-button size="small" type="primary">
              Vào phòng
            </a-button>
          </div>
        </div>
      </div>

      <!-- Bạn bè -->
      <div class="category-item expanded" @click="toggleCategory('friends')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.friends ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Bạn bè ({{ friends.length }})</span>
        </div>
      </div>

      <!-- Friends List (expanded) -->
      <div v-if="expandedCategories.friends" class="friends-list">
        <div
          class="friend-item"
          v-for="friend in filteredFriends"
          :key="friend"
        >
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="friend-avatar">
                <a-avatar :size="40" style="background-color: #1890ff">
                  <span class="avatar-text">{{ getInitials(friend) }}</span>
                </a-avatar>
              </div>
              <div class="friend-info">
                <span class="friend-name">{{ friend }}</span>
              </div>
            </div>
            <div class="action-buttons">
              <a-button
                size="small"
                type="primary"
                @click="openChat(friend)"
              >
                Chat
              </a-button>
              <a-button
                size="small"
                danger
                @click="handleRemoveFriend(friend)"
                :loading="loadingActions[`remove-${friend}`]"
              >
                Xóa
              </a-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Friend Modal -->
    <a-modal
      v-model="showAddFriendModal"
      title="Thêm bạn bè"
      @ok="handleAddFriendFromModal"
      @cancel="showAddFriendModal = false"
    >
      <a-input
        v-model="newFriendName"
        placeholder="Nhập tên người dùng"
      />
    </a-modal>
  </div>
</template>

<script>
import * as chatApi from '@/api/chat'

export default {
  name: 'AddressBookPage',
  data() {
    return {
      searchText: '',
      expandedCategories: {
        users: false,
        requests: false,
        blocked: false,
        groups: false,
        friends: true,
      },
      allUsers: [],
      friends: [],
      blockedUsers: [],
      groups: [],
      myGroups: [],
      friendRequests: {
        incoming: [],
        outgoing: []
      },
      myId: null,
      myName: null,
      loadingActions: {},
      showAddFriendModal: false,
      newFriendName: '',
    }
  },
  computed: {
    filteredUsers() {
      if (!this.searchText) return this.allUsers
      return this.allUsers.filter(user =>
        user.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
    filteredFriends() {
      if (!this.searchText) return this.friends
      return this.friends.filter(friend =>
        friend.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },
    totalRequests() {
      return this.friendRequests.incoming.length + this.friendRequests.outgoing.length
    }
  },
  async mounted() {
    await this.checkAuth()
    await this.loadAllData()
  },
  methods: {
    async checkAuth() {
      try {
        const response = await chatApi.getProfile()
        this.myId = response.data.user._id
        this.myName = response.data.user.name
      } catch (error) {
        console.error('Auth error:', error)
        this.$message.error('Phiên đăng nhập hết hạn')
        this.$router.push('/login')
      }
    },

    async loadAllData() {
      await Promise.all([
        this.loadUsers(),
        this.loadFriends(),
        this.loadBlockedUsers(),
        this.loadGroups(),
        this.loadFriendRequests()
      ])
    },

    async loadUsers() {
      try {
        const response = await chatApi.getUsers()
        this.allUsers = response.data
      } catch (error) {
        console.error('Load users error:', error)
      }
    },

    async loadFriends() {
      if (!this.myId) return
      try {
        const response = await chatApi.getFriendList()
        this.friends = response.data.friends || []
      } catch (error) {
        console.error('Load friends error:', error)
      }
    },

    async loadBlockedUsers() {
      if (!this.myId) return
      try {
        const response = await chatApi.getBlockList()
        this.blockedUsers = response.data.blocked || []
      } catch (error) {
        console.error('Load blocked error:', error)
      }
    },

    async loadGroups() {
      try {
        const response = await chatApi.getGroups()
        this.groups = response.data
        this.myGroups = this.groups.filter(g =>
          (g.members || []).includes(this.myName)
        )
      } catch (error) {
        console.error('Load groups error:', error)
      }
    },

    async loadFriendRequests() {
      if (!this.myId) return
      try {
        const response = await chatApi.getFriendRequests()
        this.friendRequests = {
          incoming: response.data.incoming || [],
          outgoing: response.data.outgoing || []
        }
      } catch (error) {
        console.error('Load requests error:', error)
      }
    },

    async handleAddFriend(userName) {
      if (!this.myId || userName === this.myName) return

      this.$set(this.loadingActions, `add-${userName}`, true)
      try {
        const userResponse = await chatApi.getUserByName(userName)
        if (!userResponse.data?.ok) {
          this.$message.error('Không tìm thấy người dùng')
          return
        }

        const response = await chatApi.addFriend(userResponse.data.user._id)
        if (response.data.accepted) {
          this.$message.success('Đã trở thành bạn bè!')
        } else {
          this.$message.success('Đã gửi lời mời kết bạn')
        }

        await this.loadAllData()
      } catch (error) {
        console.error('Add friend error:', error)
        this.$message.error('Không thể gửi lời mời kết bạn')
      } finally {
        this.$set(this.loadingActions, `add-${userName}`, false)
      }
    },

    async handleAddFriendFromModal() {
      if (!this.newFriendName) {
        this.$message.warning('Vui lòng nhập tên người dùng')
        return
      }
      await this.handleAddFriend(this.newFriendName)
      this.showAddFriendModal = false
      this.newFriendName = ''
    },

    async handleRemoveFriend(friendName) {
      this.$set(this.loadingActions, `remove-${friendName}`, true)
      try {
        const userResponse = await chatApi.getUserByName(friendName)
        if (!userResponse.data?.ok) return

        await chatApi.removeFriend(userResponse.data.user._id)
        this.$message.success('Đã xóa bạn bè')
        await this.loadAllData()
      } catch (error) {
        console.error('Remove friend error:', error)
        this.$message.error('Không thể xóa bạn bè')
      } finally {
        this.$set(this.loadingActions, `remove-${friendName}`, false)
      }
    },

    async handleBlockUser(userName) {
      this.$set(this.loadingActions, `block-${userName}`, true)
      try {
        const userResponse = await chatApi.getUserByName(userName)
        if (!userResponse.data?.ok) return

        await chatApi.addBlock(userResponse.data.user._id)
        this.$message.success('Đã chặn người dùng')
        await this.loadAllData()
      } catch (error) {
        console.error('Block error:', error)
        this.$message.error('Không thể chặn người dùng')
      } finally {
        this.$set(this.loadingActions, `block-${userName}`, false)
      }
    },

    async handleUnblockUser(userName) {
      this.$set(this.loadingActions, `unblock-${userName}`, true)
      try {
        const userResponse = await chatApi.getUserByName(userName)
        if (!userResponse.data?.ok) return

        await chatApi.removeBlock(userResponse.data.user._id)
        this.$message.success('Đã bỏ chặn')
        await this.loadAllData()
      } catch (error) {
        console.error('Unblock error:', error)
        this.$message.error('Không thể bỏ chặn')
      } finally {
        this.$set(this.loadingActions, `unblock-${userName}`, false)
      }
    },

    async handleAcceptRequest(fromName) {
      this.$set(this.loadingActions, `accept-${fromName}`, true)
      try {
        const userResponse = await chatApi.getUserByName(fromName)
        if (!userResponse.data?.ok) return

        await chatApi.acceptFriendRequest(userResponse.data.user._id)
        this.$message.success('Đã chấp nhận lời mời kết bạn')
        await this.loadAllData()
      } catch (error) {
        console.error('Accept error:', error)
        this.$message.error('Không thể chấp nhận lời mời')
      } finally {
        this.$set(this.loadingActions, `accept-${fromName}`, false)
      }
    },

    async handleDeclineRequest(fromName) {
      this.$set(this.loadingActions, `decline-${fromName}`, true)
      try {
        const userResponse = await chatApi.getUserByName(fromName)
        if (!userResponse.data?.ok) return

        await chatApi.declineFriendRequest(userResponse.data.user._id)
        this.$message.success('Đã từ chối lời mời')
        await this.loadAllData()
      } catch (error) {
        console.error('Decline error:', error)
        this.$message.error('Không thể từ chối lời mời')
      } finally {
        this.$set(this.loadingActions, `decline-${fromName}`, false)
      }
    },

    async handleCancelRequest(toName) {
      this.$set(this.loadingActions, `cancel-${toName}`, true)
      try {
        const userResponse = await chatApi.getUserByName(toName)
        if (!userResponse.data?.ok) return

        await chatApi.cancelFriendRequest(userResponse.data.user._id)
        this.$message.success('Đã hủy lời mời')
        await this.loadAllData()
      } catch (error) {
        console.error('Cancel error:', error)
        this.$message.error('Không thể hủy lời mời')
      } finally {
        this.$set(this.loadingActions, `cancel-${toName}`, false)
      }
    },

    isFriend(userName) {
      return this.friends.includes(userName)
    },

    isBlocked(userName) {
      return this.blockedUsers.includes(userName)
    },

    getInitials(name) {
      return name
        .split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    },

    toggleCategory(category) {
      this.expandedCategories[category] = !this.expandedCategories[category]
    },

    async openChat(friendName) {
      try {
        const userResponse = await chatApi.getUserByName(friendName)
        if (!userResponse.data?.ok) return

        // Lưu thông tin chat target và chuyển đến trang chat
        localStorage.setItem('chatTarget', JSON.stringify({
          type: 'dm',
          id: userResponse.data.user._id,
          name: friendName
        }))
        this.$router.push('/chat')
      } catch (error) {
        console.error('Open chat error:', error)
        this.$message.error('Không thể mở chat')
      }
    },

    openGroupChat(group) {
      // Lưu thông tin group và chuyển đến trang chat
      localStorage.setItem('chatTarget', JSON.stringify({
        type: 'group',
        id: group.id,
        name: group.name
      }))
      this.$router.push('/chat')
    },
  },
}
</script>

<style scoped>
.address-book-page {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 80px; /* Space for footer */
}

/* Header */
.header {
  background: white;
  color: #333;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  position: relative;
}

.header-title {
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  flex: 1;
  text-align: center;
}

.add-button {
  position: absolute;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ff4d92;
  font-size: 18px;
  transition: all 0.2s;
}

.add-button:hover {
  color: #ff1f6b;
  transform: scale(1.1);
}

/* Search Container */
.search-container {
  padding: 15px;
  background: white;
  border-bottom: 1px solid #e8e8e8;
}

.search-input {
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #f9f9f9;
}

.search-input .ant-input {
  background: transparent;
  border: none;
  box-shadow: none;
}

/* Contact Categories */
.contact-categories {
  background: white;
  margin-top: 1px;
}

.category-item {
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.category-item:hover {
  background-color: #fafafa;
}

.category-arrow {
  margin-right: 10px;
  color: #666;
  font-size: 12px;
}

.category-title {
  color: #333;
  font-size: 15px;
}

/* Friends List */
.friends-list {
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
}

.friend-item {
  padding: 12px 20px 12px 45px; /* Indented from categories */
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.friend-item:hover {
  background-color: #f0f0f0;
}

.friend-item:last-child {
  border-bottom: none;
}

.friend-avatar {
  margin-right: 12px;
}

.avatar-text {
  font-size: 14px;
  font-weight: bold;
}

.friend-info {
  flex: 1;
}

.friend-name {
  font-size: 15px;
  color: #333;
  font-weight: 400;
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
  .header {
    padding: 12px 15px;
  }

  .search-container {
    padding: 10px 15px;
  }

  .category-item {
    padding: 12px 15px;
  }

  .friend-item {
    padding: 10px 15px 10px 35px;
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

/* Additional styles */
.ant-input::placeholder {
  color: #bfbfbf;
}

.ant-input:focus {
  box-shadow: none;
  border-color: #40a9ff;
}

/* Smooth transitions for category expansion */
.friends-list {
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 200px;
  }
}

/* Empty state */
.empty-contacts {
  text-align: center;
  padding: 40px 20px;
  color: #999;
}

.empty-contacts .ant-icon {
  font-size: 48px;
  color: #ddd;
  margin-bottom: 16px;
}
</style>
