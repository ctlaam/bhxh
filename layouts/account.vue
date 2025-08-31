<template>
  <div class="main-content">
    <div class="stars"></div>
    <div class="header">
      <nuxt-link to="/" class="back-button">
        <a-icon type="close" />
      </nuxt-link>
      <div class="support">
        <span>Hỗ trợ</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path
            d="M360-120H200q-33 0-56.5-23.5T120-200v-280q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480v280q0 33-23.5 56.5T760-120H600v-320h160v-40q0-117-81.5-198.5T480-760q-117 0-198.5 81.5T200-480v40h160v320Zm-80-240h-80v160h80v-160Zm400 0v160h80v-160h-80Zm-400 0h-80 80Zm400 0h80-80Z"
          />
        </svg>
      </div>
    </div>
    <div id="content" ref="content">
      <Nuxt />
    </div>
    <div class="bottom-nav">
      <div class="nav-buttons">
        <nuxt-link to="/my-qr" class="nav-button">
          <i class="fas fa-credit-card text-xl"></i>
          <span class="text-sm">Mã của bạn</span>
        </nuxt-link>
        <nuxt-link to="/scan" class="nav-button">
          <i class="fas fa-qrcode text-xl"></i>
          <span class="text-sm">Quét mã</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/apps/footer.vue'
export default {
  components: {
    Footer,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #1a237e 0%, #0d1642 100%);
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
}
.status-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  color: white;
}

.time {
  font-weight: 500;
}

.signal {
  display: flex;
  align-items: center;
  gap: 8px;
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 0;
  color: white;
  width: 100%;
}

.back-button {
  font-size: 24px;
  color: #fff;
  position: relative;
  top: -10px;
}

.support {
  display: flex;
  align-items: center;
  gap: 5px;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  width: 100%;
}

.title-points-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 400px;
}

.points {
  display: flex;
  align-items: center;
  gap: 5px;
}

.barcode-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 15px;
}

.nav-buttons {
  display: flex;
  justify-content: space-around;
}

.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
a.nav-button {
  color: #fff;
}
a.nav-button.nuxt-link-exact-active.nuxt-link-active {
  color: #3b82f6;
}

.nav-button.inactive {
  color: #9ca3af;
}
button.nav-button.active {
  background-color: transparent;
  outline: none;
  border: none;
}
a {
  text-decoration: none;
}
.ant-message {
  z-index: 9999999;
}
</style>
