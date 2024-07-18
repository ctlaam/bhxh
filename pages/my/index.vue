<template>
  <div class="profile">
    <div class="container mb-4 text-center text-white" style="margin-top: 80px">
      <h6 class="mb-1" style="font-weight: 600; font-size: 1.5rem">{{profile.name}}</h6>
      <img :src="'https://api.vietnamtour.pro/' + vip.background_urls[0]" style="width: 3rem" crossorigin="anonymous"/>
      <span class="iconfont" style="font-weight: 600">{{vip.name}}</span>
    </div>
    <div class="main-container">
      <div class="container mb-4">
        <div class="row mb-4">
          <div class="col-6">
            <NuxtLink to="/my/invite?title=Yêu cầu đăng ký" class="btn btn-outline-default px-2 btn-block rounded">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#25a0fe">
                <path
                  d="M80-680v-200h200v80H160v120H80Zm0 600v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM700-260h60v60h-60v-60Zm0-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm120-120h60v60h-60v-60Zm-60 60h60v60h-60v-60Zm-60-60h60v60h-60v-60Zm240-320v240H520v-240h240ZM440-440v240H200v-240h240Zm0-320v240H200v-240h240Zm-60 500v-120H260v120h120Zm0-320v-120H260v120h120Zm320 0v-120H580v120h120Z"/>
              </svg>
              Xin Mời
            </NuxtLink>
          </div>
          <div class="col-6">
            <a href="" class="btn btn-outline-default px-2 btn-block rounded">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                   fill="#25a0fe">
                <path
                  d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"/>
              </svg>
              Chăm Sóc Khách Hàng</a>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col"><h6 class="mb-1">Hành Trình Hôm Nay
                    <span class="text-success float-right">{{orderOfUser.count_order || 0}}/20</span>
                  </h6>
                  </div>
                </div>
                <div class="progress h-5 mt-3">
                  <div
                    class="progress-bar bg-default"
                    role="progressbar"
                    style="width: 0%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="container mb-4">--><!--</div>-->
      <div class="container">
        <div class="card">
          <div class="card-header"><h6 class="mb-0">Thiết Lập Cá Nhân</h6></div>
          <div class="card-body px-0 pt-0">
            <div class="list-group list-group-flush border-top border-color">
              <nuxt-link
                to="/my/password?title=Thay đổi mật khẩu đăng nhập"
                class="list-group-item list-group-item-action border-color"
              >
                <div class="row">
                  <div class="col-auto">
                    <div
                      class="avatar avatar-50 bg-default-light text-default rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#fff"
                      >
                        <path
                          d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Mật khẩu đăng nhập</h6>
                    <p class="text-secondary">Thay đổi mật khẩu đăng nhập</p>
                  </div>
                </div>
              </nuxt-link
              >
              <nuxt-link
                to="/my/withdrawalpassword?title=Thay đổi mật tài khoản"
                class="list-group-item list-group-item-action border-color"
              >
                <div class="row">
                  <div class="col-auto">
                    <div
                      class="avatar avatar-50 bg-default-light text-default rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#fff"
                      >
                        <path
                          d="M480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q97-30 162-118.5T718-480H480v-315l-240 90v207q0 7 2 18h238v316Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Mật Khẩu Rút Tiền</h6>
                    <p class="text-secondary">Thay đổi mật khẩu tài khoản</p>
                  </div>
                </div>
              </nuxt-link
              >
              <NuxtLink
                to="/my/Bankaccount?title=Tài khoản ngân hàng"
                class="list-group-item list-group-item-action border-color"
              >
                <div class="row">
                  <div class="col-auto">
                    <div
                      class="avatar avatar-50 bg-default-light text-default rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#fff"
                      >
                        <path
                          d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Tài Khoản Ngân Hàng</h6>
                    <p class="text-secondary">Sửa Thông Tin Tài Khoản</p>
                  </div>
                </div>
              </NuxtLink
              ><!--<a href="/vip/company.pdf" class="list-group-item list-group-item-action border-color">-->
              <!--    <div class="row">--><!--        <div class="col-auto">-->
              <!--            <div class="avatar avatar-50 bg-default-light text-default rounded">-->
              <!--                <span class="material-icons">home</span>--><!--            </div>-->
              <!--        </div>--><!--        <div class="col align-self-center pl-0">-->
              <!--            <h6 class="mb-1">Certificate</h6>-->
              <!--            <p class="text-secondary">Visit Certificate</p>--><!--        </div>--><!--    </div>-->
              <!--</a>-->
              <NuxtLink
                to="/my/rules?title=Điều khoản và điều kiện"
                class="list-group-item list-group-item-action border-color"
              >
                <div class="row">
                  <div class="col-auto">
                    <div
                      class="avatar avatar-50 bg-default-light text-default rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#fff"
                      >
                        <path
                          d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Điều khoản và điều kiện</h6>
                    <p class="text-secondary">Điều khoản và điều kiện</p>
                  </div>
                </div>
              </NuxtLink
              >
              <NuxtLink
                to="/my/faq?title=Câu hỏi thường gặp"
                class="list-group-item list-group-item-action border-color"
              >
                <div class="row">
                  <div class="col-auto">
                    <div
                      class="avatar avatar-50 bg-default-light text-default rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#fff"
                      >
                        <path
                          d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Câu hỏi thường gặp</h6>
                    <p class="text-secondary">Câu hỏi thường gặp</p>
                  </div>
                </div>
              </NuxtLink
              >
              <NuxtLink
                to="/my/about?title=Về chúng tôi"
                class="list-group-item list-group-item-action border-color"
              >
                <div class="row">
                  <div class="col-auto">
                    <div
                      class="avatar avatar-50 bg-default-light text-default rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#fff"
                      >
                        <path
                          d="M40-160v-160q0-34 23.5-57t56.5-23h131q20 0 38 10t29 27q29 39 71.5 61t90.5 22q49 0 91.5-22t70.5-61q13-17 30.5-27t36.5-10h131q34 0 57 23t23 57v160H640v-91q-35 25-75.5 38T480-200q-43 0-84-13.5T320-252v92H40Zm440-160q-38 0-72-17.5T351-386q-17-25-42.5-39.5T253-440q22-37 93-58.5T480-520q63 0 134 21.5t93 58.5q-29 0-55 14.5T609-386q-22 32-56 49t-73 17ZM160-440q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T280-560q0 50-34.5 85T160-440Zm640 0q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T920-560q0 50-34.5 85T800-440ZM480-560q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-680q0 50-34.5 85T480-560Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Về chúng tôi</h6>
                    <p class="text-secondary">Về chúng tôi</p>
                  </div>
                </div>
              </NuxtLink
              >
              <a
                href="/index/user/logout"
                class="list-group-item list-group-item-action border-color"
              >
                <div class="row">
                  <div class="col-auto">
                    <div
                      class="avatar avatar-50 bg-danger-light text-danger rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#dc3545"
                      >
                        <path
                          d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31.5-156.5T197-763l56 56q-44 44-68.5 102T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-67-24.5-125T707-707l56-56q54 54 85.5 126.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-360v-440h80v440h-80Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0" @click="logout">
                    <h6 class="mb-1">Đăng Xuất</h6>
                    <p class="text-secondary">Thoát Khỏi Hệ Thống</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as volatilityApi from '../../api/volatility';
