<template>
  <div style="">
    <div class="container mt-3 mb-4 text-center">
      <h2 class="text-white">Lịch sử rút tiền</h2>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h6 class="mb-0">Lịch Sử Rút Tiền</h6>
        </div>
        <div class="card-body px-0 pt-0">
          <div
            v-if="withdrawHistory.length"
            class="list-group list-group-flush border-top border-color"
          >
            <div
              v-for="(item, index) in filteredWithdrawHistory"
              :key="item._id"
              class="list-group-item border-color"
            >
              <div class="row">
                <div class="col-auto">
                  <div class="col-auto align-self-center">
                    <strong>#{{ index + 1 }}</strong>
                  </div>
                </div>
                <div class="col align-self-center pl-0">
                  <h6 class="mb-1">
                    {{ formatCurrency(item.amount) }} -
                    {{ item.meta.user_bank.bank_name }}
                  </h6>

                  <p class="text-secondary">
                    {{ formatDate(item.created_at) }} -
                    <span
                      :class="{
                        'text-warning': item.status === 'Pending',
                        'text-success': item.status === 'Success',
                        'text-danger': item.status === 'Rejected',
                      }"
                    >
                      {{
                        item.status === 'Pending'
                          ? 'Đang chờ xử lý'
                          : item.status === 'Success'
                          ? 'Thành công'
                          : 'Thất bại'
                      }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center py-4 text-secondary">
            Không có lịch sử rút tiền.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as cashApi from '../../api/cash'
import * as orderApi from '../../api/order'

export default {
  data() {
    return {
      orderOfUser: null,
      withdrawHistory: [],
    }
  },
  methods: {
    getCashLog() {
      cashApi
        .getLogCash()
        .then((res) => {
          this.withdrawHistory = _.get(res, 'data', [])
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
    formatCurrency(amount) {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      }).format(amount)
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleString('vi-VN')
    },
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
    navigateToPage() {
      console.log('this.profileUser:', this.profileUser)
      if (this.profileUser && !this.profileUser.bank) {
        this.$router.push({ path: '/my/bankAccount' })
        return
      }

      this.$router.push({ path: '/wallet/recharge' })
    },
    getOrderAnalytic() {
      orderApi
        .getOrderAnalytic()
        .then((res) => {
          this.orderOfUser = _.get(res, 'data', [])
          console.log('this.orderOfUser:', this.orderOfUser)
        })
        .catch((err) => {
          this.$message.error(err)
        })
    },
  },
  computed: {
    filteredWithdrawHistory() {
      return this.withdrawHistory.filter((item) => item.amount >= 10000)
    },
    profileUser() {
      return this.$store.state.profile.profile
    },
  },
  filters: {
    roundToTwoDecimalPlaces(num) {
      if (!num) return 0
      return Math.round(num * 100) / 100
    },
  },
  created() {
    this.getCashLog()
    this.getOrderAnalytic()
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';

#mixedchartjs {
  padding-right: 20px;
}
</style>
