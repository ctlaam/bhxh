<template>
  <div id="info" style="margin-top: 80px;">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header">
            <div class="alert alert-success">
              <div class="media">
                <div class="icon icon-40 bg-white text-success mr-2 rounded-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#001529 ">
                    <path
                      d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Z"/>
                  </svg>
                </div>
                <div class="media-inner">
                  <h6 class="mb-0 font-weight-normal text-left"><b>lời khuyên tốt:</b><br>
                    <div style="width:13rem"><p>Quý khách nạp tiền vui lòng liên hệ với CSKH !</p></div>
                  </h6>
                </div>
              </div>
            </div>
            <div style="text-align: center;">
              <button type="button" class="btn btn-large btn-primary" style="padding-right: 1.2rem;" @click="selectAmount(50)">50</button>
              <button type="button" class="btn btn-large btn-primary" style="padding-right: 1.2rem;" @click="selectAmount(100)">100</button>
              <button type="button" class="btn btn-large btn-primary" style="padding-right: 1.2rem;" @click="selectAmount(200)">200</button>
              <button type="button" class="btn btn-large btn-primary" style="padding-right: 1.2rem;" @click="selectAmount(1000)">1000</button>
              <button type="button" class="btn btn-large btn-primary" style="padding-right: 1.2rem;" @click="selectAmount(3000)">3000</button>
              <button type="button" class="btn btn-large btn-primary mt-1" style="padding-right: 1.2rem;" @click="selectAmount(5000)">5000</button>
              <button type="button" class="btn btn-large btn-primary mt-1" style="padding-right: 1.2rem;" @click="selectAmount(10000)">10000</button>
            </div>
          </div>
          <div class="card-body was-validated">

            <a-form :form="form" @submit="handleSubmit">
              <p class="text-center text-secondary mb-1" style="font-size: 14px;">Vui Lòng Nhập Số Tiền Nạp</p>
              <a-form-item>
                <a-input
                  class="input-value"
                  type="number"
                  v-decorator="[
                      'amount',
                      {
                        rules: [
                          {
                            required: true,
                            message:
                              'Giá trị tiền không được để trống!',
                          },
                        ],
                      },
                    ]"
                />
              </a-form-item>
              <p class="text-center text-secondary mb-1" style="font-size: 14px;">Số dư tài khoản</p>
              <a-form-item>
                <a-input
                  placeholder="Nhận xét"
                  v-decorator="[
                      'comment',
                      {
                        rules: [
                          {
                            required: true,
                            message:
                              'Giá trị tiền không được để trống!',
                          },
                        ],
                      },
                    ]"
                />
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
import * as volatilityApi from "../../../api/volatility";

export default {
  name: "index",
  layout: 'info',
  data() {
    return {
      value: null,
      inputValue: '',
      comment: '',
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
          this.$store.dispatch('loading/setModalLoading', true)
          volatilityApi
            .cashIn({
              amount: +values.amount,
              type: 'CashIn',
              method: 'Method1',
              comment: values.comment,
            })
            .then((res) => {
              this.$message.success('Gửi yêu cầu thành công');
              this.$router.push('/wallet');
            })
            .catch((err) => {
              this.$store.dispatch('loading/setModalLoading', false)
              if (err.message) {
                this.$message.error('Sai tài khoản hoặc mật khẩu')
              } else {
                this.$message.error('Có lỗi xảy ra vui lòng thử lại sau')
              }
            })
            .finally(() => {
              this.$store.dispatch('loading/setModalLoading', false);
            });
        }
      })
    },
    selectAmount(amount) {
      this.inputValue = amount.toString();
      this.form.setFieldsValue({ amount: this.inputValue });
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

.media-inner p {
  font-size: 14px;
  text-align: left;
}
.btn-primary:hover {
  color: #fff;
  background-color: #000;
  border-color: #000;
}
.input-value  {
  height: 64px;
  font-size: 42px;
  font-weight: 900;
  text-align: center;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<style lang="css">
#info {

.ant-form-explain {
  text-align: left !important;
}

}
</style>
