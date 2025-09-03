<template>
  <div>
    <div id="header">
      <div class="banner" style="height: auto">
        <div class="pot-header container">
          <div class="row">
            <div class="col-2 col-sm-2 col-md-6">
              <div class="left">
                <a href="/">
                  <img alt="logo" src="../../assets/img/logo_text.svg" />
                  <img alt="logo_white" src="../../assets/img/logo_white.svg" />
                </a>
              </div>
            </div>
            <div class="col-10 col-sm-10 col-md-6">
              <div
                class="ke-khai-nav right d-flex align-items-center justify-content-end"
                style="padding-top: 10px; bottom: 5px !important"
              >
                <!-- Nếu đã đăng nhập -->
                <div
                  v-if="currentUser"
                  class="user-info d-flex align-items-center me-3"
                >
                  <a-dropdown placement="bottomRight">
                    <!-- Nút bấm (user info) -->
                    <div
                      class="d-flex align-items-center bg-white shadow-sm rounded p-2"
                      style="cursor: pointer"
                    >
                      <!-- Avatar -->
                      <div
                        class="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white me-2"
                        style="width: 36px; height: 36px"
                      >
                        <i class="fas fa-user"></i>
                      </div>

                      <!-- Info -->
                      <div class="d-flex flex-column">
                        <span class="fw-semibold text-dark medium">
                          {{ currentUser.username }}
                        </span>
                        <span
                          class="text-success fw-bold d-flex align-items-center"
                        >
                          <i class="fas fa-coins text-warning me-1"></i>
                          {{ formatCurrency(currentUser.balance) }}
                        </span>
                      </div>
                    </div>

                    <!-- Menu xổ xuống -->
                    <template #overlay>
                      <a-menu>
                        <a-menu-item key="withdraw" @click="handleWithdraw">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            width="20"
                            height="20"
                          >
                            <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                            <path
                              fill="#52f033"
                              d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z"
                            />
                          </svg>
                          Rút tiền
                        </a-menu-item>
                        <a-menu-item key="logout" @click="handleLogout">
                          <i class="fas fa-sign-out-alt text-danger me-2"></i>
                          Đăng xuất
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown>
                </div>

                <!-- Nếu chưa đăng nhập -->
                <div v-else class="sub-nav">
                  <a href="#" id="btn-show-login" @click.prevent="showModal">
                    <button class="btn mat-button">
                      <span class="mat-button-wrapper"> Đăng nhập </span>
                    </button>
                  </a>
                  <nuxt-link to="/chon-dang-ky">
                    <button class="btn mat-button">
                      <span class="mat-button-wrapper"> Đăng ký </span>
                    </button>
                  </nuxt-link>
                </div>

                <!-- Nếu chưa đăng nhập -->
                <div v-else class="sub-nav">
                  <a href="#" id="btn-show-login" @click.prevent="showModal">
                    <button class="btn mat-button">
                      <span class="mat-button-wrapper"> Đăng nhập </span>
                    </button>
                  </a>
                  <nuxt-link to="/chon-dang-ky">
                    <button class="btn mat-button">
                      <span class="mat-button-wrapper"> Đăng ký </span>
                    </button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end banner -->
    </div>

    <div class="ng-star-inserted">
      <div class="navbar-container">
        <ul class="menu-left active">
          <li>
            <a
              mat-button=""
              class="mat-button"
              href="/"
              tabindex="0"
              aria-disabled="false"
            >
              <span class="mat-button-wrapper"
                ><img alt="image" src="../../assets/img/home.svg"
              /></span>
              <div class="mat-button-ripple mat-ripple" matripple=""></div>
              <div class="mat-button-focus-overlay"></div>
            </a>
          </li>
          <li class="ng-star-inserted">
            <a
              class="mat-button ng-star-inserted"
              mat-button=""
              href="/"
              tabindex="0"
              aria-disabled="false"
            >
              <span class="mat-button-wrapper">
                <span class="title-header">Nộp BHXH điện tử</span>
                <img
                  alt="image"
                  class="img"
                  src="../../assets/img/menu_hotro.svg"
                />
              </span>
            </a>
          </li>
          <li class="ng-star-inserted">
            <a
              class="mat-button ng-star-inserted"
              mat-button=""
              href="/"
              tabindex="0"
              aria-disabled="false"
            >
              <span class="mat-button-wrapper">
                <span class="title-header">Dịch vụ công</span>
                <img
                  alt="image"
                  class="img"
                  src="../../assets/img/menu_hotro.svg"
                />
              </span>
            </a>
          </li>
          <li class="ng-star-inserted">
            <a
              class="mat-button ng-star-inserted"
              mat-button=""
              href="/"
              tabindex="0"
              aria-disabled="false"
            >
              <span class="mat-button-wrapper">
                <span class="title-header">Tra cứu</span>
                <img
                  alt="image"
                  class="img"
                  src="../../assets/img/menu_tracuu.svg"
                />
              </span>
            </a>
          </li>
          <li class="ng-star-inserted">
            <a
              class="mat-button ng-star-inserted"
              mat-button=""
              href="/"
              tabindex="0"
              aria-disabled="false"
            >
              <span class="mat-button-wrapper">
                <span class="title-header">Tài liệu & ứng dụng</span>
                <img
                  alt="image"
                  class="img"
                  src="../../assets/img/menu_tailieuvideo.svg"
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Modal -->
    <a-modal
      v-model="visible"
      :footer="null"
      :closable="true"
      :width="450"
      centered
      class="login-modal"
      :bodyStyle="{ padding: '0' }"
    >
      <div class="login-container">
        <!-- Header -->
        <div class="login-header">
          <h2 class="login-title">ĐĂNG NHẬP</h2>

          <!-- User Type -->
          <div class="user-type-container">
            <a-radio-group v-model:value="userType" class="user-type-group">
              <a-radio value="caNhan" class="user-type-option"
                ><span class="type-text">Cá nhân</span></a-radio
              >
              <a-radio value="toChuc" class="user-type-option"
                ><span class="type-text">Tổ chức</span></a-radio
              >
              <a-radio value="nguoiGiamHo" class="user-type-option"
                ><span class="type-text">Người giám hộ</span></a-radio
              >
            </a-radio-group>
          </div>
        </div>

        <!-- Form Body -->
        <div class="login-body">
          <a-form
            :model="loginForm"
            @finish="handleLogin"
            layout="vertical"
            :hideRequiredMark="true"
          >
            <a-form-item
              name="username"
              :rules="[
                { required: true, message: 'Vui lòng nhập mã số BHXH!' },
              ]"
            >
              <div class="input-container">
                <div class="input-icon"><a-icon type="user" /></div>
                <a-input
                  v-model:value="loginForm.username"
                  placeholder="Mã số BHXH"
                  size="large"
                  class="custom-input"
                  :bordered="false"
                />
              </div>
            </a-form-item>

            <a-form-item
              name="password"
              :rules="[{ required: true, message: 'Vui lòng nhập số CCCD!' }]"
            >
              <div class="input-container">
                <div class="input-icon"><a-icon type="lock" /></div>
                <a-input-password
                  v-model:value="loginForm.password"
                  placeholder="Số CCCD"
                  size="large"
                  class="custom-input"
                  :bordered="false"
                />
              </div>
            </a-form-item>

            <!-- Captcha -->
            <div class="captcha-section">
              <div class="captcha-image-container">
                <img
                  :src="captchaImageUrl"
                  :alt="captchaKey"
                  class="captcha-image"
                  @error="handleCaptchaError"
                />
                <button
                  type="button"
                  class="refresh-captcha-btn"
                  @click="refreshCaptcha"
                  title="Làm mới mã xác thực"
                >
                  <a-icon type="reload" />
                </button>
              </div>
            </div>

            <a-form-item
              name="captcha"
              :rules="[
                { required: true, message: 'Vui lòng nhập mã kiểm tra!' },
              ]"
            >
              <div class="input-container">
                <div class="input-icon"><a-icon type="safety" /></div>
                <a-input
                  v-model:value="loginForm.captcha"
                  placeholder="Nhập mã kiểm tra"
                  size="large"
                  class="custom-input"
                  :bordered="false"
                />
              </div>
            </a-form-item>

            <div class="forgot-password">
              <span>Quên mật khẩu</span>
            </div>
          </a-form>
        </div>

        <!-- Footer Buttons -->
        <div class="login-footer">
          <div class="main-buttons">
            <a-button size="large" class="register-btn" @click="handleRegister"
              >ĐĂNG KÝ</a-button
            >
            <a-button
              type="primary"
              size="large"
              class="login-btn"
              :loading="loading"
              @click="handleLogin"
            >
              ĐĂNG NHẬP
            </a-button>
          </div>

          <div class="external-login">
            <a-button
              size="large"
              class="national-service-btn"
              block
              @click="handleNationalLogin"
            >
              <img
                src="../../assets/img/quoc_huy.svg"
                alt="quốc huy"
                class="btn-icon"
              />
              ĐĂNG NHẬP QUA DỊCH VỤ CÔNG QUỐC GIA
            </a-button>

            <a-button
              size="large"
              class="vneid-btn"
              block
              @click="handleVneIdLogin"
            >
              <img
                src="../../assets/img/logo-vneid.svg"
                alt="vneid"
                class="btn-icon"
              />
              Đăng nhập bằng tài khoản định danh điện tử
            </a-button>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import axios from 'axios'
