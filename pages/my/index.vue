<template>
  <div class="profile-page">
    <!-- Header -->
    <div class="header">
      <h3 class="header-title">Của tôi</h3>
    </div>

    <!-- Profile Section -->
    <div class="profile-section">
      <!-- Avatar -->
      <div class="avatar-container">
        <a-avatar :src="user && user.avatar" :size="80" style="background-color: #1890ff">
          <a-icon type="user" style="font-size: 40px" />
        </a-avatar>
      </div>

      <!-- Username placeholder -->
      <div class="username-placeholder">
        <span>{{user && user.name}}</span>
      </div>
    </div>

    <!-- Menu Items -->
    <div class="menu-section">
      <!-- Đã thêm làm bạn bè -->
      <div class="menu-item" @click="goToFriendRequests">
        <div class="d-flex align-items-center justify-content-between">
          <span class="menu-text">Đã thêm làm bạn bè</span>
          <a-icon type="right" class="menu-arrow" />
        </div>
      </div>

      <!-- Trang thái đọc tin nhắn -->
      <div class="menu-item" @click="goToReadStatus">
        <div class="d-flex align-items-center justify-content-between">
          <span class="menu-text">Trang thái đọc tin nhắn</span>
          <div class="d-flex align-items-center">
            <span class="status-text">Mở</span>
            <a-icon type="right" class="menu-arrow" />
          </div>
        </div>
      </div>

      <!-- Hiển thị trang thái trực tuyến -->
      <div class="menu-item" @click="goToOnlineStatus">
        <div class="d-flex align-items-center justify-content-between">
          <span class="menu-text">Hiển thị trang thái trực tuyến</span>
          <div class="d-flex align-items-center">
            <span class="status-text">Mở</span>
            <a-icon type="right" class="menu-arrow" />
          </div>
        </div>
      </div>
    </div>

    <!-- Logout Section -->
    <div class="logout-section">
      <div class="logout-button" @click="showLogoutConfirm">
        <span class="logout-text">Thoát</span>
      </div>
    </div>

    <!-- Logout Confirmation Modal -->
    <a-modal
      v-model="logoutModalVisible"
      title="Xác nhận"
      centered
      :width="300"
      @ok="handleLogout"
      @cancel="logoutModalVisible = false"
      ok-text="Đồng ý"
      cancel-text="Hủy"
    >
      <p>Bạn có chắc chắn muốn đăng xuất?</p>
    </a-modal>
    <div
      v-if="visible"
      class="bottom-modal-overlay"
      @click="handleOverlayClick"
    >
      <div class="bottom-modal-container" @click.stop>
        <!-- Action Buttons positioned above footer -->
        <div class="bottom-action-buttons">
          <div class="bottom-action-button" @click="handleOpen">
            <span>Mở</span>
          </div>
          <div class="bottom-action-button" @click="handleClose">
            <span>Đóng</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import {mapState} from "vuex";
export default {
  name: 'ProfilePage',
  data() {
    return {
      logoutModalVisible: false,
      visible: true,
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.profile.profile,
    }),
  },
  methods: {
    handleOverlayClick() {
      this.visible = false
    },
    handleOpen() {
      this.visible = true
    },
    handleClose() {
      this.visible = false
    },
    goToFriendRequests() {
      // Navigate to friend requests page
    },
    goToReadStatus() {
      // Navigate to read status settings
    },
    goToOnlineStatus() {
      // Navigate to online status settings
    },
    showLogoutConfirm() {
      this.$confirm({
        title: 'Xác nhận đăng xuất',
        content: 'Bạn có chắc chắn muốn đăng xuất khỏi tài khoản?',
        okText: 'Đăng xuất',
        cancelText: 'Hủy',
        okType: 'danger',
        centered: true,
        onOk: () => {
          this.$store.dispatch('profile/saveProfile', null)
          Cookies.remove('access_token')
          Cookies.remove('refresh_token')
          Cookies.remove('user_id')
          Cookies.remove('time_valid')
          this.$store.dispatch('auth/logout')
          this.$store.dispatch('loading/setModalLoading', false)
          this.$message.success('Đăng xuất thành công')

          setTimeout(() => {
            this.$router.push('/login')
          }, 1000)
        }
      })
    },
    handleLogout() {
      // Handle logout logic
      this.$message.success('Đã đăng xuất thành công')
      // Clear user data and redirect to login
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
      this.logoutModalVisible = false
    },
  },
}
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* Header */
.header {
  background: white;
  color: #333;
  padding: 15px 20px;
  text-align: center;
  border-bottom: 1px solid #e8e8e8;
}

