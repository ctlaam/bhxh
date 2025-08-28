<template>
  <div>
    <div class="login-container">
      <div class="login-box">
        <!-- Logo -->
        <div class="logo-wrapper">
          <img src="~/assets/go-maket/icon-DOt7N7oV.png" alt="Logo" class="logo" />
        </div>

        <!-- Form đăng nhập -->
        <a-form
          :form="form"
          @submit="handleLogin"
          class="login-form"
        >
          <h2 class="login-title">Đăng nhập</h2>

          <!-- Username/Email -->
          <a-form-item>
            <a-input
              v-decorator="[
              'username',
              {
                rules: [
                  { required: true, message: 'Vui lòng nhập tên đăng nhập!' }
                ]
              }
            ]"
              size="large"
              placeholder="Vui lòng nhập tên đăng nhập"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>

          <!-- Password -->
          <a-form-item>
            <a-input-password
              v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Vui lòng nhập mật khẩu!' }
                ]
              }
            ]"
              size="large"
              placeholder="Mật khẩu"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              size="large"
              block
              class="login-button"
              :loading="loading"
            >
              Đăng nhập
            </a-button>

            <a-button
              size="large"
              block
              class="register-button"
              @click="$router.push('/signup')"
            >
              Đăng ký
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from '../../api/auth'
import Cookies from 'js-cookie'
export default {
  layout: 'account',
  name: 'LoginPage',
  data() {
    return {
      loading: false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'login_form' });
  },
  methods: {
    handleLogin(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loading = true;
          authApi
            .logIn({
              name: values.username,
              password: values.password,
            })
            .then(async (res) => {
              this.$message.success('Đăng nhập thành công')
              this.$store.dispatch('auth/login', {
                accessToken: res.token,
              })
              Cookies.set('access_token', res.token, { expires: 1 })
              await authApi
                .getDataUser(res.token)
                .then(async (response) => {
                  console.log("response aaa:", response)
                  await this.$store.dispatch(
                    'profile/saveProfile',
                    response.user
                  )
                })
                .catch((error) => {
                  this.$store.dispatch('auth/login', {
                    accessToken: null,
                  })
                })
              this.$router.push('/')
            })
            .catch((err) => {
              console.log(err)
              if (err.message) {
                this.$message.error('Sai tài khoản hoặc mật khẩu')
              } else {
                this.$message.error('Có lỗi xảy ra vui lòng thử lại sau')
              }
            })
            .finally(() => {
              setTimeout(() => {
                // this.$store.dispatch('loading/setModalLoading', false)
              }, 1500)
            })
        }
      });
    },

    handleRegister() {
      console.log('Navigate to register page');
      // this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
.blace {
  width: 100%;
  height: 50px;
  line-height: 30px;
  flex: 1;
  text-align: center;
  background-color: #ec1d27;
  /* margin-top: 40px; */
  margin-bottom: 0;
  padding-top: 5px;
  font-size: 24px;
  font-weight: bolder;
  color: #fff;
  z-index: 999;
}
/* Container chính */
.login-container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  display: flex;
}

/* Box đăng nhập */
.login-box {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 450px;
}

/* Logo */
.logo-wrapper {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

/* Tiêu đề */
.login-title {
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
}

/* Form */
.login-form {
  width: 100%;
}

/* Options (Remember & Forgot) */
.login-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.forgot-password {
  color: #ff5c5e;
}

.forgot-password:hover {
  text-decoration: underline;
}

/* Button đăng nhập - màu #ff5c5e */
.login-button {
  background-color: #ff5c5e !important;
  border-color: #ff5c5e !important;
  color: white !important;
  font-weight: 500;
  height: 45px;
  font-size: 16px;
  margin-bottom: 15px;
  transition: all 0.3s;
}

.login-button:hover {
  background-color: #ff4547 !important;
  border-color: #ff4547 !important;
  box-shadow: 0 4px 12px rgba(255, 92, 94, 0.3);
}

/* Button đăng ký - màu #f6f6f6 */
.register-button {
  background-color: #f6f6f6 !important;
  border-color: #f6f6f6 !important;
  color: #000 !important;
  font-weight: 500;
  height: 45px;
  font-size: 16px;
  transition: all 0.3s;
}

.register-button:hover {
  background-color: #ebebeb !important;
  border-color: #ebebeb !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Social login */
.social-login {
  display: flex;
  gap: 10px;
}

.social-button {
  flex: 1;
  height: 40px;
}

/* Input styles */
.ant-input-affix-wrapper,
.ant-input {
  height: 45px;
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

/* Responsive */
@media (max-width: 480px) {
  .login-box {
    padding: 30px 20px;
  }

  .login-title {
    font-size: 24px;
  }

  .social-login {
    flex-direction: column;
  }

  .social-button {
    width: 100%;
  }
}
</style>
