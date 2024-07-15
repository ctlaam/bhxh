<template>
  <div id="info">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h6 class="subtitle mb-0 text-center text-success" style="font-size: 14px;">
              Số dư tài khoản 99.00
            </h6>
          </div>
          <div class="card-body was-validated">

            <a-form :form="form" @submit="handleSubmit">
              <a-form-item>
                <a-input
                  placeholder="Số tiền rút"
                  v-decorator="[
                      'currentPassword',
                      {
                        rules: [
                          {
                            required: true,
                            message:
                              'Số tiền rút không được để trống!',
                          },
                        ],
                      },
                    ]"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  type="password"
                  placeholder="Mật khẩu rút tiền"
                  v-decorator="[
                      'password',
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
                <a-button class="btn-login w-100 text-white" type="danger " html-type="submit">
                  Gửi
                </a-button>
              </a-form-item>
            </a-form>
            <div class="card"><div class="card-body text-center"><p><strong>&nbsp; Lưu ý</strong></p>

              <p class="warning-text">*Nếu bạn gặp sự cố khi rút tiền, bạn có thể liên hệ với dịch vụ CSKH của chúng tôi*</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'info',
  meta: 'Thay đổi mật khẩu',
  data() {
    return {
      currentPassword: null,
      password: null,
      confirmPassword: null,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    compareToFirstPassword(rule, value, callback) {
      if (value && value != this.form.getFieldValue('password')) {
        callback('Mật khẩu chưa khớp');
      } else {
        callback();
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';
.btn-login:focus {
  outline: none;
}
input {
  border: 1px solid rgb(217, 217, 217);
  padding: 0 10px;
}

</style>

<style lang="css">
#info {
.ant-form-explain {
  text-align: left!important;
}
.ant-btn span {
  display: block;
  line-height: 1px;
}
.warning-text {
  font-size: 14px;
  color: #212529;
}
}
</style>
