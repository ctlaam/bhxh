<template>
  <div style="margin-top: 80px">
    <div class="sc-jrQzAO kPsTlX mb-4" style="text-align: left">
      <div class="title" style="font-size: 20px;">Lịch sử đơn hàng</div>
      <span>Dữ liệu được cung cấp bởi trang chính thức</span>
    </div>
    <div class="row mb-4">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="col-3 tab-item"
        :class="{ active: activeTab === index }"
        @click="callback(index)"
      >
        {{ tab.label }}
      </div>
    </div>
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
                <div class="product-image">
                  <img
                    :src="domain + order.product.image"
                    alt="Product Image"
                    class="image"
                    v-if="order && order.product && order.product.image"
                  />
                  <div class="placeholder-image" v-else>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#999999"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path
                        d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
                      />
                    </svg>
                  </div>
                </div>
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
                    (((order.meta && order.meta.commission) / 100) *
                      order.meta.value)
                      | formatVND
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
      :class="['modal-give-tour', { 'premium-modal': isPremium }]"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content" style="max-width: 100%">
          <div class="modal-body">
            <a-card class="order-success-card">
              <div
                class="premium-badge"
                v-if="trip.is_premium"
                style="color: #000"
              >
                <a-icon type="crown" /> Premium
              </div>
              <!-- Header -->
              <div class="success-header" style="color: #000">
                Đơn vị trật tự
              </div>

              <!-- Order Info -->
              <div class="order-info" style="color: #000">
                <div class="time-and-id" style="color: #000">
                  <span style="color: #000"
                    >Thời gian nhận: {{ trip.created_at | formatTime }}</span
                  >
                  <div style="color: #000">
                    <span style="color: #000"
                      >Mã SP: {{ trip._id | getSpCode }}</span
                    >
                    <a-icon type="qrcode" />
                  </div>
                </div>

                <!-- Product -->
                <div class="product-info">
                  <img
                    :src="domain + trip.image"
                    alt="Product Image"
                    crossorigin="anonymous"
                    class="product-image"
                  />
                  <div class="product-details">
                    <p class="product-name">{{ trip.name }}</p>
                    <p class="model">{{ trip._id | getSpCode }}</p>
                    <p class="price">{{ trip.meta.value | formatVND }}</p>
                  </div>
                </div>

                <div class="price-details" style="color: #000">
                  <div class="price-row" style="color: #000">
                    <span style="color: #000">Tổng tiền </span>
                    <span style="color: #000"
                      >{{ trip.meta.value | formatVND }} $</span
                    >
                  </div>
                  <div class="price-row" style="color: #000">
                    <span style="color: #000">Hoa hồng:</span>
                    <span style="color: #000"
                      >{{
                        (trip.meta.commission * trip.meta.value) | formatVND
                      }}
                      $</span
                    >
                  </div>
                  <div class="price-row total" style="color: #000">
                    <span style="color: #000">Tổng doanh thu</span>
                    <span style="color: #000"
                      >{{
                        (trip.meta.value +
                          trip.meta.commission * trip.meta.value)
                          | formatVND
                      }}
                      $</span
                    >
                  </div>
                </div>

                <!-- Submit Button -->
                <a-button
                  type="primary"
                  block
                  class="submit-btn"
                  @click="handleSubmit"
                  style="color: #000"
                >
                  Gửi đơn hàng
                </a-button>
                <div v-if="isLoading" class="loading-overlay">
                  <div class="loading-container" style="color: #000">
                    <a-spin size="large" />
                    <div class="loading-text" style="color: #000">
                      Đang gửi đơn hàng...
                    </div>
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
      activeTab: 0, // Tab actif par défaut (Tất cả)
      tabs: [
        { label: 'Tất cả', value: 'all' },
        { label: 'Đang xử lý', value: 'processing' },
        { label: 'Chờ hoàn thành', value: 'pending' },
        { label: 'Đã hoàn thành', value: 'completed' },
      ],
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
      domain: process.env.BASE_URL_IMAGE,
      indexItem: 1,
      loading: false,
      profile: null,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      isPremium: false,
      isLoading: false,
    }
  },
  created() {
    console.log(this.$route)
    this.getListOrder()
    this.getProfile()
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index

      this.$emit('tab-changed', {
        index: index,
        tab: this.tabs[index],
      })
    },

    async handleSubmit() {
      if (this.isLoading) return // Prevent double click

      this.isLoading = true

      try {
        await new Promise((resolve) => setTimeout(resolve, 5000)) // Delay 5s
        await this.create()
      } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
    formatDateTime(dattime) {
      return moment(dattime).format('DD/MM/YYYY HH:mm:ss')
    },
    getIndexItem(item) {
      this.indexItem = item
    },
    async getListOrder(status) {
      let params = {
        status,
      }
      if (!status) delete params.status
      orderApi
        .getListOrder(params)
        .then(async (res) => {
          this.listOrder = res.data
          for (let index = 0; index < this.listOrder.length; index++) {
            const order = this.listOrder[index]
            order.isShowModal = false
            try {
              const response = await axios.get(
                `https://api.bestbuy-affilatebb.info/${order.product?.image}`,
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
      this.orderId = item._id
      this.isPremium = item.is_premium
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
          if (
            err ==
            'Số dư không đủ. Bạn vui lòng liên hệ CSKH để được hỗ trợ. Xin cảm ơn!'
          ) {
            this.$confirm({
              title: err,
              icon: 'check-circle',
              cancelButtonProps: { style: { display: 'none' } },
              onOk: () => {
                this.showModal = false
              },
            })
            return
          }
          this.$message.error(err)
        })
        .finally(() => {
          this.loading = false
          setTimeout(() => {}, 2500)
        })
    }, 500),
    async getProfile() {
      await volatilityApi.getProfileUser().then(async (res) => {
        this.profile = res.data
        await volatilityApi.getListVips(this.profile.level).then((data) => {
          this.vip = data.data
        })
      })
    },
    callback(key) {
      console.log("key:", key)
      this.listOrder = []
      let status = ''
      if (key == 1) status = 'Processing'
      else if (key == 2) status = 'Pending'
      else if (key == 3) status = 'Success'
      else if (key == 5) status = 'Pending'
      this.getListOrder(status)
    },
    closeDetail(value = 1) {
      this.viewDetail = false
      this.defaultKey = value
      this.callback(value)
    },
  },
  filters: {
    formatTime(value) {
      if (!value) return ''
      return moment(value).format('HH:mm:ss DD/MM/YYYY')
    },
  }
}
</script>
<style lang="scss">
.tab-item {
  padding: 12px 8px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
  user-select: none;
  border-bottom: 2px solid transparent;
}

.tab-item:hover {
  color: #febd69;
  opacity: 0.8;
}

.tab-item.active {
  color: #febd69;
  border-bottom-color: #febd69;
}

.tab-content {
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  color: white;
}

/* Version responsive */
@media (max-width: 768px) {
  .tab-item {
    font-size: 14px;
    padding: 0;
  }
}
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
      background: linear-gradient(45deg, #ffd700, #ffa500) !important;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%
        );
        background-size: 20px 20px;
        animation: shine 2s linear infinite;
      }
    }

    .order-success-card {
      border: 2px solid #ffd700;
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.15);
    }

    .price-details {
      background: linear-gradient(
        45deg,
        rgba(255, 215, 0, 0.1),
        rgba(255, 165, 0, 0.1)
      );
      padding: 15px;
      border-radius: 8px;
      border: 1px solid rgba(255, 215, 0, 0.2);
    }

    .submit-btn {
      background: linear-gradient(45deg, #ffd700, #ffa500) !important;
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
      background: #ffd700;
      padding: 5px 10px;
      border-radius: 20px;
      color: #fff;
      font-size: 12px;
      font-weight: bold;
      box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
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
<style scoped lang="scss">
.item-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.product-image {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.time {
  font-size: 12px;
  color: #666;
}

.goods-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #e5e7eb;
}

.money-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.title {
  font-size: 12px;
  color: #666;
}

.money {
  font-size: 14px;
  font-weight: 600;
  color: #22c55e;
}

.none {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.none_box {
  display: flex;
  align-items: center;
  color: #999;
}

.tips {
  font-size: 14px;
}
</style>
<style lang="scss">
.tab-item {
  padding: 12px 8px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
  user-select: none;
  border-bottom: 2px solid transparent;
}

.tab-item:hover {
  color: #febd69;
  opacity: 0.8;
}

.tab-item.active {
  color: #febd69;
  border-bottom-color: #febd69;
}

.tab-content {
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  color: white;
}

/* Version responsive */
@media (max-width: 768px) {
  .tab-item {
    font-size: 14px;
    padding: 0;
  }
}

.modal-give-tour {
  .ant-modal-content {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    background: linear-gradient(145deg, #ffffff, #f0f0f0);
  }

  .ant-modal-body {
    padding: 0;
  }

  .modal-header {
    position: relative;
    padding: 0;
  }

  .success-header {
    background: linear-gradient(45deg, #2c3e50, #3498db);
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding: 15px;
    position: relative;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .premium-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ffd700;
    color: #1a1a1a;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }

  .order-success-card {
    border: none;
    background: transparent;
  }

  .order-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ant-card-body {
    padding: 0;
  }

  .time-and-id {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #333;
    padding: 10px;
    background: #f9f9f9;
    border-radius: 8px;
  }

  .time-and-id div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .product-info {
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 10px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  }

  .product-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  .product-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .product-name {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  .model {
    font-size: 12px;
    color: #666;
    text-transform: uppercase;
    margin: 0;
  }

  .price {
    font-size: 14px;
    font-weight: 600;
    color: #22c55e;
    margin: 0;
  }

  .price-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
  }

  .price-row.total {
    font-weight: 600;
    font-size: 16px;
    color: #2c3e50;
    border-top: 1px solid #e0e0e0;
    padding-top: 10px;
  }

  .submit-btn {
    background: linear-gradient(45deg, #3498db, #2ecc71);
    border: none;
    font-size: 16px;
    font-weight: 600;
    padding: 12px;
    border-radius: 8px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    line-height: 10px;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .loading-text {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }

  &.premium-modal {
    .success-header {
      background: linear-gradient(45deg, #ffd700, #ffa500);
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%
        );
        background-size: 20px 20px;
        animation: shine 2s linear infinite;
      }
    }

    .order-success-card {
      border: 2px solid #ffd700;
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.15);
    }

    .price-details {
      background: linear-gradient(
          45deg,
          rgba(255, 215, 0, 0.1),
          rgba(255, 165, 0, 0.1)
      );
      border: 1px solid rgba(255, 215, 0, 0.2);
    }

    .submit-btn {
      background: linear-gradient(45deg, #ffd700, #ffa500);
      border: none;
      font-weight: 600;

      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
      }
    }
  }
}

@keyframes shine {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 0;
  }
}
</style>

<style scoped lang="scss">
.item-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.product-image {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 4px;
}

.flex-column {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.time {
  font-size: 12px;
  color: #666;
}

.goods-name {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.item-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #e5e7eb;
}

.money-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.title {
  font-size: 12px;
  color: #666;
}

.money {
  font-size: 14px;
  font-weight: 600;
  color: #22c55e;
}

.none {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.none_box {
  display: flex;
  align-items: center;
  color: #999;
}

.tips {
  font-size: 14px;
}
</style>
