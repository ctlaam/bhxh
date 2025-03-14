<template>
  <div style="margin-top: 80px; margin-bottom: 80px">
    <div class="row w-100" style="color: #ffffff">
      <div class="col-6 mt-3 text-center">
        <h5 class="">
          {{ profile && profile.balance | formatVND}} VNĐ
        </h5>
        <p class="mb-4 fz14">Số dư tài khoản</p>
      </div>
      <div class="col-6 mt-3 text-center">
        <h5 class="">
          {{
            profile && profile.order_commission |formatVND
          }} VNĐ
        </h5>
        <p class="mb-4 fz14">Hoa Hồng</p>
      </div>
    </div>
    <div class="row w-100">
      <div class="text-white col-6 mt-3 text-center">
        <h5 class="">{{ vip && vip.order_quantity_per_day }}</h5>
        <p class="text-white mb-4 fz14">Số đơn hàng ngày</p>
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
            src="~/assets/ipad.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/trips/mayanh.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/trips/s2.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/ip16.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/tulanh.webp"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/vali.webp"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/s5.webp"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/s6.webp"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/s7.webp"
            class="border-radius-1 dashboard-product-image me-2"
          /><img
            src="~/assets/trips/s8.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/trips/ps5.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/trips/tainghe.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
          <img
            src="~/assets/trips/samsung.webp"
            class="border-radius-1 dashboard-product-image me-2"
          />
        </div>
        <!-- PWA add to home display -->
        <div class="container mb-4 card" style="box-shadow: unset">
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
            class="btn rounded text-white fw-600 bg-primary px-3"
            @click="showModalTour"
            style="width: 150px; margin: 0 auto"
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
        <img class="mb-4" src="../../assets/index/banner2.jpg" width="100%" alt="" />
        <!-- <img src="../../assets/imagetour.webp" width="100%" alt=""> -->
      </div>
    </div>
    <a-modal
      v-model="showModal"
      :closable="false"
      :width="400"
      :footer="null"
      :class="['modal-give-tour', {'premium-modal': isPremium}]"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content" style="max-width: 100%">
          <div class="modal-body">
            <a-card class="order-success-card">
              <div class="premium-badge" v-if="trip.is_premium" style="color: #000">
                <a-icon type="crown" /> Premium
              </div>
              <!-- Header -->
              <div class="success-header" style="color: #000">
                Chúc mừng nhập phân phối thành công
              </div>

              <!-- Order Info -->
              <div class="order-info" style="color: #000">
                <div class="time-and-id" style="color: #000">
                  <span style="color: #000">Thời gian nhập phân phối: {{createdAt | formatTime}}</span>
                  <div style="color: #000">
                    <span style="color: #000">Mã SP: {{trip._id | getSpCode}}</span>
                    <a-icon type="qrcode" />
                  </div>
                </div>

                <!-- Product -->
                <div class="product-info" style="color: #000">
                  <img :src="domain + trip.image" alt="LG Washing Machine" crossorigin="anonymous" />
                  <div class="product-details" style="color: #000">
                    <p class="product-name" style="color: #000">{{trip.name}}</p>
                    <p class="model" style="color: #000; text-transform: uppercase">{{trip._id | getSpCode}}</p>
                    <p class="price" style="color: #000">{{ trip.meta.value }}</p>
                  </div>
                </div>

                <div class="price-details" style="color: #000">
                  <div class="price-row" style="color: #000">
                    <span style="color: #000">Tổng tiền phân phối</span>
                    <span style="color: #000">{{ trip.meta.value | formatVND }} VNĐ</span>
                  </div>
                  <div class="price-row" style="color: #000">
                    <span style="color: #000">Hoa hồng:</span>
                    <span style="color: #000">{{ (trip.meta.commission /100) * trip.meta.value | formatVND }} VNĐ</span>
                  </div>
                  <div class="price-row total" style="color: #000">
                    <span style="color: #000">Tổng doanh thu</span>
                    <span style="color: #000">{{ trip.meta.value + ((trip.meta.commission / 100) * trip.meta.value) | formatVND}} VNĐ</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <a-button type="primary" block class="submit-btn" @click="handleSubmit" style="color: #000">
                  Gửi đơn hàng
                </a-button>
                <div v-if="isLoading" class="loading-overlay">
                  <div class="loading-container" style="color: #000">
                    <a-spin size="large" />
                    <div class="loading-text" style="color: #000">Đang gửi đơn hàng...</div>
                  </div>
                </div>
              </div>
            </a-card>
          </div>
        </div>
      </div>
    </a-modal>
<!--    <FullScreenModal/>-->
  </div>
</template>

<script>
import * as tutorApi from '../../api/tuor'
import * as volatilityApi from '../../api/volatility.js'
import * as orderApi from '../../api/order'
import _ from 'lodash'
import axios from 'axios'
import moment from 'moment';
// import FullScreenModal from '../../components/apps/FullScreenModal'

