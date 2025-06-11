<template>
  <div id="info">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h6 class="subtitle mb-0 text-left">
              <div class="avatar avatar-40 bg-primary-light text-primary rounded mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#001529">
                  <path
                    d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"/>
                </svg>
              </div>
              Mật khẩu rút tiền
            </h6>
          </div>
          <div class="card-body was-validated">

            <a-form :form="form" @submit="handleSubmit">
              <a-form-item>
                <a-input
                  placeholder="Mật khẩu cũ"
                  v-decorator="[
                      'passwordCurrent',
                      {
                        rules: [
                          {
                            required: true,
                            message:
                              'Mật khẩu cũ không được để trống!',
                          },
                        ],
                      },
                    ]"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  type="password"
                  placeholder="Mật khẩu mới"
                  v-decorator="[
                      'password',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Mật khẩu mới không được để trống!',
                          },
                        ],
                      },
                    ]"
                />
              </a-form-item>
              <a-form-item>
                <a-input type="password"
                         v-decorator="['confirmPassword', { rules: [{ required: true, message: 'Xác nhận mật khẩu không được để trống' }, { validator: compareToFirstPassword }] }]"
                         class="input-form-title" placeholder="Xác nhận mật khẩu của bạn"/>
              </a-form-item>
              <a-form-item>
                <a-button class="btn-login w-100" type="primary " html-type="submit">
                  Lưu
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as authApi from '../../../api/auth';
export default {
  name: "index",
  layout: 'info',
  data() {
    return {
      currentPassword: null,
      password: null,
      confirmPassword: null,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'login'})
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.dispatch('loading/setModalLoading', true)

          authApi
            .updatePassword({
              password: values.password,
              type: 'tfa_password',
              currentPassword: values.passwordCurrent,
            })
            .then((res) => {
              this.$message.success('Đổi mật khẩu rút tiền thành công.');
              this.$router.push('/my')
            })
            .catch((err) => {
              this.$message.error('Có lỗi xảy ra vui lòng thử lại sau');
            })
            .finally(() => {
              this.$store.dispatch('loading/setModalLoading', false);
            });

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
  text-align: left !important;
}

}
</style>
