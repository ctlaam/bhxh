<template>
  <div style="margin-top: 80px">
    <div class="main-container">
      <div class="container">
        <div class="item-wrap">
          <div
            class="slip-item"
            :id="'slip-item-' + index"
            v-for="(order, index) in listOrder"
            :key="index"
            @click="createTuor(order)"
          >
            <div class="wrap">
              <div class="time-line">
                <div
                  class="status"
                  :class="{
                    'alert-warning': order.status === 'Pending',
                    'alert-success': order.status === 'Success',
                  }"
                >
                  {{ order.status && statusName[order.status] }}
                </div>
              </div>
              <div class="goods-line align-start flex">
                <div class="flex-column">
                  <div class="time text-left">
                    {{ formatDateTime(order.created_at) }}
                  </div>
                  <div class="goods-name text-left">
                    {{ order.product && order.product.name }}
                  </div>
                </div>
              </div>
              <div class="item-footer">
                <div class="money-item">
                  <span class="title">Số Tiền</span>
                  <span class="money">{{
                      (order.meta && order.meta.value) | formatVND
                  }}</span>
                </div>
                <div class="money-item">
                  <span class="title">Hoa hồng</span
                  ><span class="money">{{
                    ((order.meta && order.meta.commission) / 100 * order.meta.value) | formatVND
                  }}</span>
                </div>
                <div class="submit-btn"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="none" v-if="!listOrder.length">
          <div class="none_box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#999999"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
              />
            </svg>
            <span class="tips ml-2">Không Có Dữ Liệu</span>
          </div>
        </div>
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
              <div class="premium-badge" v-if="trip.is_premium">
                <a-icon type="crown" /> Premium
              </div>
              <!-- Header -->
              <div class="success-header">
                Chúc mừng nhập phân phối thành công
              </div>

              <!-- Order Info -->
              <div class="order-info">
                <div class="time-and-id">
                  <span>Thời gian nhập phân phối: {{trip.created_at | formatTime}}</span>
                  <div>
                    <span>Mã SP: {{trip._id | getSpCode}}</span>
                    <a-icon type="qrcode" />
                  </div>
                </div>

                <!-- Product -->
                <div class="product-info">
                  <img :src="domain + trip.image" alt="LG Washing Machine" crossorigin="anonymous" />
                  <div class="product-details">
                    <p class="product-name">{{trip.name}}</p>
                    <p class="model" style="text-transform: uppercase">{{trip._id | getSpCode}}</p>
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
                    <span>{{ trip.meta.value | formatVND }} VNĐ</span>
                  </div>
                  <div class="price-row">
                    <span>Hoa hồng:</span>
                    <span>{{ trip.meta.commission * trip.meta.value | formatVND }} VNĐ</span>
                  </div>
                  <div class="price-row total">
                    <span>Tổng doanh thu</span>
                    <span>{{ trip.meta.value + trip.meta.commission * trip.meta.value | formatVND}} VNĐ</span>
                  </div>
                </div>

                <!-- Submit Button -->
                <a-button type="primary" block class="submit-btn" @click="handleSubmit">
                  Gửi đơn hàng
                </a-button>
                <div v-if="isLoading" class="loading-overlay">
                  <div class="loading-container">
                    <a-spin size="large" />
                    <div class="loading-text">Đang gửi đơn hàng...</div>
                  </div>
                </div>
              </div>
            </a-card>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import * as orderApi from '../../api/order'
import axios from 'axios'
import * as tutorApi from '@/api/tuor'
import _ from 'lodash'
import * as volatilityApi from '../../api/volatility.js'
import moment from 'moment'
export default {
  name: 'index',
  layout: 'info',
  data() {
    return {
      listOrder: [],
      statusName: {
        Pending: 'Đang chờ xử lý',
        Success: 'Thành công',
      },
      showModal: false,
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
      indexItem: 1,
      loading: false,
      profile: null,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      isPremium: false,
      isLoading: false
    }
  },
  created() {
    console.log(this.$route)
    this.getListOrder()
    this.getProfile()
  },
  methods: {
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
    formatDateTime(dattime) {
      return moment(dattime).format('DD/MM/YYYY HH:mm:ss')
    },
    getIndexItem(item) {
      this.indexItem = item
    },
    async getListOrder() {
      orderApi
        .getListOrder()
        .then(async (res) => {
          this.listOrder = res.data
          for (let index = 0; index < this.listOrder.length; index++) {
            const order = this.listOrder[index]
            order.isShowModal = false
            try {
              const response = await axios.get(
                `https://api.soatdonctv.online/${order.product.image}`,
                {
                  responseType: 'blob',
                  headers: {
                    'Access-Control-Allow-Origin': '*',
                  },
                }
              )
              const url = URL.createObjectURL(response.data)
              const element = document.getElementById(`slip-item-${index}`)
              element.style.backgroundImage = `url(${url})`
              element.style.backgroundPosition = '0% 0%'
              element.style.backgroundSize = '100% 100%'
              element.style.backgroundRepeat = 'no-repeat'
            } catch (error) {
              console.error(`Error loading image for order ${index}:`, error)
            }
          }
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
    async createTuor(item) {
      if (item.status == 'Success') return
      this.showModal = true
      this.trip = item.product
      this.trip.meta = item.meta
      this.orderId = item._id;
      this.isPremium = item.is_premium;
    },
    create: _.debounce(async function () {
      this.loading = true
      await tutorApi
        .sendTuor(this.orderId)
        .then((res) => {
          this.$message.success('Gửi đơn hàng thành công!')
          this.showModal = false
          this.getListOrder()
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
  },
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
