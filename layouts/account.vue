<template>
  <div class="account-content">
    <Nuxt />
    <!-- <fullscreen-modal> </fullscreen-modal> -->
    <!-- <script
      id="chatway"
      async="true"
      src="https://cdn.chatway.app/widget.js?id=xhmDgdx6Q2M9"
    ></script> -->
  </div>
</template>
<script>
// import FullscreenModal from '../components/apps/FullscreenModal.vue'
export default {
  components: {
    // FullscreenModal,
  },
}
</script>

<style scoped>
.account-content {
  background: url(../assets/logomobile.jpg) no-repeat 50% fixed;
  background-size: cover;
  cursor: pointer;
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  transition: all 0.7s, z-index 0s;
  width: 100vw;
}
</style>
