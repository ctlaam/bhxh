<!-- components/FullscreenModal.vue -->
<template>
  <div v-if="loading" class="fullscreen-loading">
    <img src="~/assets/crescentmall.png" width="150px" alt="" />
    <div class="my-4" style="color: #ddbc2a">Đang tải</div>
    <div class="snippet" data-title="dot-flashing">
      <div class="stage">
        <div class="dot-flashing"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    loading() {
      // Đọc giá trị modalLoading từ Vuex store (Sử dụng getter modalLoading)
      return
    },
  },
  created() {
    setTimeout(() => {
      this.handleCancel()
    }, 300)
  },
  methods: {
    handleCancel() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style>
.fullscreen-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 999999999999;
  flex-direction: column;
  padding-bottom: 100px;
}
/**
 * ==============================================
 * Dot Flashing
 * ==============================================
 */
.dot-flashing {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ddbc2a;
  color: #ddbc2a;
  animation: dot-flashing 0.5s infinite linear alternate;
  animation-delay: 0.25s;
}
.dot-flashing::before,
.dot-flashing::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-flashing::before {
  left: -15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ddbc2a;
  color: #ddbc2a;
  animation: dot-flashing 0.5s infinite alternate;
  animation-delay: 0s;
}
.dot-flashing::after {
  left: 15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #ddbc2a;
  color: #ddbc2a;
  animation: dot-flashing 0.5s infinite alternate;
  animation-delay: 0.5s;
}

@keyframes dot-flashing {
  0% {
    background-color: #ddbc2a;
  }
  50%,
  100% {
    background-color: rgba(94, 161, 255, 0.2);
  }
}
</style>