import * as orderApi from '../../api/order';
import _ from 'lodash'
import Cookies from 'js-cookie'
export default {
  name: 'index',
  data() {
    return {
      vip: {
        name: '',
        background_urls: []
      },
      orderOfUser: {
        total_commission_today: 0,
        total_commission: 0,
        count_order: 0,
        count_order_today: 0,
      },
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('loading/setModalLoading', true)
      this.$store.dispatch('profile/saveProfile', null)
      Cookies.remove('access_token')
      Cookies.remove('refresh_token')
      Cookies.remove('user_id')
      Cookies.remove('time_valid')
      this.$store.dispatch('auth/logout')
      this.$store.dispatch('loading/setModalLoading', false)
      this.$router.push('/login')
      this.$message.success('Đăng xuất thành công')
    },
    async getListByKey() {
      volatilityApi
        .getListVips(this.profile.level)
        .then((res) => {
          this.vip = _.get(res, 'data')
        })
    },
    getOrderAnalytic() {
      orderApi.getOrderAnalytic()
        .then((res) => {
          this.orderOfUser = _.get(res, 'data', []);
          console.log("this.orderOfUser:", this.orderOfUser)
        })
        .catch((err) => {
          console.log("err:", err)
          this.$message.error(err)
        })
    },
  },
  created() {
    this.getListByKey();
    this.getOrderAnalytic();
  },
  computed: {
    profile() {
      return  this.$store.state.profile.profile
    },
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';
</style>
