<template>
  <div style="margin-top: 80px; margin-bottom: 80px">
    <div class="row w-100">
      <div class="col-6 mt-3 text-center">
        <h5 class="text-white">{{ profile && profile.balance }}</h5>
        <p class="text-white mb-4 fz14">Tổng Tài Sản</p>
      </div>
      <div class="col-6 mt-3 text-center">
        <h5 class="text-white">{{ orderOfUser && orderOfUser.total_commission_today }}</h5>
        <p class="text-white mb-4 fz14">Hoa Hồng Hôm Nay</p>
      </div>
    </div>
    <div class="row w-100">
      <div class="col-6 mt-3 text-center">
        <h5 class="text-white">{{ vip && vip.order_quantity_per_day }}</h5>
        <p class="text-white mb-4 fz14">Hành Trình Hàng Ngày</p>
      </div>
      <div class="col-6 mt-3 text-center">
        <h5 class="text-white">{{ profile  && profile.total_order_success || 0 }}</h5>
        <p class="text-white mb-4 fz14">Hành Trình Đã Đi</p>
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
            Tour Hành Trình
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
          Explore Tours
        </div>
        <div class="hotels" data-v-91fdc248="">
          <div class="hotel-item" data-v-91fdc248="">
            <img
              src="~/assets/hotels/486f5d68fac4f5d1.jpg"
              alt=""
              class="left"
              data-v-91fdc248=""
            />
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Vịnh Hạ Long</div>
              <div class="subtitle" data-v-91fdc248="">
                Vịnh Hạ Long được Unesco nhiều lần công nhận là Di sản thiên
                nhiên của Thế giới với hàng nghìn hòn đảo được làm nên bởi tạo
                hoá kỳ vĩ và sống động. Vịnh Hạ Long có phong cảnh tuyệt đẹp nên
                nơi đây là một điểm du lịch rất hấp dẫn với du khách trong nước
                và quốc tế.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248="">
            <img
              src="~/assets/hotels/93985c9deee79d51.jpg"
              alt=""
              class="left"
              data-v-91fdc248=""
            />
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Hội An</div>
              <div class="subtitle" data-v-91fdc248="">
                Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc
                vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố
                Đà Nẵng khoảng 30 km về phía Nam.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248="">
            <img
              src="~/assets/hotels/3740631511d46098.jpg"
              alt=""
              class="left"
              data-v-91fdc248=""
            />
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Sài Gòn</div>
              <div class="subtitle" data-v-91fdc248="">
                Nhà thờ Đức Bà là một điểm check-in không thể bỏ lỡ khi đến TP.
                Hồ Chí Minh. Với kiến trúc cổ của Pháp cùng không gian sang
                trọng từ bên ngoài đến bên trong thánh đường, địa điểm này được
                coi là công trình nhà thờ Công giáo có quy mô lớn nhất Việt Nam
                và cũng là một trong những biểu tượng của Sài Gòn.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248="">
            <img
              src="~/assets/hotels/5d8f7d8945d11842.jpg"
              alt=""
              class="left"
              data-v-91fdc248=""
            />
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Phú Quốc</div>
              <div class="subtitle" data-v-91fdc248="">
                Phú Quốc là một thành phố đảo trực thuộc tỉnh Kiên Giang, Việt
                Nam. Đảo Phú Quốc cùng các đảo nhỏ lân cận và quần đảo Thổ Chu
                hợp lại tạo thành Thành phố Phú Quốc ở vịnh Thái Lan, đây là
                thành phố đảo đầu tiên được thành lập của Việt Nam.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248="">
            <img
              src="~/assets/hotels/b25c586e79f5bb15.jpg"
              alt=""
              class="left"
              data-v-91fdc248=""
            />
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Đà Lạt</div>
              <div class="subtitle" data-v-91fdc248="">
                Thành phố ngàn hoa – Đà Lạt chính là địa điểm được rất nhiều du
                khách quan tâm. Nơi đây nổi tiếng với khí hậu ôn hòa, dễ chịu,
                cảnh sắc thiên nhiên thơ mộng, lãng mạn, nhiều khu nghỉ dưỡng,
                vui chơi. Đà Lạt cũng chính là điểm đến mơ ước của các tín đồ mê
                du lịch, của cả du khách trong và ngoài nước
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248="">
            <img
              src="~/assets/hotels/522d377ca561061c.jpg"
              alt=""
              class="left"
              data-v-91fdc248=""
            />
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Sapa</div>
              <div class="subtitle" data-v-91fdc248="">
                Sa Pa là một huyện vùng cao của tỉnh Lào Cai, nằm ở phía Tây Bắc
                của Việt Nam, thị trấn Sa Pa ở độ cao 1.600 mét so với mực nước
                biển, cách thành phố Lào Cai 38 km và 376 km tính từ Hà Nội.
                Ngoài con đường chính từ thành phố Lào Cai, để tới SaPa còn một
                tuyến giao thông khác, quốc lộ 4D nối từ xã Bình Lư, Lai Châu.
              </div>
            </div>
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
          <div class="modal-header" >
            <div style="width: 100%; height: 100%">
              <img style="object-fit: cover"
                   width="100%"
                   height="100%"
                   :src="domain + trip.image"
                   alt=""
                   crossorigin="anonymous"
              >
            </div>
            <div class="goods-wrap">
              <div class="text">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABbJJREFUaEPdWluIlVUU/j6coKAHC6GESRuYQCOjoYYsMg2mm0o3tRKMVGayQa2pJqymmAkso3wIsixSUipG0i4ThkUGihMaDmSkaJSkJGhR1EOQwsiKb9hHDmf+y977/49B6+1w9t5rfXtd91o/8T8j1gOPmV0MYDqAawBMAnC+4/M3gEMAhgDsJHmibP6lAjKzOwE8DKANQEOOsMMAtgNYQ/KzsoCVAsjMrgCwFsANkYINAugkuT9y/5lthQGZWTuA1wCcW1CYkwCWk1xX5JxCgMxsFYCnigiQsHclyediz4wGZGbdAF6JZZyz70mSq2POjgJkZnL6bR6OHyOT9ihg3E5SQSOIggGZmULw9wAuDeIUvvgIgMkk5VveFAOoD0CvN4diC58nKX7eFATIzBTJjgMYm8dh34FDeOvdzdixewjHjv+KhjFj0Dj+IrRNm4olD8zDpOamvCP0/+8ALgnRUiig+wH0Z0ly8tQpLO9ZhXX9H6UuE7iujgVY9fSjaGjIy7+YR3KLD3qtCQX0DoCFaYcLzM33PYTBvd968Z87qw39b7ycB2oDyUVeB0YA+jkrGCzsehYbN3/qy3tk3Yqli/HSM11Zew6RnOx7qLeGnP/8k3bw0HcH0Dpzvi/fM+tkfgd3DqC5aULW3vN8/SgEkMK0NJRI7d19WJ/hN1nS9jzSgZUrlmctaSKpMJ5LpQFqvn4WDh/9JZdh0oKrr7wcQ9s2nXVACtV/pnE9Z0ILhk+fjgI0sXE8jnzzRdbeC0j+5XO4t4Z0mJnZfwGIpLec3gsdIJU8evuMokk33oEfDnuZ+ai917ZMwZ6t76fd1X6SU3y0ozWhgN4GoPfPKKpjUFhHsqNegJRUlVxHkUqdllvu9eV7Zp1H2O4IefSFakjND9VyidTe3Yv1/R8Hgep9vBN9T3Rm7VEtd8z30CBAzo92pfUOhoeHMWPuYny9d58X/zkz27BpbWbpM0hymtdhblEMoGWuh5DIR6CW9bw4oqm0MC4zU8kjzeQUp4+RfLXegJSPlEErvbZEfvKpDR8MYPuuPTjx2x9oaBiDcReOxey26Wiff09eqaMz9bAb75t/KkIEa8iZ3ZsAloTcXMTa9SQTI2rWWbGAlIuUk+pJLST9nLFKiihATksKZ3fVCdEnJO+OObsIoKsA+L3kwiWL0o7YRANyWtLTeE64vJk7orVTBqBmAAdL7M+pHyftRPe4C2nIaWkNgKUlaSkqslXzLgOQ8tKPAMYVBKX3zmUk1bqKpsKAnJaUL1SJFyGNU5TfClEpgByo3QCmRkqjid51JOVDhahMQBo9Ktnmdg5rJBaI1pgkmoS8NEBOS6kPwIxrD2ok5qmvECA3iVAemu3mqrk97xSBFBA0OtkK4EOSGi5HURQgM5PgPe45HgsiTWCB01jyhdBKWwcGAzIzDYY3A9DrtZZUTO5xT4sFOVf8HgBpQoFEZVQtaeSvRr0Gyt4UBMjMxFwv1mrHl6lslLlU36iZfQ7g1hRJviKpKeAIOY3LbB90plv5S2+im0jqkrwoFJCK0cptqjxRAyORmfv4QutrNambV3mT+NGFuzQFl0q7bB/JFi80ISbnBKw0SCSMsnqm85rZDABfVmnUa3bqNKYasXIZerl6fXXiraEEQKm3XH2bNdNyr+m246WcVimnygfkbH2v+35HP38CsMjHac3stpEIRMqvMskFHfX+VMmLhki25u2r/O+tIQdIQUEmVN0g2QFAEWsgtrA0M2lC3wmpkVn9eY1MWkFBpZEXBQFyoMRQc9bGBA4KFAoS+uJKzUHZvYSqVNASXJch39B+lUu6pKR+ufbP97GAajmCAVWFWX0So85PPRLr6wBWn5XEWuPwum01SpRv5CexbyJpUP6lIZGe4Ge39EkzZjOTIytPaXw50Wmv1jRlSipvjgLQ/EV5RgGmFIoyuVI41+mQfwFBDOBEtN4NcQAAAABJRU5ErkJggg=="
                  alt=""
                />
                <p class="goods_name">{{trip.name}}</p>
              </div>
              <div class="goods">
                <div class="goods-cell flex-center">
                  <div class="cell-item flex-row w100">
                    <div class="cell-item-title">
                      Số Tiền
                    </div>
                    <div class="cell-item-value">
                      <span class="modal-price">{{trip.price}}</span>
                    </div>
                  </div>
                </div>
                <div class="goods-cell flex-center">
                  <div class="cell-item flex-row w100">
                    <div class="cell-item-title">Tỷ Lệ</div>
                    <div class="cell-item-value">
                      <span class="commision">{{trip.commission}}</span>
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
          </div>
          <div class="modal-footer">
            <input
              type="hidden"
              id="oid"
              name="oid"
              value="UB2407191022585488"
            /><button
              type="submit"
              class="btn btn-primary btn2"
              @click="create()"
            >
              Gửi
            </button>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import * as tutorApi from '../../api/tuor';
import * as volatilityApi from '../../api/volatility.js'
import * as orderApi from '../../api/order'

import axios from "axios";
export default {
  name: 'index',
  data() {
    return {
      showModal: false,
      indexItem: 1,
      trip: {
        name: '',
        price: '',
        commission: ''
      },
      domain: 'https://api.vietnamtour.pro/',
      orderId: null,
      profile: null,
      vip: null,
      orderOfUser: null,
    }
  },
  async created() {
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
  methods: {
    async showModalTour() {
      await tutorApi.getTuor().then(async (res) => {
        this.trip = res.data.product;
        this.orderId = res.data._id;
        this.showModal = true
      })
        .catch((err) => {
          this.$message.error(err)
          return;
      })
    },
    getIndexItem(item) {
      this.indexItem = item
    },
    async create() {
      await tutorApi.sendTuor(this.orderId)
        .then((res) => {
          this.$message.success('Đánh giá hành trình thành công!')
          this.showModal = false;
        })
        .catch((err)=> {
          this.$message.error(err)
          return;
        })
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
    padding: 0!important;
    /* word-wrap: break-word; */
  }
  .modal-content {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .modal-dialog{
    margin: 0;
  }
}
</style>
