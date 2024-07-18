<template>
  <div style="margin-top: 80px">
    <div class="container mt-3 mb-4 text-center">
      <h2 class="text-white">{{profileUser.balance}}</h2>
      <p class="text-white mb-4">Tổng Tài Sản</p>
    </div>
    <div class="container text-center overflow-hidden">
      <div id="chart-container">
        <canvas id="mixedchartjs"></canvas>
      </div>
    </div>
    <div class="main-container">
      <div class="container">
        <div class="row mb-3">
          <div class="col">
            <h6 class="subtitle mb-0">Phân Tích Thu Nhập</h6>
          </div>
          <div class="col-auto"><a href="#" class="float-right small"></a></div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="mb-1">0</h5>
                    <p class="text-secondary">Thu Nhập Hoa Hồng</p>
                  </div>
                  <div class="col-auto pl-0">
                    <button
                      class="btn btn-40 bg-default-light text-default rounded-circle"
                    >
                      <svg
                        style="vertical-align: middle; margin-top: -4px"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#fff"
                      >
                        <path
                          d="M440-280h80v-40h40q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-600v120q0 17 11.5 28.5T400-440h120v40H360v80h80v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="progress h-5 mt-3">
                  <div
                    class="progress-bar bg-default"
                    role="progressbar"
                    style="width: 35%"
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
      <br />
      <div class="container">
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0">Thông Tin Chi Tiết Qũy</h6>
          </div>
          <div class="card-body px-0 pt-0">
            <div class="list-group list-group-flush border-top border-color">
              <span style="cursor: pointer" href="#" @click="navigateToPage()"
                        class="list-group-item list-group-item-action border-color">
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
                          d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Nạp Tiền</h6>
                    <p class="text-secondary">Nạp Lại Số Dư</p>
                  </div>
                </div>
              </span>
              <NuxtLink to="/wallet/withdraw?title=Rút tiền"
                        class="list-group-item list-group-item-action border-color">
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
                          d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Rút Tiền</h6>
                    <p class="text-secondary">
                      Rút Tiền Về Tài Khoản Ngân Hàng Của Bạn
                    </p>
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink
                to="/wallet/history?title=Lịch sử rút tiền"
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
                          d="M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="col align-self-center pl-0">
                    <h6 class="mb-1">Lịch Sử Rút Tiền</h6>
                    <p class="text-secondary">Xem Lịch Sử Rút Tiền</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    navigateToPage() {
      console.log('this.profileUser:', this.profileUser)
      if (this.profileUser && !this.profileUser.bank) {
        this.$router.push({ path: '/my/bankAccount' })
        return
      }

      this.$router.push({ path: '/wallet/recharge' })
    },
  },
  computed: {
    profileUser() {
      return  this.$store.state.profile.profile;
    },
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';

#mixedchartjs {
  padding-right: 20px;
}
</style>
