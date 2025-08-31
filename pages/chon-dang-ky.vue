<template>
  <div class="container mt-4">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb" class="mb-4">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none">Trang chủ</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Đăng ký</li>
      </ol>
    </nav>

    <!-- Registration Form -->
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-header bg-light">
            <h4 class="mb-0">ĐĂNG KÝ</h4>
          </div>
          <div class="card-body">
            <!-- Progress Steps -->
            <div class="row mb-4">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div
                    class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                    style="width: 30px; height: 30px; font-size: 14px"
                  >
                    1
                  </div>
                  <span class="ms-2 text-primary fw-bold">Loại đối tượng</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div
                    class="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center"
                    style="width: 30px; height: 30px; font-size: 14px"
                  >
                    2
                  </div>
                  <span class="ms-2 text-muted">Đăng ký</span>
                </div>
              </div>
            </div>

            <!-- Form Content -->
            <form @submit.prevent="handleSubmit">
              <div class="mb-4">
                <h5 class="mb-3">Đối tượng đăng ký:</h5>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="userType"
                    id="individual"
                    value="individual"
                    v-model="selectedUserType"
                  />
                  <label class="form-check-label" for="individual">
                    Cá nhân
                  </label>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="userType"
                    id="organization"
                    value="organization"
                    v-model="selectedUserType"
                  />
                  <label class="form-check-label" for="organization">
                    Cơ quan/Tổ chức
                  </label>
                </div>

                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="userType"
                    id="other"
                    value="other"
                    v-model="selectedUserType"
                  />
                  <label class="form-check-label" for="other"> Cho con </label>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="d-grid">
                <button
                  type="submit"
                  class="btn btn-primary"
                  :disabled="!selectedUserType"
                >
                  Tiếp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedUserType: '',
    }
  },
  methods: {
    handleSubmit() {
      if (!this.selectedUserType) {
        this.$message.error('Vui lòng chọn loại đối tượng đăng ký!')
        return
      }
      if (this.selectedUserType == 'individual') {
        this.$router.push('/dang-ky')
      } else {
        this.$message.error('Chức năng tạm thời chưa hoạt động!')
      }
    },
  },
}
</script>

<style scoped>
.breadcrumb {
  background-color: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '>';
  color: #6c757d;
}

.card {
  border: 1px solid #dee2e6;
}

.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
