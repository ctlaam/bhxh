<template>
  <div style="margin-top: 80px; margin-bottom: 80px">
    <div class="row w-100" style="color: #ffffff">
      <div class="col-6 mt-3 text-center">
        <h5 class="">
          {{ profile && formatCurrency(profile.balance) }}đ
        </h5>
        <p class="mb-4 fz14">Tổng Tài Sản</p>
      </div>
      <div class="col-6 mt-3 text-center">
        <h5 class="">
          {{
            orderOfUser && formatCurrency(orderOfUser.total_commission_today)
          }}
        </h5>
        <p class="mb-4 fz14">Hoa Hồng</p>
      </div>
    </div>
    <div class="row w-100">
      <div class="text-white col-6 mt-3 text-center">
        <h5 class="">{{ vip && vip.order_quantity_per_day }}</h5>
        <p class="text-white mb-4 fz14">Đơn hàng hàng ngày</p>
      </div>
      <div class="text-white col-6 mt-3 text-center">
        <h5 class="">
          {{ (profile && profile.total_order_success) || 0 }}
        </h5>
        <p class="mb-4 fz14">Đơn hàng đã nhận</p>
      </div>
    </div>
    <div class="main-container w-100">
      <!-- page content start -->
      <div class="product-area" style="max-width: 100%; overflow-x: hidden">
        <div
          class="d-flex align-items-center mb-2 animate-area-0 animated slideOutLeft infinite"
        >
          <img
            src="~/assets/trips/8d4eb2242bdc6c89.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/trips/f9f8a5ee7c8e297b.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/trips/b882993b95877f40.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/314c90afcc377d26.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/7632eb27e143f06f.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/c2b309c08fb91240.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/712ab7ee3dceb7c1.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/e26a108d537a2e28.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/7c453bbbe50f1b22.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/2282a6ab28b2951c.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/151ac364b0bd6381.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/5cbfe07073e0bb48.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/3411546ffa2763bf.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/6b710f89313c3364.jpg"
            class="border-radius-1 dashboard-product-image me-2"
          />
        </div>
        <!-- PWA add to home display -->
        <div class="container mb-4 card">
          <div class="tigerBg">
            <div class="num_box" style="visibility: hidden">
              <div class="tiger"></div>
              <div class="tiger"></div>
              <div class="tiger"></div>
            </div>
          </div>
          <button
            type="button"
            class="openmode"
            style="visibility: hidden"
            data-toggle="modal"
            data-target="#exampleModalScrollable"
          >
            Launch demo modal scroll
          </button>
          <button
            class="btn btn-block btn-default rounded play text-white"
            style="background-color: #25a0fe; font-weight: 600"
            id="addtohome"
            @click="showModalTour"
          >
            Bắt đầu
          </button>
          <style>
            .btn-default[disabled] {
              background-color: #25a0fe !important;
              color: #ffffff;
            }
          </style>
        </div>
        <div
          class="container mb-3"
          style="
            text-align: center;
            font-weight: 600;
            font-size: 14px;
            color: #212529;
          "
        >
          Khám phá các gói thành viên
        </div>
        <img class="mb-4" src="../../assets/index/banner.jpg" width="100%" alt="" />
        <!-- <img src="../../assets/imagetour.webp" width="100%" alt=""> -->
      </div>
    </div>
    <a-modal
      v-model="showModal"
      :closable="false"
      :width="400"
      :footer="null"
      class="modal-give-tour"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content" style="max-width: 100%">
          <div class="modal-body">
            <a-card class="order-success-card">
              <!-- Header -->
              <div class="success-header">
                Chúc mừng nhập phân phối thành công
              </div>

              <!-- Order Info -->
              <div class="order-info">
                <div class="time-and-id">
                  <span>Thời gian nhập phân phối: 20:05:58</span>
                  <div>
                    <span>Mã SP: 61546</span>
                    <a-icon type="qrcode" />
                  </div>
                </div>

                <!-- Product -->
                <div class="product-info">
                  <img :src="domain + trip.image" alt="LG Washing Machine" crossorigin="anonymous" />
                  <div class="product-details">
                    <p class="product-name">{{trip.name}}</p>
                    <p class="model">FV1412S3B</p>
                    <p class="price">{{ trip.meta.value }}</p>
                  </div>
                </div>
