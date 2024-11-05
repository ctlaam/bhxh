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
                      'truthName',
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
                <a-select
                  mode="bank"
                  style="width: 100%"
                  placeholder="Ngân hàng"
                  v-decorator="[
                    'bankName',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Phương thức nạp tiền không được để trống',
                        },
                      ],
                    },
                  ]"
                >
                  <a-select-option v-for="(item, index) in banks " :value="item.name" :key="index">
                    {{ item.name }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item>
                <a-input type="text"
                         v-decorator="['stk', { rules: [{ required: true, message: 'Số tài khoản không được để trống' }] }]"
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
import * as volatilityApi from '../../../api/volatility.js'
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
        },
        {
          name: 'MB',
          full_name: 'Ngân hàng Quân Đội',
        },
        {
          name: 'Sacombank',
          full_name: 'Ngân hàng Sài Gòn Thương Tín',
        },
        {
          name: 'ACB',
          full_name: 'Ngân hàng Á Châu',
        },
        {
          name: 'VPBank',
          full_name: 'Ngân hàng Việt Nam Thịnh Vượng',
        },
        {
          name: 'HDBank',
          full_name: 'Ngân hàng Phát triển TP.HCM',
        },
        {
          name: 'MSB',
          full_name: 'Ngân hàng Hàng Hải Việt Nam',
        },
        {
          name: 'SHB',
          full_name: 'Ngân hàng Sài Gòn - Hà Nội',
        },
        {
          name: 'VIB',
          full_name: 'Ngân hàng Quốc tế Việt Nam',
        },
        {
          name: 'TPBank',
          full_name: 'Ngân hàng Tiên Phong',
        },
        {
          name: 'LienVietPostBank',
          full_name: 'Ngân hàng Bưu điện Liên Việt',
        },
        {
          name: 'SeABank',
          full_name: 'Ngân hàng Đông Nam Á',
        },
        {
          name: 'OCB',
          full_name: 'Ngân hàng Phương Đông',
        },
        {
          name: 'SCB',
          full_name: 'Ngân hàng Sài Gòn',
        },
        {
          name: 'PVcomBank',
          full_name: 'Ngân hàng Đại chúng Việt Nam',
        },
        {
          name: 'Nam A Bank',
          full_name: 'Ngân hàng Nam Á',
        },
        {
          name: 'Eximbank',
          full_name: 'Ngân hàng Xuất Nhập Khẩu Việt Nam',
        },
        {
          name: 'ABBANK',
          full_name: 'Ngân hàng An Bình',
        },
        {
          name: 'Bac A Bank',
          full_name: 'Ngân hàng Bắc Á',
        },
        {
          name: 'PGBank',
          full_name: 'Ngân hàng Xăng dầu Petrolimex',
        },
        {
          name: 'Saigonbank',
          full_name: 'Ngân hàng Sài Gòn Công Thương',
        },
        {
          name: 'VietABank',
          full_name: 'Ngân hàng Việt Á',
        },
        {
          name: 'CBBank',
          full_name: 'Ngân hàng Xây dựng',
        },
        {
          name: 'VietBank',
          full_name: 'Ngân hàng Việt Nam Thương Tín',
        },
        {
          name: 'Kienlongbank',
          full_name: 'Ngân hàng Kiên Long',
        },
        {
          name: 'BaoVietBank',
          full_name: 'Ngân hàng Bảo Việt',
        }
        // Add more banks as needed
      ]
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'login'})
  },
  created() {
    this.profile = this.$store.state.profile.profile
    const bank = this.profile && this.profile.bank
    if (bank) {
      this.$nextTick(() => {
        this.form.setFieldsValue({
          truthName: bank.full_name,
          stk: bank.bank_number,
          bankName: bank.bank_name,
        })
      })
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.$store.dispatch('loading/setModalLoading', true)
          console.log("value:", values)
          volatilityApi
            .recharge({
              full_name: values.truthName,
              bank_number: values.stk,
              bank_name: values.bankName,
            })
            .then((res) => {
              this.$message.success('Liên kết thành công')
              this.$router.push('/my')
            })
            .catch((err) => {
              if (err.message) {
                this.$message.error('Sai tài khoản hoặc mật khẩu')
              } else {
                this.$message.error('Có lỗi xảy ra vui lòng thử lại sau')
              }
            })
            .finally(() => {
              this.$store.dispatch('loading/setModalLoading', false)
            })
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
