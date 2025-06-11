<template>
  <div id="rule">
    <div class="" style="margin-top: 80px">
      <div class="card member-rank">
        <div class="investment-vip">
          <!-- Header -->
          <div class="header-member">
            <h1 class="title">Địa chỉ nhận hàng</h1>
          </div>
          <div class="card-body was-validated">
            <a-form :form="form" @submit="handleSubmit">
              <a-form-item>
                <a-input
                  placeholder="Họ và tên"
                  v-decorator="[
                    'truthName',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Họ và tên không được để trống!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  placeholder="Số điện thoại"
                  v-decorator="[
                    'phone',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Số điện thoại không được để trống!',
                        },
                      ],
                    },
                  ]"
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  type="text"
                  v-decorator="[
                    'address',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Địa chỉ nhận hàng không được để trống',
                        },
                      ],
                    },
                  ]"
                  class="input-form-title"
                  placeholder="Địa chỉ nhận hàng"
                />
              </a-form-item>
              <a-form-item>
                <a-button
                  class="btn-login w-100"
                  type="primary "
                  html-type="submit"
                >
                  Lưu
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as volatilityApi from "@/api/volatility";
import * as authApi from "../../../api/auth";
import {updateAddress} from "../../../api/volatility";
import {mapState} from "vuex";
export default {
  name: 'index',
  layout: 'info',
  metaInfo: 'Về Crescent Mall',
  data() {
    return {
      currentVIP: 'VIP?',
      dailyOrders: 80,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'login' })
  },
  computed: {
    ...mapState({
      user: (state) => state.profile.profile,
      bank: (state) => state.profile.profile.bank,
      isLogin: (state) => state.auth.isAuthenticated,
    }),
  },
  created() {
    if (this.user?.order_address) {
      this.$nextTick(() => {
        this.form.setFieldsValue({
          truthName: this.user?.order_address.name,
          phone: this.user?.order_address.phone,
          address:this.user?.order_address.address,
        })
      })
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.$store.dispatch('loading/setModalLoading', true)
          volatilityApi
            .updateAddress({
              name: values.truthName,
              phone: values.phone,
              address: values.address,
            })
            .then((res) => {
              console.log("res 1213:", res)
              this.$store.dispatch('profile/saveProfile', res.data)
              this.$message.success('Lưu thành công')
              this.$router.push('/my')
            })
            .catch((err) => {
              this.$message.error('Có lỗi xảy ra vui lòng thử lại sau')
            })
            .finally(() => {
            })
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.member-rank {
  margin-bottom: 80px;
  .investment-vip {
    min-height: 100vh;
    padding: 0;
  }

  .header-member {
    background: linear-gradient(135deg, #001529, #003366);
    padding: 20px;
    text-align: center;
  }

  .title {
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }

  .user-status {
    background: white;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid #eee;
  }

  .avatar {
    width: 50px;
    height: 50px;
    background-color: #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #999;
  }

  .status-info h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #333;
  }

  .status-info p {
    font-size: 13px;
    color: #666;
    margin: 0;
  }

  .features {
    background: white;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .feature-icon {
    width: 50px;
    height: 50px;
    background-color: #001529;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #febd69;
    font-size: 18px;
  }

  .feature-item span {
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }

  .description {
    background: white;
    padding: 15px 20px;
  }

  .description p {
    font-size: 13px;
    color: #666;
    margin: 0;
    text-align: center;
  }

  .vip-packages {
    padding: 10px;
  }

  .vip-card {
    background: white;
    border-radius: 8px;
    margin-bottom: 15px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.6;
    transition: all 0.3s ease;
  }

  .vip-card.available {
    opacity: 1;
    border: 2px solid #4caf50;
  }

  .vip-header {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f9fa;
  }

  .vip-level h3 {
    font-weight: 600;
    margin: 0 0 5px 0;
    color: #333;
  }

  .price {
    font-weight: 700;
    color: #4caf50;
  }

  .status-badge {
    padding: 4px 12px;
    border-radius: 12px;
    font-weight: 500;
  }

  .status-badge.available {
    background: #e8f5e8;
    color: #4caf50;
  }

  .status-badge.locked {
    background: #ffebee;
    color: #f44336;
    width: 100%;
    height: 50px;
  }

  .vip-details {
    padding: 15px 20px;
  }

  .detail-row {
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    font-size: 14px;
    color: #555;
  }

  .detail-row:last-child {
    border-bottom: none;
  }

  .vip-actions {
    padding: 15px 20px;
    background: #f8f9fa;
  }

  .btn-invest {
    width: 100%;
    padding: 12px;
    background: linear-gradient(135deg, #4caf50, #45a049);
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-invest:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
  }

  .btn-invest:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .features {
      padding: 10px;
    }

    .feature-icon {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }

    .vip-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
}
.card {
  padding: 15px;
  padding-bottom: 40px;
  .sc-gGCDDS.kNTQdt {
    text-align: justify;
  }
}
.sc-ehCJOs.kmBkja {
  .gOxvQm {
    width: 50px;
    height: 50px;
    background-color: rgb(24, 144, 255);
    padding: 8px;
    color: white;
    border-radius: 6px;
  }
}

@import '~/assets/scss/my.scss';

.btn-login:focus {
  outline: none;
}

#rule {
  p {
    font-size: 14px;
    text-align: left;
    color: #212529;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .main-container {
    height: 900px;
    overflow-y: auto;
  }

  .card {
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }

  .icon {
    background: linear-gradient(45deg, #1a237e, #311b92);
  }

  .card-header {
    background-color: #fff;
        padding: 1rem;

    h6 {
      font-size: 18px;
      font-weight: 600;
      color: #1a237e;
    }
  }

  .card-body {
    padding: 1.5rem;
  }
}
</style>
<style scoped lang="scss">
@import '~/assets/scss/my.scss';
.card-body {
  border: 1px solid #e5e5e5;
  margin-top: 20px;
}
.btn-login:focus {
  outline: none;
}

input {
  border: 1px solid rgb(217, 217, 217);
  padding: 0 10px;
}
</style>

<style lang="scss">
#info {
  .ant-form-explain {
    text-align: left !important;
  }
}
</style>
