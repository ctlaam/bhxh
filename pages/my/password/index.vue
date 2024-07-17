<template>
  <div id="info">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h6 class="subtitle mb-0 text-left">
              <div class="avatar avatar-40 bg-primary-light text-primary rounded mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#25a0fe">
                  <path
                    d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/>
                </svg>
              </div>
              Mật khẩu đăng nhập
            </h6>
          </div>
          <div class="card-body was-validated">

            <a-form :form="form" @submit="handleSubmit">
              <a-form-item>
                <a-input
                  type="password"
                  placeholder="Mật khẩu cũ"
                  v-decorator="[
                      'currentPassword',
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
                <a-input type="password" v-decorator="['confirmPassword', { rules: [{ required: true, message: 'Xác nhận mật khẩu không được để trống' }, { validator: compareToFirstPassword }] }]" class="input-form-title" placeholder="Xác nhận mật khẩu của bạn" />
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

          this.$store.dispatch('loading/setModalLoading', true)

          authApi
            .updatePassword({
              password: values.password,
              type: 'password',
              currentPassword: values.currentPassword,
            })
            .then((res) => {
              this.$message.success('Đổi mật khẩu thành công.');
              this.$router.push('/login');
            })
            .catch((err) => {
              console.log(err)
              this.$message.error("Mật khẩu hiện tại sai.");
            })
            .finally(() => {
              this.$store.dispatch('loading/setModalLoading', false);
            });
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
}
</style>
