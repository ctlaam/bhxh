<template>
  <div id="rule">
    <div class="" style="margin-top: 80px">
      <div class="card member-rank">
        <div class="investment-vip">
          <!-- Header -->
          <div class="header-member">
            <h1 class="title">Mức vốn đầu tư</h1>
          </div>

          <!-- User Status -->
          <div class="user-status">
            <div class="avatar">
              <i class="fas fa-user"></i>
            </div>
            <div class="status-info">
              <h2>Gian hàng hiện tại: {{ currentVIP }}</h2>
              <p>Số lượng đơn hàng mỗi ngày: {{ dailyOrders }} Đơn hàng</p>
            </div>
          </div>

          <!-- Features -->
          <div class="features">
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <span>Lợi nhuận</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-file-invoice-dollar"></i>
              </div>
              <span>Thu nhập</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">
                <i class="fas fa-headset"></i>
              </div>
              <span>CSKH</span>
            </div>
          </div>

          <!-- Description -->
          <div class="description">
            <p>Tham khảo gian hàng phù hợp với số vốn bạn muốn đầu tư</p>
          </div>

          <!-- VIP Packages -->
          <div class="vip-packages">
            <div
              v-for="vip in vipPackages"
              :key="vip.id"
              class="vip-card"
              :class="{ available: vip.available }"
            >
              <div class="vip-header">
                <div class="vip-level">
                  <h3>{{ vip.name }}</h3>
                  <span class="price">${{ vip.price.toLocaleString() }}</span>
                </div>
                <div
                  class="status-badge"
                  :class="vip.available ? 'available' : 'locked'"
                >
                  {{ vip.available ? 'Đã mở' : 'Đã khoá' }}
                </div>
              </div>

              <div class="vip-details">
                <div class="detail-row">
                  <span>Số lượng đơn: {{ vip.dailyOrders }} Đơn hàng/ngày</span>
                </div>
                <div class="detail-row">
                  <span
                    >Lợi nhuận mỗi đơn: {{ vip.profitRate }}% giá trị đơn
                    hàng</span
                  >
                </div>
                <div class="detail-row">
                  <span
                    >Số lượt rút tiền trong ngày:
                    {{ vip.withdrawals }} lượt</span
                  >
                </div>
              </div>

              <div class="vip-actions" v-if="vip.available">
                <button
                  class="btn-invest"
                  @click="handleInvest(vip)"
                  :disabled="!vip.available"
                >
                  Đầu tư ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'info',
  metaInfo: 'Về Crescent Mall',
  data() {
    return {
      currentVIP: 'VIP?',
      dailyOrders: 80,
      vipPackages: [
        {
          id: 1,
          name: 'VIP1',
          price: 120,
          dailyOrders: 40,
          profitRate: 0.4,
          withdrawals: 1,
          available: true,
        },
        {
          id: 2,
          name: 'VIP2',
          price: 1000,
          dailyOrders: 80,
          profitRate: 0.6,
          withdrawals: 1,
          available: true,
        },
        {
          id: 3,
          name: 'VIP3',
          price: 3000,
          dailyOrders: 120,
          profitRate: 0.8,
          withdrawals: 2,
          available: false,
        },
        {
          id: 4,
          name: 'VIP4',
          price: 5000,
          dailyOrders: 200,
          profitRate: 1.0,
          withdrawals: 3,
          available: false,
        },
      ],
    }
  },
  methods: {
    handleInvest(vip) {
      console.log('Investing in:', vip.name)

      // Confirmation dialog
      const confirmed = confirm(
        `Bạn có chắc chắn muốn đầu tư vào ${
          vip.name
        } với số tiền $${vip.price.toLocaleString()}?`
      )

      if (confirmed) {
        this.$emit('invest', vip)
        // Logic đầu tư
        this.processInvestment(vip)
      }
    },

    processInvestment(vip) {
      // Simulate investment process
      console.log('Processing investment for', vip.name)

      // Show loading or redirect to payment
      // this.$router.push(`/payment?vip=${vip.id}`)

      // Or emit to parent component
      this.$emit('investment-selected', {
        vipLevel: vip.name,
        amount: vip.price,
        details: vip,
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
