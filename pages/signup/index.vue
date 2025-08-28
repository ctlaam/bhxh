<template>
  <div>
    <h5 class="blace">Đăng ký</h5>
    <div class="login-container">
      <div class="login-box">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img
            src="~/assets/go-maket/icon-DOt7N7oV.png"
            alt="Logo"
            class="logo"
          />
        </div>

        <!-- Upload Avatar -->
        <div class="avatar-upload-wrapper">
          <div class="avatar-preview" @click="$refs.avatarInput.click()">
            <img
              v-if="avatarUrl"
              :src="domain + avatarUrl"
              alt="Avatar"
              class="avatar-image"
            />
            <div v-else class="avatar-placeholder">
              <a-icon
                type="camera"
                :style="{ fontSize: '32px', color: '#999' }"
              />
              <p class="upload-text">Tải ảnh đại diện</p>
            </div>
            <div v-if="uploadingAvatar" class="avatar-loading">
              <a-spin />
            </div>
          </div>
          <input
            ref="avatarInput"
            type="file"
            accept="image/*"
            style="display: none"
            @change="handleAvatarChange"
          />
          <p class="avatar-hint">Click để tải ảnh (JPG, PNG, tối đa 5MB)</p>
        </div>

        <!-- Form đăng ký -->
        <a-form :form="form" @submit="handleSubmit" class="login-form">
          <h2 class="login-title">Đăng ký tài khoản</h2>

          <!-- Username -->
          <a-form-item>
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [
                    { required: true, message: 'Vui lòng nhập tên đăng nhập!' },
                    {
                      min: 6,
                      message: 'Tên đăng nhập phải có ít nhất 6 ký tự!',
                    },
                    {
                      pattern: /^[a-zA-Z0-9_]+$/,
                      message:
                        'Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới!',
                    },
                  ],
                },
              ]"
              size="large"
              placeholder="Tên đăng nhập"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>

          <!-- Password -->
          <a-form-item has-feedback>
            <a-input-password
              v-decorator="[
                'password',
                {
                  rules: [
                    { required: true, message: 'Vui lòng nhập mật khẩu!' },
                    { min: 6, message: 'Mật khẩu phải có ít nhất 6 ký tự!' },
                    { validator: validateToNextPassword },
                  ],
                },
              ]"
              size="large"
              placeholder="Mật khẩu"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-item>

          <!-- Confirm Password -->
          <a-form-item has-feedback>
            <a-input-password
              v-decorator="[
                'confirm',
                {
                  rules: [
                    { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                    { validator: compareToFirstPassword },
                  ],
                },
              ]"
              size="large"
              placeholder="Xác nhận mật khẩu"
              @blur="handleConfirmBlur"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-item>

          <!-- Buttons -->
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              size="large"
              block
              class="register-submit-button"
              :loading="loading"
            >
              Đăng ký
            </a-button>

            <a-button
              size="large"
              block
              class="login-redirect-button"
              @click="handleLogin"
            >
              Đã có tài khoản? Đăng nhập
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from '../../api/auth'

export default {
  layout: 'account',
  data() {
    return {
      loading: false,
      confirmDirty: false,
      avatarUrl: null,
      uploadingAvatar: false,
      domain: process.env.BASE_URL_IMAGE,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    handleAvatarChange(e) {
      const file = e.target.files[0]
      if (!file) return

      // Kiểm tra loại file
      if (!file.type.startsWith('image/')) {
        this.$message.error('Vui lòng chọn file ảnh!')
        return
      }

      // Kiểm tra kích thước file (5MB)
      if (file.size > 5 * 1024 * 1024) {
        this.$message.error('Kích thước ảnh không được vượt quá 5MB!')
        return
      }

      // Upload ảnh
      this.uploadAvatar(file)
    },

    async uploadAvatar(file) {
      this.uploadingAvatar = true
      console.log('file:', file)
      const formData = new FormData()
      formData.append('file', file)
      console.log('formData:', formData)
      try {
        const response = await authApi.uploadImage(formData)
        // Giả sử API trả về URL của ảnh đã upload
        // Điều chỉnh theo cấu trúc response thực tế của API
        this.avatarUrl = response.data?.path || response.url || response
        this.$message.success('Tải ảnh thành công!')
      } catch (error) {
        console.error('Upload error:', error)
        this.$message.error('Tải ảnh thất bại, vui lòng thử lại!')
      } finally {
        this.uploadingAvatar = false
      }
    },

    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.loading = true

          // Chuẩn bị data để gửi
          const registerData = {
            password: values.password,
            name: values.username,
            avatar: this.domain + this.avatarUrl || '', // Thêm avatar URL
          }

          authApi
            .signUp(registerData)
            .then((res) => {
              this.$message.success('Đăng ký thành công! Vui lòng đăng nhập.')
              setTimeout(() => {
                this.$router.push('/login')
              }, 1500)
            })
            .catch((err) => {
              console.log(err, 'error')
              if (Array.isArray(err.response?.data?.message)) {
                this.$message.error(err.response.data.message[0])
              } else if (err.response?.data?.message) {
                this.$message.error(err.response.data.message)
              } else {
                this.$message.error('Đăng ký thất bại, vui lòng thử lại sau!')
              }
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },

    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },

    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('Mật khẩu xác nhận không khớp!')
      } else {
        callback()
      }
    },

    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },

    handleLogin() {
      this.$router.push('/login')
    },

    showTerms() {
      // Xử lý hiển thị điều khoản sử dụng
      this.$message.info('Điều khoản sử dụng')
      // Có thể mở modal hoặc chuyển đến trang điều khoản
    },
  },
}
</script>

