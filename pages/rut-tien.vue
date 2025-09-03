<template>
  <div class="withdraw-page">
    <!-- Header Section -->
    <div class="header-section">
      <div class="user-info">
        <h1 class="page-title">Rút tiền</h1>
        <p class="page-subtitle">
          Quý khách: <strong>{{ user?.fullName || 'test123' }}</strong>
        </p>
      </div>

      <div class="balance-display">
        <i class="fas fa-coins"></i>
        <span class="balance-amount">{{
          formatCurrency(user?.balance || 0)
        }}</span>
      </div>
    </div>

    <!-- Bank Account Information Card -->
    <div class="info-card bank-info-card">
      <div class="card-header">
        <i class="fa-solid fa-building-columns"></i>
        <span class="card-title">Thông tin tài khoản nhận</span>
      </div>

      <div class="bank-details" v-if="bank">
        <div class="detail-row">
          <span class="detail-label">Chủ tài khoản</span>
          <span class="detail-value">{{
            bank.accountHolder || 'test123'
          }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Số tài khoản</span>
          <span class="detail-value account-number">{{
            bank.accountNumber || 'test123'
          }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Ngân hàng</span>
          <span class="detail-value">{{ bank.bankName || 'test123' }}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Chi nhánh</span>
          <span class="detail-value">{{ bank.branch || 'test123' }}</span>
        </div>
      </div>

      <div class="no-bank-info" v-else>
        <i class="fa-solid fa-exclamation-triangle"></i>
        <div class="no-bank-text">
          <p class="no-bank-title">Chưa có thông tin tài khoản</p>
          <p class="no-bank-desc">
            Vui lòng thêm thông tin ngân hàng để rút tiền.
          </p>
        </div>
      </div>
    </div>

    <!-- Withdrawal Form Card -->
    <div class="info-card withdrawal-form-card">
      <div class="card-header">
        <i class="fa-solid fa-wallet"></i>
        <span class="card-title">Nhập số tiền muốn rút</span>
      </div>

      <div class="form-content">
        <div class="input-section">
          <label class="input-label" for="amount">Số tiền (VNĐ)</label>

          <div class="amount-input-wrapper">
            <input
              id="amount"
              v-model="formattedAmount"
              type="text"
              class="amount-input"
              placeholder="VD: 500,000"
              @input="handleAmountInput"
              @blur="validateAmount"
            />
          </div>

          <!-- Quick Selection Buttons -->
          <div class="quick-select-buttons">
            <button
              class="quick-btn"
              :class="{ active: selectedPercent === 0.25 }"
              @click="setPercent(0.25)"
            >
              25%
            </button>
            <button
              class="quick-btn"
              :class="{ active: selectedPercent === 0.5 }"
              @click="setPercent(0.5)"
            >
              50%
            </button>
            <button
              class="quick-btn"
              :class="{ active: selectedPercent === 1 }"
              @click="setPercent(1)"
            >
              Tất cả
            </button>
          </div>

          <p class="input-hint">
            Tối thiểu: <strong>{{ formatCurrency(minAmount) }}</strong
            >. Bước nhảy: 1.000đ.
          </p>

          <!-- Error Message -->
          <div class="error-message" v-if="error">
            <i class="fa-solid fa-exclamation-circle"></i>
            <span>{{ error }}</span>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          class="submit-btn"
          :class="{ disabled: !canSubmit }"
          :disabled="!canSubmit"
          @click="confirmWithdraw"
        >
          <span>Gửi yêu cầu rút tiền</span>
        </button>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div class="modal-overlay" v-if="showConfirm" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">Xác nhận rút tiền</h3>
          <button class="modal-close" @click="closeModal">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>

        <div class="modal-body">
          <div class="confirm-details">
            <div class="confirm-row">
              <span class="confirm-label">Chủ tài khoản:</span>
              <span class="confirm-value">{{
                bank?.accountHolder || 'test123'
              }}</span>
            </div>
            <div class="confirm-row">
              <span class="confirm-label">Số tài khoản:</span>
              <span class="confirm-value account-number">{{
                bank?.accountNumber || 'test123'
              }}</span>
            </div>
            <div class="confirm-row">
              <span class="confirm-label">Ngân hàng:</span>
              <span class="confirm-value">{{
                bank?.bankName || 'test123'
              }}</span>
            </div>
            <div class="confirm-row highlight">
              <span class="confirm-label">Số tiền rút:</span>
              <span class="confirm-value amount">{{
                formatCurrency(amount || 0)
              }}</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="cancel-btn" @click="closeModal">Hủy</button>
          <button class="confirm-btn" @click="submitWithdraw">
            <i class="fa-solid fa-check"></i>
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      user: {
        fullName: 'test123',
        balance: 1000000,
        bank: {
          accountHolder: 'test123',
          accountNumber: 'test123',
          bankName: 'test123',
          branch: 'test123',
        },
      },
      amount: null,
      formattedAmount: '',
      minAmount: 50000,
      selectedPercent: null,
      error: '',
      showConfirm: false,
    }
  },
  computed: {
    bank() {
      return this.user?.bank || null
    },
    canSubmit() {
      const bal = Number(this.user?.balance || 0)
      const amt = Number(this.amount || 0)
      if (!this.bank) return false
      if (!amt || isNaN(amt)) return false
      if (amt < this.minAmount) return false
      if (amt % 1000 !== 0) return false
      if (amt > bal) return false
      return true
    },
  },
  mounted() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      this.user = JSON.parse(savedUser)
    }
  },
  methods: {
    formatCurrency(val) {
      return Number(val || 0).toLocaleString('vi-VN') + ' VNĐ'
    },

    handleAmountInput(event) {
      const value = event.target.value.replace(/[^\d]/g, '')
      this.amount = value ? Number(value) : null
      this.formattedAmount = value ? Number(value).toLocaleString('vi-VN') : ''
      this.selectedPercent = null
      this.error = ''
    },

    setPercent(percent) {
      const bal = Number(this.user?.balance || 0)
      let val = Math.floor((bal * percent) / 1000) * 1000
      if (val < this.minAmount) val = this.minAmount
      this.amount = Math.min(val, bal)
      this.formattedAmount = this.amount.toLocaleString('vi-VN')
      this.selectedPercent = percent
      this.error = ''
    },

    validateAmount() {
      if (!this.amount) return
      const bal = Number(this.user?.balance || 0)
      const amt = Number(this.amount || 0)

      if (amt < this.minAmount) {
        this.error = `Số tiền tối thiểu là ${this.formatCurrency(
          this.minAmount
        )}`
      } else if (amt % 1000 !== 0) {
        this.error = 'Số tiền phải chia hết cho 1.000đ'
      } else if (amt > bal) {
        this.error = 'Số tiền vượt quá số dư hiện có'
      } else {
        this.error = ''
      }
    },

    confirmWithdraw() {
      this.validateAmount()
      if (!this.error && this.canSubmit) {
        this.showConfirm = true
      }
    },

    closeModal() {
      this.showConfirm = false
    },

    async submitWithdraw() {
      this.showConfirm = false
      this.$message.error('Đã xảy ra lỗi, vui lòng thử lại.')
    },
  },
}
</script>