export default {
  name: 'index',
  components: {
    // FullScreenModal
  },
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
      domain: 'https://api.soatdonctv.online/',
      orderId: null,
      profile: null,
      vip: null,
      orderOfUser: null,
      loading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      isLoading: false,
      isPremium: false,
      createdAt: null,
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
    async showModalTour() {
      await tutorApi
        .getTuor()
        .then(async (res) => {
          this.trip = res.data.product
          this.trip.meta = res.data.meta
          this.orderId = res.data._id
          this.showModal = true;
          this.createdAt = res.data.created_at
          this.isPremium = res.data.is_premium;
          if (res.data.is_premium) {
            // Show notification
            this.$notification.success({
              message: 'Đơn Hàng Premium',
              description: 'CHÚC MỪNG BẠN ĐÃ MAY MẮN NHẬN ĐƯỢC ĐƠN HÀNG THƯỞNG TỪ HỆ THỐNG',
              style: {
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                border: 'none',
              },
              class: 'premium-notification',
              duration: 5,
            });
          }
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
    async handleSubmit() {
      if (this.isLoading) return; // Prevent double click

      this.isLoading = true;

      try {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Delay 5s
        await this.create();
      } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    create: _.debounce(async function () {
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
          if (err == 'Số dư không đủ. Bạn vui lòng liên hệ CSKH để được hỗ trợ. Xin cảm ơn!') {
            this.$confirm({
              title: err,
              icon: 'check-circle',
              cancelButtonProps: { style: { display: 'none' } },
              onOk: () => {
                this.showModal = false
              },
            })
            return;
          }
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
    formatTime(value) {
      if (!value) return '';
      const utcTime = moment(value)
      return moment(value).format('DD/MM/YYYY HH:mm:ss')
    },
    formatVND(value) {
      if (!value) return '';
      // Làm tròn số về dạng số nguyên
      const roundedValue = Math.round(value);
      // Định dạng theo tiêu chuẩn tiền tệ Việt Nam
      return roundedValue.toLocaleString('vi-VN');
    },
    getSpCode(value) {
      if (!value) return '';
      return value.substring(0, 5)
    }
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
.product-details p {
  margin-bottom: 0;
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
<style lang="scss">
/* ... các style khác giữ nguyên ... */

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* Tăng độ tối của overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px); /* Thêm hiệu ứng blur cho nền */
  animation: fadeIn 0.3s ease-out; /* Animation khi hiện overlay */
}

.loading-container {
  background: rgba(255, 255, 255, 0.95);
  padding: 32px 48px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: slideUp 0.3s ease-out; /* Animation cho container */
  max-width: 90%;

  /* Tạo viền gradient */
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #fa8c16, #1890ff);
    z-index: -1;
    border-radius: 18px;
    opacity: 0.5;
  }
}

.loading-text {
  margin-top: 24px;
  font-size: 16px;
  font-weight: 500;
  background: linear-gradient(45deg, #fa8c16, #1890ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite; /* Thêm hiệu ứng pulse cho text */
}

/* Custom style cho Ant Design Spin */
.loading-container .ant-spin {
  .ant-spin-dot-item {
    background-color: #fa8c16; /* Màu chủ đạo của app */
  }

  /* Tăng kích thước của spin icon */
  &.ant-spin-lg .ant-spin-dot {
    font-size: 40px;
    width: 40px;
    height: 40px;
  }
}

/* Animation definitions */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .loading-container {
    padding: 24px 32px;
  }

  .loading-text {
    font-size: 14px;
  }

  .loading-container .ant-spin-lg .ant-spin-dot {
    font-size: 32px;
    width: 32px;
    height: 32px;
  }
}

/* Ngăn scroll khi loading hiện */
body.loading {
  overflow: hidden;

  /* Thêm smooth transition cho scroll bar */
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>

<style lang="scss" scoped>
.modal-give-tour {
&.premium-modal {
.success-header {
  background: linear-gradient(45deg, #FFD700, #FFA500) !important;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;

&::after {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background: linear-gradient(45deg,
   rgba(255,255,255,0.2) 25%,
   transparent 25%,
   transparent 50%,
   rgba(255,255,255,0.2) 50%,
   rgba(255,255,255,0.2) 75%,
   transparent 75%);
   background-size: 20px 20px;
   animation: shine 2s linear infinite;
 }
}

.order-success-card {
  border: 2px solid #FFD700;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.15);
}

.price-details {
  background: linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,165,0,0.1));
  padding: 15px;
  border-radius: 8px;
  border: 1px solid rgba(255,215,0,0.2);
}

.submit-btn {
  background: linear-gradient(45deg, #FFD700, #FFA500) !important;
  border: none !important;
  font-weight: 600;

&:hover {
   opacity: 0.9;
 }
}

/* Thêm icon premium */
.premium-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #FFD700;
  padding: 5px 10px;
  border-radius: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255,215,0,0.3);
  z-index: 1;
}
}
}

/* Animation cho premium effects */
@keyframes shine {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 0;
  }
}

/* Style cho notification */
.premium-notification {
  position: fixed !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  margin-left: 0 !important;

  .ant-notification-notice-message {
    color: #fff;
    font-weight: 600;
    text-align: center;
  }

  .ant-notification-notice-description {
    color: #fff;
    text-align: center;
    font-weight: 500;
  }

  .ant-notification-notice-close {
    color: #fff;
  }

  /* Thêm icon check */
  .ant-notification-notice-icon {
    margin-left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
  }
}

/* Ẩn notification container mặc định */
.ant-notification {
  &.ant-notification-topRight,
  &.ant-notification-topLeft {
    display: none;
  }
}
</style>
