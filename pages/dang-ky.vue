<template>
  <div class="container-fluid bg-light min-vh-100 py-4">
    <div class="row justify-content-center">
      <div class="col-12 col-xl-10">
        <div class="card shadow-sm">
          <div class="card-header bg-primary text-white text-center py-3">
            <h4 class="mb-0 fw-bold">TỜ KHAI ĐĂNG KÝ GIAO DỊCH ĐIỆN TỬ</h4>
          </div>

          <div class="card-body p-4">
            <form @submit.prevent="handleSubmit">
              <!-- Thông tin đăng ký -->
              <div class="section-container mb-4">
                <h5 class="section-title">Thông tin đăng ký</h5>
                <div class="section-content">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Họ tên <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registrationInfo.fullName"
                        placeholder="Nhập họ và tên đầy đủ"
                      />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Mã số bảo hiểm xã hội <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registrationInfo.socialInsuranceCode"
                        placeholder="Nhập mã số BHXH"
                      />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Loại giấy tờ <span class="text-danger">*</span>
                      </label>
                      <select
                        class="form-select"
                        v-model="registrationInfo.idType"
                      >
                        <option value="">VD: CCCD, CMND, Hộ chiếu...</option>
                        <option value="cccd">Căn cước công dân</option>
                        <option value="cmnd">Chứng minh nhân dân</option>
                        <option value="passport">Hộ chiếu</option>
                      </select>
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Số giấy tờ <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registrationInfo.idNumber"
                        placeholder="Nhập số giấy tờ"
                      />
                    </div>

                    <div class="col-12 mb-3">
                      <label class="form-label fw-semibold">
                        Số điện thoại <span class="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        class="form-control"
                        v-model="registrationInfo.phoneNumber"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>

                    <div class="col-md-4 mb-3">
                      <label class="form-label fw-semibold">
                        Tỉnh/Thành phố <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registrationInfo.province"
                        placeholder="Nhập tỉnh/thành phố"
                      />
                    </div>

                    <div class="col-md-4 mb-3">
                      <label class="form-label fw-semibold">
                        Quận/Huyện <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registrationInfo.district"
                        placeholder="Nhập quận/huyện"
                      />
                    </div>

                    <div class="col-md-4 mb-3">
                      <label class="form-label fw-semibold">
                        Phường/Xã <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registrationInfo.ward"
                        placeholder="Nhập phường/xã"
                      />
                    </div>

                    <div class="col-12 mb-3">
                      <label class="form-label fw-semibold">
                        Địa chỉ <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registrationInfo.address"
                        placeholder="Nhập địa chỉ chi tiết"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Thông tin ngân hàng -->
              <div class="section-container mb-4">
                <h5 class="section-title">Thông tin ngân hàng</h5>
                <div class="section-content">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Chủ tài khoản <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="bankInfo.accountHolder"
                        placeholder="Nhập tên chủ tài khoản"
                      />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Số tài khoản <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="bankInfo.accountNumber"
                        placeholder="Nhập số tài khoản ngân hàng"
                      />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Tên ngân hàng <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="bankInfo.bankName"
                        placeholder="Nhập tên ngân hàng"
                      />
                    </div>

                    <div class="col-md-6 mb-3">
                      <label class="form-label fw-semibold">
                        Chi nhánh <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="bankInfo.branch"
                        placeholder="Nhập tên chi nhánh ngân hàng"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Đăng ký giao dịch tài -->
              <div class="section-container mb-4">
                <h5 class="section-title">Đăng ký giao dịch tài</h5>
                <div class="section-content">
                  <p class="mb-3 text-muted">Chọn nơi đăng ký giao dịch:</p>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="transactionType"
                          id="bhxhPortal"
                          value="bhxhPortal"
                          v-model="transactionInfo.type"
                        />
                        <label class="form-check-label" for="bhxhPortal">
                          Cổng thông tin điện tử của BHXH Việt Nam
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="transactionType"
                          id="ivan"
                          value="ivan"
                          v-model="transactionInfo.type"
                        />
                        <label class="form-check-label" for="">
                          Tổ chức I-VAN
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <p class="small text-muted">
                      Cam kết: Cơ quan/tổ chức/cá nhân tôi cam kết hoàn toàn
                      chịu trách nhiệm trước pháp luật về tính chính xác, trung
                      thực của nội dung nêu trên và thực hiện giao dịch điện tử
                      trong lĩnh vực bảo hiểm xã hội theo đúng quy định của pháp
                      luật.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Hình thức nộp hồ sơ -->
              <div class="section-container mb-4">
                <h5 class="section-title">Hình thức nộp hồ sơ</h5>
                <div class="section-content">
                  <p class="mb-3 text-muted">Chọn hình thức:</p>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="submissionType"
                          id="direct"
                          value="direct"
                          v-model="submissionInfo.type"
                        />
                        <label class="form-check-label" for="direct"
                          >Tại cơ quan</label
                        >
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="submissionType"
                          id="mail"
                          value="mail"
                          v-model="submissionInfo.type"
                        />
                        <label class="form-check-label" for="mail"
                          >Tại nhà</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tài liệu đính kèm -->
              <div class="section-container mb-4">
                <h5 class="section-title">Tài liệu đính kèm</h5>
                <div class="section-content">
                  <div class="row">
                    <!-- Portrait -->
                    <div class="col-md-4 mb-3">
                      <div
                        class="upload-box text-center p-4 border border-dashed border-primary rounded"
                      >
                        <i
                          class="fas fa-cloud-upload-alt fa-2x text-primary mb-2"
                        ></i>
                        <p class="mb-2 fw-semibold">
                          Ảnh chân dung <span class="text-danger">*</span>
                        </p>
                        <input
                          type="file"
                          class="form-control d-none"
                          id="portraitPhoto"
                          @change="handleFileUpload('portrait', $event)"
                          accept="image/*"
                        />
                        <div class="mt-2 small" v-if="uploading.portrait">
                          Đang tải ảnh...
                        </div>
                        <div v-if="uploadedUrls.portrait" class="mt-2">
                          <img
                            :src="uploadedUrls.portrait"
                            alt="portrait"
                            style="
                              max-width: 100%;
                              max-height: 140px;
                              object-fit: contain;
                            "
                          />
                        </div>
                        <label
                          for="portraitPhoto"
                          class="btn btn-outline-primary btn-sm"
                          >Chọn file</label
                        >
                        <p class="small text-muted mt-2">Ảnh chân dung</p>
                      </div>
                    </div>

                    <!-- Front ID -->
                    <div class="col-md-4 mb-3">
                      <div
                        class="upload-box text-center p-4 border border-dashed border-primary rounded"
                      >
                        <i
                          class="fas fa-cloud-upload-alt fa-2x text-primary mb-2"
                        ></i>
                        <p class="mb-2 fw-semibold">
                          Ảnh giấy tờ mặt trước
                          <span class="text-danger">*</span>
                        </p>
                        <input
                          type="file"
                          class="form-control d-none"
                          id="frontIdPhoto"
                          @change="handleFileUpload('frontId', $event)"
                          accept="image/*"
                        />
                        <div class="mt-2 small" v-if="uploading.frontId">
                          Đang tải ảnh...
                        </div>
                        <div v-if="uploadedUrls.frontId" class="mt-2">
                          <img
                            :src="uploadedUrls.frontId"
                            alt="frontId"
                            style="
                              max-width: 100%;
                              max-height: 140px;
                              object-fit: contain;
                            "
                          />
                        </div>
                        <label
                          for="frontIdPhoto"
                          class="btn btn-outline-primary btn-sm"
                          >Chọn file</label
                        >
                        <p class="small text-muted mt-2">
                          Ảnh giấy tờ mặt trước
                        </p>
                      </div>
                    </div>

                    <!-- Back ID -->
                    <div class="col-md-4 mb-3">
                      <div
                        class="upload-box text-center p-4 border border-dashed border-primary rounded"
                      >
                        <i
                          class="fas fa-cloud-upload-alt fa-2x text-primary mb-2"
                        ></i>
                        <p class="mb-2 fw-semibold">
                          Ảnh giấy tờ mặt sau <span class="text-danger">*</span>
                        </p>
                        <input
                          type="file"
                          class="form-control d-none"
                          id="backIdPhoto"
                          @change="handleFileUpload('backId', $event)"
                          accept="image/*"
                        />
                        <div class="mt-2 small" v-if="uploading.backId">
                          Đang tải ảnh...
                        </div>
                        <div v-if="uploadedUrls.backId" class="mt-2">
                          <img
                            :src="uploadedUrls.backId"
                            alt="backId"
                            style="
                              max-width: 100%;
                              max-height: 140px;
                              object-fit: contain;
                            "
                          />
                        </div>
                        <label
                          for="backIdPhoto"
                          class="btn btn-outline-primary btn-sm"
                          >Chọn file</label
                        >
                        <p class="small text-muted mt-2">Ảnh giấy tờ mặt sau</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Buttons -->
              <div class="row">
                <div class="col-12 text-center">
                  <button
                    type="submit"
                    class="btn btn-primary me-3 px-4"
                    :disabled="isSubmitting"
                  >
                    {{ isSubmitting ? 'Đang gửi...' : 'Đăng ký' }}
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary me-3 px-4"
                    @click="resetForm"
                    :disabled="isSubmitting"
                  >
                    Làm lại
                  </button>
                  <button
                    type="button"
                    class="btn btn-info px-4"
                    @click="fillSample"
                    :disabled="isSubmitting"
                  >
                    Điền dữ liệu mẫu
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// BE tạm thời chạy cùng máy (chỉnh khi deploy)
const API_BASE = 'https://api.baohiemxahoivn.co/'
const api = axios.create({ baseURL: API_BASE })