<style lang="scss" scoped>
.withdraw-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header Section */
.header-section {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  color: white;
}

.user-info {
  .page-title {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .page-subtitle {
    font-size: 14px;
    margin: 4px 0 0 0;
    opacity: 0.9;

    strong {
      font-weight: 600;
    }
  }
}

.balance-display {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 12px 16px;
  border-radius: 12px;
  backdrop-filter: blur(10px);

  i {
    font-size: 20px;
    color: #fbbf24;
  }

  .balance-amount {
    font-size: 18px;
    font-weight: 700;
  }
}

/* Cards */
.info-card {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
}

.card-header {
  padding: 12px 16px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 12px;

  i {
    font-size: 20px;
    color: #3b82f6;
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #1e293b;
  }
}

/* Bank Info Card */
.bank-details {
  padding: 24px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f8fafc;

  &:last-child {
    border-bottom: none;
  }
}

.detail-label {
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
}

.detail-value {
  font-size: 15px;
  color: #1e293b;
  font-weight: 600;

  &.account-number {
    font-family: 'Courier New', monospace;
    background: #f8fafc;
    padding: 4px 8px;
    border-radius: 6px;
  }
}

.no-bank-info {
  padding: 32px 24px;
  display: flex;
  align-items: center;
  gap: 16px;

  i {
    font-size: 24px;
    color: #f59e0b;
  }

  .no-bank-text {
    .no-bank-title {
      font-size: 16px;
      font-weight: 600;
      color: #1e293b;
      margin: 0 0 4px 0;
    }

    .no-bank-desc {
      font-size: 14px;
      color: #64748b;
      margin: 0;
    }
  }
}

/* Withdrawal Form */
.form-content {
  padding: 24px;
}

.input-section {
  margin-bottom: 32px;
}

.input-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.amount-input-wrapper {
  position: relative;
  margin-bottom: 16px;
}

.amount-input {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s ease;
  background: #fafafa;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: white;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
}

.quick-select-buttons {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.quick-btn {
  flex: 1;
  padding: 12px;
  border: 2px solid #e5e7eb;
  background: white;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3b82f6;
    color: #3b82f6;
  }

  &.active {
    border-color: #3b82f6;
    background: #3b82f6;
    color: white;
  }
}

.input-hint {
  font-size: 12px;
  color: #6b7280;
  margin: 0;

  strong {
    color: #374151;
  }
}

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-size: 14px;
  margin-top: 12px;

  i {
    font-size: 16px;
  }
}