<style scoped>
.blace {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #ff5c5e;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

/* Container chính */
.login-container {
  min-height: calc(100vh - 50px);
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  display: flex;
}

/* Box đăng ký */
.login-box {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 500px;
  margin: auto;
}

/* Logo */
.logo-wrapper {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

/* Avatar Upload Styles */
.avatar-upload-wrapper {
  text-align: center;
  margin-bottom: 25px;
}

.avatar-preview {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border: 2px dashed #d9d9d9;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
}

.avatar-preview:hover {
  border-color: #ff5c5e;
  background-color: #fff5f5;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  text-align: center;
}

.upload-text {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}

.avatar-loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-hint {
  margin-top: 8px;
  font-size: 12px;
  color: #999;
}

/* Tiêu đề */
.login-title {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  color: #333;
  margin-bottom: 25px;
}

/* Form */
.login-form {
  width: 100%;
}

/* Button đăng ký chính */
.register-submit-button {
  background-color: #ff5c5e !important;
  border-color: #ff5c5e !important;
  color: white !important;
  font-weight: 500;
  height: 45px;
  font-size: 16px;
  margin-bottom: 15px;
  transition: all 0.3s;
}

.register-submit-button:hover:not(:disabled) {
  background-color: #ff4547 !important;
  border-color: #ff4547 !important;
  box-shadow: 0 4px 12px rgba(255, 92, 94, 0.3);
}

/* Button chuyển đến đăng nhập */
.login-redirect-button {
  background-color: #f6f6f6 !important;
  border-color: #f6f6f6 !important;
  color: #000 !important;
  font-weight: 500;
  height: 45px;
  font-size: 16px;
  transition: all 0.3s;
}

.login-redirect-button:hover {
  background-color: #ebebeb !important;
  border-color: #ebebeb !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Input styles */
.ant-input-affix-wrapper,
.ant-input {
  height: 42px;
  font-size: 15px;
}

.ant-input-affix-wrapper:hover,
.ant-input:hover {
  border-color: #ff5c5e;
}

.ant-input-affix-wrapper:focus,
.ant-input:focus,
.ant-input-affix-wrapper-focused {
  border-color: #ff5c5e;
  box-shadow: 0 0 0 2px rgba(255, 92, 94, 0.2);
}

/* Checkbox */
.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #ff5c5e;
  border-color: #ff5c5e;
}

.ant-checkbox-wrapper:hover .ant-checkbox-inner {
  border-color: #ff5c5e;
}

/* Form item spacing */
.ant-form-item {
  margin-bottom: 20px;
}

.ant-form-item:last-child {
  margin-bottom: 0;
}

/* Error message */
.ant-form-explain {
  font-size: 13px;
  margin-top: 4px;
}

/* Link in checkbox */
.ant-checkbox-wrapper a {
  color: #ff5c5e;
  text-decoration: underline;
}

.ant-checkbox-wrapper a:hover {
  color: #ff4547;
}

/* Responsive */
@media (max-width: 480px) {
  .login-box {
    padding: 25px 20px;
  }

  .login-title {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .logo {
    width: 60px;
    height: 60px;
  }

  .avatar-preview {
    width: 100px;
    height: 100px;
  }

  .ant-form-item {
    margin-bottom: 16px;
  }
}
</style>