<!--                <a-alert-->
<!--                  message="Số dư không đủ!"-->
<!--                  type="warning"-->
<!--                  class="error-message"-->
<!--                />-->
                <div class="price-details">
                  <div class="price-row">
                    <span>Tổng tiền phân phối</span>
                    <span>{{ trip.meta.value }}</span>
                  </div>
                  <div class="price-row">
                    <span>Hoa hồng:</span>
                    <span>{{ trip.meta.commission * trip.meta.value }}</span>
                  </div>
                  <div class="price-row total">
                    <span>Tổng doanh thu</span>
                    <span>{{ trip.meta.value + trip.meta.commission * trip.meta.value}}</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <a-button type="primary" block class="submit-btn">
                  Gửi phân phối
                </a-button>
              </div>
            </a-card>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import * as tutorApi from '../../api/tuor'
import * as volatilityApi from '../../api/volatility.js'
import * as orderApi from '../../api/order'
import _ from 'lodash'
import axios from 'axios'
export default {
  name: 'index',
  data() {
    return {
      showModal: false,
      indexItem: 1,
      trip: {
        name: '',
        price: '',
        commission: '',
        meta: {
          value: '',
          commission: '',
        },
      },
      domain: 'https://api.soatdontienich.online/',
      orderId: null,
      profile: null,
      vip: null,
      orderOfUser: null,
      loading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  async created() {
    this.getProfile()
    this.getOrder()
  },
  methods: {
    formatCurrency(amount) {
      if (!amount) return 0
      // Kiểm tra nếu là số nguyên thì chỉ định dạng phần nguyên
      if (Number.isInteger(amount)) {
        return amount.toLocaleString('en-US')
      } else {
        // Nếu có phần thập phân, giới hạn chỉ 2 chữ số sau dấu phẩy
        let formattedAmount = Math.floor(amount * 100) / 100
        return formattedAmount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      }
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.create()
        }
      })
    },
    async showModalTour() {
      await tutorApi
        .getTuor()
        .then(async (res) => {
          this.trip = res.data.product
          this.trip.meta = res.data.meta
          this.orderId = res.data._id
          this.showModal = true
        })
        .catch((err) => {
          console.log('err:', err)
          this.$message.error(err)
          return
        })
    },
    getIndexItem(item) {
      this.indexItem = item
    },
    create: _.debounce(async function () {
      if (this.trip.meta.value && this.profile.balance < this.trip.meta.value) {
        let diffMoney = this.trip.meta.value - this.profile.balance
        diffMoney = diffMoney.toFixed(2)
        this.$confirm({
          title: 'Chúc mừng bạn đã nhận được đơn hàng rà soát!',
          content: `Đơn hàng này có thể nhận được nhiều hoa hồng hơn và cần phải bù phần chênh lệch ${diffMoney}`,
          icon: 'check-circle',
          cancelButtonProps: { style: { display: 'none' } },
          onOk: () => {
            this.showModal = false
          },
        })
        return
      }
      this.loading = true
      this.$store.dispatch('loading/setModalLoading', true)
      await tutorApi
        .sendTuor(this.orderId)
        .then((res) => {
          this.$message.success('Gửi đơn hàng thành công!')
          this.showModal = false
          this.getProfile()
          this.getOrder()
        })
        .catch((err) => {
          this.$message.error(err)
        })
        .finally(() => {
          this.loading = false
          setTimeout(() => {
            this.$store.dispatch('loading/setModalLoading', false)
          }, 2500)
        })
    }, 500),
    async getProfile() {
      await volatilityApi
        .getProfileUser()
        .then(async (res) => {
          this.profile = res.data
          await volatilityApi.getListVips(this.profile.level).then((data) => {
            this.vip = data.data
          })
        })
        .catch((err) => {
          console.log(this.$router.current?.name)
          if (
            err == 'Phiên đăng nhập đã hết hạn' &&
            currentURL != 'https://vietnamtour.pro/' &&
            currentURL != 'https://vietnamtour.pro/login/' &&
            currentURL != 'https://vietnamtour.pro/login/signup/'
          ) {
            this.$router.push('/login')
            return
          }
        })
    },
    async getOrder() {
      await orderApi
        .getOrderAnalytic()
        .then((res) => {
          this.orderOfUser = res.data
          console.log('this.orderOfUser:', this.orderOfUser)
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
  },
  filters: {
    roundToTwoDecimalPlaces(num) {
      if (!num) return 0
      return Math.round(num * 100) / 100
    },
  },
  // watch: {
  //   '$store.state.profile': {
  //     handler: function (val) {
  //       if (val) {
  //         console.log("1")
  //         this.profile = this.$store.state.profile.profile;
  //         // this.vip = this.$store.state.profile.vip;
  //         // this.getOrderAnalytic()
  //       }
  //     },
  //     deep: true,
  //   },
  // }
}
</script>
<style lang="scss">
.modal-give-tour input#coordinated_note {
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
}
</style>
<style scoped lang="scss">
@import '~/assets/scss/my.scss';
@import '~/assets/animate/animate.min.css';

.modal-give-tour {
  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 1rem);
    overflow: hidden;
  }

  .goods-wrap {
    color: #333;
    text-align: center;
  }

  .modal-dialog {
  }

  .modal-header {
    height: 23rem;
    padding: 0;
  }

  .goods-wrap {
    color: #333;
    text-align: center;
  }

  .goods-wrap .text {
    font-size: 14px;
    line-height: 1.5;
    color: #fff;
    font-weight: bold;
    text-align: left;
    padding: 0 0 0 0.53333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 0.53333rem;
    position: absolute;
    left: 0;
    top: 16rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .goods-wrap .text img {
    display: block;
    width: 2rem;
    margin-right: 0.26667rem;
  }

  .goods-wrap .goods {
    position: absolute;
    left: 0;
    top: 18.5rem;
    background: rgba(0, 0, 0, 0.65);
    height: 4.5rem;
    width: 100%;
  }

  .goods-cell {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .flex-center {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .goods-cell .cell-item {
    width: 50%;
    text-align: center;
    color: #fff;
  }

  .w100 {
    width: 100% !important;
  }

  .flex-row {
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .goods-cell .cell-item .cell-item-title {
    font-size: 14px;
    font-weight: bold;
  }

  .goods-cell .cell-item .cell-item-value {
    font-weight: bold;
    font-size: 14px;
    margin: 0.08rem 0 0;
  }

  .modal-body ul {
    padding-left: 0;
    overflow: hidden;
    margin-bottom: 0.7rem;
  }

  .modal-body ul li {
    float: left;
    list-style: none;
    width: 27px;
    height: 27px;
    background: url(../../assets/trips/star.gif);
  }

  .modal-body ul li a {
    display: block;
    width: 100%;
    padding-top: 27px;
    overflow: hidden;
  }

  .modal-body ul li.light {
    background-position: 0 -29px;
  }

  .rate-box {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0.8rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .flex,
  .flex-column,
  .flex-around,
  .flex-row,
  .flex-justify-center,
  .flex-center {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }

  .rate-box span {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    margin-right: 1rem;
  }

  .btn2 {
    width: 100%;
    height: 3rem;
    background: #c62a1c;
    border: #c62a1c;
  }

  .main {
    background: url(/vip/rot.jpg) no-repeat;
    background-color: #627b84;
    background-size: contain;
    background-attachment: fixed;
    padding: 75px 10px 10px 10px;
    min-height: 100vh;
    width: 100%;
  }
}
</style>
<style lang="scss">
.modal-give-tour {
  .ant-modal-body {
    padding: 0 !important;
    /* word-wrap: break-word; */
  }

  .modal-content {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .modal-dialog {
    margin: 0;
  }
}
.ant-modal-confirm-confirm .ant-modal-confirm-body > .anticon {
  color: #52c41a !important;
}


.order-success-card {
  max-width: 500px;
  margin: 0 auto;
}

.success-header {
  background-color: #faad14;
  margin: -24px -24px 24px -24px;
  padding: 16px 24px;
  font-weight: 500;
  font-size: 16px;
  border-radius: 8px 8px 0 0;
}

.time-and-id {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}

.product-info {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.product-info img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.product-details {
  flex: 1;
}

.product-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.model {
  color: rgba(0, 0, 0, 0.45);
  margin-bottom: 4px;
}

.price {
  font-weight: 500;
}

.error-message {
  width: fit-content;
  margin: 0 auto 24px;
}

.price-details {
  margin-bottom: 24px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.total {
  font-weight: 500;
}

.submit-btn {
  background-color: #fa8c16;
  border-color: #fa8c16;
}

.submit-btn:hover {
  background-color: #fa8c16;
  border-color: #fa8c16;
  opacity: 0.9;
}
</style>
