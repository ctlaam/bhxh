<template>
  <div id="signup">
    <div class="row py-2 px-2 m-0">
      <div class="col-auto px-0">
        <button
          class="btn btn-40 btn-link back-btn"
          type="button"
          @click="backHistory"
        >
          <span class="material-icons"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#212529"
            >
              <path
                d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"
              /></svg
          ></span>
        </button>
      </div>
      <div class="text-left col align-self-center"></div>
      <div class="ml-auto col-auto align-self-center">
        <NuxtLink to="/login/signup">
          <a-button type="primary">
            <span style="color: #ffffff">Tạo tài khoản mới</span>
          </a-button>
        </NuxtLink>
      </div>
    </div>
    <div class="container h-100 text-white">
      <div class="row h-100">
        <div class="col-12 align-self-center mb-4">
          <div class="row justify-content-center m-2">
            <div class="card">
              <div
                class="d-flex align-items-center justify-content-center mt-4"
              >
                <img
                  src="../../assets/img/logo_web.png"
                  alt="logo mt-4"
                  class="img-fluid"
                  style="width: 200px"
                />
              </div>
              <h6 class="font-weight-normal mb-5 text-center">
                <b><!--SaigonToursit--></b>
              </h6>
              <a-form :form="form" @submit="handleSubmit">
                <a-form-item>
                  <a-input
                    placeholder="Tên ID đăng nhập / Số điện thoại"
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
                  />
                </a-form-item>
                <a-form-item>
                  <a-input
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
                  />
                </a-form-item>
                <a-form-item>
                  <a-button
                    class="w-100 btn-login"
                    type="primary"
                    html-type="submit"
                  >
                    Đăng nhập
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
            .catch((err) => {
              if (err.message) {
                this.$message.error('Sai tài khoản hoặc mật khẩu')
              } else {
                this.$message.error('Có lỗi xảy ra vui lòng thử lại sau')
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
  height: 70%;
  .ant-input:placeholder-shown {
    font-weight: 600;
  }
  .btn-login {
    background-color: #c62a1c;
    border-color: #c62a1c;
  }
  .has-error .ant-form-explain,
  .has-error .ant-form-split {
    color: #f5222d;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
