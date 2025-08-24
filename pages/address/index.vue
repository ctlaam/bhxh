<template>
  <div class="address-book-page">
    <!-- Header -->
    <div class="header">
      <h3 class="header-title">Sổ địa chỉ</h3>
      <div class="add-button" @click="addNewContact">
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
      <!-- Liên hệ mới -->
      <div class="category-item" @click="toggleCategory('recent')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.recent ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Liên hệ mới</span>
        </div>
      </div>

      <!-- Danh sách bị chặn -->
      <div class="category-item" @click="toggleCategory('blocked')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.blocked ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Danh sách bị chặn</span>
        </div>
      </div>

      <!-- Trò chuyện nhóm của tôi -->
      <div class="category-item" @click="toggleCategory('groups')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.groups ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Trò chuyện nhóm của tôi</span>
        </div>
      </div>

      <!-- Bạn bè -->
      <div class="category-item expanded" @click="toggleCategory('friends')">
        <div class="d-flex align-items-center">
          <a-icon
            :type="expandedCategories.friends ? 'caret-down' : 'caret-right'"
            class="category-arrow"
          />
          <span class="category-title">Bạn bè</span>
        </div>
      </div>

      <!-- Friends List (expanded) -->
      <div v-if="expandedCategories.friends" class="friends-list">
        <div
          class="friend-item"
          v-for="friend in friends"
          :key="friend.id"
          @click="openChat(friend)"
        >
          <div class="d-flex align-items-center">
            <div class="friend-avatar">
              <a-avatar :size="40" style="background-color: #1890ff">
                <span class="avatar-text">{{ getInitials(friend.name) }}</span>
              </a-avatar>
            </div>
            <div class="friend-info">
              <span class="friend-name">{{ friend.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AddressBookPage',
  data() {
    return {
      searchText: '',
      expandedCategories: {
        recent: false,
        blocked: false,
        groups: false,
        friends: true, // Expanded by default as shown in image
      },
      friends: [
        {
          id: 1,
          name: 'hê hê',
          avatar: null,
          phone: '',
          email: '',
        },
        // Add more friends here
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
    toggleCategory(category) {
      this.expandedCategories[category] = !this.expandedCategories[category]
    },
    addNewContact() {
      // Open add contact modal or navigate to add contact page
      console.log('Add new contact')
    },
    openChat(friend) {
      // Navigate to chat with this friend
      this.$router.push(`/chat/${friend.id}`)
    },
    navigateTo(route) {
      this.$router.push(route)
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