.header-title {
  margin: 0;
  font-weight: 500;
  font-size: 18px;
}

/* Profile Section */
.profile-section {
  background: white;
  padding: 40px 20px;
  text-align: center;
  border-bottom: 10px solid #f5f5f5;
}

.avatar-container {
  margin-bottom: 20px;
}

.username-placeholder {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

/* Menu Section */
.menu-section {
  background: white;
  margin-bottom: 20px;
}

.menu-item {
  padding: 18px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover {
  background-color: #fafafa;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-text {
  font-size: 15px;
  color: #333;
}

.status-text {
  font-size: 14px;
  color: #999;
  margin-right: 8px;
}

.menu-arrow {
  color: #ccc;
  font-size: 12px;
}

/* Logout Section */
.logout-section {
  background: white;
  padding: 0;
}

.logout-button {
  padding: 18px 20px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-button:hover {
  background-color: #fafafa;
}

.logout-text {
  font-size: 15px;
  color: #ff4444;
  font-weight: 500;
}

/* Modal Styles */
.ant-modal-content {
  border-radius: 8px;
}

.ant-modal-header {
  border-bottom: 1px solid #f0f0f0;
}

.ant-modal-body {
  padding: 20px;
  text-align: center;
}

.ant-modal-body p {
  margin: 0;
  color: #666;
  font-size: 15px;
}

/* Custom button styles for modal */
:deep(.ant-btn-primary) {
  background-color: #ff4444;
  border-color: #ff4444;
}

:deep(.ant-btn-primary:hover) {
  background-color: #ff3333;
  border-color: #ff3333;
}

/* Responsive */
@media (max-width: 576px) {
  .header {
    padding: 12px 15px;
  }

  .profile-section {
    padding: 30px 15px;
  }

  .menu-item {
    padding: 15px;
  }

  .logout-button {
    padding: 15px;
  }

  .menu-text,
  .logout-text {
    font-size: 14px;
  }
}

/* Additional animations */
.menu-item {
  position: relative;
  overflow: hidden;
}

.menu-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s;
}

.menu-item:hover::after {
  left: 100%;
}

/* Loading states */
.loading-avatar {
  background: #f0f0f0 !important;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

/* Focus states for accessibility */
.menu-item:focus,
.logout-button:focus {
  outline: 2px solid #1890ff;
  outline-offset: -2px;
}

/* Success message styling */
:deep(.ant-message-success) {
  top: 100px;
}
/* Modal Overlay */
.bottom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  animation: fadeIn 0.2s ease-out;
}

.bottom-modal-container {
  position: absolute;
  bottom: 80px; /* Position above footer (footer height = 80px) */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  animation: slideUpFromBottom 0.3s ease-out;
}

/* Action Buttons */
.bottom-action-buttons {
  width: 90%;
  max-width: 450px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
}

.bottom-action-button {
  padding: 16px 20px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: #1890ff;
  transition: all 0.2s ease;
  border: none;
  background: white;
}

.bottom-action-button:first-child {
  border-bottom: 1px solid #f0f0f0; /* Separator between buttons */
}

.bottom-action-button:hover {
  background-color: #f0f8ff;
  color: #0066cc;
}

.bottom-action-button:active {
  background-color: #e6f4ff;
  transform: scale(0.98);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUpFromBottom {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 480px) {
  .bottom-modal-container {
    bottom: 70px; /* Adjust for mobile footer height */
  }

  .bottom-action-buttons {
    width: 95%;
    margin: 0 10px;
  }

  .bottom-action-button {
    padding: 14px 16px;
    font-size: 15px;
  }
}

/* Additional styling for better visual */
.bottom-action-buttons {
  margin-bottom: 10px; /* Small gap above footer */
}

/* Focus states for accessibility */
.bottom-action-button:focus {
  outline: 2px solid #1890ff;
  outline-offset: -2px;
  background-color: #f0f8ff;
}
</style>
