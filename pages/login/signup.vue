<template>
  <div id="signup">
    <div class="row py-2 px-2 m-0">
      <div class="col-auto px-0">
        <button
          class="btn btn-40 btn-link back-btn"
          @click="backHistory"
          type="button"
        >
          <span class="material-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path
                d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="text-left col align-self-center"></div>
      <div class="ml-auto col-auto align-self-center">
        <NuxtLink to="/login">
          <a-button type="primary" class="header-login-btn">
            <span>Đã có tài khoản, đăng nhập</span>
          </a-button>
        </NuxtLink>
      </div>
    </div>

    <div class="container" style="overflow-y: auto; height: 100%; padding-bottom: 25px">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="signup-card">
            <!-- Logo Section -->
            <div class="logo-section">
              <img
                src="https://i.imgur.com/Cacqy63.png"
                alt="logo"
                class="logo-img"
              />
            </div>

            <!-- Welcome Text -->
            <div class="welcome-section">
              <h4 class="welcome-title">Tạo tài khoản mới</h4>
              <p class="welcome-subtitle">Điền thông tin để bắt đầu</p>
            </div>

            <!-- Signup Form -->
            <div class="form-section">
              <a-form :form="form" @submit="handleSubmit">
                <div class="form-row">
                  <a-form-item class="form-item">
                    <a-input
                      size="large"
                      placeholder="Họ và tên"
                      v-decorator="[
                        'name',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Họ và tên không được để trống!',
                            },
                          ],
                        },
                      ]"
                    >
                      <a-icon slot="prefix" type="user" class="input-icon" />
                    </a-input>
                  </a-form-item>
                </div>

                <div class="form-row">
                  <a-form-item class="form-item">
                    <a-input
                      size="large"
                      placeholder="Tên ID đăng nhập"
                      v-decorator="[
                        'identifier',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Tên không được để trống!',
                            },
                          ],
                        },
                      ]"
                    >
                      <a-icon slot="prefix" type="idcard" class="input-icon" />
                    </a-input>
                  </a-form-item>
                </div>

                <div class="form-row">
                  <a-form-item class="form-item">
                    <a-input
                      size="large"
                      placeholder="Số điện thoại"
                      v-decorator="[
                        'phone',
                        {
                          rules: [
                            {
                              required: true,
                              message: 'Số điện thoại không được để trống!',
                            },
                          ],
                        },
                      ]"
                    >
                      <a-icon slot="prefix" type="phone" class="input-icon" />
                    </a-input>
                  </a-form-item>
                </div>

                <div class="form-row">
                  <div class="col-6 pr-1">
                    <a-form-item class="form-item">
                      <a-input
                        size="large"
                        type="password"
                        placeholder="Mật khẩu"
                        v-decorator="[
                          'password',
                          {
                            rules: [
                              {
                                required: true,
                                message: 'Mật khẩu không được để trống!',
                              },
                            ],
                          },
                        ]"
                      >
                        <a-icon slot="prefix" type="lock" class="input-icon" />
                      </a-input>
                    </a-form-item>
                  </div>
                  <div class="col-6 pl-1">
                    <a-form-item class="form-item">
                      <a-input
                        size="large"
                        placeholder="Xác nhận mật khẩu"
                        v-decorator="[
                          'confirm',
                          {
                            rules: [
                              {
                                required: true,
                                message: 'Vui lòng xác nhận mật khẩu!',
                              },
                              {
                                validator: compareToFirstPassword,
                              },
                            ],
                          },
                        ]"
                        type="password"
                      >
                        <a-icon slot="prefix" type="safety-certificate" class="input-icon" />
                      </a-input>
                    </a-form-item>
                  </div>
                </div>

                <div class="form-row">
                  <div class="col-6 pr-1">
                    <a-form-item class="form-item">
                      <a-input
                        size="large"
                        placeholder="Mật khẩu rút tiền"
                        v-decorator="[
                          'passwordMoney',
                          {
                            rules: [
                              {
                                required: true,
                                message: 'Mật khẩu rút tiền không được để trống!',
                              },
                            ],
                          },
                        ]"
                      >
                        <a-icon slot="prefix" type="dollar" class="input-icon" />
                      </a-input>
                    </a-form-item>
                  </div>
                  <div class="col-6 pl-1">
                    <a-form-item class="form-item">
                      <a-input
                        size="large"
                        placeholder="Mã mời"
                        v-decorator="[
                          'inviteCode',
                          {
                            rules: [
                              {
                                required: true,
                                message: 'Mã mời không được để trống !',
                              },
                            ],
                          },
                        ]"
                      >
                        <a-icon slot="prefix" type="gift" class="input-icon" />
                      </a-input>
                    </a-form-item>
                  </div>
                </div>

                <!-- Terms Link -->
                <div class="terms-section">
                  <NuxtLink to="/my/rules" class="terms-link">
                    <a-icon type="file-text" />
                    Xem điều khoản & điều kiện
                  </NuxtLink>
                </div>

                <a-form-item class="form-item">
                  <a-button
                    class="signup-btn"
                    type="primary"
                    size="large"
                    html-type="submit"
                    block
                  >
                    Đăng ký
                  </a-button>
                </a-form-item>
              </a-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from '../../api/auth'
