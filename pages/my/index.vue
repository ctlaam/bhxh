<template>
  <div class="profile-container">
    <!-- Header với thông tin user -->
    <div class="profile-header">
      <div class="avatar">
        <i class="fas fa-user"></i>
      </div>
      <div class="user-info">
        <div class="user-name">{{ user && user.name }}</div>
        <div class="user-phone">
          Số điện thoại: {{ user && user.phone.slice(0, 4) + '****' }}
        </div>
        <div class="user-balance">
          Số dư: {{ user && formatCurrency(user.balance) }}VNĐ
        </div>
        <div class="user-code">Mã mời: {{ user && user.reference_code }}</div>
      </div>
    </div>

    <!-- Action buttons -->
    <div class="action-buttons">
      <button class="btn btn-deposit" @click="chamsockhachhang">
        Nạp tiền
      </button>
      <button class="btn btn-withdraw" @click="navigateTo('/wallet/withdraw')">
        Rút tiền
      </button>
    </div>

    <!-- Thông tin cá nhân -->
    <div class="menu-section">
      <div class="section-header">Thông tin cá nhân</div>
      <div class="menu-item" @click="navigateTo('/my/bankAccount/')">
        <i class="fas fa-credit-card menu-icon"></i>
        <span class="menu-text">Thẻ ngân hàng</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="navigateTo('/my/member-rank/')">
        <i class="fas fa-star menu-icon"></i>
        <span class="menu-text">Cấp bậc hội viên</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="navigateTo('/my/delivery-address')">
        <i class="fas fa-map-marker-alt menu-icon"></i>
        <span class="menu-text">Địa chỉ nhận hàng</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
    </div>

    <!-- Lịch sử đơn hàng -->
    <div class="menu-section">
      <div class="section-header">Lịch sử đơn hàng</div>
      <div class="menu-item" @click="navigateTo('/order')">
        <i class="fas fa-file-alt menu-icon"></i>
        <span class="menu-text">Lịch sử đơn hàng</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="navigateTo('/trip')">
        <i class="fas fa-shopping-cart menu-icon"></i>
        <span class="menu-text">XÁC NHẬN săn đơn</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <!-- <div class="menu-item" @click="navigateTo('/my-group')">
        <i class="fas fa-users menu-icon"></i>
        <span class="menu-text">Nhóm của tôi</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div> -->
    </div>

    <!-- Cá nhân -->
    <div class="menu-section">
      <div class="section-header">Cá nhân</div>
      <div class="menu-item" @click="navigateTo('/wallet/history')">
        <i class="fas fa-history menu-icon"></i>
        <span class="menu-text">Lịch sử giao dịch</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="navigateTo('/my/password')">
        <i class="fas fa-lock menu-icon"></i>
        <span class="menu-text">Mật khẩu tài khoản</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="navigateTo('/my/withdrawalPassword')">
        <i class="fas fa-key menu-icon"></i>
        <span class="menu-text">Mật khẩu vốn</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
    </div>
    <div class="menu-section">
      <div class="section-header">Liên hệ chăm sóc khách hàng</div>
      <div class="menu-items">
        <div class="menu-item" @click="chamsockhachhang">
          <i class="fas menu-icon fa-headset"></i>
          <span class="menu-text">Trung tâm chăm sóc khách hàng</span>
          <i class="fas menu-icon fa-chevron-right arrow"></i>
        </div>
        <div class="menu-item" @click="navigateTo('/my/about')">
          <i class="fas menu-icon fa-comment-dots"></i>
          <span class="menu-text">Ý kiến phản hồi</span>
          <i class="fas menu-icon fa-chevron-right arrow"></i>
        </div>
        <!-- <div class="menu-item" @click="navigateTo('language')">
          <i class="fas menu-icon fa-globe"></i>
          <span class="menu-text">Thay đổi ngôn ngữ</span>
          <i class="fas menu-icon fa-chevron-right arrow"></i>
        </div> -->
        <div class="menu-item logout" @click="logout">
          <i class="fas menu-icon fa-sign-out-alt"></i>
          <span class="menu-text">Đăng xuất</span>
          <i class="fas menu-icon fa-chevron-right arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as volatilityApi from '../../api/volatility'
import * as orderApi from '../../api/order'
import _ from 'lodash'

