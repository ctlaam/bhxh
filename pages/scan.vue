<template>
  <div class="qr-scanner-page">
    <!-- Header -->
    <div class="scanner-header">
      <h3 class="scanner-title">Tích điểm</h3>
    </div>

    <!-- Scanner Container -->
    <div class="scanner-container">
      <div class="scan-frame" ref="scanFrame">
        <!-- Video element for camera -->
        <video
          ref="videoElement"
          id="video"
          playsinline
          muted
          class="scanner-video"
        ></video>

        <!-- Scanning corners -->
        <div class="scan-corner top-left"></div>
        <div class="scan-corner top-right"></div>
        <div class="scan-corner bottom-left"></div>
        <div class="scan-corner bottom-right"></div>

        <!-- Scanning line animation -->
        <div class="scanning-line" :class="{ active: isScanning }"></div>

        <!-- Overlay for better contrast -->
        <div class="scan-overlay"></div>
      </div>

      <!-- Instruction Text -->
      <div class="scan-instruction">
        <p class="instruction-text">
          Căn chỉnh mã QR vào vị trí trong khung hình.
        </p>
      </div>

      <!-- Flash Button -->
      <div class="flash-container">
        <button
          class="flash-button"
          @click="toggleFlash"
          :class="{ active: flashEnabled }"
        >
          <span class="flash-icon">⚡</span>
        </button>
        <p class="flash-text">Chạm để bật</p>
      </div>

      <!-- Success Result -->
      <div v-if="scanResult" class="scan-result">
        <a-alert
          :message="`QR Code detected: ${scanResult}`"
          type="success"
          show-icon
        />
      </div>
    </div>
  </div>
</template>

<script>
import QrScanner from 'qr-scanner'
import { ArrowLeftOutlined } from '@ant-design/icons-vue'
import { duration } from 'moment'

export default {
  layout: 'account',
  components: {
    ArrowLeftOutlined,
  },
  data() {
    return {
      qrScanner: null,
      isScanning: false,
      flashEnabled: false,
      scanResult: null,
      errorMessage: '',
      hasCamera: false,
    }
  },
  async mounted() {
    await this.initializeScanner()
  },
  beforeUnmount() {
    this.stopScanner()
  },
  methods: {
    async initializeScanner() {
      try {
        // Check if camera is available
        this.hasCamera = await QrScanner.hasCamera()

        if (!this.hasCamera) {
          this.$message.error('Không tìm thấy camera trên thiết bị')
          return
        }

        // Initialize QR Scanner
        this.qrScanner = new QrScanner(
          this.$refs.videoElement,
          this.onScanSuccess,
          {
            onDecodeError: this.onScanError,
            highlightScanRegion: false,
            highlightCodeOutline: false,
            maxScansPerSecond: 5,
            preferredCamera: 'environment', // Use back camera on mobile
          }
        )

        // Start scanning
        await this.startScanner()
      } catch (error) {
        console.error('Scanner initialization error:', error)
        this.$message.error(
          'Không thể khởi tạo camera. Vui lòng kiểm tra quyền truy cập camera.'
        )
      }
    },

    async startScanner() {
      try {
        await this.qrScanner.start()
        this.isScanning = true
        console.log('QR Scanner started')
      } catch (error) {
        console.error('Failed to start scanner:', error)
        this.$message.error({
          content: 'Không thể bắt đầu quét. Vui lòng cho phép truy cập camera.',
          duration: 30000,
        })
      }
    },

    stopScanner() {
      if (this.qrScanner) {
        this.qrScanner.stop()
        this.qrScanner.destroy()
        this.isScanning = false
        console.log('QR Scanner stopped')
      }
    },

    onScanSuccess(result) {
      console.log('QR Code scanned:', result.data)
      this.scanResult = result.data
      this.isScanning = false

      // Vibrate if supported
      if (navigator.vibrate) {
        navigator.vibrate(200)
      }

      // Process the QR code result
      this.processQRResult(result.data)
    },

    onScanError(error) {
      // Don't show error for normal scanning process
      if (error !== 'No QR code found') {
        console.error('Scan error:', error)
      }
    },

    async toggleFlash() {
      if (!this.qrScanner) return

      try {
        if (await QrScanner.hasFlash()) {
          this.flashEnabled = !this.flashEnabled
          await this.qrScanner.setFlash(this.flashEnabled)
          console.log('Flash toggled:', this.flashEnabled)
        } else {
          this.$message.warning('Thiết bị không hỗ trợ đèn flash')
        }
      } catch (error) {
        console.error('Flash toggle error:', error)
        this.$message.error('Không thể bật/tắt đèn flash')
      }
    },

    processQRResult(qrData) {
      // Process your QR code data here
      console.log('Processing QR data:', qrData)

      // Example: redirect or call API
      // this.$router.push(`/tich-diem/${qrData}`)

      // Show success message
      this.$message.success('Quét QR thành công!')

      // Restart scanning after 2 seconds
      setTimeout(() => {
        this.scanResult = null
        this.startScanner()
      }, 2000)
    },

    clearError() {
      this.errorMessage = ''
    },

    goBack() {
      this.stopScanner()
      this.$router.go(-1)
    },

    // Restart scanner
    async restartScanner() {
      this.stopScanner()
      await this.initializeScanner()
    },
  },
}
</script>