.submit-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(.disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
  }

  &.disabled {
    background: #d1d5db;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  padding: 24px;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .modal-title {
    font-size: 20px;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
  }

  .modal-close {
    width: 40px;
    height: 40px;
    border: none;
    background: #f8fafc;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background: #e2e8f0;
    }

    i {
      font-size: 16px;
      color: #64748b;
    }
  }
}

.modal-body {
  padding: 24px;
}

.confirm-details {
  .confirm-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f8fafc;

    &:last-child {
      border-bottom: none;
    }

    &.highlight {
      background: #f0f9ff;
      margin: 12px -12px 0;
      padding: 16px 12px;
      border-radius: 8px;
      border: none;
    }
  }

  .confirm-label {
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
  }

  .confirm-value {
    font-size: 15px;
    color: #1e293b;
    font-weight: 600;

    &.account-number {
      font-family: 'Courier New', monospace;
    }

    &.amount {
      color: #dc2626;
      font-size: 18px;
    }
  }
}

.modal-footer {
  padding: 24px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  gap: 12px;

  button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cancel-btn {
    background: white;
    border: 2px solid #e5e7eb;
    color: #6b7280;

    &:hover {
      border-color: #d1d5db;
      background: #f9fafb;
    }
  }

  .confirm-btn {
    background: linear-gradient(135deg, #10b981, #059669);
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
    }
  }
}

/* Responsive Design */
@media (min-width: 769px) {
  .withdraw-page {
    min-width: 800px;
  }

  .header-section {
    max-width: 800px;
  }

  .info-card {
    max-width: 800px;
  }

  .detail-row {
    padding: 20px 0;
  }

  .quick-select-buttons {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .withdraw-page {
    padding: 20px 16px;
  }

  .header-section {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .balance-display {
    align-self: center;
  }

  .user-info {
    .page-title {
      font-size: 24px;
    }
  }

  .card-header {
    padding: 16px 20px;

    .card-title {
      font-size: 16px;
    }
  }

  .bank-details,
  .form-content {
    padding: 20px;
  }

  .detail-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 12px 0;
  }

  .detail-value {
    align-self: flex-end;
  }

  .modal-content {
    margin: 0 16px;
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .withdraw-page {
    padding: 16px 12px;
  }

  .user-info .page-title {
    font-size: 20px;
  }

  .balance-display {
    padding: 10px 14px;

    .balance-amount {
      font-size: 16px;
    }
  }

  .card-header {
    padding: 14px 16px;
  }

  .bank-details,
  .form-content {
    padding: 16px;
  }

  .amount-input {
    padding: 14px;
    font-size: 15px;
  }

  .submit-btn {
    padding: 14px;
    font-size: 15px;
  }
}
</style>