import axios from 'axios'

export default {
  layout: 'account',
  data() {
    return {
      username: null,
      password: null,
      password2: null,
      ip_register: null,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  created() {
    this.getUserIP()
  },
  methods: {
    async getUserIP() {
      try {
        const response = await axios.get('https://jsonip.com')
        this.ip_register = response.data.ip
      } catch (err) {
        return
      }
    },
    backHistory() {
      this.$router.push({ path: '/login' })
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('Mật khẩu không khớp !')
      } else {
        callback()
      }
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          authApi
            .signUp({
              identifier: values.identifier,
              password: values.password,
              reference_code: values.inviteCode,
              tfa_password: values.passwordMoney,
              name: values.name,
              phone: values.phone,
              ip_register: this.ip_register,
            })
            .then((res) => {
              this.$message.success('Đăng kí thành công !')
              this.$router.push('/login')
            })
            .catch((err) => {
              if (err.response?.data?.message) {
                this.$message.error(err.response.data.message)
              } else {
                this.$message.error('Đăng kí thất bại !')
              }
            })
            .finally(() => {
              setTimeout(() => {
                this.$store.dispatch('loading/setModalLoading', false)
              }, 1500)
            })
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
#signup {
  min-height: 100vh;
  padding: 20px 0;

  .signup-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    padding: 40px 30px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #c62a1c, #e74c3c);
    }
  }

  .logo-section {
    text-align: center;
    margin-bottom: 25px;

    .logo-img {
      width: 100px;
      height: auto;
      object-fit: contain;
    }
  }

  .welcome-section {
    text-align: center;
    margin-bottom: 30px;

    .welcome-title {
      font-size: 22px;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 8px;
    }

    .welcome-subtitle {
      font-size: 14px;
      color: #7f8c8d;
      margin-bottom: 0;
    }
  }

  .form-section {
    .form-row {
      display: flex;
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .form-item {
      margin-bottom: 0;
      flex: 1;

      .ant-input-affix-wrapper {
        border-radius: 12px;
        border: 2px solid #e8ecf0;
        transition: all 0.3s ease;

        &:hover, &:focus {
          border-color: #c62a1c;
          box-shadow: 0 0 0 3px rgba(198, 42, 28, 0.1);
        }

        .input-icon {
          color: #95a5a6;
        }
      }

      .ant-input {
        border: none;
        font-size: 14px;
        font-weight: 500;

        &::placeholder {
          color: #bdc3c7;
          font-weight: 400;
        }
      }
    }

    .signup-btn {
      background: linear-gradient(135deg, #c62a1c, #e74c3c);
      border: none;
      border-radius: 12px;
      height: 48px;
      font-size: 16px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(198, 42, 28, 0.3);
      margin-top: 10px;

      &:hover, &:focus {
        background: linear-gradient(135deg, #a02318, #c0392b);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(198, 42, 28, 0.4);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .terms-section {
    text-align: center;
    margin: 20px 0;

    .terms-link {
      color: #c62a1c;
      font-weight: 500;
      text-decoration: none;
      font-size: 14px;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 6px;

      &:hover {
        color: #a02318;
        text-decoration: underline;
      }
    }
  }

  .header-login-btn {
    background: rgba(199, 33, 33, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;

    span {
      color: #ffffff !important;
      font-weight: 500;
    }

    &:hover, &:focus {
      background: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-1px);
    }
  }

  .back-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 12px;
    padding: 8px 12px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateX(-2px);
    }

    svg {
      fill: white;
    }
  }

  .has-error {
    .ant-form-explain {
      color: #e74c3c;
      font-size: 12px;
      font-weight: 500;
      margin-top: 5px;
    }

    .ant-input-affix-wrapper {
      border-color: #e74c3c;
      box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
    }
  }

  // Two-column layout for password fields
  .col-6 {
    &.pr-1 {
      padding-right: 8px;
    }
    &.pl-1 {
      padding-left: 8px;
    }
  }
}

// Responsive
@media (max-width: 768px) {
  #signup {
    padding: 10px;

    .signup-card {
      padding: 30px 20px;
      margin: 10px;
    }

    .welcome-section {
      .welcome-title {
        font-size: 18px;
      }
    }

    // Stack password fields on mobile
    .form-row {
      flex-direction: column;

      .col-6 {
        width: 100%;
        padding: 0 !important;
        margin-bottom: 15px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  #signup {
    .header-login-btn {
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
