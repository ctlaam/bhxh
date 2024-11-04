<template>
  <div id="signup" style="height: 100vh">
    <div class="row py-2 px-2 m-0">
      <div class="col-auto px-0">
        <button
          class="btn btn-40 btn-link back-btn"
          @click="backHistory"
          type="button"
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
        <NuxtLink to="/login">
          <div class="" style="color: #212529">Đã có tài khoản, đăng nhập</div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="container text-white"
      style="overflow-y: auto; height: 100%; padding-bottom: 25px"
    >
      <div class="row">
        <div class="col-12 align-self-center mb-4">
          <div class="row justify-content-center m-2">
            <div class="col">
              <div class="d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/crescentmall.png"
                  class="center-block mt-5 mb-2"
                  style="width: 100%; max-width: 150px"
                />
              </div>
              <h6 class="font-weight-normal mb-5 text-center">
                <b><!--SaigonToursit--></b>
              </h6>
              <a-form :form="form" @submit="handleSubmit">
                <a-form-item>
                  <a-input
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
                  />
                </a-form-item>
                <a-form-item>
                  <a-input
                    placeholder="Tên"
                    v-decorator="[
                      'name',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Tên không được để trống!',
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
                  <a-input
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
                  />
                </a-form-item>
                <a-form-item>
                  <a-input
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
                  />
                </a-form-item>
                <a-form-item>
                  <a-input
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
                  />
                </a-form-item>
                <div class="terms mb-2">
                  <a-checkbox
                    v-decorator="['agreement', { valuePropName: 'checked' }]"
                  >
                    Tôi đồng ý với điều khoản
                  </a-checkbox>
                </div>
                <div class="row">
                  <div class="col align-self-center pl-0 ml-3">
                    <NuxtLink to="/terms">
                      <h6 class="mb-1 text-white">
                        Xem điều khoản & điều kiện
                      </h6>
                    </NuxtLink>
                  </div>
                </div>
                <a-form-item>
                  <a-button
                    class="w-100 btn-login"
                    type="primary"
                    html-type="submit"
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
        console.log('value:', values)
        if (!err) {
          authApi
            .signUp({
              identifier: values.phone,
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
              if (err.response && err.response.status === 400) {
                this.$message.error('Email đã tồn tại !')
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

<style lang="scss">
#signup {
  height: 80%;
  .ant-input:placeholder-shown {
    font-weight: 600;
  }
  .btn-login {
    background-color: #c62a1c;
    border-color: #c62a1c;
  }
  .terms {
    color: #fff;
    span {
      color: #fff;
      font-size: 16px;
    }
  }
  .has-error .ant-form-explain,
  .has-error .ant-form-split {
    color: #f5222d;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