const MAX_MB = 5
const ALLOWED = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/bmp',
  'image/svg+xml',
]

export default {
  data() {
    return {
      // form state
      registrationInfo: {
        fullName: '',
        socialInsuranceCode: '',
        idType: '',
        idNumber: '',
        phoneNumber: '',
        province: '',
        district: '',
        ward: '',
        address: '',
      },
      bankInfo: {
        accountHolder: '',
        accountNumber: '',
        bankName: '',
        branch: '',
      },
      transactionInfo: { type: '' }, // bhxhPortal | ivan
      submissionInfo: { type: '' }, // direct | mail

      // upload state
      uploadedFiles: { portrait: null, frontId: null, backId: null },
      uploadedUrls: { portrait: '', frontId: '', backId: '' },
      uploading: { portrait: false, frontId: false, backId: false },

      isSubmitting: false,
    }
  },

  methods: {
    validateImage(file) {
      if (!file) return 'Không có file'
      if (!ALLOWED.includes(file.type))
        return 'Chỉ cho phép file ảnh (jpg, png, gif, webp, bmp, svg)'
      if (file.size > MAX_MB * 1024 * 1024) return `Ảnh vượt quá ${MAX_MB}MB`
      return null
    },

    async uploadOne(file) {
      const fd = new FormData()
      fd.append('file', file)
      const res = await api.post('/api/upload', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return res.data.url // URL public trả về từ BE
    },

    async handleFileUpload(type, event) {
      const file = event.target.files[0]
      if (!file) return

      const err = this.validateImage(file)
      if (err) {
        alert(err)
        event.target.value = ''
        return
      }

      try {
        this.uploading[type] = true
        const url = await this.uploadOne(file)

        // giữ file nếu sau này cần, nhưng submit sẽ dùng URL luôn (không upload lần 2)
        this.uploadedFiles[type] = file
        this.uploadedUrls[type] = url
        console.log('Uploaded:', url)
        // console.log(`✅ ${type} uploaded:`, url)
      } catch (e) {
        alert(
          `Upload ${type} thất bại: ${e?.response?.data?.message || e.message}`
        )
        event.target.value = ''
        this.uploadedFiles[type] = null
        this.uploadedUrls[type] = ''
      } finally {
        this.uploading[type] = false
      }
    },

    // Gửi JSON tới /api/users/json
    async handleSubmit() {
      if (
        !this.registrationInfo.fullName ||
        !this.registrationInfo.socialInsuranceCode
      ) {
        this.$message.error('Vui lòng điền đầy đủ thông tin bắt buộc!')
        return
      }
      console.log(this.uploadedUrls)

      const payload = {
        // registration
        ...this.registrationInfo,

        // bank
        accountHolder: this.bankInfo.accountHolder,
        accountNumber: this.bankInfo.accountNumber,
        bankName: this.bankInfo.bankName,
        branch: this.bankInfo.branch,

        // options
        transactionType: this.transactionInfo.type,
        submissionType: this.submissionInfo.type,

        // images (đã có URL từ upload)
        portraitUrl: this.uploadedUrls.portrait || '',
        frontIdUrl: this.uploadedUrls.frontId || '',
        backIdUrl: this.uploadedUrls.backId || '',  
      }
      try {
        this.isSubmitting = true
        const res = await api.post('/api/users', payload)
        this.$message.success('Đăng ký thành công!')
        // console.log('Created:', res.data)
        this.resetForm()
      } catch (e) {
        this.$message.error(
          'Gửi thất bại: ' + (e?.response?.data?.message || e.message)
        )
      } finally {
        this.isSubmitting = false
      }
    },

    resetForm() {
      this.registrationInfo = {
        fullName: '',
        socialInsuranceCode: '',
        idType: '',
        idNumber: '',
        phoneNumber: '',
        province: '',
        district: '',
        ward: '',
        address: '',
      }
      this.bankInfo = {
        accountHolder: '',
        accountNumber: '',
        bankName: '',
        branch: '',
      }
      this.transactionInfo = { type: '' }
      this.submissionInfo = { type: '' }

      this.uploadedFiles = { portrait: null, frontId: null, backId: null }
      this.uploadedUrls = { portrait: '', frontId: '', backId: '' }
      this.uploading = { portrait: false, frontId: false, backId: false }
    },

    // điền mẫu nhanh cho test
    fillSample() {
      this.registrationInfo = {
        fullName: 'Nguyễn Văn A',
        socialInsuranceCode: '1234567890',
        idType: 'cccd',
        idNumber: '012345678901',
        phoneNumber: '0912345678',
        province: 'Hà Nội',
        district: 'Cầu Giấy',
        ward: 'Dịch Vọng',
        address: 'Số 1, Đường A, Phường B',
      }
      this.bankInfo = {
        accountHolder: 'Nguyen Van A',
        accountNumber: '0123456789',
        bankName: 'Vietcombank',
        branch: 'Cầu Giấy',
      }
      this.transactionInfo.type = 'bhxhPortal'
      this.submissionInfo.type = 'direct'
    },
  },
}
</script>

<style scoped>
.section-container {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}
.section-title {
  background-color: #f8f9fa;
  color: #495057;
  padding: 12px 20px;
  margin: 0;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 600;
}
.section-content {
  padding: 20px;
}
.form-label {
  color: #495057;
  margin-bottom: 0.5rem;
}
.text-danger {
  color: #dc3545 !important;
}

.form-control,
.form-select {
  border: 1px solid #ced4da;
  border-radius: 6px;
  padding: 0.75rem;
  transition: all 0.3s ease;
}
.form-control:focus,
.form-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}
.form-check-input {
  margin-top: 0.25rem;
}
.form-check-label {
  margin-left: 0.5rem;
}

.upload-box {
  background-color: #f8f9fa;
  transition: all 0.3s ease;
}
.upload-box:hover {
  background-color: #e9ecef;
}

.btn {
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  color: #000;
}
.btn-primary {
  background: linear-gradient(135deg, #0d6efd 0%, #0056b3 100%);
  border: none;
}
.btn-secondary {
  background-color: #6c757d;
  border: none;
}
.btn-info {
  background-color: #17a2b8;
  border: none;
}

@media (max-width: 768px) {
  .section-content {
    padding: 15px;
  }
  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .btn:last-child {
    margin-bottom: 0;
  }
  .upload-box {
    margin-bottom: 1rem;
  }
}
</style>
