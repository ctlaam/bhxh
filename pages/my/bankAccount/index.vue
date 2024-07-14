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
                    d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-320h640v-160H160v160Z"/>
                </svg>
              </div>
              Tài khoản ngân hàng
            </h6>
          </div>
          <div class="card-body was-validated">

            <a-form :form="form" @submit="handleSubmit">
              <a-form-item>
                <a-input
                  placeholder="Tên tài khoản"
                  v-decorator="[
                      'nameAcc',
                      {
                        rules: [
                          {
                            required: true,
                            message:
                              'Tên tài khoản không được để trống!',
                          },
                        ],
                      },
                    ]"
                />
              </a-form-item>
              <a-form-item>
                <a-select mode="bank" style="width: 100%" placeholder="Chọn phương thức nạp tiền">
                  <a-select-option v-for="(item, index) in banks" :key="index">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item>
                <a-input type="text"
                         v-decorator="['confirmPassword', { rules: [{ required: true, message: 'Số tài khoản không được để trống' }] }]"
                         class="input-form-title" placeholder="Số tài khoản"/>
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
export default {
  name: "index",
  layout: 'info',
  data() {
    return {
      nameAcc: null,
      bank: null,
      banks: [
        {
          name: 'Vietcombank',
          full_name: 'Ngân hàng Vietcombank',
        },
        {
          name: 'VietinBank',
          full_name: 'Ngân hàng VietinBank',
        },
        {
          name: 'BIDV',
          full_name: 'Ngân hàng BIDV',
        },
        {
          name: 'Techcombank',
          full_name: 'Ngân hàng Techcombank',
        },
        {
          name: 'Agribank',
          full_name: 'Ngân hàng Agribank',
        }
        // Add more banks as needed
      ]
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