<style scoped>
.scanner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(128, 128, 128, 0.5); */
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.scanner-container::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
  background-image: radial-gradient(
      2px 2px at 40px 60px,
      #fff,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 20px 50px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 30px 100px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 40px 60px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 110px 90px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 190px 150px, #fff, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  animation: animateStars 60s linear infinite;
}

@keyframes animateStars {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.scanner-container::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: -1;
  background-image: radial-gradient(
      1px 1px at 100px 300px,
      #fff,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(1px 1px at 200px 250px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 300px 350px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 400px 350px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 500px 150px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(1px 1px at 50px 200px, #fff, rgba(0, 0, 0, 0));
  background-repeat: repeat;
  animation: animateStars 90s linear infinite;
  opacity: 0.5;
}

.scan-frame {
  width: 280px;
  height: 280px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
}

#video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scan-corner {
  width: 20px;
  height: 20px;
  border: 2px solid #007aff;
  position: absolute;
}

.top-left {
  top: -2px;
  left: -2px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: -2px;
  right: -2px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: -2px;
  left: -2px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: -2px;
  right: -2px;
  border-left: none;
  border-top: none;
}

.scan-text {
  color: white;
  text-align: center;
  margin: 15px 0;
}

.flash-button {
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}
button {
  outline: none;
  border: none;
}
.flash-icon {
  color: white;
  font-size: 24px;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  border-top: 1px solid #eee;
}

.nav-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #1a237e;
  font-size: 16px;
  padding: 15px;
  gap: 8px;
  position: relative;
}

.nav-item:first-child {
  border-right: 1px solid #eee;
}

.nav-item span:first-child {
  font-size: 20px;
  opacity: 0.8;
}

.status-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 15px;
  color: white;
  font-size: 14px;
  gap: 5px;
}

.signal-icon::before {
  content: '⋮⋮⋮';
  display: inline-block;
  transform: rotate(90deg);
  font-weight: bold;
  letter-spacing: -2px;
}

.battery-icon {
  display: inline-flex;
  align-items: center;
  margin-left: 5px;
}

.battery-outline {
  width: 20px;
  height: 10px;
  border: 1px solid white;
  border-radius: 2px;
  position: relative;
}

.battery-level {
  position: absolute;
  left: 1px;
  top: 1px;
  bottom: 1px;
  width: 60%;
  background-color: white;
  border-radius: 1px;
}

.battery-tip {
  width: 2px;
  height: 4px;
  background-color: white;
  margin-left: 1px;
  border-radius: 0 2px 2px 0;
}

.scanning-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0%,
    #007aff 20%,
    #007aff 80%,
    transparent 100%
  );
  animation: scan 2s linear infinite;
  box-shadow: 0 0 4px rgba(0, 122, 255, 0.5);
}

@keyframes scan {
  0% {
    top: 0;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 0;
  }
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: radial-gradient(
      2px 2px at 20px 30px,
      #eee,
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(2px 2px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 90px 40px, #fff, rgba(0, 0, 0, 0)),
    radial-gradient(2px 2px at 130px 80px, #fff, rgba(0, 0, 0, 0));
  background-size: 200px 200px;
  animation: stars 4s linear infinite;
}

@keyframes stars {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200px);
  }
}
.scanner-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  flex: 1;
  text-align: center;
}
.flash-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style>
.ant-message .anticon {
  top: -2px !important;
}
.ant-message-custom-content {
  display: flex;
  align-items: center !important;
  justify-content: center !important;
}
</style>
