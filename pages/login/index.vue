<template>
  <div id="signup">
    <div class="row py-2 px-2 m-0">
      <div class="text-left col align-self-center"></div>
    </div>

    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-6 col-xl-4">
          <div class="login-card">
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
              <h4 class="welcome-title">Chào mừng trở lại!</h4>
              <p class="welcome-subtitle">Đăng nhập để tiếp tục</p>
            </div>

            <!-- Login Form -->
            <div class="form-section">
              <a-form :form="form" @submit="handleSubmit">
                <a-form-item class="form-item">
                  <a-input
                    size="large"
                    placeholder="Tên ID đăng nhập"
                    prefix-icon="user"
                    v-decorator="[
                      'username',
                      {
                        rules: [
                          {
                            required: true,
                            message:
                              'Tên hoặc số điện thoại không được để trống!',
                          },
                        ],
                      },
                    ]"
                  >
                    <a-icon slot="prefix" type="user" class="input-icon" />
                  </a-input>
                </a-form-item>

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

                <a-form-item class="form-item">
                  <a-button
                    class="login-btn"
                    type="primary"
                    size="large"
                    html-type="submit"
                    block
                  >
                    Đăng nhập
                  </a-button>
                </a-form-item>
              </a-form>
            </div>

            <!-- Signup Link -->
            <div class="signup-section">
              <span class="signup-text">Chưa có tài khoản? </span>
              <NuxtLink to="/login/signup" class="signup-link">
                Đăng ký
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from '../../api/auth'
import * as volatilityApi from '../../api/volatility'
import Cookies from 'js-cookie'
import _ from 'lodash'

export default {
  layout: 'account',
  data() {
    return {
      username: null,
      password: null,
      password2: null,
      profile: null,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'login' })
  },
  methods: {
    backHistory() {
      this.$router.push({ path: '/' })
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.$store.dispatch('loading/setModalLoading', true)
          authApi
            .logIn({
              identifier: values.username,
              password: values.password,
            })
            .then(async (res) => {
              this.$message.success('Đăng nhập thành công')
              this.$store.dispatch('auth/login', {
                accessToken: res.token,
              })
              Cookies.set('access_token', res.token, { expires: 1 })
              await this.getProfile()
              this.$router.push('/')
            })
            .catch((error) => {
              this.$message.error(
                'Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu!'
              )
              this.$store.dispatch('auth/login', {
                accessToken: null,
              })
            })
            .finally(() => {
              setTimeout(() => {
                this.$store.dispatch('loading/setModalLoading', false)
              }, 1500)
            })
        }
      })
    },
    async getProfile() {
      volatilityApi.getProfileUser().then((res) => {
        this.profile = _.get(res, 'data')
        this.$store.dispatch('profile/saveProfile', this.profile)
      })
    },
  },
}
</script>

<style lang="scss">
#signup {
  min-height: 100vh;
  padding: 20px 0;

  .login-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    padding: 40px 30px;
    margin: 0 auto;
    max-width: 400px;
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
    margin-bottom: 30px;

    .logo-img {
      width: 120px;
      height: auto;
      object-fit: contain;
    }
  }

  .welcome-section {
    text-align: center;
    margin-bottom: 30px;

    .welcome-title {
      font-size: 24px;
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
    .form-item {
      margin-bottom: 20px;

      .ant-input-affix-wrapper {
        border-radius: 12px;
        border: 2px solid #e8ecf0;
        transition: all 0.3s ease;

        &:hover,
        &:focus {
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

    .login-btn {
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

      &:hover,
      &:focus {
        background: linear-gradient(135deg, #a02318, #c0392b);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(198, 42, 28, 0.4);
      }

      &:active {
        transform: translateY(0);
      }
    }
  }

  .signup-section {
    text-align: center;
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid #ecf0f1;

    .signup-text {
      color: #7f8c8d;
      font-size: 14px;
    }

    .signup-link {
      color: #c62a1c;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover {
        color: #a02318;
        text-decoration: underline;
      }
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
}

// Responsive
@media (max-width: 768px) {
  #signup {
    padding: 10px;

    .login-card {
      padding: 30px 20px;
      margin: 10px;
    }

    .welcome-section {
      .welcome-title {
        font-size: 20px;
      }
    }
  }
}
</style>
