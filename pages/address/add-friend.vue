<template>
  <div class="add-friends-page">
    <!-- Header with Back Button -->
    <div class="header">
      <div class="header-content">
        <div class="back-button" @click="goBack">
          <a-icon type="left" />
        </div>
        <h3 class="header-title">Thêm bạn bè</h3>
        <div class="header-spacer"></div>
      </div>
    </div>

    <!-- Search Section -->
    <div class="search-section">
      <div class="search-container">
        <a-input
          v-model="searchQuery"
          placeholder="tên người dùng"
          class="search-input"
          @input="handleSearch"
          @pressEnter="handleSearch"
        >
          <template #prefix>
            <a-icon type="search" style="color: #bfbfbf" />
          </template>
        </a-input>
        <a-button type="primary" class="search-button" @click="handleSearch">
          Tìm kiếm
        </a-button>
      </div>
    </div>

    <!-- Search Results -->
    <div class="results-section">
      <div v-if="searchResults.length > 0" class="user-list">
        <div v-for="user in searchResults" :key="user.id" class="user-item">
          <div class="d-flex align-items-center">
            <!-- User Avatar -->
            <div class="user-avatar">
              <a-avatar :size="50" style="background-color: #1890ff">
                <a-icon type="user" style="font-size: 22px" />
              </a-avatar>
            </div>

            <!-- User Info -->
            <div class="user-info flex-grow-1">
              <div class="user-name">{{ user.name }}</div>
              <div class="user-details" v-if="user.phone || user.email">
                {{ user.phone || user.email }}
              </div>
            </div>

            <!-- Add Friend Button -->
            <div class="action-button">
              <a-button
                type="primary"
                size="small"
                class="add-button"
                @click="addFriend(user)"
                :loading="user.isAdding"
              >
                Thêm bạn bè
              </a-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-else-if="hasSearched && searchResults.length === 0"
        class="empty-state"
      >
        <div class="empty-icon">
          <a-icon type="user-add" style="font-size: 48px; color: #d9d9d9" />
        </div>
        <div class="empty-text">
          <p class="empty-title">Không tìm thấy người dùng</p>
          <p class="empty-subtitle">Thử tìm kiếm với từ khóa khác</p>
        </div>
      </div>

      <!-- Initial State -->
      <div v-else-if="!hasSearched" class="initial-state">
        <div class="initial-icon">
          <a-icon type="search" style="font-size: 48px; color: #d9d9d9" />
        </div>
        <div class="initial-text">
          <p class="initial-title">Tìm kiếm bạn bè</p>
          <p class="initial-subtitle">
            Nhập tên, số điện thoại hoặc email để tìm kiếm
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddFriendsPage',
  data() {
    return {
      searchQuery: '',
      hasSearched: false,
      searchResults: [
        // Dữ liệu mẫu - trong thực tế sẽ lấy từ API
        {
          id: 1,
          name: 'testtest',
          phone: '+84901234567',
          email: 'testtest@example.com',
          avatar: null,
          isAdding: false,
          isAdded: false,
        },
      ],
      isLoading: false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },

    async handleSearch() {
      if (!this.searchQuery.trim()) {
        this.hasSearched = false
        this.searchResults = []
        return
      }

      this.isLoading = true
      this.hasSearched = true

      try {
        // Simulation d'appel API
        await this.searchUsers(this.searchQuery)
      } catch (error) {
        this.$message.error('Lỗi khi tìm kiếm')
      } finally {
        this.isLoading = false
      }
    },

    async searchUsers(query) {
      // Simulation d'un appel API
      return new Promise((resolve) => {
        setTimeout(() => {
          // Filtrer les résultats basés sur la requête
          const mockResults = [
            {
              id: 1,
              name: 'testtest',
              phone: '+84901234567',
              email: 'testtest@example.com',
              avatar: null,
              isAdding: false,
              isAdded: false,
            },
            {
              id: 2,
              name: 'test user',
              phone: '+84907654321',
              email: 'testuser@example.com',
              avatar: null,
              isAdding: false,
              isAdded: false,
            },
          ]

          this.searchResults = mockResults.filter(
            (user) =>
              user.name.toLowerCase().includes(query.toLowerCase()) ||
              user.phone.includes(query) ||
              user.email.toLowerCase().includes(query.toLowerCase())
          )

          resolve()
        }, 500)
      })
    },

    async addFriend(user) {
      user.isAdding = true

      try {
        // Simulation d'appel API pour ajouter ami
        await new Promise((resolve) => setTimeout(resolve, 1000))

        user.isAdded = true
        this.$message.success(`Đã gửi lời mời kết bạn tới ${user.name}`)

        // Retirer l'utilisateur de la liste après ajout
        setTimeout(() => {
          const index = this.searchResults.findIndex((u) => u.id === user.id)
          if (index > -1) {
            this.searchResults.splice(index, 1)
          }
        }, 1000)
      } catch (error) {
        this.$message.error('Không thể gửi lời mời kết bạn')
      } finally {
        user.isAdding = false
      }
    },
  },
}
</script>

<style scoped>
.add-friends-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* Header */
.header {
  background: white;
  border-bottom: 1px solid #e8e8e8;
  padding: 12px 0;
}

.header-content {
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.back-button {
  width: 40px;
  height: 40px;
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

.header-title {
  flex: 1;
  text-align: center;
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.header-spacer {
  width: 40px; /* Balance the back button */
}

/* Search Section */
.search-section {
  background: white;
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
}

.search-container {
  display: flex;
  gap: 12px;
  align-items: center;
}

.search-input {
  flex: 1;
  border-radius: 20px;
  border: 1px solid #d9d9d9;
  background: #fafafa;
}

.search-input .ant-input {
  background: transparent;
  border: none;
  box-shadow: none;
  font-size: 15px;
}

.search-button {
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  min-width: 60px;
}

/* Results Section */
.results-section {
  flex: 1;
  padding: 16px;
}

.user-list {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.user-item {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s;
}

.user-item:hover {
  background-color: #fafafa;
}

.user-item:last-child {
  border-bottom: none;
}

.user-avatar {
  margin-right: 12px;
}

.user-info {
  min-width: 0; /* Pour permettre l'ellipsis */
}

.user-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.user-details {
  font-size: 13px;
  color: #999;
}

.action-button {
  margin-left: 12px;
}

.add-button {
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  min-width: 80px;
}

/* Empty State */
.empty-state,
.initial-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon,
.initial-icon {
  margin-bottom: 20px;
}

.empty-title,
.initial-title {
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
}

.empty-subtitle,
.initial-subtitle {
  font-size: 14px;
  color: #999;
  margin: 0;
}

/* Responsive */
@media (max-width: 576px) {
  .header-content {
    padding: 0 12px;
  }

  .search-section {
    padding: 12px;
  }

  .results-section {
    padding: 12px;
  }

  .user-item {
    padding: 12px;
  }

  .user-name {
    font-size: 15px;
  }

  .add-button {
    min-width: 70px;
    font-size: 12px;
  }
}

/* Loading states */
.search-input.loading {
  position: relative;
}

.search-input.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 12px;
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #1890ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  transform: translateY(-50%);
}

@keyframes spin {
  0% {
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
}

/* Focus states */
.search-input:focus-within {
  border-color: #40a9ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

/* Animation for user items */
.user-item {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
