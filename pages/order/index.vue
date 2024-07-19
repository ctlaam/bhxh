<template>
  <div style="margin-top:80px">
    <div class="main-container">
      <div class="container">
        <div class="item-wrap">
          <div class="slip-item" :id="'slip-item-' + index" v-for="(order, index) in listOrder" :key="index">
            <div class="wrap">
              <div class="time-line">
                <div class="status"
                     :class="{'alert-warning': order.status === 'Pending','alert-success': order.status === 'Success'}">
                  {{ order.status }}
                </div>
              </div>
              <div class="goods-line align-start flex">
                <div class="flex-column">
                  <div class="time text-left">{{ order.product.created_at }}</div>
                  <div class="goods-name text-left">{{ order.product && order.product.name }}</div>
                  <div class="goods-money text-left">1766.00</div>
                </div>
              </div>
              <div class="item-footer">
                <div class="money-item"><span class="title">Số Tiền</span><span
                  class="money">{{ order.product && order.product.price }}</span></div>
                <div class="money-item"><span class="title">Tỷ Lệ</span><span
                  class="money">{{ order.product && order.product.rate }}</span></div>
                <div class="submit-btn"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="none" v-if="!listOrder.length">
          <div class="none_box">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#999999">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>
            </svg>
            <span class="tips ml-2">Không Có Dữ Liệu</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as orderApi from '../../api/order';
import axios from 'axios';

export default {
  name: "index",
  layout: 'info',
  data() {
    return {
      listOrder: []
    }
  },
  created() {
    console.log(this.$route)
    this.getListOrder();
  },
  methods: {
    async getListOrder() {
      orderApi.getListOrder()
        .then(async (res) => {
          this.listOrder = _.get(res, 'data', [])
          for (let index = 0; index < this.listOrder.length; index++) {
            const order = this.listOrder[index];
            try {
              const response = await axios.get(`https://api.vietnamtour.pro/${order.product.image}`, {
                responseType: 'blob',
                headers: {
                  'Access-Control-Allow-Origin': '*'
                }
              });
              console.log("response:", response)
              const url = URL.createObjectURL(response.data);
              const element = document.getElementById(`slip-item-${index}`);
              element.style.backgroundImage = `url(${url})`;
              element.style.backgroundPosition = '0% 0%';
              element.style.backgroundSize = '100% 100%';
              element.style.backgroundRepeat = 'no-repeat';
            } catch (error) {
              console.error(`Error loading image for order ${index}:`, error);
            }
          }
        })
        .catch((err) => {
          this.$message.error(err)
        })
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';
</style>