import { duration } from 'moment'

// Đổi baseURL khi deploy (VD: https://api.yourdomain.com)
const api = axios.create({ baseURL: 'https://api.baohiemxahoivn.co/' })
api.interceptors.request.use((cfg) => {
  const t = localStorage.getItem('token')
  if (t) cfg.headers.Authorization = `Bearer ${t}`
  return cfg
})

export default {
  data() {
    return {
      visible: false,
      loading: false,
      userType: 'caNhan',

      // Captcha mock
      captchaImageUrl: '', // sẽ set trong initializeCaptcha()
      captchaKey: '', // text phải nhập đúng
      listCaptcha: [
        { url: require('~/assets/img/8TNK.png'), key: '8TNK' },
        { url: require('~/assets/img/3CMT.png'), key: '3CMT' },
        { url: require('~/assets/img/LER3.png'), key: 'LER3' },
        { url: require('~/assets/img/NKX6.png'), key: 'NKX6' },
        { url: require('~/assets/img/TP7H.png'), key: 'TP7H' },
      ],

      loginForm: { username: '', password: '', captcha: '' },
      currentUser: null, // ✅ user đang đăng nhập
    }
  },

  mounted() {
    console.log('new')
    this.initializeCaptcha()

    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    if (username && password) {
      // tự động login lại để lấy user mới nhất
      api
        .post('/api/auth/login', { username, password })
        .then(({ data }) => {
          this.currentUser = data.user
        })
        .catch(() => {
          // nếu fail thì clear storage
          localStorage.removeItem('username')
          localStorage.removeItem('password')
        })
    }
  },

  methods: {
    handleWithdraw() {
      this.$router.push('/rut-tien')
      return
    },
    handleLogout() {
      // Xoá token và user trong localStorage
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('username')
      localStorage.removeItem('password')

      this.currentUser = null
      this.$message.success('Đăng xuất thành công!')
    },
    showModal() {
      this.visible = true
      this.initializeCaptcha()
    },
    closeModal() {
      this.visible = false
      this.resetForm()
    },
    resetForm() {
      this.loginForm = { username: '', password: '', captcha: '' }
      this.userType = 'caNhan'
    },

    // Chọn ngẫu nhiên 1 captcha trong danh sách
    initializeCaptcha() {
      const idx = Math.floor(Math.random() * this.listCaptcha.length)
      this.captchaImageUrl = this.listCaptcha[idx].url
      this.captchaKey = this.listCaptcha[idx].key
    },
    refreshCaptcha() {
      // tránh lặp lại cái đang hiển thị
      let idx
      do {
        idx = Math.floor(Math.random() * this.listCaptcha.length)
      } while (this.listCaptcha[idx].key === this.captchaKey)
      this.captchaImageUrl = this.listCaptcha[idx].url
      this.captchaKey = this.listCaptcha[idx].key
    },
    handleCaptchaError() {
      // đổi captcha khác nếu ảnh lỗi
      this.refreshCaptcha()
    },

    async handleLogin() {
      try {
        if (this.loginForm.captcha !== this.captchaKey) {
          this.$message.error('Mã kiểm tra không đúng!')
          this.refreshCaptcha()
          return
        }
        this.loading = true

        if (!this.loginForm.username || !this.loginForm.password) {
          this.$message.error('Vui lòng điền đầy đủ thông tin!')
          return
        }

        // gọi API login
        const { data } = await api.post('/api/auth/login', {
          username: this.loginForm.username,
          password: this.loginForm.password,
        })

        // ✅ chỉ lưu username + password
        localStorage.setItem('username', this.loginForm.username)
        localStorage.setItem('password', this.loginForm.password)

        // lưu token nếu BE trả về (optional)
        if (data.token) localStorage.setItem('token', data.token)

        this.currentUser = data.user
        localStorage.setItem('user', JSON.stringify(data.user))
        this.$message.success('Đăng nhập thành công!')
        this.closeModal()
      } catch (error) {
        this.$message.error(
          error?.response?.data?.message || 'Đăng nhập thất bại!'
        )
      } finally {
        this.loading = false
      }
    },

    // format số tiền (VD: 10000 => 10,000 VNĐ)
    formatCurrency(value) {
      if (!value) return '0 VNĐ'
      return new Intl.NumberFormat('vi-VN').format(value) + ' VNĐ'
    },

    handleRegister() {
      this.$router.push('/chon-dang-ky')
      this.closeModal()
    },
    handleForgotPassword() {
      this.$router.push('/')
    },
    handleNationalLogin() {
      this.$message.warning('Chức năng này đang bảo trì!')
      return
    },
    handleVneIdLogin() {
      this.$message.warning('Chức năng này đang bảo trì!')
      return
    },
  },
}
</script>