import Cookies from 'js-cookie'
import { mapState } from 'vuex'
export default {
  name: 'index',
  data() {
    return {
      vip: {
        name: '',
        background_urls: [''],
      },
      orderOfUser: {
        total_commission_today: 0,
        total_commission: 0,
        count_order: 0,
        count_order_today: 0,
      },
      profile: {},
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.profile.profile,
      bank: (state) => state.profile.profile.bank,
      isLogin: (state) => state.auth.isAuthenticated,
    }),
  },
  methods: {
    formatCurrency(amount) {
      if (!amount) return 0
      // Kiểm tra nếu là số nguyên thì chỉ định dạng phần nguyên
      if (Number.isInteger(amount)) {
        return amount.toLocaleString('en-US')
      } else {
        // Nếu có phần thập phân, giới hạn chỉ 2 chữ số sau dấu phẩy
        let formattedAmount = Math.floor(amount * 100) / 100
        return formattedAmount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      }
    },
    navigateTo(page) {
      window.location.href = page
    },
    chamsockhachhang() {
      let chat = document.querySelector('.launcher-icon.launcher-minimize-icon')
      if (chat) {
        chat.click()
      }
    },
    logout() {
      this.$store.dispatch('loading/setModalLoading', true)
      this.$store.dispatch('profile/saveProfile', null)
      this.$store.dispatch('profile/saveVip', null)
      Cookies.remove('access_token')
      Cookies.remove('refresh_token')
      Cookies.remove('user_id')
      Cookies.remove('time_valid')
      this.$store.dispatch('auth/logout')
      this.$store.dispatch('loading/setModalLoading', false)
      // this.$router.push('/login')
      window.location.href = '/login'
      this.$message.success('Đăng xuất thành công')
    },
    async getListByKey() {
      volatilityApi.getListVips(this.profile.level).then((res) => {
        this.vip = _.get(res, 'data')
        this.$store.dispatch('profile/saveVip', this.vip)
      })
    },
    getOrderAnalytic() {
      orderApi
        .getOrderAnalytic()
        .then((res) => {
          this.orderOfUser = _.get(res, 'data', [])
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
  },
  watch: {
    '$store.state.profile': {
      handler: function (val) {
        if (val) {
          this.profile = this.$store.state.profile.profile
          this.vip = this.$store.state.profile.vip
          // this.getListByKey()
          this.getOrderAnalytic()
        }
      },
      deep: true,
    },
    '$store.state.profile.vip': {
      handler: function (val) {
        this.vip = this.$store.state.profile.vip
      },
      deep: true,
    },
  },
  mounted() {
    if (this.$store.state.profile) {
      this.profile = this.$store.state.profile.profile
      this.vip = this.$store.state.profile.vip
      // this.getListByKey()
      this.getOrderAnalytic()
      this.getListByKey()
    }
  },
}
</script>

<style scoped lang="scss">
.profile-container {
  background-color: white;
  min-height: 100vh;
  margin-bottom: 100px;
}

.profile-header {
  background-color: #e8e8e8;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.avatar {
  width: 60px;
  height: 60px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #888;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

.user-phone {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.user-balance {
  font-size: 16px;
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 3px;
}

.user-code {
  font-size: 12px;
  color: #888;
}

.action-buttons {
  background-color: #e8e8e8;
  padding: 15px 20px;
  display: flex;
  gap: 10px;
}

.btn {
  flex: 1;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-deposit {
  background-color: #d1d5db;
  color: #374151;
}

.btn-deposit:hover {
  background-color: #9ca3af;
}

.btn-withdraw {
  background-color: #d1d5db;
  color: #374151;
}

.btn-withdraw:hover {
  background-color: #9ca3af;
}

.menu-section {
  margin-top: 1px;
}

.section-header {
  background-color: #d1d5db;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
}

.menu-item {
  background-color: white;
  padding: 15px 20px;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.menu-item:hover {
  background-color: #f9fafb;
}

.menu-item:last-child {
  border-bottom: none;
}

.menu-icon {
  width: 20px;
  color: #6b7280;
  font-size: 16px;
}

.menu-text {
  flex: 1;
  font-size: 15px;
  color: #374151;
}

.menu-arrow {
  color: #9ca3af;
  font-size: 12px;
}

.special-text {
  color: #ef4444;
  font-weight: 600;
}
.action-buttons {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.btn {
  padding: 10px 18px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 100px;
  justify-content: center;
}

.btn-deposit {
  background: linear-gradient(135deg, #4caf50, #45a049);
  color: white;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
}

.btn-withdraw {
  background: rgb(243, 104, 104) !important;
  color: #ff5722;
  border: 2px solid #ff5722;
  box-shadow: 0 2px 8px rgba(255, 87, 34, 0.2);
}
@import '~/assets/scss/my.scss';
</style>
<style lang="css">
.ant-progress-text {
  display: none !important;
}
.ant-progress-outer {
  padding-right: 0 !important;
}
</style>
