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

          <!-- Mật khẩu rút tiền -->
          <a-form-item>
            <a-input-password
              v-decorator="[
                'passwordMoney',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Vui lòng nhập mật khẩu rút tiền!',
                    },
                    { len: 6, message: 'Mật khẩu rút tiền phải có đúng 6 số!' },
                    {
                      pattern: /^[0-9]+$/,
                      message: 'Mật khẩu rút tiền chỉ được chứa số!',
                    },
                  ],
                },
              ]"
              size="large"
              placeholder="Mật khẩu rút tiền (6 số)"
              maxLength="6"
            >
              <a-icon
                slot="prefix"
                type="wallet"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-item>

          <!-- Mã mời -->
          <a-form-item>
            <a-input
              v-decorator="[
                'inviteCode',
                {
                  rules: [{ required: true, message: 'Vui lòng nhập mã mời!' }],
                },
              ]"
              size="large"
              placeholder="Mã mời"
            >
              <a-icon
                slot="prefix"
                type="gift"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
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
  layout: 'nonelayout',
  data() {
    return {
      loading: false,
      confirmDirty: false,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.loading = true

          // Chuẩn bị data để gửi
          const registerData = {
            password: values.password,
            name: values.username,
          }
          console.log('registerData:', registerData)
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

  .ant-form-item {
    margin-bottom: 16px;
  }
}
</style>