<style lang="scss">
/* (giữ nguyên toàn bộ CSS của bạn) */
.login-modal :deep(.ant-modal-content) {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
.login-modal :deep(.ant-modal-header) {
  display: none;
}
.login-container {
  background: #fff;
  border-radius: 16px;
}
.login-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 24px 20px 20px;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
}
.login-title {
  color: #1890ff;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px 0;
  letter-spacing: 1px;
}
.user-type-container {
  margin-top: 16px;
}
.user-type-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.user-type-group :deep(.ant-radio-wrapper) {
  flex: 1;
  margin: 0;
  padding: 8px 12px;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
}
.user-type-group :deep(.ant-radio) {
  display: none;
}
.user-type-group :deep(.ant-radio-wrapper-checked) {
  background: #1890ff;
  color: #fff;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}
.type-text {
  font-size: 13px;
  font-weight: 500;
}
.login-body {
  padding: 24px 20px 16px;
}
.input-container {
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 0 16px;
  margin-bottom: 16px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}
.input-container:focus-within {
  border-color: #1890ff;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
}
.input-icon {
  color: #8c8c8c;
  margin-right: 12px;
  font-size: 16px;
}
.custom-input {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.custom-input :deep(.ant-input) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  padding: 12px 0;
  font-size: 15px;
}
.custom-input :deep(.ant-input:focus) {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
.captcha-section {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}
.captcha-image-container {
  position: relative;
  display: inline-block;
  background: #fff;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.captcha-image {
  height: 80px;
  width: auto;
  border-radius: 8px;
  display: block;
  cursor: pointer;
}
.refresh-captcha-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #1890ff;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}
.refresh-captcha-btn:hover {
  background: #40a9ff;
  transform: rotate(180deg);
}
.forgot-password {
  text-align: right;
  margin-top: 8px;
}
.forgot-password a {
  color: #8c8c8c;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
}
.forgot-password a:hover {
  color: #1890ff;
}
.login-footer {
  padding: 16px 20px 24px;
  background: #fafafa;
}
.main-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
.register-btn,
.login-btn {
  padding: 10px;
  flex: 1;
  height: 44px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}
.register-btn {
  border: 2px solid #1890ff;
  color: #1890ff;
  background: #fff;
}
.register-btn:hover {
  background: #1890ff;
  color: #fff;
  transform: translateY(-1px);
}
.login-btn {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  border: none;
}
.login-btn:hover {
  background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%);
  transform: translateY(-1px);
}
.external-login {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.national-service-btn {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  border: none;
  color: #fff;
  height: 48px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s ease;
}
.national-service-btn:hover {
  background: linear-gradient(135deg, #73d13d 0%, #52c41a 100%);
  color: #fff;
  transform: translateY(-1px);
}
.vneid-btn {
  background: linear-gradient(135deg, #f5222d 0%, #cf1322 100%);
  border: none;
  color: #fff;
  height: 56px;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-wrap: wrap;
}
.vneid-btn:hover {
  background: linear-gradient(135deg, #ff4d4f 0%, #f5222d 100%);
  color: #fff;
  transform: translateY(-1px);
}
.btn-icon {
  width: 36px;
  height: 36px;
  margin-right: 8px;
}
.vneid-text {
  line-height: 1.3;
  font-size: 12px;
  text-align: left;
}
@media (max-width: 480px) {
  .login-modal :deep(.ant-modal) {
    margin: 0;
    max-width: none;
    width: 100vw;
    height: 100vh;
  }
  .login-container {
    border-radius: 0;
  }
  .user-type-group :deep(.ant-radio-wrapper) {
    padding: 6px 8px;
  }
  .type-text {
    font-size: 11px;
  }
  .main-buttons {
    flex-direction: column;
    padding: 10px;
  }
}
@import '../../assets/styles.css';
.navbar-container {
  background: #e8e9ea;
  height: 40px;
  position: relative;
}
.navbar-container .none-sidebar {
  display: inline-block;
  padding: 0;
}
.navbar-container ul.menu-left {
  padding-left: 45px !important;
  list-style-type: none !important;
  margin: 0;
  line-height: 40px;
}
.navbar-container ul.menu-left li {
  float: left;
  margin-right: 20px;
}
.navbar-container ul.menu-left li a {
  text-decoration: none !important;
}
.navbar-container ul.menu-left li img {
  width: 20px;
  position: relative;
  color: #06274f;
}
.navbar-container ul.menu-left li.active,
.navbar-container ul.menu-left li:hover {
  background-color: #cecece;
}
.navbar-container ul.menu-left li a {
  color: #06274f;
}
.navbar-container ul.menu-left li a span {
  display: block;
}
.mat-button {
  min-width: 0;
  padding-top: 2.25px;
  padding-bottom: 1.25px;
  border-radius: 0;
  line-height: 35px;
}
.img {
  width: 27px;
  height: 19px;
  display: none;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 767px) {
  ul.menu-left.active {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0 !important;
    margin-left: 30px;
  }
  .navbar-container ul.menu-left li {
    float: left;
    margin-right: 30px;
  }
  .navbar-container .none-sidebar {
    padding-left: 22px !important;
  }
  .navbar-container ul.menu-left li a .title-header {
    display: none;
  }
  .img {
    display: inline-block;
  }
}
.login-modal.ant-modal-root.login-modal {
  position: relative;
  z-index: 999999;
}
.user-info {
  color: #06274f;
  font-size: 14px;
}
.user-icon {
  font-size: 20px;
  color: #1890ff;
}
.balance {
  font-size: 13px;
  color: #28a745;
}
/* Mobile responsive cho user-info */
@media (max-width: 767px) {
  .user-info .rounded-circle {
    width: 30px !important;
    height: 30px !important;
    font-size: 12px; /* icon nhỏ hơn */
  }

  .user-info .fw-semibold {
    font-size: 12px; /* username nhỏ hơn */
  }

  .user-info .text-success {
    font-size: 11px; /* balance nhỏ hơn */
  }

  .user-info .bg-white {
    padding: 4px 8px !important; /* giảm padding */
  }
}
.login-modal .ant-form-item {
  margin-bottom: 0px !important;
  height: 60px;
}
.login-modal .captcha-section {
  margin: 10px 0;
}
.ant-message {
  z-index: 9999999;
}
.login-modal .ant-input-affix-wrapper .ant-input:not(:last-child) {
  padding-right: 30px;
  outline: none;
  border: none;
  background-color: transparent;
}
</style>
