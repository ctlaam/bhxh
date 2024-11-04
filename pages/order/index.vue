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
                    {{ formatDateTime(order.product.created_at) }}
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
                    order.meta && order.meta.value
                  }}</span>
                </div>
                <div class="money-item">
                  <span class="title">Tỷ Lệ</span
                  ><span class="money">{{
                    order.meta && order.meta.commission
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
      class="modal-give-tour"
    >
      <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content" style="max-width: 100%">
          <div class="modal-header">
            <div style="width: 100%; height: 100%">
              <img
                style="object-fit: cover"
                width="100%"
                height="100%"
                :src="domain + trip.image"
                alt=""
                crossorigin="anonymous"
              />
            </div>
            <div class="goods-wrap">
              <div class="text">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p class="goods_name">{{ trip.name }}</p>
              </div>
              <div class="goods">
                <div class="goods-cell flex-center">
                  <div class="cell-item flex-row w100">
                    <div class="cell-item-title">Số Tiền</div>
                    <div class="cell-item-value">
                      <span class="modal-price">{{ trip.meta.value }}</span>
                    </div>
                  </div>
                </div>
                <div class="goods-cell flex-center">
                  <div class="cell-item flex-row w100">
                    <div class="cell-item-title">Tỷ Lệ</div>
                    <div class="cell-item-value">
                      <span class="commision">{{ trip.meta.commission }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="flex rate-box">
              <span>Đánh Giá Bây Giờ</span>
              <ul>
                <li
                  @click="getIndexItem(item)"
                  v-for="item in 5"
                  :key="item"
                  :class="{ light: indexItem >= item }"
                >
                  <a>{{ item }}</a>
                </li>
              </ul>
            </div>
            <a-form
              :form="form"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
              @submit="handleSubmit"
            >
              <a-form-item>
                <div class="modal-footer">
                  <a-button
                    html-type="submit"
                    :loading="loading"
                    type="submit"
                    class="btn btn-primary btn2"
                  >
                    Gửi
                  </a-button>
                </div>
              </a-form-item>
            </a-form>
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
      domain: 'https://soatdontienich.online/',
      indexItem: 1,
      loading: false,
      profile: null,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  created() {
    console.log(this.$route)
    this.getListOrder()
    this.getProfile()
  },
  methods: {
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
                `https://api.vietnamtour.pro/${order.product.image}`,
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
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.create()
        }
      })
    },
    async createTuor(item) {
      if (item.status == 'Success') return
      this.showModal = true
      this.trip = item.product
      this.trip.meta = item.meta
      this.orderId = item._id
    },
    create: _.debounce(async function () {
      if (this.trip.meta.value && this.profile.balance < this.trip.meta.value) {
        let diffMoney = this.trip.meta.value - this.profile.balance
        diffMoney = diffMoney.toFixed(2)
        this.$confirm({
          title: 'Chúc mừng bạn đã nhận được đơn hàng ra soát',
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
          this.getListOrder()
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
